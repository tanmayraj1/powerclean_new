import type { CategoryKey } from "./catalogue";

/**
 * Technical selection matrix — one row per product, Zerust-ICT-style.
 * Values come from the live powerclean.in product pages and data sheets;
 * "—" (undefined) means the value is supplied on request via TDS/SDS,
 * never guessed.
 */

export type PhClass =
  | "Neutral"
  | "Mild Alkaline"
  | "Alkaline"
  | "High Alkaline"
  | "Acidic"
  | "Solvent"
  | "Oil"
  | "Additive";

export type MatrixRow = {
  slug: string;
  /** metal / substrate compatibility ticks */
  metals: {
    ferrous?: boolean;
    aluminium?: boolean;
    copperBrass?: boolean;
    plastics?: boolean;
  };
  temp?: string;
  dilution?: string;
  ph?: PhClass;
  foam?: string; // "None" | "Low" | "Foaming", optionally qualified ("Low (to 8 bar)")
  apps: {
    spray?: boolean;
    immersion?: boolean;
    ultrasonic?: boolean;
    manual?: boolean;
  };
  /** rust / corrosion protection left on the part after the process */
  rust?: string;
};

export const matrixRows: MatrixRow[] = [
  // ── Water-based cleaners & degreasers ──────────────────────────────
  {
    slug: "power-clean-xl",
    metals: { ferrous: true, aluminium: true, copperBrass: true, plastics: true },
    temp: "60–70 °C",
    dilution: "1–15%",
    ph: "Alkaline",
    foam: "Low",
    apps: { spray: true, immersion: true, ultrasonic: true, manual: true },
    rust: "Days",
  },
  {
    slug: "power-clean-xl-plus",
    metals: { ferrous: true },
    ph: "Alkaline",
    apps: { spray: true, immersion: true, ultrasonic: true },
  },
  {
    slug: "power-clean-sp",
    metals: { ferrous: true, aluminium: true, copperBrass: true },
    temp: "40–50 °C",
    dilution: "3–15%",
    ph: "Mild Alkaline",
    foam: "Low",
    apps: { spray: true, immersion: true, ultrasonic: true },
    rust: "Days–weeks",
  },
  {
    slug: "power-clean-xl-16",
    metals: { ferrous: true },
    dilution: "On TDS",
    ph: "Alkaline",
    foam: "Low (to 8 bar)",
    apps: { spray: true, ultrasonic: true },
  },
  {
    slug: "power-clean-xl-32",
    metals: { ferrous: true },
    ph: "Alkaline",
    foam: "Low",
    apps: { spray: true },
  },
  {
    slug: "power-clean-nf-14",
    metals: { aluminium: true, copperBrass: true },
    temp: "40–55 °C",
    dilution: "3–15%",
    ph: "Neutral",
    foam: "Low",
    apps: { spray: true, immersion: true, ultrasonic: true, manual: true },
    rust: "No white rust",
  },
  {
    slug: "power-clean-nf-12",
    metals: { aluminium: true, copperBrass: true },
    ph: "Neutral",
    foam: "Low",
    apps: { spray: true },
    rust: "No white rust",
  },
  {
    slug: "power-clean-lf",
    metals: { ferrous: true, aluminium: true },
    temp: "40–70 °C",
    dilution: "1–15%",
    ph: "Mild Alkaline",
    foam: "None",
    apps: { spray: true },
    rust: "Days",
  },
  {
    slug: "power-clean-lf-45",
    metals: { ferrous: true, aluminium: true },
    temp: "45–50 °C",
    dilution: "~2%",
    ph: "Mild Alkaline",
    foam: "None",
    apps: { spray: true },
    rust: "Days",
  },
  {
    slug: "power-clean-lf-43",
    metals: { ferrous: true },
    ph: "High Alkaline",
    foam: "None",
    apps: { spray: true },
  },
  {
    slug: "power-clean-lf-59",
    metals: { ferrous: true, aluminium: true, copperBrass: true },
    temp: "Ambient–65 °C",
    dilution: "2–10%",
    ph: "Mild Alkaline",
    foam: "None",
    apps: { spray: true, immersion: true, ultrasonic: true },
    rust: "White-rust inhibited",
  },
  {
    slug: "power-clean-de-33",
    metals: { copperBrass: true },
    ph: "Acidic",
    apps: { immersion: true, manual: true },
  },
  {
    slug: "power-clean-de-34",
    metals: { copperBrass: true },
    ph: "Acidic",
    apps: { spray: true, immersion: true, ultrasonic: true, manual: true },
  },
  {
    slug: "power-clean-cu-20",
    metals: { copperBrass: true },
    ph: "Additive",
    apps: { immersion: true },
    rust: "Passivation seal",
  },
  {
    slug: "power-clean-alb",
    metals: { aluminium: true },
    temp: "25–40 °C",
    dilution: "5–9% US · 10–15% soak",
    ph: "Acidic",
    apps: { immersion: true, ultrasonic: true, manual: true },
  },
  {
    slug: "power-clean-alb-54",
    metals: { aluminium: true },
    temp: "Ambient",
    dilution: "Low conc.",
    ph: "Acidic",
    apps: { manual: true },
  },
  {
    slug: "power-clean-ss",
    metals: { ferrous: true },
    temp: "Ambient",
    dilution: "1:20",
    ph: "Mild Alkaline",
    apps: { manual: true },
    rust: "Preserves finish",
  },
  {
    slug: "power-clean-de-37",
    metals: {},
    ph: "Acidic",
    apps: { manual: true },
  },
  {
    slug: "power-clean-hd",
    metals: { ferrous: true },
    dilution: "5–15%",
    ph: "High Alkaline",
    apps: { spray: true, ultrasonic: true },
  },
  {
    slug: "power-clean-fc235",
    metals: {},
    temp: "Ambient",
    dilution: "3–15%",
    ph: "Alkaline",
    apps: { manual: true },
  },
  {
    slug: "power-clean-cr21",
    metals: { ferrous: true },
    temp: "62–70 °C",
    dilution: "5–25%",
    ph: "Alkaline",
    apps: { spray: true, ultrasonic: true },
  },
  {
    slug: "power-clean-gc",
    metals: {},
    temp: "Ambient",
    dilution: "1:10",
    ph: "Neutral",
    apps: { manual: true },
  },
  {
    slug: "power-clean-mp-26",
    metals: { ferrous: true, aluminium: true },
    ph: "Mild Alkaline",
    apps: { manual: true },
  },
  {
    slug: "power-clean-bw-77",
    metals: { plastics: true },
    temp: "50–65 °C",
    dilution: "1:20 (to 1%)",
    ph: "Alkaline",
    apps: { spray: true, immersion: true },
  },
  {
    slug: "power-clean-bw-30",
    metals: { plastics: true },
    ph: "Alkaline",
    apps: { manual: true, immersion: true },
  },
  {
    slug: "power-clean-ar",
    metals: { ferrous: true, aluminium: true },
    temp: "62–70 °C",
    dilution: "1:10",
    ph: "Alkaline",
    apps: { spray: true, ultrasonic: true, manual: true },
  },
  {
    slug: "power-clean-co",
    metals: { aluminium: true, copperBrass: true },
    dilution: "1:2 – 1:10",
    ph: "Alkaline",
    foam: "Foaming",
    apps: { spray: true, manual: true },
  },
  {
    slug: "power-clean-d131",
    metals: {},
    ph: "Additive",
    apps: {},
  },
  {
    slug: "power-clean-sip",
    metals: { ferrous: true },
    ph: "Acidic",
    apps: { immersion: true, manual: true },
    rust: "Phosphate layer",
  },
  {
    slug: "power-clean-hi32",
    metals: { ferrous: true },
    ph: "Additive",
    apps: { immersion: true },
    rust: "Inhibits acid attack",
  },
  // ── Cooling tower ──────────────────────────────────────────────────
  {
    slug: "power-clean-de46",
    metals: { ferrous: true, copperBrass: true },
    ph: "Acidic",
    apps: { immersion: true },
    rust: "Inhibitor built in",
  },
  {
    slug: "power-clean-sa17",
    metals: { ferrous: true, copperBrass: true },
    dilution: "Low dosage",
    ph: "Additive",
    apps: { immersion: true },
  },
  // ── Solvent ────────────────────────────────────────────────────────
  {
    slug: "pc-s-312",
    metals: { ferrous: true, aluminium: true, copperBrass: true },
    temp: "Ambient",
    dilution: "Use as-is",
    ph: "Solvent",
    apps: { spray: true, immersion: true, manual: true },
  },
  {
    slug: "pc-s-342",
    metals: { ferrous: true, aluminium: true, copperBrass: true },
    temp: "Ambient",
    dilution: "Use as-is",
    ph: "Solvent",
    apps: { immersion: true, manual: true },
  },
  {
    slug: "power-clean-cd-9",
    metals: { ferrous: true, aluminium: true },
    temp: "Ambient",
    ph: "Solvent",
    apps: { ultrasonic: true, manual: true },
  },
  {
    slug: "power-clean-cd-10",
    metals: { ferrous: true, aluminium: true },
    temp: "Ambient",
    ph: "Solvent",
    apps: { manual: true },
  },
  // ── Rust care ──────────────────────────────────────────────────────
  {
    slug: "pc-rp-14",
    metals: { ferrous: true },
    dilution: "3–5% DM water",
    ph: "Additive",
    apps: { immersion: true },
    rust: "Hours",
  },
  {
    slug: "pc-rp-16",
    metals: { ferrous: true },
    dilution: "Diluted, DM water",
    ph: "Additive",
    apps: { immersion: true },
    rust: "Hours–days",
  },
  {
    slug: "pc-rp-35",
    metals: { ferrous: true },
    dilution: "Concentrated",
    ph: "Additive",
    apps: { immersion: true },
    rust: "Days",
  },
  {
    slug: "pc-rp-636",
    metals: { ferrous: true },
    temp: "Ambient",
    dilution: "Use as-is",
    ph: "Oil",
    apps: { immersion: true },
    rust: "3–6 months",
  },
  {
    slug: "pc-rr-27",
    metals: { ferrous: true },
    dilution: "1:3 light · 1:2 heavy",
    ph: "Acidic",
    apps: { spray: true, immersion: true, ultrasonic: true },
  },
];

export const matrixBySlug = new Map(matrixRows.map((r) => [r.slug, r]));

/**
 * Cleaning-duty spectrum, light → heavy, mirroring the capability strip on
 * classic selection sheets. Position is derived from chemistry: neutral and
 * ready-to-use products sit light; high-alkaline, hot-running carbon
 * removers sit heavy.
 */
export const dutySpectrum: {
  label: string;
  products: string[]; // display names, short
  color: string;
}[] = [
  { label: "Light duty", products: ["GC", "SS"], color: "#00a651" },
  { label: "", products: ["NF-14", "NF-12"], color: "#3cae4d" },
  { label: "", products: ["LF-45", "ALB"], color: "#7cb842" },
  { label: "Medium duty", products: ["LF", "LF-59"], color: "#b3bb38" },
  { label: "", products: ["XL", "XL+"], color: "#d9b232" },
  { label: "", products: ["SP", "BW-77"], color: "#dd9430" },
  { label: "", products: ["HD", "LF-43"], color: "#d96f2b" },
  { label: "Heavy duty", products: ["CR21", "AR"], color: "#c84f26" },
];
