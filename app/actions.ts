"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { siteConfig } from "@/lib/site-config";
import { questionnaireFields } from "@/lib/questionnaire";
import { createZohoLead, zohoConfigured, type LeadEntry } from "@/lib/zoho";
import { rateLimit } from "@/lib/rate-limit";
import { whatsappEnquiry } from "@/lib/whatsapp";

export type InquiryState = {
  ok: boolean;
  message: string;
  /** ready-to-send mailto: composed from the submitted enquiry */
  mailto?: string;
  /** wa.me link with the same enquiry pre-filled — the visitor only taps Send */
  whatsapp?: string;
  /** plain-text summary the visitor can copy if mail does not open */
  summary?: string;
  /** true once the enquiry is safely in the CRM — the mailto is then optional */
  delivered?: boolean;
} | null;

const LABELS: Record<string, string> = {
  name: "Name",
  context: "Enquiry from page",
  company: "Company",
  industry: "Industry",
  email: "Email",
  phone: "Mobile",
  process: "Current cleaning process",
  message: "Message",
};

/**
 * The questionnaire posts 25 fields the short forms never send. Rather than
 * maintain a second label map, take the questions themselves as the labels so
 * the email reads as a filled-in questionnaire.
 */
const QUESTION_LABELS: Record<string, string> = Object.fromEntries(
  questionnaireFields.map((f) => [f.name, f.label])
);

/** field order in the email: questionnaire order first, then the short-form keys */
const FIELD_ORDER = [
  ...Object.keys(LABELS),
  ...questionnaireFields.map((f) => f.name),
];

/**
 * Full URL of the page a form was sent from. The path comes from the form; the
 * host comes from the request, so it reads correctly on staging and on
 * powerclean.in alike. Anything that is not a plain site path is dropped
 * rather than trusted into the CRM.
 */
async function pageUrl(path: string): Promise<string | undefined> {
  if (!/^\/[\w\-/.%]*$/.test(path) || path.length > 200) return undefined;
  try {
    const h = await headers();
    const host = h.get("x-forwarded-host") ?? h.get("host");
    return host ? `https://${host}${path}` : path;
  } catch {
    return path;
  }
}

/** Identifies the submitter for throttling. Best-effort — see lib/rate-limit. */
async function clientKey(): Promise<string> {
  try {
    const h = await headers();
    const fwd = h.get("x-forwarded-for");
    if (fwd) return fwd.split(",")[0].trim();
    return h.get("x-real-ip") ?? "unknown";
  } catch {
    return "unknown";
  }
}

/**
 * Every form on the site posts here.
 *
 * The enquiry goes to Zoho CRM when it is configured, and the email/WhatsApp/
 * phone routes stay as the fallback for when it is not — or when Zoho is down.
 * Both paths always run to completion: a lead is never dropped because a
 * third-party API had a bad minute.
 */
export async function submitInquiry(
  _prev: InquiryState,
  formData: FormData
): Promise<InquiryState> {
  // Honeypot. A hidden field only a bot would complete — answer as if the
  // submission succeeded rather than telling the bot it was caught.
  if (String(formData.get("website") ?? "").trim()) {
    return { ok: true, message: "Thanks — your enquiry has been noted." };
  }

  // Name, mobile and email are required on every form; everything else is
  // optional. Enforced here as well as in each form, because the server is the
  // only check a bot or a stale cached page cannot skip — and a CRM lead
  // without a way to reach the person is worthless to sales.
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const phoneDigits = phone.replace(/\D/g, "");

  if (!name) {
    return { ok: false, message: "Please enter your name." };
  }
  // 10 digits for an Indian mobile; up to 15 allows a country code (+91 …)
  // or an international number.
  if (phoneDigits.length < 10 || phoneDigits.length > 15) {
    return { ok: false, message: "Please enter a valid mobile number." };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, message: "Please enter a valid email address." };
  }

  // Consent is required only where the form asks for it, so an older cached
  // page without the checkbox still submits rather than failing silently.
  if (formData.has("consent") && !formData.get("consent")) {
    return {
      ok: false,
      message: "Please tick the box so we know we may contact you about this enquiry.",
    };
  }

  const { allowed } = rateLimit(await clientKey());
  if (!allowed) {
    return {
      ok: false,
      message:
        "That is a few enquiries in a short time. Please give it a few minutes, or call us on " +
        siteConfig.contact.phones[0] +
        ".",
    };
  }

  const values: Record<string, string> = {};
  const entries: LeadEntry[] = [];
  const seen = new Set<string>();
  for (const key of FIELD_ORDER) {
    if (seen.has(key)) continue;
    seen.add(key);
    const value = String(formData.get(key) ?? "").trim();
    if (!value) continue;
    values[key] = value;
    entries.push({ key, label: LABELS[key] ?? QUESTION_LABELS[key] ?? key, value });
  }

  const summary = entries.map((e) => `${e.label}: ${e.value}`).join("\n");
  const context = String(formData.get("context") ?? "").trim().slice(0, 120);
  // Which form, and the page it sat on. Every form sends both as hidden fields
  // so the CRM record says exactly where the enquiry came from — the main
  // enquiry form used to send neither, and landed as "Enquiry from the Power
  // Clean website".
  const form = String(formData.get("form") ?? "").trim().slice(0, 80) || "Website form";
  const page = await pageUrl(String(formData.get("page") ?? ""));
  const who = String(
    formData.get("company") || formData.get("name") || "website"
  ).trim();
  const subject = `Enquiry from ${who} — ${form}${context ? `: ${context}` : ""}`;
  const body = `${summary}\n\n— Sent from powerclean website`;
  const mailto = `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  const delivered = zohoConfigured()
    ? (await createZohoLead({ values, entries, source: { form, page, context } })).ok
    : false;

  // Saved in the CRM: send the visitor to a confirmation page with nothing to
  // resubmit. redirect() works by throwing, so it must stay outside any
  // try/catch. When the CRM did not take it, fall through and keep the email /
  // WhatsApp routes on screen — the lead has not been stored anywhere yet.
  if (delivered) redirect("/thank-you");

  // Same enquiry, pre-filled for WhatsApp. Previously every "Send on WhatsApp"
  // button opened a blank chat, so a visitor who had just filled the form in
  // had to type it all again — most would not.
  const whatsapp = whatsappEnquiry({
    summary,
    context: context ? `${form}: ${context}` : form,
    delivered,
  });

  return {
    ok: true,
    delivered,
    whatsapp,
    message: delivered
      ? "Thanks — your enquiry is with our team. We reply within one business day."
      : "Almost there — choose how to send it. Your enquiry is ready below.",
    mailto,
    summary,
  };
}
