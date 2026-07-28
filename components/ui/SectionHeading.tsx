import { Reveal } from "@/components/motion/Reveal";
import { Eyebrow } from "./Eyebrow";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  lede?: string;
  /** section H2 (48px max) vs sub-H2 (42/44px max) scale */
  size?: "lg" | "md";
  className?: string;
};

/** Centered section header: eyebrow + H2 + optional lede. */
export function SectionHeading({
  eyebrow,
  title,
  lede,
  size = "lg",
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      dir="up"
      className={`mx-auto max-w-[640px] text-center ${className ?? ""}`}
    >
      <Eyebrow label={eyebrow} center className="mb-3.5" />
      <h2
        className={`${lede ? "mb-3.5" : ""} font-semibold leading-[1.1] tracking-[-0.02em] text-navy ${
          size === "lg"
            ? "text-[clamp(30px,4vw,48px)]"
            : "text-[clamp(28px,3.6vw,44px)]"
        }`}
      >
        {title}
      </h2>
      {lede ? (
        <p className="text-[15px] leading-[1.6] text-muted">{lede}</p>
      ) : null}
    </Reveal>
  );
}
