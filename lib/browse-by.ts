/**
 * Shared "find it by the job" link groups.
 *
 * Most visitors arrive knowing their problem, not our product codes. These
 * groups are the routes in, and they are reused by the products index, the QR
 * landing page and the city pages so there is one definition rather than
 * three drifting copies.
 */
export const BROWSE_BY = [
  {
    title: "By what you are cleaning",
    links: [
      { label: "Automotive components and engine parts", href: "/industries/automotive" },
      { label: "Aluminium die castings (ADC10 / ADC12)", href: "/industries/foundry-die-casting" },
      { label: "Bearings and precision components", href: "/industries/bearing-manufacturing" },
      { label: "Copper, brass and electrical assemblies", href: "/industries/electrical-electronics" },
      { label: "Machined steel and cast iron", href: "/industries/general-engineering" },
    ],
  },
  {
    title: "By wash process",
    links: [
      { label: "Ultrasonic cleaning machines", href: "/glossary/ultrasonic-cleaning" },
      { label: "Spray and tunnel washers", href: "/glossary/spray-wash" },
      { label: "Dip tanks and immersion systems", href: "/glossary/dip-tank" },
      { label: "Which process suits my part?", href: "/blog/ultrasonic-vs-spray-vs-dip-tank" },
      { label: "Cooling towers and heat exchangers", href: "/industries/plant-facility" },
    ],
  },
  {
    title: "By problem",
    links: [
      { label: "White rust on aluminium", href: "/blog/removing-white-rust-aluminium-die-cast" },
      { label: "Replacing trichloroethylene (TCE)", href: "/blog/replacing-tce-plant-guide" },
      { label: "Rust between operations", href: "/blog/rust-prevention-between-processes" },
      { label: "Baked carbon on pistons and valves", href: "/blog/carbon-deposit-removal-guide" },
      { label: "A spray washer that foams", href: "/blog/foam-control-spray-washer" },
    ],
  },
  {
    title: "By commercial question",
    links: [
      { label: "What cleaning actually costs per part", href: "/blog/industrial-cleaning-cost-per-part" },
      { label: "Extending bath life and cutting spend", href: "/blog/extend-degreaser-bath-life" },
      { label: "SDS, storage and effluent", href: "/blog/cleaning-chemical-safety-documentation" },
      { label: "Meeting a Millipore cleanliness spec", href: "/blog/millipore-cleanliness-testing" },
      { label: "Where we supply across India", href: "/industrial-cleaning-chemicals" },
    ],
  },
];
