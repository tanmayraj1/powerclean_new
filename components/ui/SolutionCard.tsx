"use client";

import { useRef } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { TiltCard } from "@/components/motion/TiltCard";
import { TransitionLink } from "@/components/layout/TransitionLink";
import { EASE_CSS } from "@/lib/motion";
import {
  useIsDesktop,
  usePrefersReducedMotion,
} from "@/hooks/useMediaQuery";
import type { Solution } from "@/lib/solutions";
import { ImageSlot } from "./ImageSlot";
import { Arrow } from "./Arrow";

type SolutionCardProps = {
  solution: Solution;
  delay?: number;
  /** taller image on the Solutions index (210px vs 200px) */
  imageHeight?: number;
  /** card surface — Home uses card-tint, Solutions index uses white */
  surface?: "tint" | "white";
};

/**
 * Solution card: pointer tilt + ring-aperture image reveal
 * (clip-path circle 13% → 125%) + shadow lift + arrow nudge.
 */
export function SolutionCard({
  solution,
  delay = 0,
  imageHeight = 200,
  surface = "tint",
}: SolutionCardProps) {
  const imgRef = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();
  const desktop = useIsDesktop();

  const aperture = () => {
    if (reduced || !desktop) return;
    imgRef.current?.animate(
      [
        { clipPath: "circle(13% at 50% 50%)" },
        { clipPath: "circle(125% at 50% 50%)" },
      ],
      { duration: 850, easing: EASE_CSS }
    );
  };

  const highlight = solution.highlight;
  const bg = highlight
    ? "bg-green-tint hover:shadow-[0_20px_44px_rgba(0,166,81,.16)]"
    : `${surface === "white" ? "bg-white" : "bg-card-tint"} hover:shadow-card-lg`;

  return (
    <Reveal dir="up" delay={delay}>
      <TiltCard
        className={`rounded-card px-3 pb-5 pt-3 transition-shadow duration-[350ms] ${bg}`}
        onPointerEnter={aperture}
      >
        <div
          ref={imgRef}
          className="relative mb-4 overflow-hidden rounded-img"
          style={{ height: imageHeight }}
        >
          <ImageSlot brief={solution.cardImage} className="absolute inset-0" />
        </div>
        <div className="px-2">
          <h3 className="mb-2 text-[19px] font-semibold text-navy">
            {solution.name}
          </h3>
          <p
            className={`${highlight ? "mb-3.5 text-muted-3" : "mb-3 text-muted"} text-[13px] leading-[1.6]`}
          >
            {solution.cardBlurb}
          </p>
          {!highlight && (
            <div className="mb-3.5 flex flex-wrap items-center gap-2 text-[12px] text-muted-3">
              <span>{solution.cardTags[0]}</span>
              <span className="h-1 w-1 rounded-full bg-green" />
              <span>{solution.cardTags[1]}</span>
            </div>
          )}
          <TransitionLink
            href={`/solutions/${solution.slug}`}
            className="group flex items-center justify-between rounded-full bg-white px-[18px] py-[11px] text-[13px] font-semibold text-navy no-underline transition-[transform,box-shadow,color] duration-300 hover:translate-x-1.5 hover:text-green hover:shadow-[0_10px_24px_rgba(29,31,35,.12)]"
          >
            View Details{" "}
            <span className="flex h-[26px] w-[26px] items-center justify-center rounded-full bg-green text-[13px] text-white">
              <Arrow />
            </span>
          </TransitionLink>
        </div>
      </TiltCard>
    </Reveal>
  );
}
