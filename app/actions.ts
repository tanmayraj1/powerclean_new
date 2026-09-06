"use server";

import { headers } from "next/headers";
import { siteConfig } from "@/lib/site-config";
import { questionnaireFields } from "@/lib/questionnaire";
import { createZohoLead, zohoConfigured, type LeadEntry } from "@/lib/zoho";
import { rateLimit } from "@/lib/rate-limit";

export type InquiryState = {
  ok: boolean;
  message: string;
  /** ready-to-send mailto: composed from the submitted enquiry */
  mailto?: string;
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
  phone: "Phone",
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

  // Either route back is enough. The full forms ask for an email; the inline
  // micro-form asks for a phone, which is often what an Indian plant buyer
  // would rather give — requiring both would lose leads for no reason.
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();

  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, message: "Please enter a valid email address." };
  }
  if (!email && phone.replace(/\D/g, "").length < 8) {
    return {
      ok: false,
      message: "Please leave an email address or a phone number we can reach you on.",
    };
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
  const context = String(formData.get("context") ?? "").trim();
  const who = String(
    formData.get("company") || formData.get("name") || "website"
  ).trim();
  const subject = `Enquiry from ${who}${context ? ` — ${context}` : ""}`;
  const body = `${summary}\n\n— Sent from powerclean website`;
  const mailto = `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  const delivered = zohoConfigured()
    ? (await createZohoLead({ values, entries, context })).ok
    : false;

  return {
    ok: true,
    delivered,
    message: delivered
      ? "Thanks — your enquiry is with our team. We reply within one business day."
      : "Almost there — choose how to send it. Your enquiry is ready below.",
    mailto,
    summary,
  };
}
