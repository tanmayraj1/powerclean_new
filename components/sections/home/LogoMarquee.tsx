import { Reveal } from "@/components/motion/Reveal";
import { Marquee } from "@/components/motion/Marquee";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { siteConfig } from "@/lib/site-config";

// Varied typographic treatments per wordmark, matching the design's rhythm.
const STYLES = [
  "text-[20px] font-bold tracking-[0.1em]",
  "text-[19px] font-normal tracking-[0.22em]",
  "text-[21px] font-semibold italic",
  "text-[19px] font-bold",
  "text-[20px] font-medium tracking-[0.16em]",
  "text-[19px] font-semibold tracking-[0.06em]",
  "text-[20px] font-semibold tracking-[0.12em]",
];

/** Trusted-by strip — REAL client names, slow non-reactive marquee. */
export function LogoMarquee() {
  return (
    <Reveal dir="up" className="mx-auto max-w-[1320px] px-5 pb-2.5 pt-11">
      <Eyebrow
        label="TRUSTED BY MANUFACTURERS"
        center
        className="mb-[26px]"
      />
      <Marquee
        speed={0.6}
        reactive={false}
        trackStyle={{ gap: 72, opacity: 0.55 }}
      >
        {siteConfig.clients.map((c, i) => (
          <span
            key={c}
            className={`whitespace-nowrap text-muted ${STYLES[i % STYLES.length]}`}
          >
            {c}
          </span>
        ))}
      </Marquee>
    </Reveal>
  );
}
