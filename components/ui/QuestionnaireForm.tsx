"use client";

import { useActionState, useState } from "react";
import { submitInquiry, type InquiryState } from "@/app/actions";
import { Arrow } from "./Arrow";
import { questionnaireSteps, type Field } from "@/lib/questionnaire";
import { siteConfig } from "@/lib/site-config";

/**
 * The chemical questionnaire, in four steps.
 *
 * The original is one long ASP.NET form with an arithmetic captcha; twenty-five
 * fields in a single column is a lot to face at once, so it is grouped and
 * paged. Every field is still submitted together at the end — stepping is
 * presentational, so nothing is lost if someone jumps around.
 */
const inputCls =
  "w-full rounded-xl border-none bg-white px-4 py-3 font-sans text-[14px] text-navy outline-none ring-1 ring-inset ring-line-2 transition-shadow placeholder:text-muted focus:ring-2 focus:ring-green";
const labelCls = "mb-1.5 block text-[13px] font-semibold text-navy";

export function QuestionnaireForm() {
  const [state, action, pending] = useActionState<InquiryState, FormData>(
    submitInquiry,
    null
  );
  const [step, setStep] = useState(0);
  const last = questionnaireSteps.length - 1;

  if (state?.ok) {
    return (
      <div className="rounded-card-lg bg-green-tint p-[clamp(24px,3vw,36px)]">
        <h2 className="mb-2 text-[clamp(20px,2.2vw,26px)] font-semibold text-navy">
          Thanks — your questionnaire is ready to send
        </h2>
        <p className="mb-6 text-[14px] leading-[1.7] text-muted-3">
          {state.message}
        </p>
        <div className="mb-6 flex flex-wrap gap-3">
          {state.mailto && (
            <a
              href={state.mailto}
              className="rounded-full bg-green-cta px-7 py-3.5 text-[14px] font-semibold text-white no-underline transition-colors hover:bg-green-cta-dark"
            >
              Send by email
            </a>
          )}
          <a
            href={siteConfig.contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border-[1.5px] border-navy px-7 py-3.5 text-[14px] font-semibold text-navy no-underline transition-colors hover:bg-navy hover:text-white"
          >
            Send on WhatsApp
          </a>
        </div>
        {state.summary && (
          <details className="rounded-card bg-white p-5 ring-1 ring-inset ring-line-2">
            <summary className="cursor-pointer text-[13.5px] font-semibold text-navy">
              Copy the answers instead
            </summary>
            <pre className="mt-4 max-h-[320px] overflow-auto whitespace-pre-wrap font-mono text-[12px] leading-[1.7] text-muted-3">
              {state.summary}
            </pre>
          </details>
        )}
      </div>
    );
  }

  return (
    <form action={action} className="rounded-card-lg bg-white p-[clamp(22px,3vw,36px)] ring-1 ring-inset ring-line-2">
      {/* step rail */}
      <ol className="mb-8 flex flex-wrap gap-2 pl-0">
        {questionnaireSteps.map((s, i) => (
          <li key={s.title} className="list-none">
            <button
              type="button"
              onClick={() => setStep(i)}
              aria-current={i === step ? "step" : undefined}
              className={`cursor-pointer rounded-full px-4 py-2 text-[12.5px] font-semibold transition-colors duration-300 ${
                i === step
                  ? "bg-navy text-white"
                  : "bg-azure text-muted-3 hover:bg-green-tint hover:text-navy"
              }`}
            >
              <span className={i === step ? "text-white/60" : "text-muted-2"}>
                {i + 1}
              </span>{" "}
              {s.title}
            </button>
          </li>
        ))}
      </ol>

      {questionnaireSteps.map((s, i) => (
        <div key={s.title} hidden={i !== step}>
          <h2 className="mb-1.5 text-[clamp(18px,2vw,22px)] font-semibold text-navy">
            {s.title}
          </h2>
          <p className="mb-6 text-[13.5px] leading-[1.6] text-muted-3">
            {s.blurb}
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {s.fields.map((f) => (
              <FieldRow key={f.name} field={f} />
            ))}
          </div>
        </div>
      ))}

      {/* bots fill hidden fields; humans do not */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] h-px w-px opacity-0"
      />
      <input type="hidden" name="context" value="Chemical questionnaire" />

      {state && state.message && !state.ok && (
        <p role="alert" className="mt-5 text-[13.5px] font-medium text-[#9a3412]">
          {state.message}
        </p>
      )}

      <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-line-2 pt-6">
        {step > 0 && (
          <button
            type="button"
            onClick={() => setStep((s) => s - 1)}
            className="cursor-pointer rounded-full border-[1.5px] border-navy px-6 py-3 text-[13.5px] font-semibold text-navy transition-colors hover:bg-navy hover:text-white"
          >
            Back
          </button>
        )}
        {step < last ? (
          <button
            type="button"
            onClick={() => setStep((s) => s + 1)}
            className="group inline-flex cursor-pointer items-center gap-2 rounded-full bg-navy px-7 py-3 text-[13.5px] font-semibold text-white transition-colors hover:bg-green-cta"
          >
            Next: {questionnaireSteps[step + 1].title} <Arrow />
          </button>
        ) : null}
        <button
          type="submit"
          disabled={pending}
          className="group inline-flex cursor-pointer items-center gap-2 rounded-full bg-green-cta px-7 py-3 text-[13.5px] font-semibold text-white transition-colors hover:bg-green-cta-dark disabled:opacity-60"
        >
          {pending ? "Preparing…" : "Submit questionnaire"} <Arrow />
        </button>
        <span className="text-[12.5px] text-muted">
          You can submit from any step — unanswered questions are simply left out.
        </span>
      </div>
    </form>
  );
}

function FieldRow({ field: f }: { field: Field }) {
  const wide =
    f.kind === "textarea" || (f.kind === "radio" && f.options.length > 2);
  return (
    <div className={wide ? "sm:col-span-2" : undefined}>
      {f.kind === "radio" ? (
        <fieldset className="border-none p-0">
          <legend className={labelCls}>{f.label}</legend>
          <div className="flex flex-wrap gap-2">
            {f.options.map((o) => (
              <label
                key={o}
                className="cursor-pointer rounded-full bg-azure px-4 py-2.5 text-[13px] text-muted-3 ring-1 ring-inset ring-line-2 transition-colors has-[:checked]:bg-green-tint has-[:checked]:font-semibold has-[:checked]:text-navy has-[:checked]:ring-green/40"
              >
                <input
                  type="radio"
                  name={f.name}
                  value={o}
                  className="mr-2 accent-[#00853f]"
                />
                {o}
              </label>
            ))}
          </div>
        </fieldset>
      ) : (
        <>
          <label htmlFor={`q-${f.name}`} className={labelCls}>
            {f.label}
            {"required" in f && f.required && (
              <span className="ml-1 text-green-deep">*</span>
            )}
          </label>
          {f.kind === "text" && (
            <input
              id={`q-${f.name}`}
              name={f.name}
              type={f.type ?? "text"}
              required={f.required}
              placeholder={f.placeholder}
              className={inputCls}
            />
          )}
          {f.kind === "textarea" && (
            <textarea
              id={`q-${f.name}`}
              name={f.name}
              rows={f.rows ?? 3}
              placeholder={f.placeholder}
              className={`${inputCls} resize-y`}
            />
          )}
          {f.kind === "select" && (
            <select
              id={`q-${f.name}`}
              name={f.name}
              required={f.required}
              defaultValue=""
              className={inputCls}
            >
              <option value="" disabled>
                Choose your state
              </option>
              {f.options.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          )}
        </>
      )}
    </div>
  );
}
