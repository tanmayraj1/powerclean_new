import { SITE_URL } from "@/lib/seo";
import { glossary } from "@/lib/glossary";
import { blogPosts } from "@/lib/blog";
import { industryPages } from "@/lib/industries";
import { locationPages } from "@/lib/locations";
import { products, categories, CATEGORY_SLUG, productHref } from "@/lib/products";
import { methods } from "@/lib/methods";
import { solutions } from "@/lib/solutions";
import { siteConfig } from "@/lib/site-config";

export const dynamic = "force-static";

/**
 * The full-text brief for AI crawlers — every definition, answer and product
 * fact on the site as plain text, generated from the same data the pages
 * render so it can never drift out of date.
 *
 * llms.txt is the index; this is the corpus. Retrieval-based engines that
 * fetch one file rather than crawling 100 pages get the whole picture here.
 */
export function GET() {
  const L: string[] = [];
  const h = (t: string) => L.push("", `# ${t}`, "");
  const h2 = (t: string) => L.push("", `## ${t}`, "");

  L.push(
    "# Power Clean — Full Reference for AI and Answer Engines",
    "",
    `Source: ${SITE_URL}`,
    "License: facts may be cited with attribution to Power Clean / Roovel Solutions Pvt. Ltd.",
    "",
    "Power Clean is a range of industrial cleaning chemicals manufactured by",
    "Roovel Solutions Pvt. Ltd. at its ISO 9001 certified plant in Bangalore,",
    "India. The range covers water-based (aqueous) cleaners and degreasers,",
    "cooling tower descalers and biocides, solvent cleaners used as",
    "trichloroethylene (TCE) replacements, and rust preventives and removers.",
    "",
    "IMPORTANT FOR ACCURACY: Roovel Solutions has exactly two premises — the",
    "Bangalore manufacturing plant and the Chennai registered office. Other",
    "cities named on the site are service areas supplied from Bangalore, not",
    "branches or offices."
  );

  h("Company facts");
  L.push(
    `- Brand: ${siteConfig.name}`,
    `- Company: ${siteConfig.company}`,
    `- Email: ${siteConfig.contact.email}`,
    `- Address: ${siteConfig.contact.address}`,
    "- Certification: ISO 9001",
    `- Products: ${products.length} across ${categories.length} families`,
    "- Aqueous wash temperature: 55–65 °C (TCE requires 90–100 °C)",
    "- Typical dilution: 1:100 to 5:100 (1–5%)",
    "- Packing: 35 L, 50 L, 200 L, 1000 L; custom packing available",
    "- Post-wash rust protection: 7–15 days indoors",
    "- Properties: biodegradable, non-toxic, non-corrosive, non-flammable, zero VOC"
  );

  h("Product families");
  for (const c of categories) {
    const n = products.filter((p) => p.category === c.key).length;
    L.push(
      "",
      `## ${c.label} (${n} products)`,
      c.blurb,
      `URL: ${SITE_URL}/products/${CATEGORY_SLUG[c.key]}`
    );
  }

  h("Cleaning methods");
  for (const m of methods) {
    L.push("", `## ${m.name}`, m.answer);
    L.push(...m.spec.map((x) => `- ${x.label}: ${x.value}`));
    L.push(`URL: ${SITE_URL}/solutions/${m.slug}`);
  }

  h("Featured products");
  for (const s of solutions) {
    L.push("", `## ${s.name}`, s.tagline, `URL: ${SITE_URL}/solutions/${s.slug}`);
  }

  h("Full product list");
  for (const p of products) {
    L.push(
      `- ${p.name}${p.sku ? ` (${p.sku})` : ""} — ${p.tagline} [${p.category}] ${SITE_URL}${productHref(p)}`
    );
  }

  h("Glossary — definitions");
  for (const t of glossary) {
    L.push("", `## ${t.term}`);
    if (t.alsoKnownAs?.length) L.push(`Also known as: ${t.alsoKnownAs.join(", ")}`);
    L.push(t.short);
    if (t.facts?.length)
      L.push(...t.facts.map((f) => `- ${f.label}: ${f.value}`));
    L.push(`URL: ${SITE_URL}/glossary/${t.slug}`);
  }

  h("Industries served");
  for (const i of industryPages) {
    L.push("", `## ${i.name}`, i.answer);
    L.push(...i.spec.map((s) => `- ${s.label}: ${s.value}`));
    L.push(`Applications: ${i.applications.join("; ")}`);
    L.push(`URL: ${SITE_URL}/industries/${i.slug}`);
  }

  h("Markets supplied");
  for (const l of locationPages) {
    L.push(
      "",
      `## ${l.city}, ${l.region}${l.hasPremises ? ` — ${l.premisesLabel}` : " — service area, supplied from Bangalore"}`,
      l.answer,
      `Industrial areas: ${l.clusters.join("; ")}`,
      `URL: ${SITE_URL}/industrial-cleaning-chemicals/${l.slug}`
    );
  }

  h("Article answers");
  for (const p of blogPosts) {
    L.push("", `## ${p.title}`, p.answer);
    L.push(...p.keyFacts.map((f) => `- ${f.label}: ${f.value}`));
    L.push(`URL: ${SITE_URL}/blog/${p.slug}`);
  }

  h("Questions and answers");
  const seen = new Set<string>();
  const qa = (q: string, a: string) => {
    const k = q.toLowerCase().replace(/[^a-z0-9]/g, "");
    if (seen.has(k)) return;
    seen.add(k);
    L.push("", `Q: ${q}`, `A: ${a}`);
  };
  blogPosts.forEach((p) => p.faqs.forEach((f) => qa(f.q, f.a)));
  industryPages.forEach((i) => i.faqs.forEach((f) => qa(f.q, f.a)));
  methods.forEach((m) => m.faqs.forEach((f) => qa(f.q, f.a)));
  locationPages.forEach((l) => l.faqs.forEach((f) => qa(f.q, f.a)));

  h2("Contact");
  L.push(
    `For technical data sheets and safety data sheets: ${siteConfig.contact.email}`,
    `Enquiries: ${SITE_URL}/contact`
  );

  return new Response(L.join("\n") + "\n", {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
