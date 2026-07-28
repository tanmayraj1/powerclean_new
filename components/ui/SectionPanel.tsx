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
   * moment" — used to alternate color down the page.
   */
  tone?: "white" | "tint" | "navy";
};

const TONE_CLASS: Record<NonNullable<SectionPanelProps["tone"]>, string> = {
  white: "bg-white",
  tint: "bg-green-tint",
  navy: "bg-navy",
};

/**
 * Rounded section card on the azure page background — the signature layout
 * wrapper. pattern.svg tiles at 320px on light tones per the ripple-mark spec.
 */
export function SectionPanel({
  children,
  outerClassName = "px-3 pb-3",
  className,
  style,
  id,
  tone = "white",
}: SectionPanelProps) {
  return (
    <div id={id} className={outerClassName}>
      <div
        className={`mx-auto max-w-[1320px] rounded-section p-[clamp(28px,4.5vw,60px)] ${TONE_CLASS[tone]} ${className ?? ""}`}
        style={{
          ...(tone === "navy"
            ? {}
            : {
                backgroundImage: "url('/pattern.svg')",
                backgroundRepeat: "repeat",
                backgroundSize: "320px",
              }),
          ...style,
        }}
      >
        {children}
      </div>
    </div>
  );
}
