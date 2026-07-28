"use server";

export type InquiryState = {
  ok: boolean;
  message: string;
} | null;

// Stubbed server action — wire to a real CRM/email service before launch.
export async function submitInquiry(
  _prev: InquiryState,
  formData: FormData
): Promise<InquiryState> {
  const email = String(formData.get("email") ?? "").trim();
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, message: "Please enter a valid email address." };
  }
  await new Promise((r) => setTimeout(r, 600));
  return {
    ok: true,
    message:
      "Thank you — our technical team will get back to you within one business day.",
  };
}
