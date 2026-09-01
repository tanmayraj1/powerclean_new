/**
 * The full published Power Clean product catalogue.
 * REAL — every product, SKU code, and description below comes from the live
 * powerclean.in product list (products-list-all.aspx) and its category pages.
 *
 * Hierarchy: Category → Series → Product. Six flagship products also carry
 * rich detail content in `lib/solutions.ts`.
 */

export type CategoryKey = "aqueous" | "cooling" | "solvent" | "rust";

export const categories: {
  key: CategoryKey;
  label: string;
  short: string;
  blurb: string;
  /** per-category accent used across the hierarchy UI */
  accent: string;
  accentSoft: string;
  /** darker accent that passes AA for text on the soft background */
  accentText: string;
}[] = [
  {
    key: "aqueous",
    label: "Water-Based Cleaners & Degreasers",
    short: "Aqueous",
    blurb:
      "Eco-friendly aqueous alkaline and neutral chemistry — non-toxic, non-flammable, biodegradable concentrates that replace TCE, diesel, kerosene and caustics across parts washing, floors and surface care.",
    accent: "#00853f",
    accentSoft: "#e6f7ee",
    accentText: "#00602e",
  },
  {
    key: "cooling",
    label: "Cooling Tower Chemicals",
    short: "Cooling Tower",
    blurb:
      "Descalers and biocides that keep cooling towers, heat exchangers and water circuits clean — corrosion-inhibited and safe on copper and brass.",
    accent: "#0e7490",
    accentSoft: "#e0f2f7",
    accentText: "#0b5a70",
  },
  {
    key: "solvent",
    label: "Solvent Cleaners & Degreasers",
    short: "Solvent",
    blurb:
      "Solvent and citrus degreasers for jobs where aqueous immersion is not yet possible — including buffing-compound removal and adhesive clean-up.",
    accent: "#b45309",
    accentSoft: "#fbf0e0",
    accentText: "#8a3f06",
  },
  {
    key: "rust",
    label: "Rust Protection & Removal",
    short: "Rust Care",
    blurb:
      "Water-soluble rust preventives, long-term preventive oils, and acidic rust removers — protection from a few hours to many months.",
    accent: "#9a3412",
    accentSoft: "#f9ebe3",
    accentText: "#7c290e",
  },
];

export type SeriesDef = {
  key: string;
  category: CategoryKey;
  label: string;
  blurb: string;
};

export const series: SeriesDef[] = [
  {
    key: "xl",
    category: "aqueous",
    label: "XL Series",
    blurb: "Multi-metal and ferrous workhorse degreasers — the all-rounders.",
  },
  {
    key: "nf",
    category: "aqueous",
    label: "NF Series",
    blurb: "Non-ferrous and soft-metal cleaners for aluminium, brass and copper.",
  },
  {
    key: "lf",
    category: "aqueous",
    label: "LF Series",
    blurb: "Low-foam chemistry for high-jet spray, tunnel and conveyor washers.",
  },
  {
    key: "surface",
    category: "aqueous",
    label: "Brighteners & Surface Care",
    blurb: "Brighteners, copper/brass care, sealers and stainless finish.",
  },
  {
    key: "facility",
    category: "aqueous",
    label: "Facility & Maintenance",
    blurb: "Floors, engines, bins, glass, coils and everyday plant upkeep.",
  },
  {
    key: "process",
    category: "aqueous",
    label: "Pre-Treatment & Process",
    blurb: "Phosphating, acid inhibition and process support chemistry.",
  },
  {
    key: "cooling-core",
    category: "cooling",
    label: "Descalers & Biocides",
    blurb: "Scale removal and biological control for water circuits.",
  },
  {
    key: "solvent-core",
    category: "solvent",
    label: "Solvent Degreasers",
    blurb: "Room-temperature and vapour-system solvent cleaning.",
  },
  {
    key: "citrus",
    category: "solvent",
    label: "Citrus Range",
    blurb: "Citrus-terpene degreasers for carbon, gum and adhesives.",
  },
  {
    key: "rp-water",
    category: "rust",
    label: "Water-Soluble Preventives",
    blurb: "Inter-op protection from a few hours to several days.",
  },
  {
    key: "rp-oil",
    category: "rust",
    label: "Preventive Oils",
    blurb: "Thin-film oils for months of storage and transit protection.",
  },
  {
    key: "rr",
    category: "rust",
    label: "Rust Removers",
    blurb: "Mild acidic de-rusting for reclaim and restoration.",
  },
];

export type Spec = { label: string; value: string };

export type CatalogueProduct = {
  slug: string;
  name: string;
  /** SKU / code from the live powerclean.in product list */
  sku?: string;
  category: CategoryKey;
  seriesKey: string;
  tagline: string;
  description: string;
  specs: Spec[];
  applications: string[];
  tags: string[];
};

export const products: CatalogueProduct[] = [
  // ── XL Series ──────────────────────────────────────────────────────────
  {
    slug: "power-clean-xl",
    name: "POWER CLEAN XL",
    sku: "100",
    category: "aqueous",
    seriesKey: "xl",
    tagline: "Multi-metal cleaning and degreasing agent — the versatile all-rounder.",
    description:
      "POWER CLEAN XL is an all-purpose industrial cleaner/degreaser concentrate designed to replace hazardous substances such as trichloroethylene (TCE), perchloroethylene and caustic chemicals. It removes oil, grease, dirt and dust fast — in ultrasonic, spray, immersion or manual cleaning — with the same or better cleanliness and full safety for the worker, the equipment and the surroundings.",
    specs: [
      { label: "SKU", value: "100" },
      { label: "Application", value: "Ultrasonic · Spray · Soak · Manual" },
      { label: "Base", value: "Water-based alkaline" },
      { label: "Metals", value: "Multi-metal" },
    ],
    applications: [
      "Machined component degreasing",
      "Replacing TCE and caustic cleaning",
      "Ultrasonic and immersion systems",
    ],
    tags: ["Biodegradable", "Non-Toxic", "Non-Flammable", "Dilutable & Reusable"],
  },
  {
    slug: "power-clean-xl-plus",
    name: "POWER CLEAN XL+ (Plus)",
    sku: "111",
    category: "aqueous",
    seriesKey: "xl",
    tagline: "Ferrous cleaning and degreasing agent.",
    description:
      "POWER CLEAN XL+ concentrates the XL formula for ferrous work — mild steel and cast iron components with heavier machining soils, coolants and shop grime.",
    specs: [
      { label: "SKU", value: "111" },
      { label: "Metals", value: "Ferrous" },
      { label: "Base", value: "Water-based alkaline" },
    ],
    applications: [
      "Ferrous component degreasing",
      "Machining and coolant residue removal",
      "Immersion and spray systems",
    ],
    tags: ["Non-Flammable", "Cost-Effective", "Dilutable & Reusable"],
  },
  {
    slug: "power-clean-sp",
    name: "POWER CLEAN XL-77 / SP",
    sku: "804",
    category: "aqueous",
    seriesKey: "xl",
    tagline: "Cleaner/degreaser with excellent long-term rust protection built in.",
    description:
      "A special-purpose aqueous cleaner/degreaser with low foaming and additional corrosion protection. Parts leave the wash clean and protected — extended rust prevention without a separate protection stage.",
    specs: [
      { label: "SKU", value: "804" },
      { label: "Protection", value: "Long-term rust prevention" },
      { label: "Foam", value: "Low" },
      { label: "Metals", value: "Ferrous" },
    ],
    applications: [
      "Clean-and-protect in one stage",
      "Inter-operational storage",
      "Low-foam spray systems",
    ],
    tags: ["Rust Protection", "Low Foam", "Non-Corrosive"],
  },
  {
    slug: "power-clean-xl-16",
    name: "POWER CLEAN XL-16",
    sku: "116",
    category: "aqueous",
    seriesKey: "xl",
    tagline: "Buffing and lapping paste cleaner — low foam up to 8 bar pressure.",
    description:
      "POWER CLEAN XL-16 removes buffing and lapping pastes from finished components, staying low-foam at spray pressures up to 8 bar.",
    specs: [
      { label: "SKU", value: "116" },
      { label: "Removes", value: "Buffing · Lapping paste" },
      { label: "Foam", value: "Low, up to 8 bar" },
    ],
    applications: [
      "Post-buffing clean-up",
      "Lapping paste removal",
      "High-pressure spray washing",
    ],
    tags: ["Low Foam", "High-Pressure Safe"],
  },
  {
    slug: "power-clean-xl-32",
    name: "POWER CLEAN XL-32",
    sku: "144",
    category: "aqueous",
    seriesKey: "xl",
    tagline: "Hi-jet spray cleaner used before painting and coating — low foam.",
    description:
      "POWER CLEAN XL-32 is a low-foam hi-jet spray cleaner/degreaser used ahead of painting and coating, leaving surfaces residue-free for adhesion.",
    specs: [
      { label: "SKU", value: "144" },
      { label: "Used before", value: "Painting · Coating" },
      { label: "Foam", value: "Low" },
    ],
    applications: [
      "Pre-paint surface preparation",
      "Pre-coating degreasing",
      "Hi-jet spray systems",
    ],
    tags: ["Low Foam", "Pre-Treatment"],
  },

  // ── NF Series ──────────────────────────────────────────────────────────
  {
    slug: "power-clean-nf-14",
    name: "POWER CLEAN NF-14",
    sku: "714",
    category: "aqueous",
    seriesKey: "nf",
    tagline: "Non-ferrous cleaner for ultrasonic machines — aluminium, brass and copper.",
    description:
      "POWER CLEAN NF-14 is an aqueous concentrated alkaline non-ferrous cleaner/degreaser for ultrasonic cleaning machines. It removes oils, dirt, grease and dust from aluminium, brass, bronze, nickel and copper quickly without harming the metal — no white patches, stains, discolouration or white rust.",
    specs: [
      { label: "SKU", value: "714" },
      { label: "Application", value: "Ultrasonic" },
      { label: "Metals", value: "Al · Brass · Bronze · Ni · Cu" },
      { label: "Prevents", value: "White rust · Staining" },
    ],
    applications: [
      "Ultrasonic cleaning of soft metals",
      "Aluminium component cleaning",
      "Brass and copper part cleaning",
    ],
    tags: ["Non-Corrosive", "Non-Toxic", "Prevents White Rust"],
  },
  {
    slug: "power-clean-nf-12",
    name: "POWER CLEAN NF-12",
    sku: "712",
    category: "aqueous",
    seriesKey: "nf",
    tagline: "Non-ferrous cleaner for spray applications — extra copper and brass protection.",
    description:
      "POWER CLEAN NF-12 adapts the NF-14 chemistry for spray cleaning applications, with a slight variation that protects copper and brass even more effectively.",
    specs: [
      { label: "SKU", value: "712" },
      { label: "Application", value: "Spray" },
      { label: "Metals", value: "Aluminium · Brass · Copper" },
    ],
    applications: [
      "Spray cleaning of soft metals",
      "Copper and brass protection",
      "Non-ferrous production lines",
    ],
    tags: ["Non-Corrosive", "Spray Optimised"],
  },

  // ── LF Series ──────────────────────────────────────────────────────────
  {
    slug: "power-clean-lf",
    name: "POWER CLEAN LF",
    sku: "800",
    category: "aqueous",
    seriesKey: "lf",
    tagline: "Low-foam cleaner for tunnel and conveyor washing systems.",
    description:
      "POWER CLEAN LF is an advanced low-foam cleaner and degreaser designed to deliver exceptional results in tunnel and conveyor washing systems, and in high-jet spray machines where conventional chemistry foams out of control.",
    specs: [
      { label: "SKU", value: "800" },
      { label: "Application", value: "Tunnel · Conveyor · Hi-jet spray" },
      { label: "Foam", value: "Low / None" },
    ],
    applications: [
      "Tunnel and conveyor washers",
      "High-jet spray cleaning",
      "Automated washer lines",
    ],
    tags: ["Low Foam", "Non-Flammable", "Dilutable & Reusable"],
  },
  {
    slug: "power-clean-lf-45",
    name: "POWER CLEAN LF-45",
    sku: "845",
    category: "aqueous",
    seriesKey: "lf",
    tagline: "The LF formula at a milder pH — gentler on parts and operators.",
    description:
      "POWER CLEAN LF-45 delivers the same low-foam tunnel and spray performance as LF at a milder pH — a heavy-duty, non-emulsifying alkaline cleaner optimised with the TACT cleaning principle for aluminium and aluminium alloys (ADC10, ADC12, AlSi10MnMg and similar), removing cutting oil, coolant residue, light grease, dust and handling soil.",
    specs: [
      { label: "SKU", value: "845" },
      { label: "pH", value: "Milder alkaline" },
      { label: "Ideal for", value: "Al & Al alloys (ADC10/12)" },
      { label: "Application", value: "Spray / Flood washing" },
    ],
    applications: [
      "Aluminium die-cast cleaning",
      "Spray and flood washing",
      "Automotive and precision parts",
    ],
    tags: ["Low Foam", "Non-Emulsifying", "TACT Optimised"],
  },
  {
    slug: "power-clean-lf-43",
    name: "POWER CLEAN LF-43",
    sku: "848",
    category: "aqueous",
    seriesKey: "lf",
    tagline: "High-pH low-foam ferrous cleaner used in the mining industry.",
    description:
      "POWER CLEAN LF-43 is a high-pH, low-foam ferrous cleaner/degreaser used in the mining industry to clear dirt, dust, soot and heavy site soils.",
    specs: [
      { label: "SKU", value: "848" },
      { label: "pH", value: "High" },
      { label: "Industry", value: "Mining" },
      { label: "Foam", value: "Low" },
    ],
    applications: [
      "Mining equipment cleaning",
      "Dirt, dust and soot removal",
      "Heavy ferrous components",
    ],
    tags: ["Low Foam", "Heavy Duty"],
  },
  {
    slug: "power-clean-lf-59",
    name: "POWER CLEAN LF-59",
    sku: "843",
    category: "aqueous",
    seriesKey: "lf",
    tagline: "Aluminium-alloy cleaner for ADC10/12 and 6000-series — no etching or dulling.",
    description:
      "POWER CLEAN LF-59 is a high-performance, low-foam alkaline cleaner for ultrasonic, spray and soak machines. It removes coolant, machining oil and cutting oil from aluminium alloys such as ADC10, ADC12 and 6000 series — powerful degreasing without etching, staining or dulling the surface.",
    specs: [
      { label: "SKU", value: "843" },
      { label: "Alloys", value: "ADC10 · ADC12 · 6000 series" },
      { label: "Application", value: "Ultrasonic · Spray · Soak" },
      { label: "Surface", value: "No etching or dulling" },
    ],
    applications: [
      "Aluminium die-casting cleaning",
      "Coolant and cutting-oil removal",
      "Multi-metal component lines",
    ],
    tags: ["Low Foam", "Aluminium Safe", "Non-Etching"],
  },

  // ── Brighteners & Surface Care ─────────────────────────────────────────
  {
    slug: "power-clean-de-33",
    name: "POWER CLEAN DE-33",
    sku: "910",
    category: "aqueous",
    seriesKey: "surface",
    tagline: "Copper and brass cleaner.",
    description:
      "POWER CLEAN DE-33 cleans copper and brass components, lifting oxidation and handling soils to restore surface condition before assembly or finishing.",
    specs: [
      { label: "SKU", value: "910" },
      { label: "Metals", value: "Copper · Brass" },
    ],
    applications: [
      "Copper component cleaning",
      "Brass part restoration",
      "Pre-finishing preparation",
    ],
    tags: ["Non-Flammable", "Cost-Effective"],
  },
  {
    slug: "power-clean-de-34",
    name: "POWER CLEAN DE-34",
    sku: "911",
    category: "aqueous",
    seriesKey: "surface",
    tagline: "Heavy-duty copper and brass cleaner and brightener.",
    description:
      "POWER CLEAN DE-34 is the heavy-duty grade for copper and brass — an acidic cleaner and brightener that removes stubborn oxidation and tarnish, restoring brightness ahead of inspection or plating. Follow with CU-20 sealer for passivation.",
    specs: [
      { label: "SKU", value: "911" },
      { label: "Type", value: "Acidic cleaner / brightener" },
      { label: "Metals", value: "Copper · Brass" },
      { label: "Pairs with", value: "CU-20 sealer" },
    ],
    applications: [
      "Heavy oxidation and tarnish removal",
      "Copper/brass brightening",
      "Pre-plating preparation",
    ],
    tags: ["Heavy Duty", "Brightener"],
  },
  {
    slug: "power-clean-cu-20",
    name: "POWER CLEAN CU-20",
    sku: "923",
    category: "aqueous",
    seriesKey: "surface",
    tagline: "Copper sealer for passivation after DE-34 cleaning.",
    description:
      "POWER CLEAN CU-20 is a copper sealer used for passivation after cleaning with POWER CLEAN DE-34, locking in the restored finish and holding off re-oxidation.",
    specs: [
      { label: "SKU", value: "923" },
      { label: "Type", value: "Sealer / passivation" },
      { label: "Use after", value: "POWER CLEAN DE-34" },
    ],
    applications: [
      "Copper passivation",
      "Post-brightening sealing",
      "Finish preservation",
    ],
    tags: ["Passivation", "Finish Protection"],
  },
  {
    slug: "power-clean-alb",
    name: "POWER CLEAN ALB",
    sku: "117",
    category: "aqueous",
    seriesKey: "surface",
    tagline: "Versatile aluminium brightener with excellent wetting properties.",
    description:
      "POWER CLEAN ALB is a concentrated aluminium brightener with excellent wetting properties, usable in ultrasonic and spray cleaning up to 6 bar. It works especially well with ADC12 aluminium, leaving components clean with a bright shine.",
    specs: [
      { label: "SKU", value: "117" },
      { label: "Application", value: "Ultrasonic · Spray (to 6 bar)" },
      { label: "Best on", value: "ADC12 aluminium" },
    ],
    applications: [
      "Aluminium brightening",
      "Die-cast finishing",
      "Ultrasonic brightening baths",
    ],
    tags: ["Brightener", "Concentrated"],
  },
  {
    slug: "power-clean-alb-54",
    name: "POWER CLEAN ALB-54",
    sku: "663",
    category: "aqueous",
    seriesKey: "surface",
    tagline: "Aluminium brightener usable manually at very low concentration.",
    description:
      "POWER CLEAN ALB-54 brightens aluminium even in manual use at very low concentration. It works well with ADC10, ADC12 and 3000/5000/6000-series alloys, and in some cases removes mild white rust from ADC aluminium components.",
    specs: [
      { label: "SKU", value: "663" },
      { label: "Use", value: "Manual · Machine" },
      { label: "Alloys", value: "ADC10/12 · 3000/5000/6000" },
    ],
    applications: [
      "Manual aluminium brightening",
      "Mild white-rust removal",
      "Low-concentration finishing",
    ],
    tags: ["Brightener", "Low Concentration"],
  },
  {
    slug: "power-clean-de-37",
    name: "POWER CLEAN DE-37",
    sku: "912",
    category: "aqueous",
    seriesKey: "surface",
    tagline: "Descaler and washroom cleaner — cuts through stubborn scale.",
    description:
      "POWER CLEAN DE-37 cuts through stubborn scale with ease, delivering clean, bright surfaces in washrooms, tiles and scale-prone plant areas.",
    specs: [
      { label: "SKU", value: "912" },
      { label: "Removes", value: "Scale · Mineral deposits" },
    ],
    applications: [
      "Washroom and tile descaling",
      "Scale-prone surfaces",
      "Facility upkeep",
    ],
    tags: ["Descaler", "Cost-Effective"],
  },
  {
    slug: "power-clean-ss",
    name: "POWER CLEAN SS",
    category: "aqueous",
    seriesKey: "surface",
    tagline: "Stainless steel cleaner for 304 and 316 grades — glossy finish.",
    description:
      "POWER CLEAN SS cleans 304 and 316 stainless steel, removing handling soils and restoring a glossy finish on fabrication, fittings and process equipment.",
    specs: [
      { label: "Metals", value: "Stainless 304 · 316" },
      { label: "Dilution", value: "1:20" },
      { label: "Finish", value: "Glossy" },
    ],
    applications: [
      "Stainless fabrication",
      "Process equipment",
      "Finish restoration",
    ],
    tags: ["Non-Corrosive", "Cost-Effective"],
  },

  // ── Facility & Maintenance ─────────────────────────────────────────────
  {
    slug: "power-clean-hd",
    name: "POWER CLEAN HD",
    sku: "122",
    category: "aqueous",
    seriesKey: "facility",
    tagline: "Heavy-duty degreaser for the toughest jobs and cleanest finishes.",
    description:
      "POWER CLEAN HD is a high-alkaline heavy-duty degreaser built for the toughest jobs — engines, chassis and heavily soiled equipment — while finishing clean and residue-free.",
    specs: [
      { label: "SKU", value: "122" },
      { label: "Alkalinity", value: "High" },
      { label: "Application", value: "Engine · Auto maintenance" },
    ],
    applications: [
      "Engine and chassis degreasing",
      "Workshop maintenance",
      "Heavy grease removal",
    ],
    tags: ["Heavy Duty", "Non-Flammable"],
  },
  {
    slug: "power-clean-fc235",
    name: "POWER CLEAN FC-235",
    sku: "235",
    category: "aqueous",
    seriesKey: "facility",
    tagline: "Industrial-grade floor cleaner and degreaser.",
    description:
      "POWER CLEAN FC-235 cleans tough stains, oil and grease from industrial floors, shop floors, machine shops and service-centre floors — safer footing and easier upkeep.",
    specs: [
      { label: "SKU", value: "235" },
      { label: "Application", value: "Industrial floors" },
      { label: "Removes", value: "Oil · Grease · Stains" },
    ],
    applications: [
      "Plant and workshop floors",
      "Machine-shop cleaning",
      "Service centres",
    ],
    tags: ["Biodegradable", "Cost-Effective"],
  },
  {
    slug: "power-clean-cr21",
    name: "POWER CLEAN CR21",
    sku: "502",
    category: "aqueous",
    seriesKey: "facility",
    tagline: "Engine parts cleaner, degreaser and carbon-deposit remover.",
    description:
      "POWER CLEAN CR21 cleans carbon deposits from engine components quickly and effectively — pistons, heads and combustion-area parts return bright from the bath.",
    specs: [
      { label: "SKU", value: "502" },
      { label: "Removes", value: "Carbon deposits" },
      { label: "Application", value: "Engine · Piston cleaning" },
    ],
    applications: [
      "Piston and head cleaning",
      "Carbonised residue removal",
      "Engine overhaul shops",
    ],
    tags: ["Carbon Remover", "Non-Flammable"],
  },
  {
    slug: "power-clean-gc",
    name: "POWER CLEAN GC",
    sku: "243",
    category: "aqueous",
    seriesKey: "facility",
    tagline: "Concentrated glass cleaner — dilutes to 4 litres of ready-to-use product.",
    description:
      "POWER CLEAN GC is a glass cleaner concentrate that dilutes to make up to 4 litres of ready-to-use product, clearing dust, dirt and spots from glass without streaks.",
    specs: [
      { label: "SKU", value: "243" },
      { label: "Type", value: "Concentrate" },
      { label: "Finish", value: "Streak-free" },
    ],
    applications: [
      "Plant and office glazing",
      "Vehicle glass",
      "Panels and displays",
    ],
    tags: ["Concentrate", "Streak-Free"],
  },
  {
    slug: "power-clean-mp-26",
    name: "POWER CLEAN MP-26",
    sku: "156",
    category: "aqueous",
    seriesKey: "facility",
    tagline: "Multi-purpose cleaner for general plant use.",
    description:
      "POWER CLEAN MP-26 is a multi-purpose cleaner for everyday plant, equipment and surface cleaning where one flexible product beats a shelf of specialised ones.",
    specs: [
      { label: "SKU", value: "156" },
      { label: "Type", value: "Multi-purpose" },
    ],
    applications: [
      "General plant cleaning",
      "Equipment wipe-downs",
      "Everyday maintenance",
    ],
    tags: ["Multi-Purpose", "Cost-Effective"],
  },
  {
    slug: "power-clean-bw-77",
    name: "POWER CLEAN BW-77",
    sku: "177",
    category: "aqueous",
    seriesKey: "facility",
    tagline: "Bin and tray washing agent for spray cleaning applications.",
    description:
      "POWER CLEAN BW-77 clears accumulated oils and handling soils from returnable bins, trays and containers in automated spray bin-washing systems.",
    specs: [
      { label: "SKU", value: "177" },
      { label: "Application", value: "Spray bin-washing" },
    ],
    applications: [
      "Automated bin-wash systems",
      "Returnable tray cleaning",
      "Material-handling containers",
    ],
    tags: ["Biodegradable", "Dilutable & Reusable"],
  },
  {
    slug: "power-clean-bw-30",
    name: "POWER CLEAN BW-30",
    sku: "132",
    category: "aqueous",
    seriesKey: "facility",
    tagline: "Bin and tray washing agent for manual cleaning.",
    description:
      "POWER CLEAN BW-30 brings the bin-washing chemistry to manual cleaning — the same soil removal where no automated washer is available.",
    specs: [
      { label: "SKU", value: "132" },
      { label: "Application", value: "Manual bin cleaning" },
    ],
    applications: [
      "Manual bin and tray washing",
      "Small-batch container cleaning",
      "Line-side cleaning stations",
    ],
    tags: ["Manual Use", "Cost-Effective"],
  },
  {
    slug: "power-clean-ar",
    name: "POWER CLEAN AR",
    sku: "128",
    category: "aqueous",
    seriesKey: "facility",
    tagline: "Adhesive remover for gum, tar and label residue.",
    description:
      "POWER CLEAN AR lifts adhesive, gum, tar and sticky label residues from equipment, floors and finished parts without aggressive scraping.",
    specs: [
      { label: "SKU", value: "128" },
      { label: "Removes", value: "Adhesive · Gum · Tar" },
    ],
    applications: [
      "Label residue removal",
      "Gum and tar clean-up",
      "Equipment spot-cleaning",
    ],
    tags: ["Non-Flammable", "Non-Toxic"],
  },
  {
    slug: "power-clean-co",
    name: "POWER CLEAN CO",
    sku: "137",
    category: "aqueous",
    seriesKey: "facility",
    tagline: "Heavy-duty coil cleaner for HVAC, AHU and FCU coils.",
    description:
      "POWER CLEAN CO dissolves oily films, dust and heat-baked deposits while remaining safe on common coil materials such as aluminium and copper. It rinses clean without sticky residues or excessive foam, maintaining heat-transfer efficiency and airflow, with corrosion protection to minimise post-cleaning oxidation.",
    specs: [
      { label: "SKU", value: "137" },
      { label: "Application", value: "HVAC · AHU · FCU coils" },
      { label: "Safe on", value: "Aluminium · Copper" },
      { label: "Method", value: "Spray or soak" },
    ],
    applications: [
      "AHU coil cleaning",
      "HVAC maintenance",
      "Heat-exchanger fins",
    ],
    tags: ["Coil Safe", "Corrosion Protected"],
  },
  {
    slug: "power-clean-d131",
    name: "POWER CLEAN D131",
    sku: "200",
    category: "aqueous",
    seriesKey: "facility",
    tagline: "Defoamer / anti-foaming agent for wash systems.",
    description:
      "POWER CLEAN D131 is a defoamer that knocks down foam in wash baths and spray systems, keeping pumps primed and cleaning performance stable.",
    specs: [
      { label: "SKU", value: "200" },
      { label: "Type", value: "Defoamer" },
    ],
    applications: [
      "Foam control in wash baths",
      "Spray system stability",
      "Process troubleshooting",
    ],
    tags: ["Process Support"],
  },

  // ── Pre-Treatment & Process ────────────────────────────────────────────
  {
    slug: "power-clean-sip",
    name: "POWER CLEAN SIP",
    sku: "662",
    category: "aqueous",
    seriesKey: "process",
    tagline: "3-in-1 iron phosphating chemical — cleans, de-rusts and phosphates.",
    description:
      "POWER CLEAN SIP is a 3-in-1 iron phosphating chemical that cleans, de-rusts and phosphates in one step, collapsing three pre-treatment stages into one before painting or powder coating.",
    specs: [
      { label: "SKU", value: "662" },
      { label: "Steps", value: "Clean · De-rust · Phosphate" },
      { label: "Used before", value: "Painting · Powder coating" },
    ],
    applications: [
      "Pre-paint phosphating",
      "Powder-coating pre-treatment",
      "Single-stage line conversion",
    ],
    tags: ["3-in-1", "Process-Simplifying"],
  },
  {
    slug: "power-clean-hi32",
    name: "POWER CLEAN HI32",
    category: "aqueous",
    seriesKey: "process",
    tagline: "HCL acid inhibitor — prevents hydrogen embrittlement in plating lines.",
    description:
      "POWER CLEAN HI32 is an acid inhibitor for hydrochloric acid systems in plating and coating lines. It suppresses acid attack on base metal and prevents hydrogen embrittlement during pickling and de-rusting.",
    specs: [
      { label: "Type", value: "HCL acid inhibitor" },
      { label: "Prevents", value: "Hydrogen embrittlement" },
      { label: "Used in", value: "Plating · Coating lines" },
    ],
    applications: [
      "Acid pickling baths",
      "Plating pre-treatment",
      "Base-metal protection",
    ],
    tags: ["Inhibitor", "Process Support"],
  },

  // ── Cooling Tower ──────────────────────────────────────────────────────
  {
    slug: "power-clean-de46",
    name: "POWER CLEAN DE-46",
    sku: "503",
    category: "cooling",
    seriesKey: "cooling-core",
    tagline: "Cooling tower descaler and rust remover — safe on copper and brass.",
    description:
      "POWER CLEAN DE-46 is a versatile, corrosion-inhibited descaler and rust remover for cooling towers, heat exchangers and process circuits. It clears scale without attacking the base metal — safe on copper and brass.",
    specs: [
      { label: "SKU", value: "503" },
      { label: "Type", value: "Descaler · Rust remover" },
      { label: "Safe on", value: "Copper · Brass" },
      { label: "Inhibited", value: "Yes" },
    ],
    applications: [
      "Cooling tower descaling",
      "Heat-exchanger cleaning",
      "Circuit scale removal",
    ],
    tags: ["Non-Corrosive", "Inhibited"],
  },
  {
    slug: "power-clean-sa17",
    name: "POWER CLEAN SA-17",
    sku: "915",
    category: "cooling",
    seriesKey: "cooling-core",
    tagline: "Low-dosage biocide — prevents bacterial growth and odour.",
    description:
      "POWER CLEAN SA-17 is a low-dosage biocide for cooling water systems, controlling bacterial growth and the odour that comes with it between cleans.",
    specs: [
      { label: "SKU", value: "915" },
      { label: "Type", value: "Biocide" },
      { label: "Dosage", value: "Low" },
    ],
    applications: [
      "Cooling water treatment",
      "Odour control",
      "Bacterial prevention",
    ],
    tags: ["Low-Dosage", "Water Treatment"],
  },

  // ── Solvent ────────────────────────────────────────────────────────────
  {
    slug: "pc-s-312",
    name: "PC-S 312",
    sku: "312",
    category: "solvent",
    seriesKey: "solvent-core",
    tagline: "Adhesive remover and buffing-compound cleaner — room-temperature solvent.",
    description:
      "PC-S 312 is a room-temperature solvent degreaser for adhesive removal and buffing-compound clean-up — for parts and assemblies unsuited to heated aqueous immersion.",
    specs: [
      { label: "SKU", value: "312" },
      { label: "Temperature", value: "Room temperature" },
      { label: "Removes", value: "Adhesive · Buffing compound" },
    ],
    applications: [
      "Adhesive removal",
      "Buffing-compound clean-up",
      "No-heat degreasing",
    ],
    tags: ["No Heating Required"],
  },
  {
    slug: "pc-s-342",
    name: "PC-S 342",
    sku: "342",
    category: "solvent",
    seriesKey: "solvent-core",
    tagline: "Solvent degreaser and buffing-compound cleaner — drop-in TCE replacement.",
    description:
      "PC-S 342 is a solvent degreaser and buffing-compound cleaner engineered as a drop-in replacement for trichloroethylene, using n-propyl bromide chemistry with a high flash point and boiling point. It slots into existing vapour and immersion degreasing equipment — part of a solvent-replacement program Roovel has run in India since 2000.",
    specs: [
      { label: "SKU", value: "342" },
      { label: "Chemistry", value: "n-propyl bromide" },
      { label: "Replaces", value: "TCE · Perchloroethylene" },
      { label: "Flash point", value: "High" },
    ],
    applications: [
      "Vapour degreasing systems",
      "Direct TCE replacement",
      "Precision components",
    ],
    tags: ["TCE Replacement", "High Flash Point"],
  },
  {
    slug: "power-clean-cd-9",
    name: "POWER CLEAN CD-9",
    sku: "152",
    category: "solvent",
    seriesKey: "citrus",
    tagline: "Citrus degreaser for automotive, carbon and gum removal.",
    description:
      "POWER CLEAN CD-9 is a citrus-based degreaser used across automotive maintenance for carbon and gum removal, combining citrus-terpene solvency with easy handling.",
    specs: [
      { label: "SKU", value: "152" },
      { label: "Type", value: "Citrus degreaser" },
      { label: "Removes", value: "Carbon · Gum · Grease" },
    ],
    applications: [
      "Automotive degreasing",
      "Carbon and gum removal",
      "Maintenance cleaning",
    ],
    tags: ["Citrus", "Biodegradable"],
  },
  {
    slug: "power-clean-cd-10",
    name: "POWER CLEAN CD-10",
    sku: "163",
    category: "solvent",
    seriesKey: "citrus",
    tagline: "Citrus solvent cleaner.",
    description:
      "POWER CLEAN CD-10 is a citrus solvent cleaner for jobs that need stronger solvency than an aqueous product with the easier handling of a citrus base.",
    specs: [
      { label: "SKU", value: "163" },
      { label: "Type", value: "Citrus solvent" },
    ],
    applications: [
      "Solvent-grade cleaning",
      "Sticky residue removal",
      "Maintenance work",
    ],
    tags: ["Citrus", "Solvent Grade"],
  },

  // ── Rust Protection & Removal ──────────────────────────────────────────
  {
    slug: "pc-rp-14",
    name: "PC Rust Preventive 14",
    sku: "614",
    category: "rust",
    seriesKey: "rp-water",
    tagline: "Water-soluble rust preventive — protection for a few hours.",
    description:
      "PC Rust Preventive 14 is a water-soluble preventive giving rust protection for a few hours — ideal between operations on a moving line. Mixed at 3–5% with DM water.",
    specs: [
      { label: "SKU", value: "614" },
      { label: "Base", value: "Water-soluble" },
      { label: "Protection", value: "A few hours" },
      { label: "Dilution", value: "3–5% with DM water" },
    ],
    applications: [
      "Inter-operational protection",
      "Post-wash rinse dosing",
      "In-line moving parts",
    ],
    tags: ["Water-Based", "Short-Term"],
  },
  {
    slug: "pc-rp-16",
    name: "PC Rust Preventive 16",
    sku: "616",
    category: "rust",
    seriesKey: "rp-water",
    tagline: "Water-soluble rust preventive — extended hours to days.",
    description:
      "PC Rust Preventive 16 extends water-soluble protection from hours to days — for parts waiting between shifts or short storage before the next operation.",
    specs: [
      { label: "SKU", value: "616" },
      { label: "Base", value: "Water-soluble" },
      { label: "Protection", value: "Extended hours to days" },
    ],
    applications: [
      "Between-shift protection",
      "Short-term storage",
      "Staged production flows",
    ],
    tags: ["Water-Based", "Medium-Term"],
  },
  {
    slug: "pc-rp-35",
    name: "PC Rust Preventive 35",
    sku: "404",
    category: "rust",
    seriesKey: "rp-water",
    tagline: "Highly concentrated water-soluble preventive for flash-rust-prone metals.",
    description:
      "PC Rust Preventive 35 is a highly concentrated water-soluble rust preventive, very effective on mild steel, carbon steel and other metals prone to flash rust.",
    specs: [
      { label: "SKU", value: "404" },
      { label: "Base", value: "Water-soluble, concentrated" },
      { label: "Best on", value: "Mild & carbon steel" },
    ],
    applications: [
      "Flash-rust-prone metals",
      "Concentrated dosing programs",
      "High-volume protection",
    ],
    tags: ["Water-Based", "Concentrated"],
  },
  {
    slug: "pc-rp-636",
    name: "PC Rust Preventive Oil 636",
    sku: "636",
    category: "rust",
    seriesKey: "rp-oil",
    tagline: "Oil-based preventive — long-term protection, touch-dry in 10–15 minutes.",
    description:
      "PC Rust Preventive Oil 636 gives long-term protection to ferrous parts in storage and transit — three to six months from a thin, consistent film that is touch-dry within 10–15 minutes, so parts can be packed and dispatched quickly.",
    specs: [
      { label: "SKU", value: "636" },
      { label: "Base", value: "Oil" },
      { label: "Protection", value: "3–6 months" },
      { label: "Touch-dry", value: "10–15 min" },
    ],
    applications: [
      "Long-term storage",
      "Export and transit packing",
      "Monsoon warehousing",
    ],
    tags: ["Long-Term", "Quick Touch-Dry"],
  },
  {
    slug: "pc-rr-27",
    name: "PC Rust Remover 27",
    sku: "627",
    category: "rust",
    seriesKey: "rr",
    tagline: "Acidic rust remover — dip, spray or brush, then wipe the rust off.",
    description:
      "PC Rust Remover 27 is an easy-to-use acidic rust remover: dip or spray, then wipe or brush the rust off components fast. Works manually or in ultrasonic systems.",
    specs: [
      { label: "SKU", value: "627" },
      { label: "Type", value: "Acidic rust remover" },
      { label: "Use", value: "Dip · Spray · Manual · Ultrasonic" },
    ],
    applications: [
      "Component de-rusting",
      "Ultrasonic rust removal",
      "Reclaim and restoration",
    ],
    tags: ["Mild Acidic", "Fast Acting"],
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function productsByCategory(key: CategoryKey) {
  return products.filter((p) => p.category === key);
}

export function productsBySeries(key: string) {
  return products.filter((p) => p.seriesKey === key);
}

export function seriesByCategory(key: CategoryKey) {
  return series.filter((s) => s.category === key);
}

export function categoryOf(key: CategoryKey) {
  return categories.find((c) => c.key === key)!;
}

export function seriesOf(key: string) {
  return series.find((s) => s.key === key)!;
}

/* ── URL helpers ────────────────────────────────────────────────────────
 * Single source of truth for product and category URLs. The hub moved from
 * /catalogue to /products to match the client's architecture diagram, and 58
 * hard-coded strings across 20 files had to move with it — routing through
 * these two functions means the next change is one edit, not another sweep.
 * next.config.ts 308-redirects every old /catalogue URL here.
 * ───────────────────────────────────────────────────────────────────────── */

/**
 * Category URL slugs follow the client's diagram, which names the rust family
 * "rust-preventive" while our data key is "rust".
 */
export const CATEGORY_SLUG: Record<CategoryKey, string> = {
  aqueous: "aqueous",
  cooling: "cooling",
  solvent: "solvent",
  rust: "rust-preventive",
};

const SLUG_TO_CATEGORY = Object.fromEntries(
  Object.entries(CATEGORY_SLUG).map(([k, v]) => [v, k as CategoryKey])
) as Record<string, CategoryKey>;

export const PRODUCTS_ROOT = "/products";

export const categoryHref = (key: CategoryKey) =>
  `${PRODUCTS_ROOT}/${CATEGORY_SLUG[key]}`;

export const productHref = (slugOrProduct: string | CatalogueProduct) =>
  `${PRODUCTS_ROOT}/${
    typeof slugOrProduct === "string" ? slugOrProduct : slugOrProduct.slug
  }`;

/** Resolve a /products/[slug] segment to a category, if it is one. */
export function categoryBySlug(slug: string): CategoryKey | undefined {
  return SLUG_TO_CATEGORY[slug];
}

/**
 * Category hubs and product pages share the /products/[slug] segment, so a
 * collision would silently shadow one with the other. Fail the build instead.
 */
const collisions = products
  .map((p) => p.slug)
  .filter((s) => s in SLUG_TO_CATEGORY);
if (collisions.length) {
  throw new Error(
    `Product slug collides with a category slug under /products: ${collisions.join(", ")}`
  );
}
