"use client";

import { useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { RippleField } from "@/components/ui/RippleField";
import { milestones } from "@/lib/site-config";

/**
 * Year-selector milestones with ambient ripple field.
 * NOTE: milestone content is PLACEHOLDER — no real company timeline exists yet.
 */
export function Milestones() {
  const [year, setYear] = useState(milestones.length - 1);
  const active = milestones[year];

  return (
    <div className="p-3">
      <div
        className="relative mx-auto max-w-[1320px] overflow-hidden rounded-section bg-white p-[clamp(28px,4.5vw,60px)]"
        style={{
          backgroundImage: "url('/pattern.svg')",
          backgroundRepeat: "repeat",
          backgroundSize: "320px",
        }}
      >
        <RippleField />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-center gap-9">
          <Reveal dir="left">
            <Eyebrow label="MILESTONES" className="mb-3.5" />
            <h2 className="mb-[22px] text-[clamp(28px,3.4vw,42px)] font-semibold leading-[1.12] tracking-[-0.02em] text-navy">
              A Decade of Cleaner Plants
            </h2>
            <div className="mb-6 flex flex-wrap gap-2">
              {milestones.map((m, i) => (
                <button
                  key={m.year}
                  onClick={() => setYear(i)}
                  aria-pressed={year === i}
                  className={`cursor-pointer rounded-full border-none px-[18px] py-2 font-sans text-[13px] font-semibold transition-[background,color,transform] duration-300 ${
                    year === i
                      ? "scale-[1.06] bg-navy text-white"
                      : "bg-azure text-muted-3"
                  }`}
                >
                  {m.year}
                </button>
              ))}
            </div>
            <h3 className="mb-2.5 text-xl font-semibold text-navy">
              {active.title}
            </h3>
            <p className="min-h-[66px] text-sm leading-[1.65] text-muted">
              {active.body}
            </p>
          </Reveal>
          <Reveal
            dir="right"
            className="relative h-[380px] overflow-hidden rounded-card-lg"
          >
            <ImageSlot
              brief="Photo — milestone moment: facility, certification, or production line"
              className="absolute inset-0"
            />
          </Reveal>
        </div>
      </div>
    </div>
  );
}
