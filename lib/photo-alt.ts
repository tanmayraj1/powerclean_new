/**
 * Canonical alt text, keyed by image path.
 *
 * The same photograph appears in several places — a solution card, a CTA
 * banner, a hero — and it should describe itself identically everywhere.
 * Components that render a shared decorative-but-meaningful photo look the
 * description up here instead of each caller inventing one (or, as was the
 * case, passing `alt=""` and throwing away the image-search surface).
 *
 * Every description below was written against the actual photograph, not the
 * art-direction brief it was sourced for.
 */
export const PHOTO_ALT: Record<string, string> = {
  "/hero-bg.png":
    "Steel gear splashing through water, branded Power Clean industrial degreaser",
  "/photos/spray-mist.webp":
    "Cleaning solution spraying and splashing across a dark metal surface",
  "/photos/qc-lab.webp":
    "Chemist holding a beaker of cleaning solution during batch quality control",
  "/photos/production-hall.webp":
    "Rows of stainless process vessels and pipework in the production hall",
  "/photos/story-facility.webp":
    "Chemists developing cleaning formulations at a laboratory bench",
  "/photos/story-lab.webp":
    "Laboratory glassware and instruments used to test cleaning chemistry",
  "/photos/blending-line.webp":
    "Stainless blending vessels where Power Clean cleaning chemicals are made",
  "/photos/dispatch-bay.webp":
    "IBC totes and shipping containers staged for dispatch to customer plants",
  "/photos/packaging.webp":
    "Blue industrial drums of cleaning chemical concentrate in a warehouse",
  "/photos/gallery-1.webp":
    "Technician loading components onto a parts washer fixture plate",
  "/photos/gallery-2.webp":
    "Stainless process vessels and pipework in a chemical blending plant",
  "/photos/gallery-3.webp":
    "Rows of machined steel bearing races after degreasing",
  "/photos/gallery-4.webp":
    "Machined metal blocks with press-fit inserts, cleaned and inspected",
  "/photos/solution-xl.webp":
    "Oily machined gears and bearing races awaiting heavy-duty degreasing",
  "/photos/solution-nf14.webp":
    "Aluminium die-cast housings and brackets cleaned with neutral-pH chemistry",
  "/photos/solution-lf.webp":
    "CNC machining centre flooding a steel part with coolant during cutting",
  "/photos/solution-sp.webp":
    "Rows of machined steel components with a protective rust-preventive finish",
  "/photos/solution-342.webp":
    "Engine cylinder head with valves being cleaned by hand with a solvent degreaser",
  "/photos/solution-rp636.webp":
    "Golden rust-preventive oil droplet splashing, showing the protective film",
  "/photos/res-safety.webp":
    "Plant operator wearing protective gloves while handling industrial chemicals",
  "/photos/res-downtime.webp":
    "CNC lathe machining a steel shaft on a production line",
  "/photos/res-switch.webp":
    "Operator moving a blue drum of cleaning concentrate in a workshop",
  "/photos/blog-cooling.webp":
    "Cooling tower fan array on an industrial plant roof requiring descaling",
  "/photos/blog-tce.webp":
    "Industrial degreasing equipment being converted from solvent to aqueous cleaning",
  "/photos/blog-degreaser.webp":
    "Oily machined gears and cogs before industrial degreasing",
  "/photos/blog-whiterust.webp":
    "Aluminium die-cast parts showing white rust bloom after washing",
  "/photos/blog-ultrasonic.webp":
    "Precision metal components after ultrasonic cleaning",
  "/photos/testimonial-1.webp":
    "Machining operation producing the components Power Clean degreasers clean",
  "/photos/testimonial-2.webp":
    "Bronze and brass bushings cleaned with a neutral-pH non-ferrous cleaner",
};

/**
 * Alt text for a photo path. Falls back to the caller's own description, then
 * to an empty string — genuinely decorative images are still allowed, they
 * just have to be opted into rather than happening by default.
 */
export function photoAlt(src?: string, fallback = ""): string {
  if (!src) return fallback;
  return PHOTO_ALT[src] ?? fallback;
}
