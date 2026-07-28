import { Reveal } from "@/components/motion/Reveal";

/**
 * Ripple-mark section divider: thin line + 3 concentric rings.
 * One of the four sanctioned uses of the ripple mark.
 */
export function RippleDivider() {
  return (
    <Reveal
      dir="scale"
      className="flex items-center justify-center pb-1.5 pt-[26px]"
    >
      <svg width="220" height="30" viewBox="0 0 220 30" aria-hidden="true">
        <path d="M0,15 L86,15" stroke="#c9d2dd" strokeWidth="1" />
        <circle cx="110" cy="15" r="5" fill="none" stroke="#00A651" strokeWidth="1.4" />
        <circle cx="110" cy="15" r="10" fill="none" stroke="#c9d2dd" strokeWidth="1" />
        <circle cx="110" cy="15" r="14" fill="none" stroke="#e2e6ec" strokeWidth="1" />
        <path d="M134,15 L220,15" stroke="#c9d2dd" strokeWidth="1" />
      </svg>
    </Reveal>
  );
}
