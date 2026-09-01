/**
 * Single source of truth for every solution card and detail page.
 * All six featured products are REAL items from the powerclean.in catalogue;
 * product facts (dilutions, bases, applications) come from the live site.
 * Photography and pack artwork are wired; briefs are kept as art direction.
 */

export type Spec = { label: string; value: string };
export type DilutionStat = {
  count: number;
  prefix?: string;
  suffix?: string;
  dec?: number;
  caption: string;
};
export type DilutionBar = {
  label: string;
  value: string;
  percent: number;
  color: "green" | "navy";
};

export type Solution = {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  cardBlurb: string;
  cardTags: [string, string];
  cardImage: string;
  /** real photograph for the card; cardImage stays as the art-direction brief */
  cardPhoto?: string;
  highlight?: boolean;
  about: [string, string];
  removes: string[];
  specs: Spec[];
  dilution: {
    heading: string;
    body: string;
    stats: DilutionStat[];
    barsTitle: string;
    bars: DilutionBar[];
    note: string;
  };
  beforeAfterCaption: string;
  /** use-case-matched representative imagery for the wipe slider */
  beforeAfter: {
    before: string;
    after: string;
    beforeAlt: string;
    afterAlt: string;
  };
  gallery: [string, string, string, string];
  related: [string, string, string];
  cta: { heading: string; body: string };
};

const SHARED_GALLERY: [string, string, string, string] = [
  "Technician loading components onto a parts washer fixture plate",
  "Stainless process vessels and pipework in a chemical blending plant",
  "Rows of machined steel bearing races after degreasing",
  "Machined metal blocks with press-fit inserts, cleaned and inspected",
];

/** real photographs matching SHARED_GALLERY by index */
export const sharedGalleryPhotos: [string, string, string, string] = [
  "/photos/gallery-1.webp",
  "/photos/gallery-2.webp",
  "/photos/gallery-3.webp",
  "/photos/gallery-4.webp",
];

export const deploySteps = [
  // REAL — Roovel's published End-to-End Partnership process
  {
    num: "01",
    title: "Requirement mapping",
    body: "Understand your components, contaminants, process requirements, and cleaning objectives.",
  },
  {
    num: "02",
    title: "Contaminant & part study",
    body: "Analyze parts and contaminants to identify the most effective cleaning solution.",
  },
  {
    num: "03",
    title: "Lab validation",
    body: "Validate cleaning performance, compatibility, bath life, and overall process efficiency.",
  },
  {
    num: "04",
    title: "Solution recommendation",
    body: "Recommend the ideal formulation based on testing and application requirements.",
  },
  {
    num: "05",
    title: "Trial & feedback",
    body: "Conduct onsite trials and optimize performance using real production feedback.",
    highlight: true,
  },
  {
    num: "06",
    title: "Supply & support",
    body: "Ensure reliable supply with continuous technical guidance and after-sales support.",
  },
] as const;

export const packagingRows = [
  // REAL packing sizes: 35L, 50L, 200L, 1000L — custom packing available
  {
    size: "35 L",
    title: "Pail — trials & low-volume lines",
    body: "Ideal for first supervised trials and pilot programs",
    tag: "Best for trials",
    highlight: false,
  },
  {
    size: "50 L",
    title: "Drum — small production supply",
    body: "For single-washer lines and steady low-volume use",
    tag: "Compact supply",
    highlight: false,
  },
  {
    size: "200 L",
    title: "Barrel — standard production supply",
    body: "Scheduled delivery on supply programs · drum pump compatible",
    tag: "Most common",
    highlight: true,
  },
  {
    size: "1000 L",
    title: "IBC tote — high-volume & multi-washer plants",
    body: "Direct-dosed via metering pump · custom packing also available",
    tag: "High-volume supply",
    highlight: false,
  },
] as const;

// REAL testimonial (TVS Group) — reused on detail pages.
export const detailTestimonial = {
  quote:
    "Roovel doesn't just sell a product — they delivered the complete cleaning solution. They helped us source the right machine, provided free chemical samples, and trained our people on the full system.",
  name: "Mani",
  role: "Vice President, TVS Group",
};

export const solutions: Solution[] = [
  {
    slug: "power-clean-xl",
    name: "POWER CLEAN XL",
    category: "Heavy-Duty Degreasing",
    tagline:
      "All-round heavy-duty alkaline degreaser for ultrasonic, spray, and soak systems.",
    cardBlurb:
      "Water-based, rust-inhibited alkaline concentrate that strips oils, coolants, and drawing compounds — dilutable up to 1:100.",
    cardTags: ["Oil & Grease Removal", "Water-Based"],
    cardImage: "Oily machined gears and bearing races awaiting heavy-duty degreasing",
    cardPhoto: "/photos/solution-xl.webp",
    about: [
      "POWER CLEAN XL is an all-round heavy-duty alkaline degreaser built on water-based active-colloid chemistry. It emulsifies cutting oils, coolants, and shop soils at low dilutions, then releases them in the separator so the bath keeps working longer.",
      "Rust-inhibited and effective in ultrasonic, spray, and soak systems alike, it replaces petroleum distillates and hazardous solvents in most machining and assembly operations — with no flash point and no solvent permits.",
    ],
    removes: [
      "Neat and soluble cutting oils, hydraulic fluids, and coolant residues",
      "Drawing compounds, stamping lubes, and pressing pastes",
      "Shop dust, chips, fingerprints, and light carbonized soils",
      "Polishing and buffing compounds ahead of plating or coating",
    ],
    specs: [
      { label: "Application", value: "Ultrasonic · Spray · Soak" },
      { label: "Base", value: "Water-based alkaline" },
      { label: "Dilution", value: "Up to 1:100" },
      { label: "Rust inhibited", value: "Yes" },
      { label: "Packaging", value: "35L · 50L · 200L · 1000L" },
      { label: "Properties", value: "Biodegradable, Zero VOC" },
    ],
    dilution: {
      heading: "A Little Concentrate Goes a Long Way",
      body: "Dilutable up to 1:100, one 35-litre pail of POWER CLEAN XL makes up to 3,500 litres of ready-to-use cleaning bath. Dosing pumps hold the ratio steady, so cost-per-part stays predictable.",
      stats: [
        { count: 100, prefix: "1:", caption: "maximum dilution ratio" },
        { count: 3500, suffix: "L", caption: "bath from one 35L pail" },
        { count: 100, suffix: "%", caption: "water-based chemistry" },
      ],
      barsTitle: "Working bath composition",
      bars: [
        {
          label: "POWER CLEAN XL concentrate",
          value: "1%",
          percent: 1,
          color: "green",
        },
        { label: "Water", value: "99%", percent: 99, color: "navy" },
      ],
      note: "Oil split-out in the separator keeps the working bath active for weeks, not days.",
    },
    beforeAfterCaption:
      "Drag the slider to compare a sample part before and after a single spray cycle.",
        beforeAfter: {
      before: "/photos/ba-xl-before.webp",
      after: "/photos/ba-xl-after.webp",
      beforeAlt: "Pile of gears caked in oily grime before degreasing",
      afterAlt: "Bright, residue-free machined parts after an aqueous wash",
    },
    gallery: SHARED_GALLERY,
    related: ["power-clean-sp", "power-clean-lf", "pc-rp-636"],
    cta: {
      heading: "Trial POWER CLEAN XL on Your Line",
      body: "Request a sample pail and a supervised trial — measured against your current process.",
    },
  },
  {
    slug: "power-clean-nf-14",
    name: "POWER CLEAN NF-14",
    category: "Non-Ferrous Cleaning",
    tagline:
      "Neutral-pH cleaner for aluminium, brass, and copper — rinse-free, prevents white rust.",
    cardBlurb:
      "Neutral-pH chemistry for soft metals: cleans aluminium, brass, and copper at 3:100, rinse-free, and prevents white rust.",
    cardTags: ["Aluminium · Brass · Copper", "Neutral pH"],
    cardImage: "Aluminium die-cast housings and brackets cleaned with neutral-pH chemistry",
    cardPhoto: "/photos/solution-nf14.webp",
    highlight: true,
    about: [
      "POWER CLEAN NF-14 is a non-ferrous metal cleaner formulated at neutral pH for aluminium, brass, and copper. It lifts machining soils without etching, staining, or attacking soft substrates.",
      "Dilutable at 3:100 and rinse-free in most applications, it prevents white rust on cleaned parts and keeps finish quality intact ahead of downstream processes.",
    ],
    removes: [
      "Machining oils and coolant residues on aluminium components",
      "Handling soils and fingerprints on brass and copper parts",
      "Light oxidation and workshop dust before assembly",
      "Residues ahead of inspection, coating, or packing",
    ],
    specs: [
      { label: "Application", value: "Spray · Soak · Ultrasonic" },
      { label: "Metals", value: "Aluminium · Brass · Copper" },
      { label: "Dilution", value: "3:100" },
      { label: "pH", value: "Neutral" },
      { label: "Packaging", value: "35L · 50L · 200L · 1000L" },
      { label: "Properties", value: "Rinse-free, prevents white rust" },
    ],
    dilution: {
      heading: "Gentle on Metal, Strong on Soils",
      body: "At its 3:100 working dilution, one 35-litre pail of NF-14 makes over 1,150 litres of ready-to-use bath — rinse-free in most applications, so cycle time stays short.",
      stats: [
        { count: 3, suffix: ":100", caption: "working dilution" },
        { count: 1150, suffix: "L", caption: "bath from one 35L pail" },
        { count: 7, caption: "neutral pH — safe on soft metals" },
      ],
      barsTitle: "Working bath composition",
      bars: [
        {
          label: "POWER CLEAN NF-14 concentrate",
          value: "3%",
          percent: 3,
          color: "green",
        },
        { label: "Water", value: "97%", percent: 97, color: "navy" },
      ],
      note: "Rinse-free operation removes a full stage from most non-ferrous wash cycles.",
    },
    beforeAfterCaption:
      "Drag the slider to compare an aluminium part before and after a single wash cycle.",
        beforeAfter: {
      before: "/photos/ba-nf14-before.webp",
      after: "/photos/ba-nf14-after.webp",
      beforeAlt: "Corroded, tarnished non-ferrous metal surface before cleaning",
      afterAlt: "Smooth bright metal surface after tarnish removal",
    },
    gallery: SHARED_GALLERY,
    related: ["power-clean-xl", "power-clean-sp", "pc-rp-636"],
    cta: {
      heading: "Trial POWER CLEAN NF-14 on Your Line",
      body: "Request a sample pail and a supervised trial on your non-ferrous parts.",
    },
  },
  {
    slug: "power-clean-lf",
    name: "POWER CLEAN LF",
    category: "Spray Washing",
    tagline:
      "No-foam cleaner-degreaser for high-jet spray systems, with built-in rust preventive.",
    cardBlurb:
      "Zero-foam formulation for high-pressure jet washers — dilutable 1:100 with a rust preventive built in.",
    cardTags: ["High-Jet Spray", "No Foam"],
    cardImage: "CNC machining centre flooding a steel part with coolant during cutting",
    cardPhoto: "/photos/solution-lf.webp",
    about: [
      "POWER CLEAN LF is a no-foam cleaner-degreaser engineered for high-jet spray washers, where conventional chemistry foams out of control. It cuts oils and shop soils at pressure without cavitation or overflow.",
      "Dilutable up to 1:100 and carrying a built-in rust preventive, it cleans and protects in a single stage — keeping ferrous parts flash-rust free straight out of the washer.",
    ],
    removes: [
      "Cutting oils and coolant carry-over in high-pressure cabinets",
      "Shop soils and chips from machined ferrous parts",
      "Light drawing and stamping residues",
      "Soils ahead of inspection and inter-op storage",
    ],
    specs: [
      { label: "Application", value: "High-jet spray systems" },
      { label: "Base", value: "Water-based, no-foam" },
      { label: "Dilution", value: "Up to 1:100" },
      { label: "Rust preventive", value: "Built in" },
      { label: "Packaging", value: "35L · 50L · 200L · 1000L" },
      { label: "Properties", value: "Non-flammable, dilutable & reusable" },
    ],
    dilution: {
      heading: "Zero Foam at Full Pressure",
      body: "At up to 1:100 dilution, one 35-litre pail of LF makes up to 3,500 litres of working bath that stays foam-free even at high jet pressure — with rust protection included in the same stage.",
      stats: [
        { count: 100, prefix: "1:", caption: "maximum dilution ratio" },
        { count: 3500, suffix: "L", caption: "bath from one 35L pail" },
        { count: 0, caption: "foam — even at full jet pressure" },
      ],
      barsTitle: "Working bath composition",
      bars: [
        {
          label: "POWER CLEAN LF concentrate",
          value: "1%",
          percent: 1,
          color: "green",
        },
        { label: "Water", value: "99%", percent: 99, color: "navy" },
      ],
      note: "The built-in rust preventive protects ferrous parts straight out of the washer.",
    },
    beforeAfterCaption:
      "Drag the slider to compare a part before and after one high-pressure spray cycle.",
        beforeAfter: {
      before: "/photos/ba-lf-before.webp",
      after: "/photos/ba-lf-after.webp",
      beforeAlt: "Engine components covered in baked-on grime before spray washing",
      afterAlt: "Gleaming engine components after a low-foam spray cycle",
    },
    gallery: SHARED_GALLERY,
    related: ["power-clean-xl", "power-clean-nf-14", "pc-rp-636"],
    cta: {
      heading: "Trial POWER CLEAN LF on Your Line",
      body: "Request a sample pail and a supervised trial in your spray washer.",
    },
  },
  {
    slug: "power-clean-sp",
    name: "POWER CLEAN SP",
    category: "Ferrous Metal Cleaning",
    tagline:
      "Ferrous metal cleaner for mild steel and cast iron, with multi-day rust protection.",
    cardBlurb:
      "Cleans mild steel and cast iron at 3:100 — and leaves multi-day rust protection on the part.",
    cardTags: ["Mild Steel · Cast Iron", "Rust Protection"],
    cardImage: "Rows of machined steel components with a protective rust-preventive finish",
    cardPhoto: "/photos/solution-sp.webp",
    about: [
      "POWER CLEAN SP is a ferrous metal cleaner formulated for mild steel and cast iron. It removes machining soils and coolant residues while laying down inter-operational rust protection in the same pass.",
      "At a 3:100 working dilution, cleaned parts stay flash-rust free for multiple days between processes and in storage — without a separate protection stage.",
    ],
    removes: [
      "Machining oils and coolant residues on mild steel",
      "Casting dust and shop soils on cast iron components",
      "Handling marks and fingerprints before inter-op storage",
      "Soils ahead of coating, plating, or welding",
    ],
    specs: [
      { label: "Application", value: "Spray · Soak · Immersion" },
      { label: "Metals", value: "Mild steel · Cast iron" },
      { label: "Dilution", value: "3:100" },
      { label: "Protection", value: "Multi-day rust protection" },
      { label: "Packaging", value: "35L · 50L · 200L · 1000L" },
      { label: "Properties", value: "Non-corrosive, water-based" },
    ],
    dilution: {
      heading: "Clean and Protect in One Pass",
      body: "At its 3:100 working dilution, one 35-litre pail of SP makes over 1,150 litres of bath — and every part leaves the wash with multi-day rust protection already on it.",
      stats: [
        { count: 3, suffix: ":100", caption: "working dilution" },
        { count: 1150, suffix: "L", caption: "bath from one 35L pail" },
        { count: 100, suffix: "%", caption: "water-based chemistry" },
      ],
      barsTitle: "Working bath composition",
      bars: [
        {
          label: "POWER CLEAN SP concentrate",
          value: "3%",
          percent: 3,
          color: "green",
        },
        { label: "Water", value: "97%", percent: 97, color: "navy" },
      ],
      note: "Inter-op protection is built into the wash — no separate rust-prevention dip needed.",
    },
    beforeAfterCaption:
      "Drag the slider to compare a cast iron part before and after a single wash cycle.",
        beforeAfter: {
      before: "/photos/ba-sp-before.webp",
      after: "/photos/ba-sp-after.webp",
      beforeAlt: "Rusted ring gear assembly before cleaning",
      afterAlt: "Clean machined steel ring with no flash rust",
    },
    gallery: SHARED_GALLERY,
    related: ["power-clean-xl", "pc-rp-636", "power-clean-lf"],
    cta: {
      heading: "Trial POWER CLEAN SP on Your Line",
      body: "Request a sample pail and a supervised trial on your ferrous parts.",
    },
  },
  {
    slug: "pc-s-342",
    name: "PC-S 342",
    category: "Solvent Replacement",
    tagline:
      "Drop-in TCE replacement — a high-flash solvent degreaser based on n-propyl bromide.",
    cardBlurb:
      "A drop-in replacement for trichloroethylene: solvent-grade degreasing with a high flash point and boiling point.",
    cardTags: ["TCE Replacement", "High Flash Point"],
    cardImage: "Engine cylinder head being cleaned by hand with a solvent degreaser",
    cardPhoto: "/photos/solution-342.webp",
    about: [
      "PC-S 342 is a solvent degreaser engineered as a drop-in replacement for trichloroethylene (TCE), using n-propyl bromide chemistry with a high flash point and boiling point. It slots into existing vapor and immersion degreasing equipment.",
      "Roovel Solutions has been replacing TCE, perchloroethylene, and other hazardous solvents in Indian plants since 2000 — PC-S 342 is the direct path off TCE where a full aqueous conversion is not yet possible.",
    ],
    removes: [
      "Heavy oils and greases in vapor degreasing systems",
      "Waxes and buffing compounds from precision components",
      "Residues on parts unsuited to aqueous immersion",
      "Soils in equipment originally specified for TCE",
    ],
    specs: [
      { label: "Application", value: "Vapor · Immersion degreasing" },
      { label: "Chemistry", value: "n-propyl bromide" },
      { label: "Replaces", value: "TCE · Perchloroethylene" },
      { label: "Flash point", value: "High" },
      { label: "Packaging", value: "35L · 50L · 200L" },
      { label: "Use", value: "As supplied — no dilution" },
    ],
    dilution: {
      heading: "A Direct Path Off Trichloroethylene",
      body: "PC-S 342 is used as supplied in existing degreasing equipment — no re-engineering, no dilution stage. It continues a solvent-replacement program Roovel has run in India since 2000.",
      stats: [
        { count: 2000, caption: "replacing TCE in India since" },
        { count: 100, suffix: "%", caption: "used as supplied — no dilution" },
        { count: 2, caption: "hazardous solvents it directly replaces" },
      ],
      barsTitle: "Working charge composition",
      bars: [
        {
          label: "PC-S 342 as supplied",
          value: "100%",
          percent: 100,
          color: "green",
        },
      ],
      note: "Drops into existing TCE equipment — high flash point and boiling point, safer handling.",
    },
    beforeAfterCaption:
      "Drag the slider to compare a part before and after one degreasing cycle.",
        beforeAfter: {
      before: "/photos/ba-342-before.webp",
      after: "/photos/ba-342-after.webp",
      beforeAlt: "Greasy gear drive coated in compound before solvent cleaning",
      afterAlt: "Polished gear teeth after solvent degreasing",
    },
    gallery: SHARED_GALLERY,
    related: ["power-clean-xl", "power-clean-lf", "power-clean-sp"],
    cta: {
      heading: "Replace TCE Without Replacing Your Equipment",
      body: "Request a sample and a supervised trial of PC-S 342 in your existing degreaser.",
    },
  },
  {
    slug: "pc-rp-636",
    name: "PC RP-636",
    category: "Rust Protection",
    tagline:
      "Oil-based rust preventive with 3–6 months of protection and a 10–15 minute touch-dry.",
    cardBlurb:
      "Long-term oil-based rust preventive: 3–6 months of protection, touch-dry in 10–15 minutes.",
    cardTags: ["Long-Term Protection", "Quick Touch-Dry"],
    cardImage: "Golden rust-preventive oil droplet splashing, showing the protective film",
    cardPhoto: "/photos/solution-rp636.webp",
    about: [
      "PC RP-636 is an oil-based rust preventive for long-term protection of ferrous parts in storage and transit. It lays down a thin, consistent film that holds off corrosion for three to six months.",
      "Touch-dry in 10–15 minutes, parts can be handled, packed, and dispatched quickly — no tacky film, no drips, no re-work at the receiving end.",
    ],
    removes: [
      "Flash rust risk on cleaned ferrous parts in storage",
      "Corrosion during monsoon-season warehousing",
      "White-glove re-work on parts arriving at customers",
      "The need for re-oiling between operations",
    ],
    specs: [
      { label: "Application", value: "Dip · Spray · Brush" },
      { label: "Base", value: "Oil-based" },
      { label: "Protection", value: "3–6 months" },
      { label: "Touch-dry", value: "10–15 min" },
      { label: "Packaging", value: "35L · 50L · 200L" },
      { label: "Use", value: "As supplied — thin film" },
    ],
    dilution: {
      heading: "Months of Protection, Minutes to Dry",
      body: "PC RP-636 is applied as supplied by dip, spray, or brush. A thin film gives three to six months of protection, and parts are touch-dry within 10–15 minutes — ready to pack and ship.",
      stats: [
        { count: 6, suffix: " mo", caption: "maximum protection window" },
        { count: 15, suffix: " min", caption: "touch-dry time" },
        { count: 100, suffix: "%", caption: "applied as supplied" },
      ],
      barsTitle: "Applied film",
      bars: [
        {
          label: "PC RP-636 as supplied",
          value: "100%",
          percent: 100,
          color: "green",
        },
      ],
      note: "Pairs with POWER CLEAN SP washes for a clean-then-protect line in two stages.",
    },
    beforeAfterCaption:
      "Drag the slider to compare a protected part against an untreated one after storage.",
        beforeAfter: {
      before: "/photos/before-soiled.webp",
      after: "/photos/after-clean.webp",
      beforeAlt: "Heavily rusted chain links left unprotected",
      afterAlt: "Clean protected steel chain links",
    },
    gallery: SHARED_GALLERY,
    related: ["power-clean-sp", "power-clean-xl", "power-clean-lf"],
    cta: {
      heading: "Protect Your Parts With PC RP-636",
      body: "Request a sample and a supervised protection trial on your stored parts.",
    },
  },
];

export function getSolution(slug: string): Solution | undefined {
  return solutions.find((s) => s.slug === slug);
}

// REAL — property tags from the live site
export const propertyTags = [
  "Biodegradable",
  "Non-Toxic",
  "Non-Corrosive",
  "Non-Flammable",
  "Cost-Effective",
  "Dilutable & Reusable",
  "Alkaline Aqueous-Based",
  "Zero VOC",
] as const;
