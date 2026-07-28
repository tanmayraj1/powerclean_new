"use client";

import { useEffect, useState } from "react";
import { Parallax } from "@/components/motion/Parallax";
import { Reveal } from "@/components/motion/Reveal";
import { CountUp } from "@/components/motion/CountUp";
import { Scramble } from "@/components/motion/Scramble";
import { Magnetic } from "@/components/motion/Magnetic";
import { TransitionLink } from "@/components/layout/TransitionLink";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { siteConfig, heroImages } from "@/lib/site-config";

/** Home hero — 2-line clipped headline, rotating industry word, glass stat card. */
export function HomeHero() {
  const words = siteConfig.heroRotatingWords;
  const [rot, setRot] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setRot((r) => (r + 1) % words.length), 2400);
    return () => clearInterval(t);
  }, [words.length]);

  return (
    <div className="px-3 pt-3">
      <div className="relative flex min-h-[min(88vh,780px)] overflow-hidden rounded-section bg-[linear-gradient(135deg,#23273f_0%,#292F6E_45%,#3a4188_100%)]">
        <Parallax className="absolute inset-0">
          <ImageSlot
            brief="Hero photo — technician in navy workwear spray-cleaning a large metal part on a factory floor"
            src={heroImages.home}
            className="absolute inset-0"
            sizes="100vw"
            eager
          />
        </Parallax>
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(29,31,35,.78)_0%,rgba(29,31,35,.28)_45%,rgba(41,47,110,.18)_100%)]" />
        <div className="pointer-events-none relative z-[2] flex w-full flex-wrap items-end justify-between gap-7 self-end p-[clamp(24px,4vw,56px)]">
          <div className="min-w-[min(100%,320px)] max-w-[680px] flex-[1_1_420px]">
            <div className="overflow-hidden">
              <Reveal
                dir="up"
                delay={100}
                as="div"
                className="text-[clamp(34px,4.4vw,66px)] font-semibold leading-[1.06] tracking-[-0.02em] text-white"
              >
                <h1 className="inline">Industrial Cleaning,</h1>
              </Reveal>
            </div>
            <div className="overflow-hidden">
              <Reveal
                dir="up"
                delay={240}
                as="div"
                className="text-[clamp(34px,4.4vw,66px)] font-semibold leading-[1.06] tracking-[-0.02em] text-white"
              >
                Engineered for Performance
              </Reveal>
            </div>
            <Reveal
              dir="up"
              delay={420}
              className="mt-[18px] flex flex-wrap items-center gap-2.5 text-[clamp(14px,1.4vw,17px)] text-white/82"
            >
              <span>Trusted by</span>
              <span className="inline-block min-w-[120px] rounded-full border border-green/50 bg-green/25 px-3.5 py-[3px] text-center font-semibold text-white transition-all duration-300">
                {words[rot]}
              </span>
              <span>manufacturers</span>
            </Reveal>
            <Reveal
              dir="up"
              delay={560}
              className="mt-[26px] flex items-center gap-2.5 text-[13px] text-white/75"
            >
              <span className="animate-pc-pulse h-[9px] w-[9px] rounded-full bg-green" />
              Scroll down
            </Reveal>
          </div>
          <Reveal
            dir="right"
            delay={500}
            className="pointer-events-auto max-w-[360px] flex-[0_1_360px]"
          >
            <div className="mb-4 rounded-img-lg border border-white/18 bg-white/12 px-[18px] py-4 backdrop-blur-[14px]">
              <div className="flex items-baseline gap-1.5">
                <span className="text-[30px] font-bold text-white">
                  <CountUp
                    to={siteConfig.stats.yearsOfPrecisionCleaning}
                    suffix="+"
                  />
                </span>
                <span className="text-[13px] font-medium text-white/85">
                  years of precision cleaning solutions
                </span>
              </div>
            </div>
            <div className="mb-2.5 flex items-center gap-2">
              <span className="h-[7px] w-[7px] rounded-full bg-green" />
              <Scramble
                text="POWER CLEAN SOLUTIONS"
                className="text-[11px] font-semibold tracking-[0.14em] text-white/85"
              />
            </div>
            <p className="mb-[18px] text-sm leading-[1.6] text-white/86 [text-wrap:pretty]">
              Water-based degreasers, parts-washing chemistry, and
              surface-treatment programs formulated, trialled, and supported on
              your line.
            </p>
            <div className="flex flex-wrap gap-2.5">
              <Magnetic>
                <TransitionLink
                  href="/contact"
                  className="inline-block rounded-full bg-green px-6 py-[13px] text-sm font-semibold text-white no-underline shadow-cta-strong transition-colors hover:bg-green-dark"
                >
                  Request a Consultation
                </TransitionLink>
              </Magnetic>
              <TransitionLink
                href="/solutions"
                className="inline-block rounded-full border border-white/30 bg-white/14 px-[22px] py-[13px] text-sm font-medium text-white no-underline transition-colors hover:bg-white/26"
              >
                Explore Solutions
              </TransitionLink>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
