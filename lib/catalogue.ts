/**
 * The full published Power Clean product catalogue (REAL — every product,
 * dilution, base and property below comes from powerclean.in).
 *
 * Six of these also carry rich detail content in `lib/solutions.ts` (dilution
 * graphic, before/after, deploy timeline, gallery); the rest render the
 * standard product-detail layout from the data here.
 */

export type CategoryKey = "aqueous" | "cooling" | "solvent" | "rust";

export const categories: {
  key: CategoryKey;
  label: string;
  short: string;
  blurb: string;
}[] = [
  {
    key: "aqueous",
    label: "Aqueous Cleaners & Degreasers",
    short: "Aqueous",
    blurb:
      "Water-based active-colloid chemistry that replaces petroleum distillates and hazardous solvents across parts washing, floors and surface prep.",
  },
  {
    key: "cooling",
    label: "Cooling Tower & Heat Exchanger",
    short: "Cooling Tower",
    blurb:
      "Inhibited descalers and biocides that keep cooling circuits and heat exchangers clean without attacking base metal.",
  },
  {
    key: "solvent",
    label: "Solvent Cleaners & Degreasers",
    short: "Solvent",
    blurb:
      "Where an aqueous conversion is not yet possible — including a direct drop-in replacement for trichloroethylene.",
  },
  {
    key: "rust",
    label: "Rust Protection",
    short: "Rust Protection",
    blurb:
      "Short- and long-term rust preventives plus rust removal, for parts in process, storage and transit.",
  },
];

export type Spec = { label: string; value: string };

export type CatalogueProduct = {
  slug: string;
  name: string;
  category: CategoryKey;
  tagline: string;
  description: string;
  specs: Spec[];
  applications: string[];
  tags: string[];
};

export const products: CatalogueProduct[] = [
  // ── Aqueous cleaners & degreasers ──────────────────────────────────────
  {
    slug: "power-clean-xl",
    name: "POWER CLEAN XL",
    category: "aqueous",
    tagline:
      "All-round heavy-duty alkaline degreaser for ultrasonic, spray and soak systems.",
    description:
      "An all-round heavy-duty alkaline degreaser built on water-based chemistry. Rust-inhibited and dilutable up to 1:100, it works across ultrasonic, spray and soak systems, replacing petroleum distillates and hazardous solvents on most machining and assembly lines.",
    specs: [
      { label: "Application", value: "Ultrasonic · Spray · Soak" },
      { label: "Base", value: "Water-based alkaline" },
      { label: "Dilution", value: "Up to 1:100" },
      { label: "Rust inhibited", value: "Yes" },
    ],
    applications: [
      "Machined component degreasing",
      "Ultrasonic and immersion cleaning",
      "Pre-treatment before coating or plating",
    ],
    tags: ["Biodegradable", "Non-Toxic", "Zero VOC", "Dilutable & Reusable"],
  },
  {
    slug: "power-clean-nf-14",
    name: "POWER CLEAN NF-14",
    category: "aqueous",
    tagline:
      "Neutral-pH non-ferrous cleaner for aluminium, brass and copper — rinse-free.",
    description:
      "A non-ferrous metal cleaner formulated at neutral pH for aluminium, brass and copper. Dilutable at 3:100 and rinse-free in most applications, it prevents white rust and lifts machining soils without etching or staining soft substrates.",
    specs: [
      { label: "Metals", value: "Aluminium · Brass · Copper" },
      { label: "pH", value: "Neutral" },
      { label: "Dilution", value: "3:100" },
      { label: "Rinse-free", value: "Yes" },
    ],
    applications: [
      "Aluminium component cleaning",
      "Brass and copper part cleaning",
      "White-rust prevention on non-ferrous parts",
    ],
    tags: ["Non-Corrosive", "Non-Toxic", "Rinse-Free", "Biodegradable"],
  },
  {
    slug: "power-clean-de-34",
    name: "POWER CLEAN DE-34",
    category: "aqueous",
    tagline: "Acidic copper and brass cleaner and brightener.",
    description:
      "An acidic cleaner and brightener for copper and brass that removes oxidation and tarnish, restoring surface finish ahead of assembly, inspection or plating.",
    specs: [
      { label: "Type", value: "Acidic cleaner / brightener" },
      { label: "Metals", value: "Copper · Brass" },
      { label: "Removes", value: "Oxidation · Tarnish" },
    ],
    applications: [
      "Copper and brass brightening",
      "Oxidation and tarnish removal",
      "Surface prep before plating",
    ],
    tags: ["Non-Flammable", "Cost-Effective"],
  },
  {
    slug: "power-clean-sp",
    name: "POWER CLEAN SP",
    category: "aqueous",
    tagline:
      "Ferrous metal cleaner for mild steel and cast iron, with multi-day rust protection.",
    description:
      "A ferrous metal cleaner for mild steel and cast iron. At a 3:100 working dilution it removes machining soils and leaves multi-day rust protection on the part, so components stay flash-rust free between operations and in storage.",
    specs: [
      { label: "Metals", value: "Mild steel · Cast iron" },
      { label: "Dilution", value: "3:100" },
      { label: "Protection", value: "Multi-day rust protection" },
      { label: "Base", value: "Water-based" },
    ],
    applications: [
      "Mild steel and cast iron cleaning",
      "Inter-operational rust protection",
      "Pre-coating and pre-welding cleaning",
    ],
    tags: ["Non-Corrosive", "Biodegradable", "Cost-Effective"],
  },
  {
    slug: "power-clean-lf",
    name: "POWER CLEAN LF",
    category: "aqueous",
    tagline:
      "No-foam cleaner-degreaser for high-jet spray systems, with rust preventive built in.",
    description:
      "A no-foam cleaner and degreaser engineered for high-jet spray washers, where conventional chemistry foams out of control. Dilutable up to 1:100 with a rust preventive included, it cleans and protects in a single stage.",
    specs: [
      { label: "Application", value: "High-jet spray systems" },
      { label: "Foam", value: "None" },
      { label: "Dilution", value: "Up to 1:100" },
      { label: "Rust preventive", value: "Included" },
    ],
    applications: [
      "High-pressure spray washing",
      "Automated washer lines",
      "Clean-and-protect in one stage",
    ],
    tags: ["Non-Flammable", "Dilutable & Reusable", "Zero VOC"],
  },
  {
    slug: "power-clean-fc235",
    name: "POWER CLEAN FC235",
    category: "aqueous",
    tagline: "Industrial floor cleaner and degreaser.",
    description:
      "An industrial floor cleaner and degreaser for plant floors, workshops and shop-floor walkways. Dilutable at 3:100, it lifts oil and grease build-up that makes factory floors slippery and hard to maintain.",
    specs: [
      { label: "Application", value: "Industrial floors" },
      { label: "Dilution", value: "3:100" },
      { label: "Base", value: "Water-based" },
    ],
    applications: [
      "Plant and workshop floor cleaning",
      "Oil and grease removal from walkways",
      "Routine housekeeping programs",
    ],
    tags: ["Biodegradable", "Non-Toxic", "Cost-Effective"],
  },
  {
    slug: "power-clean-hd",
    name: "POWER CLEAN HD",
    category: "aqueous",
    tagline:
      "High-alkaline heavy-duty degreaser for engine and automotive maintenance.",
    description:
      "A high-alkaline heavy-duty degreaser for engine and automotive maintenance work. Dilutable at 5:100, it cuts through heavy grease and road soils on engines, chassis and workshop equipment.",
    specs: [
      { label: "Application", value: "Engine · Auto maintenance" },
      { label: "Alkalinity", value: "High" },
      { label: "Dilution", value: "5:100" },
    ],
    applications: [
      "Engine and chassis degreasing",
      "Automotive workshop maintenance",
      "Heavy grease and road-soil removal",
    ],
    tags: ["Non-Flammable", "Cost-Effective", "Dilutable & Reusable"],
  },
  {
    slug: "power-clean-cr21",
    name: "POWER CLEAN CR21",
    category: "aqueous",
    tagline: "Carbon-deposit remover and engine / piston cleaner.",
    description:
      "A carbon-deposit remover for engines and pistons. Dilutable at 5:100, it breaks down carbonised residues that build up in combustion areas and on heavily soiled components.",
    specs: [
      { label: "Removes", value: "Carbon deposits" },
      { label: "Application", value: "Engine · Piston cleaning" },
      { label: "Dilution", value: "5:100" },
    ],
    applications: [
      "Piston and cylinder-head cleaning",
      "Carbonised residue removal",
      "Engine overhaul workshops",
    ],
    tags: ["Non-Flammable", "Cost-Effective"],
  },
  {
    slug: "power-clean-gc",
    name: "POWER CLEAN GC",
    category: "aqueous",
    tagline: "Concentrated glass cleaner — no streaks.",
    description:
      "A concentrated glass cleaner dilutable at 1:10 that leaves no streaks, for plant glazing, control-room panels, vehicle glass and display surfaces.",
    specs: [
      { label: "Application", value: "Glass surfaces" },
      { label: "Dilution", value: "1:10" },
      { label: "Finish", value: "Streak-free" },
    ],
    applications: [
      "Plant and office glazing",
      "Vehicle glass",
      "Control panels and display surfaces",
    ],
    tags: ["Non-Toxic", "Cost-Effective", "Dilutable & Reusable"],
  },
  {
    slug: "power-clean-ar",
    name: "POWER CLEAN AR",
    category: "aqueous",
    tagline: "Adhesive, gum and tar remover.",
    description:
      "An adhesive remover dilutable at 1:10 that lifts gum, tar and sticky label residues from equipment, floors and finished parts without aggressive scraping.",
    specs: [
      { label: "Removes", value: "Adhesive · Gum · Tar" },
      { label: "Dilution", value: "1:10" },
    ],
    applications: [
      "Label and adhesive residue removal",
      "Gum and tar removal",
      "Equipment and floor spot-cleaning",
    ],
    tags: ["Non-Flammable", "Non-Toxic"],
  },
  {
    slug: "power-clean-bw-77",
    name: "POWER CLEAN BW-77",
    category: "aqueous",
    tagline: "Bin and tray washing cleaner.",
    description:
      "A cleaner formulated for bin and tray washing systems. Dilutable at 1:100, it clears accumulated oils and handling soils from returnable bins, trays and material-handling containers.",
    specs: [
      { label: "Application", value: "Bin & tray washing" },
      { label: "Dilution", value: "1:100" },
      { label: "Base", value: "Water-based" },
    ],
    applications: [
      "Returnable bin and tray washing",
      "Material-handling container cleaning",
      "Automated bin-wash systems",
    ],
    tags: ["Biodegradable", "Dilutable & Reusable", "Non-Toxic"],
  },
  {
    slug: "power-clean-cd",
    name: "POWER CLEAN CD",
    category: "aqueous",
    tagline: "Citrus degreaser for automotive, carbon and gum removal.",
    description:
      "A citrus-based degreaser used across automotive maintenance for carbon and gum removal, combining solvency from citrus terpenes with a water-based delivery system.",
    specs: [
      { label: "Type", value: "Citrus degreaser" },
      { label: "Removes", value: "Carbon · Gum · Grease" },
      { label: "Application", value: "Automotive maintenance" },
    ],
    applications: [
      "Automotive workshop degreasing",
      "Carbon and gum removal",
      "General maintenance cleaning",
    ],
    tags: ["Biodegradable", "Non-Toxic"],
  },
  {
    slug: "power-clean-ss",
    name: "POWER CLEAN SS",
    category: "aqueous",
    tagline: "Stainless steel cleaner for 304 and 316 grades — glossy finish.",
    description:
      "A stainless steel cleaner for 304 and 316 grades. Dilutable at 1:20, it removes handling soils and restores a glossy finish on stainless fabrication, fittings and process equipment.",
    specs: [
      { label: "Metals", value: "Stainless 304 · 316" },
      { label: "Dilution", value: "1:20" },
      { label: "Finish", value: "Glossy" },
    ],
    applications: [
      "Stainless steel fabrication",
      "Process equipment and fittings",
      "Finish restoration before handover",
    ],
    tags: ["Non-Corrosive", "Non-Toxic", "Cost-Effective"],
  },
  {
    slug: "power-clean-hi32",
    name: "POWER CLEAN HI32",
    category: "aqueous",
    tagline:
      "HCL acid inhibitor that prevents hydrogen embrittlement in plating and coating.",
    description:
      "An acid inhibitor for hydrochloric acid systems used in plating and coating lines. It suppresses acid attack on base metal and prevents hydrogen embrittlement during pickling and de-rusting.",
    specs: [
      { label: "Type", value: "HCL acid inhibitor" },
      { label: "Prevents", value: "Hydrogen embrittlement" },
      { label: "Used in", value: "Plating · Coating lines" },
    ],
    applications: [
      "Acid pickling baths",
      "Plating and coating pre-treatment",
      "Base-metal protection during de-rusting",
    ],
    tags: ["Non-Corrosive to base metal", "Cost-Effective"],
  },
  {
    slug: "power-clean-sip",
    name: "POWER CLEAN SIP",
    category: "aqueous",
    tagline:
      "3-in-1 iron phosphating chemical — cleans, de-rusts and phosphates in one step.",
    description:
      "A 3-in-1 iron phosphating chemical that cleans, de-rusts and phosphates in a single step, collapsing three pre-treatment stages into one before painting or powder coating.",
    specs: [
      { label: "Type", value: "Iron phosphating (3-in-1)" },
      { label: "Steps combined", value: "Clean · De-rust · Phosphate" },
      { label: "Used before", value: "Painting · Powder coating" },
    ],
    applications: [
      "Pre-paint phosphating",
      "Powder-coating pre-treatment",
      "Single-stage line conversion",
    ],
    tags: ["Cost-Effective", "Water-Based", "Process-Simplifying"],
  },

  // ── Cooling tower & heat exchanger ─────────────────────────────────────
  {
    slug: "power-clean-de46",
    name: "POWER CLEAN DE46",
    category: "cooling",
    tagline:
      "Versatile corrosion-inhibited descaler, safe on copper and brass.",
    description:
      "A versatile descaler for cooling towers, heat exchangers and process circuits. Corrosion-inhibited and safe on copper and brass, it removes scale without attacking the base metal of the circuit.",
    specs: [
      { label: "Type", value: "Descaler" },
      { label: "Safe on", value: "Copper · Brass" },
      { label: "Inhibited", value: "Corrosion-inhibited" },
    ],
    applications: [
      "Cooling tower descaling",
      "Heat exchanger cleaning",
      "Process circuit scale removal",
    ],
    tags: ["Non-Corrosive", "Cost-Effective"],
  },
  {
    slug: "power-clean-sa17",
    name: "POWER CLEAN SA17",
    category: "cooling",
    tagline:
      "Low-dosage biocide that prevents bacterial growth and odour.",
    description:
      "A low-dosage biocide for cooling water systems. It controls bacterial growth and the odour that comes with it, keeping circuits and sumps in condition between cleans.",
    specs: [
      { label: "Type", value: "Biocide" },
      { label: "Dosage", value: "Low" },
      { label: "Controls", value: "Bacterial growth · Odour" },
    ],
    applications: [
      "Cooling water treatment",
      "Sump and circuit odour control",
      "Bacterial growth prevention",
    ],
    tags: ["Low-Dosage", "Cost-Effective"],
  },

  // ── Solvent cleaners & degreasers ──────────────────────────────────────
  {
    slug: "pc-s-312",
    name: "PC-S 312",
    category: "solvent",
    tagline: "Room-temperature solvent degreaser.",
    description:
      "A solvent degreaser that works at room temperature, for parts and assemblies unsuited to heated aqueous immersion or where no heating is available on the line.",
    specs: [
      { label: "Type", value: "Solvent degreaser" },
      { label: "Temperature", value: "Room temperature" },
      { label: "Use", value: "As supplied" },
    ],
    applications: [
      "Room-temperature degreasing",
      "Parts unsuited to aqueous immersion",
      "Maintenance and workshop cleaning",
    ],
    tags: ["No Heating Required"],
  },
  {
    slug: "pc-s-342",
    name: "PC-S 342",
    category: "solvent",
    tagline:
      "Drop-in TCE replacement — n-propyl bromide, high flash and boiling point.",
    description:
      "A solvent degreaser engineered as a drop-in replacement for trichloroethylene, using n-propyl bromide chemistry with a high flash point and boiling point. It slots into existing vapour and immersion degreasing equipment — part of a solvent-replacement program Roovel has run in India since 2000.",
    specs: [
      { label: "Chemistry", value: "n-propyl bromide" },
      { label: "Replaces", value: "TCE · Perchloroethylene" },
      { label: "Flash point", value: "High" },
      { label: "Use", value: "As supplied — no dilution" },
    ],
    applications: [
      "Vapour degreasing systems",
      "Direct TCE replacement",
      "Precision component degreasing",
    ],
    tags: ["TCE Replacement", "High Flash Point"],
  },

  // ── Rust protection ────────────────────────────────────────────────────
  {
    slug: "pc-rp-14",
    name: "PC RP-14",
    category: "rust",
    tagline:
      "Water-mixable rust preventive for short-term protection, 3–5% in DM water.",
    description:
      "A water-mixable rust preventive for short-term protection between operations. Mixed at 3–5% with DM water, it suits parts moving quickly through a line rather than long storage.",
    specs: [
      { label: "Type", value: "Water-mixable rust preventive" },
      { label: "Dilution", value: "3–5% with DM water" },
      { label: "Protection", value: "Short-term" },
    ],
    applications: [
      "Inter-operational protection",
      "Short-term storage",
      "Post-wash rinse dosing",
    ],
    tags: ["Water-Based", "Cost-Effective"],
  },
  {
    slug: "pc-rp-636",
    name: "PC RP-636",
    category: "rust",
    tagline:
      "Oil-based long-term rust preventive — 3–6 months, touch-dry in 10–15 min.",
    description:
      "An oil-based rust preventive for long-term protection of ferrous parts in storage and transit. It gives three to six months of protection and is touch-dry within 10–15 minutes, so parts can be packed and dispatched quickly.",
    specs: [
      { label: "Base", value: "Oil-based" },
      { label: "Protection", value: "3–6 months" },
      { label: "Touch-dry", value: "10–15 min" },
      { label: "Application", value: "Dip · Spray · Brush" },
    ],
    applications: [
      "Long-term storage protection",
      "Export and transit packing",
      "Monsoon-season warehousing",
    ],
    tags: ["Long-Term Protection", "Quick Touch-Dry"],
  },
  {
    slug: "pc-rr-27",
    name: "PC RR-27",
    category: "rust",
    tagline: "Mild acidic rust remover for manual or ultrasonic use.",
    description:
      "A mild acidic rust remover that can be used manually or in ultrasonic systems, clearing existing rust from components without the aggression of a strong acid pickle.",
    specs: [
      { label: "Type", value: "Mild acidic rust remover" },
      { label: "Use", value: "Manual · Ultrasonic" },
    ],
    applications: [
      "Rust removal from components",
      "Ultrasonic de-rusting",
      "Restoration and reclaim work",
    ],
    tags: ["Mild Acidic", "Ultrasonic Compatible"],
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function productsByCategory(key: CategoryKey) {
  return products.filter((p) => p.category === key);
}

export function categoryOf(key: CategoryKey) {
  return categories.find((c) => c.key === key)!;
}
