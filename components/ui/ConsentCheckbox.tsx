"use client";

import { TransitionLink } from "@/components/layout/TransitionLink";

/**
 * Consent to be contacted, required on every form that creates a CRM record.
 *
 * Submissions now land in Zoho CRM rather than only composing an email the
 * visitor sends themselves, so the site is storing personal data in a
 * third-party system. India's DPDP Act 2023 wants that consent to be free,
 * specific, informed and unambiguous — which rules out a pre-ticked box, and
 * means the notice has to be readable at the point of collection rather than
 * buried behind a link.
 *
 * The server treats a missing `consent` key as "this form predates the
 * checkbox" and lets it through, so a stale cached page never fails silently.
 */
export function ConsentCheckbox({
  id,
  tone = "light",
}: {
  /** unique per form instance — several can share a page */
  id: string;
  /** `dark` for the navy CTA banner, `light` everywhere else */
  tone?: "light" | "dark";
}) {
  const text = tone === "dark" ? "text-white/70" : "text-muted";
  const link = tone === "dark" ? "text-white" : "text-green-deep";
  return (
    <label
      htmlFor={id}
      className={`flex cursor-pointer items-start gap-2.5 text-[12px] leading-[1.55] ${text}`}
    >
      <input
        id={id}
        name="consent"
        type="checkbox"
        value="yes"
        required
        className="mt-[2px] h-[15px] w-[15px] shrink-0 cursor-pointer accent-[#00853f]"
      />
      <span>
        I agree that Power Clean may store these details and contact me about
        this enquiry. See our{" "}
        <TransitionLink
          href="/privacy"
          className={`font-semibold underline underline-offset-2 ${link}`}
        >
          privacy policy
        </TransitionLink>
        .
      </span>
    </label>
  );
}
