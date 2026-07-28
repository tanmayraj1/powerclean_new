"use client";

import { Reveal } from "@/components/motion/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { AccordionBody, useAccordion } from "@/components/ui/Accordion";
import { Backdrop } from "@/components/ui/Backdrop";
import { caseStudies } from "@/lib/site-config";

/** Case studies & events: featured image card + plus-icon accordion. */
export function CaseStudies() {
  const { open, toggle } = useAccordion(0);
  return (
    <div className="relative isolate mx-auto max-w-[1320px] px-5 py-[clamp(36px,6vw,72px)]">
      <Backdrop />
      <Backdrop variant="rings" className="right-[-8%] top-[-10%] h-[520px] w-[520px]" />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-start gap-7">
        <Reveal dir="left">
          <Eyebrow label="CASE STUDIES & EVENTS" className="mb-3.5" />
          <h2 className="mb-[22px] text-[clamp(28px,3.4vw,42px)] font-semibold leading-[1.12] tracking-[-0.02em] text-navy">
            Proof From the Plant Floor
          </h2>
          <div className="relative h-[300px] overflow-hidden rounded-card-lg">
            <ImageSlot
              brief="Photo — production line in operation, wide shot"
              className="absolute inset-0"
            />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(29,31,35,.7),transparent_55%)]" />
            <div className="pointer-events-none absolute bottom-4 left-[18px] right-[18px] text-white">
              <div className="mb-1.5 text-[11px] font-semibold tracking-[0.12em] opacity-80">
                FEATURED CASE STUDY
              </div>
              <div className="text-[17px] font-semibold leading-[1.3]">
                Auto-components plant cuts wash cost 31% by switching off
                solvents
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal dir="right" className="flex flex-col gap-2.5">
          {caseStudies.map((a, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-2xl bg-[linear-gradient(170deg,#ffffff,#fafdfb)] ring-1 ring-inset ring-line-2"
            >
              <button
                onClick={() => toggle(i)}
                aria-expanded={open === i}
                className="flex w-full cursor-pointer items-center justify-between gap-3.5 border-none bg-transparent px-5 py-[18px] text-left font-sans"
              >
                <span className="flex items-center gap-3.5">
                  <span className="text-[11px] font-semibold tracking-[0.1em] text-green-deep">
                    {a.kind}
                  </span>
                  <span className="text-[15px] font-semibold text-navy">
                    {a.title}
                  </span>
                </span>
                <span
                  aria-hidden="true"
                  className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full text-[17px] transition-[transform,background,color] duration-[350ms]"
                  style={{
                    background: open === i ? "#00A651" : "#F3F5F7",
                    color: open === i ? "#fff" : "#292F6E",
                    transform: open === i ? "rotate(45deg)" : "none",
                  }}
                >
                  +
                </span>
              </button>
              <AccordionBody open={open === i}>
                <div className="px-5 pb-[18px] text-[13.5px] leading-[1.65] text-muted">
                  {a.body}
                </div>
              </AccordionBody>
            </div>
          ))}
        </Reveal>
      </div>
    </div>
  );
}
