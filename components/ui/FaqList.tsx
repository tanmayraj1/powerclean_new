"use client";

import type { Faq } from "@/lib/site-config";
import { AccordionBody, useAccordion } from "./Accordion";

/** Numbered FAQ accordion with rotating chevron (Home + Contact). */
export function FaqList({ faqs }: { faqs: Faq[] }) {
  const { open, toggle } = useAccordion(0);
  return (
    <div className="flex flex-col gap-2.5">
      {faqs.map((f, i) => (
        <div
          key={i}
          className="overflow-hidden rounded-2xl bg-[linear-gradient(170deg,#ffffff,#fafdfb)] ring-1 ring-inset ring-line-2 transition-shadow duration-300 hover:shadow-[0_10px_28px_-18px_rgba(41,47,110,.35)]"
        >
          <button
            onClick={() => toggle(i)}
            aria-expanded={open === i}
            className="flex w-full cursor-pointer items-center justify-between gap-3.5 border-none bg-transparent px-5 py-[18px] text-left font-sans"
          >
            <span className="flex items-center gap-4">
              <span className="text-[13px] font-semibold text-muted">
                {`0${i + 1}`}
              </span>
              <span className="text-[15px] font-semibold text-navy">
                {f.q}
              </span>
            </span>
            <span
              aria-hidden="true"
              className="shrink-0 text-lg text-navy transition-transform duration-[350ms]"
              style={{ transform: open === i ? "rotate(180deg)" : "none" }}
            >
              ⌄
            </span>
          </button>
          <AccordionBody open={open === i}>
            <div className="pb-[18px] pl-14 pr-5 text-[13.5px] leading-[1.65] text-muted">
              {f.a}
            </div>
          </AccordionBody>
        </div>
      ))}
    </div>
  );
}
