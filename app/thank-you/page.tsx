import type { Metadata } from "next";
import { TransitionLink } from "@/components/layout/TransitionLink";
import { Arrow } from "@/components/ui/Arrow";

/**
 * Where every form lands once the enquiry is safely in Zoho CRM.
 *
 * The form used to stay on screen after a successful submit — emptied, with
 * the button still live — so visitors unsure whether it had worked sent it
 * again. This page has one job: confirm, say nothing more is needed, and
 * offer a way back. No form, no second call to action.
 *
 * Only reached when the CRM accepted the lead. If Zoho is down, the form stays
 * in place and offers the email / WhatsApp routes instead, because the lead
 * has not been saved anywhere yet.
 *
 * noindex: a confirmation page has no search value, and an indexed one would
 * let people land on "thank you" without having sent anything.
 */
export const metadata: Metadata = {
  title: "Thank You",
  description: "Your enquiry has reached the Power Clean team.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <div className="px-3 pt-3">
      <section className="relative flex min-h-[min(86vh,760px)] items-center justify-center overflow-hidden rounded-section bg-[linear-gradient(135deg,#23273f,#292F6E_55%,#3a4188)] px-6 pb-16 pt-32 text-center">
        {/* the ripple rings from the hero backdrop, kept faint */}
        <svg
          viewBox="0 0 600 600"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[760px] w-[760px] -translate-x-1/2 -translate-y-1/2 opacity-[0.08]"
          aria-hidden="true"
        >
          {[80, 150, 220, 290].map((r) => (
            <circle key={r} cx="300" cy="300" r={r} fill="none" stroke="#ffffff" strokeWidth="1.2" />
          ))}
        </svg>

        <div className="relative max-w-[560px]">
          <div className="mx-auto mb-7 grid h-[72px] w-[72px] place-items-center rounded-full bg-green-cta shadow-[0_10px_40px_rgba(0,166,81,.45)]">
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 12.5l4.5 4.5L19 7.5" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <h1 className="mb-4 text-[clamp(30px,4.2vw,50px)] font-semibold leading-[1.1] tracking-[-0.02em] text-white [text-wrap:balance]">
            Thank you — we have your enquiry
          </h1>
          <p className="mx-auto mb-9 max-w-[460px] text-[clamp(15px,1.6vw,17px)] leading-[1.65] text-white/80 [text-wrap:pretty]">
            Our team will contact you within one business day on the mobile
            number and email you gave us. There is no need to send it again.
          </p>

          <TransitionLink
            href="/"
            className="group inline-flex items-center gap-2 rounded-full bg-green-cta px-8 py-3.5 text-[15px] font-semibold text-white no-underline shadow-cta transition-colors hover:bg-green-cta-dark"
          >
            Back to home <Arrow />
          </TransitionLink>
        </div>
      </section>
    </div>
  );
}
