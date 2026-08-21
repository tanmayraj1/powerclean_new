"use client";

import { useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { ImageSlot } from "@/components/ui/ImageSlot";

/**
 * Interactive before/after wipe: a range input drives
 * `clip-path: inset(0 0 0 X%)` on the "after" layer plus the divider line.
 */
type BeforeAfterSliderProps = {
  before?: string;
  after?: string;
  beforeAlt?: string;
  afterAlt?: string;
};

export function BeforeAfterSlider({
  before = "/photos/before-soiled.webp",
  after = "/photos/after-clean.webp",
  beforeAlt = "Heavily rusted chain links before cleaning",
  afterAlt = "Clean bright steel chain links after rust removal",
}: BeforeAfterSliderProps) {
  const [wipe, setWipe] = useState(50);

  return (
    <>
    <Reveal
      dir="clip"
      className="relative mx-auto h-[clamp(280px,42vw,460px)] max-w-[980px] overflow-hidden rounded-card-lg"
    >
      <ImageSlot
        brief="Photo — BEFORE: oily, soiled metal part"
        src={before}
        alt={beforeAlt}
        sizes="(max-width: 1020px) 100vw, 980px"
        className="absolute inset-0"
      />
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 0 0 ${wipe}%)` }}
      >
        <ImageSlot
          brief="Photo — AFTER: same part, clean bright metal"
          src={after}
          alt={afterAlt}
          sizes="(max-width: 1020px) 100vw, 980px"
          className="absolute inset-0 !bg-[linear-gradient(135deg,#e8f4ee,#d2e6da)]"
        />
      </div>
      <div
        className="pointer-events-none absolute inset-y-0 w-[3px] bg-white shadow-[0_0_12px_rgba(0,0,0,.35)]"
        style={{ left: `${wipe}%` }}
      />
      <span className="pointer-events-none absolute left-3.5 top-3.5 rounded-full bg-ink/70 px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.1em] text-white">
        BEFORE
      </span>
      <span className="pointer-events-none absolute right-3.5 top-3.5 rounded-full bg-green/85 px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.1em] text-white">
        AFTER
      </span>
      <input
        type="range"
        min={0}
        max={100}
        value={wipe}
        onChange={(e) => setWipe(+e.target.value)}
        aria-label="Before / after comparison"
        className="absolute inset-x-0 bottom-[18px] mx-5 w-[calc(100%-40px)] cursor-ew-resize accent-green"
      />
    </Reveal>
    {/* honesty note: the pair is representative stock imagery, not a Power
        Clean trial result — real proof comes from the customer's own trial */}
    <p className="mx-auto mt-3 max-w-[980px] text-center text-[11.5px] leading-[1.5] text-muted">
      Representative imagery. Ask for a free trial to see the result on your
      own parts — we clean them and send them back.
    </p>
    </>
  );
}
