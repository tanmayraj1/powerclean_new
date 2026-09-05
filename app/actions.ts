"use server";

import { siteConfig } from "@/lib/site-config";
import { questionnaireFields } from "@/lib/questionnaire";

export type InquiryState = {
  ok: boolean;
  message: string;
  /** ready-to-send mailto: composed from the submitted enquiry */
  mailto?: string;
  /** plain-text summary the visitor can copy if mail does not open */
  summary?: string;
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

/**
 * The site has no CRM or transactional-email service behind it, so rather
 * than silently dropping enquiries this composes the submission into a real
 * message addressed to sales@roovel.com and hands the visitor three live
 * routes — email, WhatsApp or phone — so a lead is never silently dropped.
 * Swap this for a CRM/email API when one exists.
 */
export async function submitInquiry(
  _prev: InquiryState,
  formData: FormData
): Promise<InquiryState> {
  // Either route back is enough. The full forms ask for an email; the inline
  // micro-form asks for a phone, which is often what an Indian plant buyer
  // would rather give — requiring both would lose leads for no reason.
  // Honeypot. A hidden field only a bot would complete — answer as if the
  // submission succeeded rather than telling the bot it was caught.
  if (String(formData.get("website") ?? "").trim()) {
    return { ok: true, message: "Thanks — your enquiry has been noted." };
  }

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

  const lines: string[] = [];
  const seen = new Set<string>();
  for (const key of FIELD_ORDER) {
    if (seen.has(key)) continue;
    seen.add(key);
    const value = String(formData.get(key) ?? "").trim();
    if (!value) continue;
    const label = LABELS[key] ?? QUESTION_LABELS[key] ?? key;
    lines.push(`${label}: ${value}`);
  }
  const summary = lines.join("\n");
  const context = String(formData.get("context") ?? "").trim();
  const who = String(
    formData.get("company") || formData.get("name") || "website"
  ).trim();
  const subject = `Enquiry from ${who}${context ? ` — ${context}` : ""}`;
  const body = `${summary}\n\n— Sent from powerclean website`;
  const mailto = `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  return {
    ok: true,
    message:
      "Almost there — choose how to send it. Your enquiry is ready below.",
    mailto,
    summary,
  };
}
