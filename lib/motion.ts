// Site-wide motion constants — mirror assets/motion.js from the design bundle.
// One easing curve everywhere; nothing bounces except liquid/droplet moments.

export const EASE = [0.22, 1, 0.36, 1] as const;
export const EASE_CSS = "cubic-bezier(.22,1,.36,1)";

export const REVEAL_DURATION = 0.9;
export const REVEAL_CLIP_DURATION = 1.15;
export const COUNT_DURATION = 1500;
export const DRAW_DURATION = 1.8;

// data-reveal offsets from motion.js
export const REVEAL_OFFSETS: Record<
  string,
  { x?: number; y?: number; scale?: number }
> = {
  up: { y: 42 },
  down: { y: -42 },
  left: { x: -52 },
  right: { x: 52 },
  scale: { scale: 0.93 },
};

export const SCRAMBLE_GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789·/";
