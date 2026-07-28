import type { CSSProperties, ReactNode } from "react";

type SectionPanelProps = {
  children: ReactNode;
  /** outer gutter padding — matches the design's 12px card gutters */
  outerClassName?: string;
  className?: string;
  style?: CSSProperties;
  id?: string;
  /** disable the pattern.svg tile (plain white panel) */
  plain?: boolean;
};

/**
 * White rounded section card on the azure page background — the signature
 * layout wrapper. pattern.svg tiles at 320px per the ripple-mark spec.
 */
export function SectionPanel({
  children,
  outerClassName = "px-3 pb-3",
  className,
  style,
  id,
  plain,
}: SectionPanelProps) {
  return (
    <div id={id} className={outerClassName}>
      <div
        className={`mx-auto max-w-[1320px] rounded-section bg-white p-[clamp(28px,4.5vw,60px)] ${className ?? ""}`}
        style={{
          ...(plain
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
