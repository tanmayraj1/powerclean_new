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
  const email = String(formData.get("email") ?? "").trim();
  if (!email || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) === false) {
    return { ok: false, message: "Please enter a valid email address." };
  }

  const lines: string[] = [];
  for (const [key, label] of Object.entries(LABELS)) {
    const value = String(formData.get(key) ?? "").trim();
    if (value) lines.push(`${label}: ${value}`);
  }
  const summary = lines.join("\n");
  const subject = `Enquiry from ${String(formData.get("company") ?? formData.get("name") ?? "website").trim()}`;
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
