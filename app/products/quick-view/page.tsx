import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectionPanel } from "@/components/ui/SectionPanel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { Arrow } from "@/components/ui/Arrow";
import { Reveal } from "@/components/motion/Reveal";
import { MicroForm } from "@/components/ui/MicroForm";
import { TransitionLink } from "@/components/layout/TransitionLink";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  SITE_URL,
  breadcrumbJsonLd,
  itemListJsonLd,
  webPageJsonLd,
} from "@/lib/seo";
import {
  categories,
  categoryHref,
  productHref,
  products,
  productsBySeries,
  seriesByCategory,
} from "@/lib/products";

export const metadata: Metadata = {
  title: "Product List — Quick View",
  description:
    "Every Power Clean product on one page — name, SKU code and what it does, grouped by family and series across all four product families.",
  keywords: [
    "power clean product list",
    "industrial cleaning chemical list",
    "degreaser sku list",
    "power clean product codes",
  ],
  alternates: { canonical: "/products/quick-view" },
  openGraph: {
    type: "website",
    title: "Product List — Quick View · Power Clean",
    description:
      "All 41 products with SKU codes and descriptions, grouped by family and series.",
    url: `${SITE_URL}/products/quick-view`,
  },
};

export default function QuickViewPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Products", url: `${SITE_URL}/products` },
            { name: "Quick view", url: `${SITE_URL}/products/quick-view` },
          ]),
          itemListJsonLd({
            name: "Power Clean product list",
            description:
              "All 41 Power Clean products with SKU codes and descriptions.",
            url: `${SITE_URL}/products/quick-view`,
            items: products.map((p) => ({
              name: p.name,
              url: `${SITE_URL}${productHref(p)}`,
            })),
          }),
          webPageJsonLd({
            name: "Power Clean product list — quick view",
            description:
              "Every product, SKU code and description on one page, grouped by family and series.",
            path: "/products/quick-view",
            about: ["Industrial cleaning chemicals", "Product catalogue"],
          }),
        ]}
      />
      <PageHero
        title="Product List — Quick View"
        eyebrow={`${products.length} PRODUCTS · ONE PAGE`}
        blurb="Every grade, its SKU code and what it does — the whole range at a glance, grouped the way our chemists think about it."
        minHeight="min(50vh, 440px)"
        titleClassName="text-[clamp(28px,3.8vw,54px)]"
        image="/photos/packaging.webp"
        imageAlt="Blue industrial drums of cleaning chemical concentrate in a warehouse"
      />

      <nav
        aria-label="Breadcrumb"
        className="mx-auto max-w-[1320px] px-5 pt-6 text-[12.5px] text-muted"
      >
        <TransitionLink href="/products" className="hover:text-green">
          Products
        </TransitionLink>
        <span className="mx-2 text-line-3">/</span>
        <span className="text-navy">Quick view</span>
      </nav>

      <SectionPanel outerClassName="px-3 pb-3 pt-6">
        <div className="page-answer mx-auto mb-9 max-w-[860px]">
          <p className="text-[clamp(16px,1.9vw,20px)] leading-[1.6] text-muted-3 [text-wrap:pretty]">
            The complete Power Clean range — {products.length} products across{" "}
            {categories.length} families. Every row carries the product name,
            its SKU code and a one-line description; click any name for the
            full specification, dilution and application method. All grades are
            supplied with dosing guidance and a safety data sheet, in packs from
            20&nbsp;L to 1000&nbsp;L.
          </p>
        </div>

        {/* jump rail */}
        <nav aria-label="Product families" className="mb-10 flex flex-wrap gap-2.5">
          {categories.map((c) => (
            <a
              key={c.key}
              href={`#${c.key}`}
              className="rounded-full border-[1.5px] border-line-2 px-4 py-2 text-[13px] font-semibold text-navy no-underline transition-colors duration-300 hover:border-green hover:bg-green-tint"
            >
              {c.short}
              <span className="ml-2 font-mono text-[11px] font-normal text-muted">
                {products.filter((p) => p.category === c.key).length}
              </span>
            </a>
          ))}
        </nav>

        {categories.map((cat) => {
          const catSeries = seriesByCategory(cat.key);
          const count = products.filter((p) => p.category === cat.key).length;
          return (
            <section key={cat.key} id={cat.key} className="mb-14 scroll-mt-28">
              <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
                <div>
                  <span
                    className="mb-2.5 block h-1.5 w-12 rounded-full"
                    style={{ background: cat.accent }}
                  />
                  <h2 className="text-[clamp(20px,2.3vw,27px)] font-semibold tracking-[-0.02em] text-navy">
                    {cat.label}
                  </h2>
                  <p className="mt-1.5 max-w-[70ch] text-[13.5px] leading-[1.65] text-muted-3">
                    {cat.blurb}
                  </p>
                </div>
                <TransitionLink
                  href={categoryHref(cat.key)}
                  className="group shrink-0 rounded-full border-[1.5px] border-navy px-5 py-2.5 text-[13px] font-semibold text-navy no-underline transition-colors duration-300 hover:bg-navy hover:text-white"
                >
                  About this family <Arrow />
                </TransitionLink>
              </div>

              <div className="overflow-x-auto rounded-card ring-1 ring-inset ring-line-2 [scrollbar-width:thin]">
                <table className="w-full min-w-[640px] border-collapse bg-white text-left">
                  <caption className="sr-only">
                    {cat.label} — {count} products with SKU codes and
                    descriptions
                  </caption>
                  <thead>
                    <tr className="bg-navy text-white">
                      <th scope="col" className="px-5 py-3 font-mono text-[10.5px] uppercase tracking-[0.1em]">
                        Name
                      </th>
                      <th scope="col" className="px-4 py-3 font-mono text-[10.5px] uppercase tracking-[0.1em]">
                        SKU
                      </th>
                      <th scope="col" className="px-5 py-3 font-mono text-[10.5px] uppercase tracking-[0.1em]">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {catSeries.map((s) => {
                      const rows = productsBySeries(s.key);
                      if (!rows.length) return null;
                      return (
                        <Fragmentish key={s.key}>
                          <tr>
                            <th
                              scope="colgroup"
                              colSpan={3}
                              className="border-y border-line-2 px-5 py-2.5 text-left font-mono text-[10.5px] uppercase tracking-[0.12em]"
                              style={{ background: cat.accentSoft, color: cat.accentText }}
                            >
                              {s.label}
                            </th>
                          </tr>
                          {rows.map((p) => (
                            <tr
                              key={p.slug}
                              className="border-b border-line-2 last:border-0 even:bg-card-tint"
                            >
                              <td className="px-5 py-3.5 align-top">
                                <TransitionLink
                                  href={productHref(p)}
                                  className="text-[14px] font-semibold text-navy no-underline transition-colors hover:text-green"
                                >
                                  {p.name}
                                </TransitionLink>
                              </td>
                              <td className="whitespace-nowrap px-4 py-3.5 align-top font-mono text-[12.5px] text-muted-3">
                                {p.sku ?? "—"}
                              </td>
                              <td className="px-5 py-3.5 align-top text-[13.5px] leading-[1.6] text-muted-3">
                                {p.tagline}
                              </td>
                            </tr>
                          ))}
                        </Fragmentish>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </section>
          );
        })}

        <Reveal dir="up" className="mx-auto max-w-[880px]">
          <MicroForm
            context="Product quick view"
            heading="Not sure which code you need?"
            blurb="Tell us the metal, the soil and the wash equipment — we will name the grade and the dilution."
          />
        </Reveal>
      </SectionPanel>

      <CtaBanner
        eyebrow="COMPARE THE SPECS"
        heading="See Them Side by Side"
        body="The selection matrix puts every product on one spec sheet — metal compatibility, process window, application method and corrosion protection."
        ctaLabel="Open the Selection Matrix"
        ctaHref="/products/selection-matrix"
        image="/photos/qc-lab.webp"
      />
    </>
  );
}

/** table rows need a keyed wrapper that renders nothing of its own */
function Fragmentish({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
