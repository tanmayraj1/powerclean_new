import { Karaoke } from "@/components/motion/Karaoke";
import { Marquee } from "@/components/motion/Marquee";
import { Backdrop } from "@/components/ui/Backdrop";

/** Karaoke statement + skewed velocity-reactive marquee band. */
export function Statement() {
  return (
    <>
      <div className="relative isolate mx-auto max-w-[980px] px-6 py-[clamp(48px,7vw,96px)] text-center">
        <Backdrop variant="rings" className="left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2" />
        <Karaoke
          text="Power Clean formulations remove oil, grease, scale and residue — while protecting people, equipment and the environment."
          className="text-[clamp(24px,3.4vw,40px)] font-semibold leading-[1.35] tracking-[-0.01em]"
        />
      </div>
      <div className="overflow-hidden py-10">
        <Marquee
          skew={-2}
          speed={1.1}
          reactive
          className="py-2"
          trackStyle={{ gap: 56 }}
        >
          <span className="text-[clamp(42px,6.5vw,92px)] font-bold leading-[1.15] tracking-[-0.03em] text-navy">
            PRECISION CLEANING
          </span>
          <RingGlyph />
          <span
            className="text-[clamp(42px,6.5vw,92px)] font-bold tracking-[-0.03em] text-transparent"
            style={{ WebkitTextStroke: "2px #292F6E" }}
          >
            POWERCLEAN
          </span>
          <RingGlyph />
        </Marquee>
      </div>
    </>
  );
}

function RingGlyph() {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" aria-hidden="true">
      <circle cx="17" cy="17" r="6" fill="none" stroke="#00A651" strokeWidth="2" />
      <circle
        cx="17"
        cy="17"
        r="13"
        fill="none"
        stroke="#00A651"
        strokeWidth="1.2"
        opacity=".5"
      />
    </svg>
  );
}
