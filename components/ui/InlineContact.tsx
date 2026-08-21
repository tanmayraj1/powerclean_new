import { siteConfig } from "@/lib/site-config";

const PHONE = siteConfig.contact.phones[0];
const TEL_HREF = `tel:${PHONE.replace(/[^+\d]/g, "")}`;

/**
 * Quiet in-flow alternative to the primary CTA: for visitors who would
 * rather talk than fill a form. Sits under CTA buttons as one small line.
 */
export function InlineContact({
  tone = "light",
  className = "",
}: {
  /** "light" = on white cards · "dark" = on navy panels */
  tone?: "light" | "dark";
  className?: string;
}) {
  const base = tone === "dark" ? "text-white/70" : "text-muted";
  const link =
    tone === "dark"
      ? "font-semibold text-white underline-offset-4 transition-colors hover:text-green hover:underline"
      : "font-semibold text-green-deep underline-offset-4 transition-colors hover:text-navy hover:underline";

  return (
    <p className={`text-[12.5px] leading-[1.6] ${base} ${className}`}>
      Prefer to talk?{" "}
      <a href={TEL_HREF} className={link}>
        Call {PHONE}
      </a>
      <span aria-hidden="true" className="mx-1.5 opacity-50">
        ·
      </span>
      <a
        href={siteConfig.contact.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className={link}
      >
        WhatsApp us
      </a>
    </p>
  );
}
