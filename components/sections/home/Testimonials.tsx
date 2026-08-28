"use client";

import { useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { CountUp } from "@/components/motion/CountUp";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { Backdrop } from "@/components/ui/Backdrop";
import { siteConfig, testimonials } from "@/lib/site-config";

/** Testimonial collage + 3-quote carousel (first quote is the real TVS one). */
export function Testimonials() {
  const [t, setT] = useState(0);
  const quote = testimonials[t];

  return (
    <div className="relative isolate mx-auto max-w-[1320px] px-5 py-[clamp(40px,6vw,80px)]">
      <Backdrop />
      <Reveal dir="up" className="mb-[18px]">
        <Eyebrow label="TESTIMONIALS" />
      </Reveal>
      <Reveal
        dir="up"
        as="h2"
        className="mb-9 text-[clamp(28px,3.6vw,44px)] font-semibold tracking-[-0.02em] text-navy"
      >
        The People Who Run the Plants
      </Reveal>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-center gap-8">
        <Reveal dir="left" className="relative h-[360px]">
          <div className="absolute left-0 top-0 h-[78%] w-[62%] overflow-hidden rounded-card shadow-[0_20px_50px_rgba(29,31,35,.15)]">
            <ImageSlot
              brief="Photo — plant operations manager on factory floor"
              src="/photos/testimonial-1.webp"
              alt="Machining operation producing the components Power Clean degreasers clean"
              className="absolute inset-0"
            />
          </div>
          <div className="animate-pc-float absolute bottom-0 right-0 h-[62%] w-[48%] overflow-hidden rounded-card shadow-[0_20px_50px_rgba(29,31,35,.18)]">
            <ImageSlot
              brief="Photo — cleaning application in progress"
              src="/photos/testimonial-2.webp"
              alt="Bronze and brass bushings cleaned with a neutral-pH non-ferrous cleaner"
              className="absolute inset-0"
            />
          </div>
        </Reveal>
        <Reveal dir="right">
          <div className="mb-[18px] flex items-center gap-3.5">
            <span className="text-[46px] font-bold text-navy">
              <CountUp to={siteConfig.stats.yearsOfPrecisionCleaning} suffix="+" />
            </span>
            <div>
              <div className="text-[13px] font-semibold text-green-deep">
                years of precision cleaning
              </div>
              <div className="text-xs text-muted">
                trusted by BOSCH, TVS, Bharat Forge and Murugappa
              </div>
            </div>
          </div>
          <p className="mb-5 min-h-24 text-[clamp(17px,1.8vw,21px)] font-medium leading-[1.55] text-ink [text-wrap:pretty]">
            &ldquo;{quote.quote}&rdquo;
          </p>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="text-[15px] font-semibold text-navy">
                {quote.name}
              </div>
              <div className="text-[12.5px] text-muted">{quote.role}</div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() =>
                  setT((c) => (c + testimonials.length - 1) % testimonials.length)
                }
                aria-label="Previous testimonial"
                className="h-10 w-10 cursor-pointer rounded-full border-[1.5px] border-[#d5dae2] bg-white text-base text-navy transition-colors duration-[250ms] hover:bg-green-tint"
              >
                ←
              </button>
              <button
                onClick={() => setT((c) => (c + 1) % testimonials.length)}
                aria-label="Next testimonial"
                className="h-10 w-10 cursor-pointer rounded-full border-none bg-navy text-base text-white transition-colors duration-[250ms] hover:bg-green"
              >
                →
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
