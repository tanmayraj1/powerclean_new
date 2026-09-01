"use server";

import { siteConfig } from "@/lib/site-config";

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
  for (const [key, label] of Object.entries(LABELS)) {
    const value = String(formData.get(key) ?? "").trim();
    if (value) lines.push(`${label}: ${value}`);
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
