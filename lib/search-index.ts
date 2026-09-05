import { products, categories, categoryHref, productHref } from "./products";
import { solutions } from "./solutions";
import { methods } from "./methods";
import { industryPages } from "./industries";
import { locationPages } from "./locations";
import { glossary } from "./glossary";
import { blogPosts } from "./blog";
import { articles } from "./articles";
import { cleaningVideos } from "./videos";

/**
 * Site-wide search index.
 *
 * Built at module load from the same data the pages render, so it can never
 * drift out of date and needs no build step. Small enough (a few hundred
 * entries) to ship to the client and search instantly without a backend —
 * which is the right trade here, because the alternative is a request per
 * keystroke for a catalogue that changes a few times a year.
 */
export type SearchKind =
  | "Product"
  | "Family"
  | "Solution"
  | "Method"
  | "Industry"
  | "Location"
  | "Definition"
  | "Article"
  | "Guide"
  | "Video"
  | "Page";

export type SearchEntry = {
  title: string;
  href: string;
  kind: SearchKind;
  /** shown under the title in the dropdown */
  hint: string;
  /** extra terms that should match but are not displayed */
  keywords: string[];
  /** ranking nudge — commercial pages outrank reference ones on equal match */
  weight: number;
};

/** curated synonyms, so plant vocabulary finds the right page */
const SYNONYMS: Record<string, string[]> = {
  tce: ["trichloroethylene", "trichlor", "solvent replacement"],
  trichloroethylene: ["tce", "trichlor"],
  ultrasonic: ["cavitation", "sonic", "kHz"],
  aluminium: ["aluminum", "adc12", "adc10", "die cast", "non ferrous"],
  aluminum: ["aluminium"],
  rust: ["corrosion", "oxidation", "flash rust", "white rust"],
  degreaser: ["degreasing", "cleaner", "oil removal"],
  descaler: ["descaling", "scale", "limescale", "cooling tower"],
  foam: ["foaming", "low foam", "cloud point"],
  price: ["cost", "cost per part", "quote"],
  sds: ["safety data sheet", "msds", "documentation"],
  tds: ["technical data sheet", "datasheet"],
  brass: ["copper", "bronze", "non ferrous"],
  steel: ["ferrous", "cast iron", "mild steel"],
  trial: ["sample", "cleanup", "free trial", "test"],
};

function expand(terms: string[]): string[] {
  const out = new Set<string>();
  for (const t of terms) {
    const k = t.toLowerCase();
    out.add(k);
    for (const s of SYNONYMS[k] ?? []) out.add(s);
  }
  return [...out];
}

/** hand-written destinations that are not generated from a data file */
const STATIC_PAGES: SearchEntry[] = [
  { title: "Request a Cleanup", href: "/request-cleanup", kind: "Page", hint: "Send parts for a free wash trial", keywords: expand(["trial", "free sample", "send components", "wash trial", "cleanup"]), weight: 12 },
  { title: "Free consultation", href: "/get-consultation", kind: "Page", hint: "Matched grade, dilution and trial plan", keywords: expand(["consultation", "trial", "advice", "quote"]), weight: 11 },
  { title: "Chemical questionnaire", href: "/questionnaire", kind: "Page", hint: "Tell us your parts, soils and equipment", keywords: expand(["questionnaire", "form", "survey", "requirement"]), weight: 10 },
  { title: "Product list — quick view", href: "/products/quick-view", kind: "Page", hint: "Every product, SKU and description", keywords: expand(["list", "sku", "code", "all products", "quick view", "catalogue"]), weight: 11 },
  { title: "Selection matrix", href: "/products/selection-matrix", kind: "Page", hint: "Compare every product by parameter", keywords: expand(["matrix", "compare", "comparison", "spec", "parameters", "chart"]), weight: 11 },
  { title: "All products", href: "/products", kind: "Page", hint: "The full 41-product range", keywords: expand(["catalogue", "products", "range", "browse"]), weight: 11 },
  { title: "Cleaning videos", href: "/cleaning-videos", kind: "Page", hint: "Filmed cleaning trials", keywords: expand(["video", "videos", "youtube", "demo", "watch"]), weight: 8 },
  { title: "Case studies", href: "/resources/case-studies", kind: "Page", hint: "Measured results from plant trials", keywords: expand(["case study", "results", "proof", "before after"]), weight: 8 },
  { title: "Clients", href: "/clients", kind: "Page", hint: "Manufacturers using Power Clean", keywords: expand(["clients", "customers", "testimonials", "bosch", "tvs"]), weight: 6 },
  { title: "Contact", href: "/contact", kind: "Page", hint: "Offices, phone and email", keywords: expand(["contact", "phone", "email", "address", "office"]), weight: 9 },
  { title: "About Power Clean", href: "/about", kind: "Page", hint: "Roovel Solutions, ISO 9001, Bangalore", keywords: expand(["about", "company", "roovel", "iso", "history"]), weight: 6 },
  { title: "FAQ", href: "/faq", kind: "Page", hint: "Answers for plant engineers", keywords: expand(["faq", "questions", "help"]), weight: 7 },
  { title: "Glossary", href: "/glossary", kind: "Page", hint: "44 industrial cleaning terms", keywords: expand(["glossary", "definitions", "terms", "meaning"]), weight: 6 },
];

export const searchIndex: SearchEntry[] = [
  ...STATIC_PAGES,

  ...products.map((p) => ({
    title: p.name,
    href: productHref(p),
    kind: "Product" as const,
    hint: p.tagline,
    keywords: expand([
      ...(p.sku ? [p.sku] : []),
      ...p.tags,
      ...p.applications,
      p.category,
      ...p.specs.map((s) => s.value),
    ]),
    weight: 10,
  })),

  ...categories.map((c) => ({
    title: c.label,
    href: categoryHref(c.key),
    kind: "Family" as const,
    hint: `${products.filter((p) => p.category === c.key).length} products in this family`,
    keywords: expand([c.short, c.key]),
    weight: 9,
  })),

  ...solutions.map((s) => ({
    title: s.name,
    href: `/solutions/${s.slug}`,
    kind: "Solution" as const,
    hint: s.tagline,
    keywords: expand(s.specs.map((x) => x.value)),
    weight: 9,
  })),

  ...methods.map((m) => ({
    title: m.title,
    href: `/solutions/${m.slug}`,
    kind: "Method" as const,
    hint: m.name,
    keywords: expand(m.keywords),
    weight: 9,
  })),

  ...industryPages.map((i) => ({
    title: i.name,
    href: `/industries/${i.slug}`,
    kind: "Industry" as const,
    hint: i.applications.slice(0, 3).join(" · "),
    keywords: expand([...i.keywords, ...i.applications]),
    weight: 8,
  })),

  ...locationPages.map((l) => ({
    title: `Industrial cleaning chemicals in ${l.city}`,
    href: `/industrial-cleaning-chemicals/${l.slug}`,
    kind: "Location" as const,
    hint: `${l.region} · ${l.clusters.slice(0, 2).join(", ")}`,
    keywords: expand([l.city, l.region, ...l.clusters, ...l.keywords]),
    weight: 6,
  })),

  ...glossary.map((t) => ({
    title: t.term,
    href: `/glossary/${t.slug}`,
    kind: "Definition" as const,
    hint: t.short.split(". ")[0] + ".",
    keywords: expand([...(t.alsoKnownAs ?? []), ...t.keywords, t.category]),
    weight: 5,
  })),

  ...blogPosts.map((b) => ({
    title: b.title,
    href: `/blog/${b.slug}`,
    kind: "Article" as const,
    hint: b.kicker,
    keywords: expand(b.keywords),
    weight: 6,
  })),

  ...articles.map((a) => ({
    title: a.title,
    href: `/resources/${a.slug}`,
    kind: "Guide" as const,
    hint: a.summary.slice(0, 90),
    keywords: expand([a.slug.replace(/-/g, " ")]),
    weight: 6,
  })),

  ...cleaningVideos.map((v) => ({
    title: v.title,
    href: "/cleaning-videos",
    kind: "Video" as const,
    hint: v.description.slice(0, 90),
    keywords: expand([v.topic, "video"]),
    weight: 4,
  })),
];

/**
 * Score one entry against a query.
 *
 * Deliberately simple and predictable rather than fuzzy: exact title match
 * beats prefix, prefix beats word-start, word-start beats a keyword hit. In a
 * catalogue full of codes like "XL-16" and "845", a fuzzy matcher does more
 * harm than good — people type the code they mean.
 */
export function scoreEntry(e: SearchEntry, q: string): number {
  const t = e.title.toLowerCase();
  const hint = e.hint.toLowerCase();
  let score = 0;

  if (t === q) score = 1000;
  else if (t.startsWith(q)) score = 700;
  else if (new RegExp(`\\b${escapeRe(q)}`).test(t)) score = 500;
  else if (t.includes(q)) score = 320;
  else if (e.keywords.some((k) => k === q)) score = 300;
  else if (e.keywords.some((k) => k.startsWith(q))) score = 210;
  else if (e.keywords.some((k) => k.includes(q))) score = 140;
  else if (hint.includes(q)) score = 90;
  else return 0;

  return score + e.weight;
}

const escapeRe = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/** Every query token must hit, so "aluminium ultrasonic" narrows rather than widens. */
export function searchSite(query: string, limit = 8): SearchEntry[] {
  const q = query.trim().toLowerCase();
  if (q.length < 2) return [];
  const tokens = q.split(/\s+/).filter(Boolean);

  return searchIndex
    .map((e) => {
      const scores = tokens.map((tok) => scoreEntry(e, tok));
      if (scores.some((s) => s === 0)) return { e, s: 0 };
      // whole-phrase match is worth more than the sum of its parts
      const phrase = tokens.length > 1 ? scoreEntry(e, q) : 0;
      return { e, s: scores.reduce((a, b) => a + b, 0) + phrase };
    })
    .filter((r) => r.s > 0)
    .sort((a, b) => b.s - a.s || a.e.title.length - b.e.title.length)
    .slice(0, limit)
    .map((r) => r.e);
}
