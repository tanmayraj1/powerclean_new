"use client";

import { useActionState } from "react";
import { submitInquiry, type InquiryState } from "@/app/actions";
import { Arrow } from "./Arrow";
import { siteConfig } from "@/lib/site-config";
import { ConsentCheckbox } from "./ConsentCheckbox";

/**
 * Three-field inline enquiry form.
 *
 * The client's architecture asks for a lead-generation touchpoint on every
 * page, and a full consultation form is too heavy to drop into the middle of
 * a product or industry page. This asks for the minimum — who, how to reach
 * them, what they are cleaning — and posts to the same `submitInquiry` action
 * the main forms use, so a lead from here reaches sales the same way.
 *
 * `context` is a hidden field naming the page the enquiry came from, so the
 * email says which product or sector prompted it.
 */
export function MicroForm({
  context,
  heading = "Get a grade matched to your parts",
  blurb = "Tell us what you are cleaning and we will come back with a matched product, dilution and trial plan.",
}: {
  context: string;
  heading?: string;
  blurb?: string;
}) {
  const [state, action, pending] = useActionState<InquiryState, FormData>(
    submitInquiry,
    null
  );

  const field =
    "w-full rounded-full border-none bg-white px-[18px] py-3 font-sans text-[13.5px] text-navy outline-none ring-1 ring-inset ring-line-2 transition-shadow placeholder:text-muted focus:ring-2 focus:ring-green";

  if (state?.ok) {
    return (
      <div className="rounded-card-lg bg-green-tint p-7">
        <h3 className="mb-2 text-[16px] font-semibold text-navy">
          {state.delivered ? "Thanks — we have your enquiry" : "Thanks — here is your enquiry"}
        </h3>
        <p className="mb-5 text-[13.5px] leading-[1.65] text-muted-3">
          {state?.message}
        </p>
        <div className="flex flex-wrap gap-3">
          {/* Once the lead is in the CRM the email route is a convenience, not
              the delivery mechanism, so it stops being the primary action. */}
          {state?.mailto && !state.delivered && (
            <a
              href={state.mailto}
              className="rounded-full bg-green-cta px-6 py-3 text-[13.5px] font-semibold text-white no-underline transition-colors hover:bg-green-cta-dark"
            >
              Send by email
            </a>
          )}
          <a
            href={siteConfig.contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className={
              state.delivered
                ? "rounded-full bg-green-cta px-6 py-3 text-[13.5px] font-semibold text-white no-underline transition-colors hover:bg-green-cta-dark"
                : "rounded-full border-[1.5px] border-navy px-6 py-3 text-[13.5px] font-semibold text-navy no-underline transition-colors hover:bg-navy hover:text-white"
            }
          >
            {state.delivered ? "Talk to us now on WhatsApp" : "WhatsApp instead"}
          </a>
        </div>
      </div>
    );
  }

  return (
    <form
      action={action}
      className="rounded-card-lg bg-green-tint p-7"
      aria-label="Quick enquiry"
    >
      <h3 className="mb-1.5 text-[16px] font-semibold text-navy">{heading}</h3>
      <p className="mb-5 text-[13.5px] leading-[1.6] text-muted-3">{blurb}</p>

      {/* names the page this lead came from, so the email says what prompted it */}
      <input type="hidden" name="context" value={context} />

      {/* bots fill hidden fields; humans do not */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] h-px w-px opacity-0"
      />

      <div className="mb-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div>
          <label htmlFor={`mf-name-${context}`} className="sr-only">
            Your name
          </label>
          <input
            id={`mf-name-${context}`}
            name="name"
            required
            placeholder="Your name"
            className={field}
          />
        </div>
        <div>
          <label htmlFor={`mf-phone-${context}`} className="sr-only">
            Phone number
          </label>
          <input
            id={`mf-phone-${context}`}
            name="phone"
            type="tel"
            required
            placeholder="Phone number"
            className={field}
          />
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor={`mf-app-${context}`} className="sr-only">
          What are you cleaning?
        </label>
        <input
          id={`mf-app-${context}`}
          name="message"
          required
          placeholder="What are you cleaning? e.g. aluminium housings, ultrasonic"
          className={field}
        />
      </div>

      <div className="mb-4">
        <ConsentCheckbox id={`mf-consent-${context}`} />
      </div>

      {state && state.message && !state.ok && (
        <p role="alert" className="mb-3 text-[13px] font-medium text-[#9a3412]">
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="group inline-flex cursor-pointer items-center gap-2 rounded-full bg-green-cta px-7 py-3 text-[13.5px] font-semibold text-white transition-colors hover:bg-green-cta-dark disabled:opacity-60"
      >
        {pending ? "Sending…" : "Get a recommendation"}
        <Arrow />
      </button>
    </form>
  );
}
