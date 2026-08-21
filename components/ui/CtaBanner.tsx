import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { Magnetic } from "@/components/motion/Magnetic";
import { TransitionLink } from "@/components/layout/TransitionLink";
import { HeroBackdrop } from "./HeroBackdrop";
import { Eyebrow } from "./Eyebrow";
import { Arrow } from "./Arrow";
import { InlineContact } from "./InlineContact";

type CtaBannerProps = {
  eyebrow?: string;
  heading: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
  /** shot brief, retained on call sites for when real photography lands */
  imageBrief?: string;
  /** green clip-path wedge on the right (Solutions variant) */
  wedge?: boolean;
  minHeight?: number;
  extra?: ReactNode;
};

/**
 * Photo CTA banner with a centered white card — shared across About,
 * Solutions, and Solution Detail.
 */
export function CtaBanner({
  eyebrow,
  heading,
  body,
  ctaLabel,
  ctaHref,
  wedge,
  minHeight = 420,
  extra,
}: CtaBannerProps) {
  return (
    <div className="px-3 pb-3">
      <div
        className="relative mx-auto flex max-w-[1320px] items-center justify-center overflow-hidden rounded-section bg-[linear-gradient(120deg,#23273f,#292F6E_60%,#333b7e)]"
        style={{ minHeight }}
      >
        {/* No photography yet: the branded ripple backdrop reads as a designed
            panel rather than an empty photo slot. `imageBrief` is kept as the
            shot brief for when real photography lands. */}
        <HeroBackdrop />
        {wedge && (
          <div className="pointer-events-none absolute -right-[8%] inset-y-0 w-[30%] bg-[linear-gradient(rgba(0,166,81,.3),rgba(0,166,81,.12))] [clip-path:polygon(38%_0,100%_0,100%_100%,0_100%)]" />
        )}
        <Reveal
          dir="scale"
          className="relative z-[2] m-6 max-w-[560px] rounded-card-lg bg-white p-[clamp(26px,4vw,48px)] text-center shadow-[0_30px_80px_rgba(29,31,35,.35)]"
        >
          {eyebrow ? <Eyebrow label={eyebrow} center className="mb-3" /> : null}
          <h2 className="mb-3 text-[clamp(24px,3vw,34px)] font-semibold leading-[1.2] tracking-[-0.02em] text-navy">
            {heading}
          </h2>
          <p className="mb-[22px] text-sm leading-[1.6] text-muted">{body}</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Magnetic>
              <TransitionLink
                href={ctaHref}
                className="group inline-block rounded-full bg-green-cta px-7 py-[13px] text-sm font-semibold text-white no-underline shadow-cta transition-colors hover:bg-green-cta-dark"
              >
                {ctaLabel} <Arrow />
              </TransitionLink>
            </Magnetic>
            {extra}
          </div>
          <InlineContact className="mt-4" />
        </Reveal>
      </div>
    </div>
  );
}
