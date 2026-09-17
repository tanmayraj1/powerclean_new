import { siteConfig } from "@/lib/site-config";

/**
 * Click-to-chat links for the sales WhatsApp.
 *
 * WhatsApp's documented wa.me format is the full international number as
 * digits only — no "+", no dashes, no leading zero. The site previously used
 * `wa.me/+91…`, which works on some clients and not others.
 */
const NUMBER = siteConfig.contact.phones[0].replace(/\D/g, "");

/**
 * Long prefills are unreliable: some mobile browsers and in-app webviews
 * truncate or refuse very long URLs, and the questionnaire alone can produce
 * a few thousand characters. Past this length the message is cut on a line
 * boundary and says where the rest went, so nothing reads as silently lost.
 */
const MAX_TEXT = 1200;

export function whatsappHref(text?: string): string {
  const base = `https://wa.me/${NUMBER}`;
  if (!text) return base;
  return `${base}?text=${encodeURIComponent(text)}`;
}

/** The enquiry as a WhatsApp message, ready to send. */
export function whatsappEnquiry({
  summary,
  context,
  delivered,
}: {
  summary: string;
  context: string;
  /** true when the CRM already has it — the message then says so */
  delivered: boolean;
}): string {
  const head = [
    "Hi Power Clean — enquiry from your website",
    context ? `(${context})` : "",
  ]
    .filter(Boolean)
    .join(" ");

  let body = summary;
  if (body.length > MAX_TEXT) {
    const cut = body.lastIndexOf("\n", MAX_TEXT);
    body =
      body.slice(0, cut > 0 ? cut : MAX_TEXT) +
      "\n…" +
      (delivered
        ? "\n(Full details submitted through the website form.)"
        : "\n(Full details are in the email version of this enquiry.)");
  }

  return whatsappHref(`${head}\n\n${body}`);
}
