/**
 * Cleaning videos — sourced from powerclean.in/cleaning-videos.aspx.
 *
 * Every video ID, title and description below comes from the client's own
 * page; the pairing was taken from document order, where each card's YouTube
 * ID sits immediately before its title. Obvious spelling slips in the source
 * copy ("deticated", "caviation", "Asorbs", "Poishing", "platting") are
 * corrected here — the meaning is unchanged.
 *
 * `related` links each clip to the part of the site that explains it, so the
 * page feeds the product and knowledge clusters rather than dead-ending.
 */
export type CleaningVideo = {
  /** YouTube video ID */
  id: string;
  title: string;
  description: string;
  /** what the clip demonstrates, for grouping and filtering */
  topic: "Degreasing" | "Ultrasonic" | "Non-ferrous" | "Equipment" | "Facility";
  related?: { label: string; href: string };
};

export const cleaningVideos: CleaningVideo[] = [
  {
    id: "7xsjT_1zMoc",
    title: "Engine Cleaner & Degreaser",
    description:
      "Engine cleaner removing oil, grease and carbon deposits from engine parts — carbon cleaning from pistons using POWER CLEAN CR.",
    topic: "Degreasing",
    related: {
      label: "Carbon deposit removal guide",
      href: "/blog/carbon-deposit-removal-guide",
    },
  },
  {
    id: "Cs1Bf8D2n7Q",
    title: "Cleaning Lapping Paste Compound",
    description:
      "Removing tough lapping paste compound from metal components using POWER CLEAN.",
    topic: "Degreasing",
    related: {
      label: "How to choose an industrial degreaser",
      href: "/blog/how-to-choose-industrial-degreaser",
    },
  },
  {
    id: "YG83zFEvrLk",
    title: "Simple Ultrasonic Cleaning",
    description:
      "Removing grease and oil from metal rings and seals in an ultrasonic bath using POWER CLEAN.",
    topic: "Ultrasonic",
    related: {
      label: "Ultrasonic cleaning solutions",
      href: "/solutions/ultrasonic-cleaning",
    },
  },
  {
    id: "v6FynaDRqIk",
    title: "Cleaning Aluminium Castings",
    description:
      "Removing grease and oil from aluminium castings using POWER CLEAN NF — neutral-pH chemistry that will not etch or bloom the surface.",
    topic: "Non-ferrous",
    related: {
      label: "Power Clean NF-14",
      href: "/products/power-clean-nf-14",
    },
  },
  {
    id: "VnvV9LcDi5I",
    title: "Multi-Stage Ultrasonic Cleaning System",
    description:
      "Removing oil before plating on a multi-stage automatic ultrasonic cleaning machine.",
    topic: "Ultrasonic",
    related: {
      label: "Ultrasonic vs spray vs dip tank",
      href: "/blog/ultrasonic-vs-spray-vs-dip-tank",
    },
  },
  {
    id: "-bqSc25OhHA",
    title: "Aluminium Foil Test",
    description:
      "A simple test you can run to check whether your ultrasonic cleaner's cavitation is actually working.",
    topic: "Ultrasonic",
    related: { label: "Cavitation — definition", href: "/glossary/cavitation" },
  },
  {
    id: "VYABUL8l4h0",
    title: "Cooker Top Cleaning",
    description:
      "Removing buffing and polishing paste from a stainless cooker top.",
    topic: "Non-ferrous",
    related: {
      label: "Aluminium cleaning chemical guide",
      href: "/blog/aluminium-cleaning-chemical-guide",
    },
  },
  {
    id: "Nhw7in0rAHg",
    title: "Oil Absorption Pad",
    description:
      "An absorption pad lifting oil floating on the surface of a cleaning bath.",
    topic: "Equipment",
    related: {
      label: "Extending degreaser bath life",
      href: "/blog/extend-degreaser-bath-life",
    },
  },
  {
    id: "vAAaa26SXoI",
    title: "Bin Washing Cleaning Chemical",
    description:
      "Bin and tray cleaning chemical running in a bin-washing spray cleaning system.",
    topic: "Facility",
    related: {
      label: "Spray & jet washing solutions",
      href: "/solutions/spray-jet-cleaning",
    },
  },
  {
    id: "qN8GUwbBXOc",
    title: "Citrus Degreaser for Manual Cleaning",
    description:
      "Bin and tray cleaning by hand using a citrus degreaser.",
    topic: "Facility",
    related: { label: "Browse all 41 products", href: "/products" },
  },
];

export const videoTopics = [
  "Degreasing",
  "Ultrasonic",
  "Non-ferrous",
  "Equipment",
  "Facility",
] as const;

/** YouTube's own poster frame — no API key needed. */
export const videoThumb = (id: string) =>
  `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

/** nocookie host: no third-party cookie until the visitor actually plays. */
export const videoEmbed = (id: string) =>
  `https://www.youtube-nocookie.com/embed/${id}?rel=0&autoplay=1`;

export const videoWatch = (id: string) =>
  `https://www.youtube.com/watch?v=${id}`;
