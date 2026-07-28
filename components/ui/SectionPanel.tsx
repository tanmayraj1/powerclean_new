import type { CSSProperties, ReactNode } from "react";

type SectionPanelProps = {
  children: ReactNode;
  /** outer gutter padding — matches the design's 12px card gutters */
  outerClassName?: string;
  className?: string;
  style?: CSSProperties;
  id?: string;
  /**
   * Section surface: white (default), green "tint" wash, or a navy "dark
   * moment" — used to alternate colour down the page.
   */
  tone?: "white" | "tint" | "navy";
};

const TONE_CLASS: Record<NonNullable<SectionPanelProps["tone"]>, string> = {
  // hairline + soft brand wash so the card reads as material, not flat paper
  white:
    "bg-white ring-1 ring-inset ring-line-2/70 shadow-[0_1px_2px_rgba(29,31,35,.03),0_12px_36px_-24px_rgba(41,47,110,.18)]",
  tint: "bg-green-tint ring-1 ring-inset ring-green/12",
  navy: "bg-navy ring-1 ring-inset ring-white/10",
};

/** Surface wash layered under the pattern tile, per tone. */
const TONE_WASH: Record<NonNullable<SectionPanelProps["tone"]>, string> = {
  white:
    "radial-gradient(ellipse 80% 60% at 8% 0%, rgba(0,166,81,.05), transparent 60%), radial-gradient(ellipse 70% 60% at 100% 100%, rgba(41,47,110,.045), transparent 62%)",
  tint: "radial-gradient(ellipse 75% 60% at 95% 0%, rgba(255,255,255,.75), transparent 62%), radial-gradient(ellipse 70% 55% at 0% 100%, rgba(0,166,81,.10), transparent 60%)",
  navy: "radial-gradient(ellipse 65% 55% at 88% 8%, rgba(0,166,81,.22), transparent 62%), radial-gradient(ellipse 70% 60% at 0% 100%, rgba(58,65,136,.55), transparent 65%)",
};

/**
 * Rounded section card on the azure page background — the signature layout
 * wrapper. Surfaces are built in layers: tone wash → pattern.svg tile (320px,
 * inverted on navy) → content. Purely material; geometry is untouched.
 */
export function SectionPanel({
  children,
  outerClassName = "px-3 pb-3",
  className,
  style,
  id,
  tone = "white",
}: SectionPanelProps) {
  const isNavy = tone === "navy";
  return (
    <div id={id} className={outerClassName}>
      <div
        className={`relative isolate mx-auto max-w-[1320px] overflow-hidden rounded-section p-[clamp(28px,4.5vw,60px)] ${TONE_CLASS[tone]} ${className ?? ""}`}
        style={{ backgroundImage: TONE_WASH[tone], ...style }}
      >
        {/* pattern tile — inverted to white on the navy tone */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            backgroundImage: "url('/pattern.svg')",
            backgroundRepeat: "repeat",
            backgroundSize: "320px",
            opacity: isNavy ? 0.07 : 0.6,
            filter: isNavy ? "brightness(0) invert(1)" : undefined,
          }}
        />
        {children}
      </div>
    </div>
  );
}
