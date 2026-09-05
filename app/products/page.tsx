import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionPanel } from "@/components/ui/SectionPanel";
import { RippleDivider } from "@/components/ui/RippleDivider";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { Reveal } from "@/components/motion/Reveal";
import { Backdrop } from "@/components/ui/Backdrop";
import { CatalogueGrid } from "@/components/sections/products/CatalogueGrid";
import { RangeHierarchy } from "@/components/sections/products/RangeHierarchy";
import { RangeMap } from "@/components/sections/products/RangeMap";
import { products } from "@/lib/products";
import { JsonLd } from "@/components/seo/JsonLd";
import { TransitionLink } from "@/components/layout/TransitionLink";
import { FaqList } from "@/components/ui/FaqList";
import { Arrow } from "@/components/ui/Arrow";
import { BROWSE_BY } from "@/lib/browse-by";
import {
  SITE_URL,
  breadcrumbJsonLd,
  faqJsonLd,
  itemListJsonLd,
  webPageJsonLd,
} from "@/lib/seo";
import { propertyTags } from "@/lib/solutions";

export const metadata: Metadata = {
  title: "Industrial Degreaser Catalogue — 41 Products",
  description:
    "All 41 Power Clean industrial cleaning chemicals — degreasers, aluminium-safe neutral cleaners, low-foam ultrasonic grades, descalers and rust preventives.",
  keywords: [
    "industrial cleaning chemicals list",
    "industrial degreaser products",
    "degreaser catalogue india",
    "aluminium cleaner ADC12",
    "low foam ultrasonic cleaner",
    "cooling tower descaler",
    "rust preventive oil",
    "TCE replacement solvent",
  ],
  alternates: { canonical: "/products" },
};


// Buying questions, answered with the real published figures.
const CATALOGUE_FAQS = [
  {
    q: "How many products are in the Power Clean range?",
    a: "Forty-one, across four families: water-based cleaners and degreasers, cooling tower descalers and biocides, solvent cleaners including a trichloroethylene replacement, and rust preventives and removers. Every product has its own page with the full specification.",
  },
  {
    q: "What dilution do Power Clean cleaners run at?",
    a: "Most aqueous grades work between 1% and 5% — that is 1:100 to 5:100 with water. Light maintenance soils sit at the low end; heavy machining oil, buffing compound and carbon need the upper end. Confirm the figure on your own parts during the trial rather than assuming it.",
  },
  {
    q: "What temperature should the wash bath run at?",
    a: "55–65 °C for most aqueous grades. That is also where low-foam products stop foaming, because their surfactant clouds out just below the working range. For comparison, a trichloroethylene vapour degreaser has to be held at 90–100 °C.",
  },
  {
    q: "Which product should I use on aluminium?",
    a: "A neutral-pH grade such as POWER CLEAN NF-14. Alkaline cleaners above roughly pH 10 etch aluminium and zinc, leaving a dull surface that blooms into white rust within days. Neutral chemistry is also the right choice for any basket carrying mixed metals.",
  },
  {
    q: "What pack sizes are available?",
    a: "20 L, 50 L, 200 L and 1000 L, with custom packing available. Trials normally start with a single 20 L pail once the lab has matched a formulation to your part and soil.",
  },
  {
    q: "Do products come with a safety data sheet?",
    a: "Yes. Every product ships with an SDS plus dosing and PPE guidance, and production runs to an ISO 9001 certified system with batch-wise quality control, so the drum is traceable to a quality record.",
  },
  {
    q: "How long are parts protected from rust after washing?",
    a: "Power Clean aqueous concentrates carry an in-built inhibitor giving 7–15 days of indoor protection. For stock, transit or export, PC RP-636 is an oil-based rust preventive giving 3–6 months with a 10–15 minute touch-dry.",
  },
  {
    q: "Can Power Clean replace trichloroethylene on our line?",
    a: "Yes, by one of two routes. An aqueous line — wash, rinse, dry — at 1–5% and 55–65 °C, which is cheaper to run and far simpler to comply with; or PC-S 342, a high-flash non-chlorinated solvent, where the existing equipment has to be kept.",
  },
];

const COMPARE_ROUTES = [
  {
    eyebrow: "SPEC SHEET",
    title: "Selection matrix",
    body: "Every product on one sheet — metal compatibility, operating temperature, dilution, chemistry, foam, application method and rust protection, side by side. Work left to right, metal first.",
    cta: "Open the selection matrix",
    href: "/products/selection-matrix",
  },
  {
    eyebrow: "PLAIN LIST",
    title: "Product list — quick view",
    body: "Name, SKU code and a one-line description for all 41 products, grouped by family and series. The fastest way to find a code you already half-remember.",
    cta: "Open the quick view",
    href: "/products/quick-view",
  },
];

export default function ProductsPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([{ name: "Products", url: `${SITE_URL}/products` }]),
          itemListJsonLd({
            name: "Power Clean product catalogue",
            description:
              "All 41 Power Clean industrial cleaning products across aqueous cleaning, cooling-water treatment, solvent replacement and rust protection.",
            url: `${SITE_URL}/products`,
            items: products.map((p) => ({
              name: p.name,
              url: `${SITE_URL}/products/${p.slug}`,
            })),
          }),
          faqJsonLd(CATALOGUE_FAQS),
          webPageJsonLd({
            name: "Power Clean industrial cleaning chemicals catalogue",
            description:
              "All 41 Power Clean products with dilutions, wash temperatures, pack sizes and application methods.",
            path: "/products",
            about: [
              "Industrial cleaning chemicals",
              "Degreasers",
              "Rust preventives",
              "Cooling tower chemicals",
            ],
          }),
        ]}
      />
      <PageHero
        title="The Power Clean Catalogue"
        eyebrow="PRODUCT CATALOGUE"
        blurb={`${products.length} products across aqueous cleaning, cooling-water treatment, solvent replacement and rust protection — every one supplied with dosing guidance and an SDS.`}
        minHeight="min(56vh, 480px)"
        image="/photos/solution-xl.webp"
        imageAlt="Oily machined gears and bearing races before industrial degreasing"
      />

      {/* INTRO — the catalogue had no prose at all, which left the highest-
          intent page on the site with nothing for a search engine to read
          and nothing for an answer engine to quote. */}
      <SectionPanel outerClassName="px-3 pb-3 pt-10">
        <div className="page-answer mx-auto max-w-[860px]">
          <p className="mb-5 text-[clamp(16px,1.9vw,20px)] leading-[1.6] text-muted-3 [text-wrap:pretty]">
            Power Clean manufactures {products.length} industrial cleaning
            chemicals in Bangalore: water-based degreasers for parts washing,
            neutral-pH cleaners for aluminium and brass, low-foam grades for
            spray and ultrasonic machines, cooling tower descalers and
            biocides, non-chlorinated solvent cleaners used as
            trichloroethylene replacements, and rust preventives and removers.
          </p>
          <p className="text-[14.5px] leading-[1.75] text-muted-3 [text-wrap:pretty]">
            Most aqueous grades work between 1% and 5% at 55–65&nbsp;°C, carry
            an in-built corrosion inhibitor giving 7–15 days of indoor rust
            protection, and are supplied in 20&nbsp;L, 50&nbsp;L, 200&nbsp;L
            and 1000&nbsp;L packs with dosing guidance and a safety data
            sheet. Every product below links to its own page with the full
            specification.
          </p>
        </div>
      </SectionPanel>

      {/* CATEGORY MAP — the range as one chart */}
      <SectionPanel outerClassName="px-3 pb-3 pt-4">
        <SectionHeading
          eyebrow="BY CATEGORY"
          title="Four Families, One Standard"
          lede="The whole range on one map — pick a family to open every series and product inside it."
          className="mb-10 max-w-[620px]"
        />
        <RangeMap />
      </SectionPanel>

      {/* THE RANGE — full hierarchy on one page */}
      <SectionPanel outerClassName="p-3" id="range">
        <SectionHeading
          eyebrow="THE RANGE AT A GLANCE"
          title="Category → Series → Product"
          lede="The complete Power Clean range, organised the way our chemists think about it. Open a family, pick a series, and jump straight to any product — every code links to its own page."
          className="mb-9 max-w-[680px]"
        />
        <RangeHierarchy />
      </SectionPanel>

      {/* FULL CATALOGUE */}
      <div
        id="all-products"
        className="relative isolate mx-auto max-w-[1320px] scroll-mt-24 px-5 pb-5 pt-[clamp(40px,6vw,72px)]"
      >
        <Backdrop />
        <Backdrop variant="rings" className="right-[-12%] top-[6%] h-[560px] w-[560px]" />
        <SectionHeading
          eyebrow="ALL PRODUCTS"
          title="Browse the Full Range"
          lede="Filter by family, or tell us your soils and substrates and we will match the grade for you."
          className="mb-9"
        />
        <Suspense fallback={<div className="min-h-[420px]" />}>
          <CatalogueGrid />
        </Suspense>
      </div>

      {/* SELECTION MATRIX + QUICK VIEW — both now have their own pages, so
          this is the signpost rather than the full table */}
      <SectionPanel outerClassName="p-3">
        <SectionHeading
          eyebrow="TWO WAYS TO COMPARE"
          title="Pick by the Parameters"
          lede="The full range, laid out two ways — as a spec sheet you can compare across, and as a plain list of every code and description."
          className="mb-9 max-w-[680px]"
        />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5">
          {COMPARE_ROUTES.map((c, i) => (
            <Reveal key={c.href} dir="up" delay={i * 80}>
              <TransitionLink
                href={c.href}
                className="group flex h-full flex-col rounded-card-lg bg-white p-8 no-underline ring-1 ring-inset ring-line-2 transition-[transform,box-shadow,ring-color] duration-[350ms] hover:-translate-y-1.5 hover:shadow-card-lg hover:ring-green/25"
              >
                <span className="mb-3 font-mono text-[10.5px] uppercase tracking-[0.12em] text-green-deep">
                  {c.eyebrow}
                </span>
                <h3 className="mb-2.5 text-[clamp(18px,2vw,22px)] font-semibold leading-[1.28] text-navy">
                  {c.title}
                </h3>
                <p className="mb-6 flex-1 text-[13.5px] leading-[1.68] text-muted-3">
                  {c.body}
                </p>
                <span className="flex items-center gap-2 text-[13.5px] font-semibold text-navy transition-colors group-hover:text-green">
                  {c.cta} <Arrow />
                </span>
              </TransitionLink>
            </Reveal>
          ))}
        </div>
      </SectionPanel>

      <RippleDivider />

      {/* PROPERTIES */}
      <SectionPanel tone="tint" outerClassName="p-3">
        <SectionHeading
          eyebrow="WHY POWER CLEAN"
          title="Built Into Every Formulation"
          size="md"
          className="mb-9 max-w-[620px]"
        />
        <div className="mx-auto flex max-w-[860px] flex-wrap justify-center gap-2.5">
          {propertyTags.map((t, i) => (
            <Reveal key={t} dir="up" delay={(i % 4) * 60}>
              <span className="inline-block rounded-full border border-line bg-white px-[18px] py-2.5 text-[13px] font-semibold text-navy">
                {t}
              </span>
            </Reveal>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-[620px] text-center text-[13.5px] leading-[1.7] text-muted-3">
          Power Clean replaces petrol, diesel, kerosene, trichloroethylene,
          perchloroethylene, naphtha and caustic soda — Roovel Solutions has
          been replacing TCE and other toxic solvents in Indian plants since
          2000.
        </p>
      </SectionPanel>

      {/* BROWSE BY APPLICATION — keyword-anchored internal links out to the
          industry, glossary and article clusters. The catalogue was a link
          sink before this: everything pointed in, nothing pointed out. */}
      <div className="mx-auto max-w-[1320px] px-5 py-[clamp(32px,4.5vw,56px)]">
        <SectionHeading
          eyebrow="BROWSE BY APPLICATION"
          title="Find the Grade by the Job"
          lede="Most people arrive knowing the problem rather than the product code. These are the routes in."
          className="mb-9 max-w-[660px]"
        />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-x-8 gap-y-7">
          {BROWSE_BY.map((group, gi) => (
            <Reveal key={group.title} dir="up" delay={gi * 70}>
              <h3 className="mb-3 border-b border-line-2 pb-2.5 font-mono text-[10.5px] uppercase tracking-[0.12em] text-green-deep">
                {group.title}
              </h3>
              <ul className="flex flex-col gap-1.5 pl-0">
                {group.links.map((l) => (
                  <li key={l.href} className="list-none">
                    <TransitionLink
                      href={l.href}
                      className="block text-[13px] leading-[1.45] text-muted-3 no-underline transition-colors hover:text-green"
                    >
                      {l.label}
                    </TransitionLink>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>

      {/* FAQ — the catalogue is where buying questions get asked, and it had
          no FAQ schema of its own until now */}
      <SectionPanel tone="tint" outerClassName="p-3">
        <SectionHeading
          eyebrow="CATALOGUE FAQ"
          title="Questions About the Range"
          className="mb-9 max-w-[620px]"
        />
        <div className="mx-auto max-w-[880px]">
          <FaqList faqs={CATALOGUE_FAQS} />
        </div>
      </SectionPanel>

      <CtaBanner
        eyebrow="NOT SURE WHICH GRADE?"
        heading="Send Us a Sample Part"
        body="Our lab tests it against your soils and substrates, then comes back with a matched product, dilution and trial plan."
        ctaLabel="Request a Consultation"
        ctaHref="/contact"
        imageBrief="Photo — lab bench with sample parts and product containers"
        wedge
        image="/photos/qc-lab.webp"
      />
    </>
  );
}
