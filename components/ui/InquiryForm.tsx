"use client";

import { useActionState, useState } from "react";
import { submitInquiry, type InquiryState } from "@/app/actions";
import { industryOptions } from "@/lib/site-config";
import { Magnetic } from "@/components/motion/Magnetic";
import { Arrow } from "./Arrow";
import { InlineContact } from "./InlineContact";

type FieldDef = {
  name: string;
  label: string;
  placeholder: string;
  type?: "text" | "email" | "tel" | "select";
  required?: boolean;
};

type InquiryFormProps = {
  /** which field set to render — Home CTA banner vs Contact page */
  variant: "home" | "contact";
};

const HOME_FIELDS: FieldDef[] = [
  { name: "company", label: "Company", placeholder: "Your company name", required: true },
  { name: "industry", label: "Industry", placeholder: "Choose your industry", type: "select" },
  { name: "email", label: "Email Address", placeholder: "you@company.com", type: "email", required: true },
  { name: "phone", label: "Phone Number", placeholder: "+91", type: "tel" },
];

const CONTACT_FIELDS: FieldDef[] = [
  { name: "name", label: "Full Name", placeholder: "Your full name", required: true },
  { name: "email", label: "Email Address", placeholder: "you@company.com", type: "email", required: true },
  { name: "company", label: "Company", placeholder: "Company name" },
  { name: "industry", label: "Industry", placeholder: "Choose your industry", type: "select" },
];

/**
 * Consultation / contact form — client-validated with slide-in messages,
 * wired to the stubbed `submitInquiry` server action.
 */
export function InquiryForm({ variant }: InquiryFormProps) {
  const [state, formAction, pending] = useActionState<InquiryState, FormData>(
    submitInquiry,
    null
  );
  const [clientError, setClientError] = useState<string | null>(null);
  const fields = variant === "home" ? HOME_FIELDS : CONTACT_FIELDS;
  const inputBg = variant === "home" ? "bg-azure focus:bg-white" : "bg-white";
  const message = clientError ?? state?.message ?? null;
  const isError = clientError !== null || state?.ok === false;

  const validate = (e: React.FormEvent<HTMLFormElement>) => {
    const fd = new FormData(e.currentTarget);
    for (const f of fields) {
      if (f.required && !String(fd.get(f.name) ?? "").trim()) {
        e.preventDefault();
        setClientError(`Please fill in the ${f.label.toLowerCase()} field.`);
        return;
      }
    }
    const email = String(fd.get("email") ?? "").trim();
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      e.preventDefault();
      setClientError("Please enter a valid email address.");
      return;
    }
    setClientError(null);
  };

  return (
    <form action={formAction} onSubmit={validate} noValidate>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-3">
        {fields.map((f) => (
          <div key={f.name}>
            <label
              htmlFor={`${variant}-${f.name}`}
              className="mb-1.5 block text-xs font-semibold text-navy"
            >
              {f.label}
            </label>
            {f.type === "select" ? (
              <select
                id={`${variant}-${f.name}`}
                name={f.name}
                defaultValue=""
                className={`w-full rounded-[10px] border border-transparent px-3.5 py-3 font-sans text-[13px] text-muted outline-none focus:border-green ${inputBg}`}
              >
                <option value="" disabled>
                  {f.placeholder}
                </option>
                {industryOptions.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            ) : (
              <input
                id={`${variant}-${f.name}`}
                name={f.name}
                type={f.type ?? "text"}
                placeholder={f.placeholder}
                className={`w-full rounded-[10px] border border-transparent px-3.5 py-3 font-sans text-[13px] text-ink outline-none placeholder:text-muted-2 focus:border-green ${inputBg}`}
              />
            )}
          </div>
        ))}
      </div>
      <div className="mt-3">
        <label
          htmlFor={`${variant}-message`}
          className="mb-1.5 block text-xs font-semibold text-navy"
        >
          {variant === "home" ? "Current Cleaning Process" : "Message"}
        </label>
        <textarea
          id={`${variant}-message`}
          name="message"
          rows={variant === "home" ? 3 : 4}
          placeholder={
            variant === "home"
              ? "e.g. solvent wipe-down, spray washer at 60°C…"
              : "Describe your parts, soils, and current cleaning process…"
          }
          className={`w-full resize-y rounded-[10px] border border-transparent px-3.5 py-3 font-sans text-[13px] text-ink outline-none placeholder:text-muted-2 focus:border-green ${inputBg}`}
        />
      </div>
      <div
        aria-live="polite"
        className="grid transition-[grid-template-rows] duration-300"
        style={{ gridTemplateRows: message ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          {message && (
            <p
              className={`mt-3 rounded-[10px] px-3.5 py-2.5 text-[12.5px] font-medium ${
                isError
                  ? "bg-[#fdecec] text-[#b3261e]"
                  : "bg-green-tint text-navy"
              }`}
            >
              {message}
            </p>
          )}
        </div>
      </div>
      <div className="mt-[18px] flex flex-wrap items-center justify-between gap-3.5">
        <span className="max-w-[300px] text-xs text-muted">
          {variant === "home"
            ? "Our technical team responds within one business day."
            : "Our team will review your submission and contact you with next steps."}
        </span>
        <Magnetic>
          <button
            type="submit"
            disabled={pending}
            className="group cursor-pointer rounded-full border-none bg-green-cta px-[26px] py-[13px] font-sans text-sm font-semibold text-white shadow-cta transition-colors hover:bg-green-cta-dark active:scale-[.96] disabled:opacity-70"
          >
            {pending
              ? "Sending…"
              : variant === "home"
                ? "Request Consultation "
                : "Send Inquiry "}
            <Arrow />
          </button>
        </Magnetic>
      </div>
      <InlineContact className="mt-3.5 border-t border-line-2 pt-3.5" />
    </form>
  );
}
