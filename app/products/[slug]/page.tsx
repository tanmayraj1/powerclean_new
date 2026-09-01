import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { SectionPanel } from "@/components/ui/SectionPanel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RippleDivider } from "@/components/ui/RippleDivider";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Arrow } from "@/components/ui/Arrow";
import { ProductDrum } from "@/components/ui/ProductDrum";
import { Reveal } from "@/components/motion/Reveal";
import { Magnetic } from "@/components/motion/Magnetic";
import { TransitionLink } from "@/components/layout/TransitionLink";
import {
  CATEGORY_SLUG,
  categoryBySlug,
  categoryOf,
  getProduct,
  productHref,
  products,
  productsByCategory,
  seriesOf,
} from "@/lib/products";
import { categoryContent } from "@/lib/category-content";
import { CategoryHub } from "@/components/sections/products/CategoryHub";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  SITE_URL,
  brandedTitle,
  metaDesc,
  breadcrumbJsonLd,
  faqJsonLd,
  itemListJsonLd,
  productJsonLd,
  webPageJsonLd,
} from "@/lib/seo";
import { FaqList } from "@/components/ui/FaqList";
import { MicroForm } from "@/components/ui/MicroForm";
import { productFaqs } from "@/lib/product-faq";
import { getSolution, packagingRows } from "@/lib/solutions";
import { siteConfig } from "@/lib/site-config";

/**
 * Two page types share /products/[slug]: the four family hubs
 * (/products/aqueous) and the 41 product pages (/products/power-clean-xl).
 * The slug sets are asserted disjoint at module load in lib/products.ts, so a
 * category can never silently shadow a product.
 */
export function generateStaticParams() {
  return [
    ...Object.values(CATEGORY_SLUG).map((slug) => ({ slug })),
    ...products.map((p) => ({ slug: p.slug })),
  ];
}

export const dynamicParams = false;

/** hero photography per product family, so the 41 pages are not identical */
const CATEGORY_HERO: Record<string, string> = {
  aqueous: "/photos/solution-xl.webp",
  cooling: "/photos/blending-line.webp",
  solvent: "/photos/solution-342.webp",
  rust: "/photos/solution-rp636.webp",
};

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;

  // family hub
  const catKey = categoryBySlug(slug);
  if (catKey) {
    const c = categoryContent[catKey];
    return {
      title: c.metaTitle,
      description: c.metaDescription,
      keywords: c.keywords,
      alternates: { canonical: `/products/${slug}` },
      openGraph: {
        type: "website",
        title: `${c.metaTitle} · Power Clean`,
        description: c.metaDescription,
        url: `${SITE_URL}/products/${slug}`,
        images: [{ url: c.photo, alt: c.photoAlt }],
      },
    };
  }

  const product = getProduct(slug);
  if (!product) return {};
  const category = categoryOf(product.category);
  return {
    // the product name already says "Power Clean" — an absolute title avoids
    // repeating the brand in the template suffix and burning 14 SERP characters
    title: brandedTitle(`${product.name} — ${category.short} Cleaning Chemical`),
    description: metaDesc(`${product.tagline} ${product.description}`),
    keywords: [
      product.name,
      ...(product.sku ? [`Power Clean ${product.sku}`] : []),
      `${category.short} cleaning chemical`,
      ...product.tags,
    ],
    alternates: { canonical: `/products/${slug}` },
    openGraph: {
      title: `${product.name} · Power Clean`,
      description: product.tagline,
      url: `${SITE_URL}/products/${slug}`,
    },
  };
}

export default async function ProductPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;

  // A family hub rather than a product — /products/aqueous and friends.
  const catKey = categoryBySlug(slug);
  if (catKey) {
    const c = categoryContent[catKey];
    const items = productsByCategory(catKey);
    return (
      <>
        <JsonLd
          data={[
            itemListJsonLd({
              name: categoryOf(catKey).label,
              description: c.metaDescription,
              url: `${SITE_URL}/products/${slug}`,
              items: items.map((p) => ({
                name: p.name,
                url: `${SITE_URL}${productHref(p)}`,
              })),
            }),
            faqJsonLd(c.faqs),
            breadcrumbJsonLd([
              { name: "Products", url: `${SITE_URL}/products` },
              {
                name: categoryOf(catKey).short,
                url: `${SITE_URL}/products/${slug}`,
              },
            ]),
            webPageJsonLd({
              name: categoryOf(catKey).label,
              description: c.metaDescription,
              path: `/products/${slug}`,
              about: [categoryOf(catKey).label, "Industrial cleaning chemicals"],
            }),
          ]}
        />
        <CategoryHub categoryKey={catKey} />
      </>
    );
  }

  const product = getProduct(slug);
  if (!product) notFound();

  const category = categoryOf(product.category);
  // Six products also carry rich solution content (dilution graphic,
  // before/after, deploy timeline) — link through when it exists.
  const solution = getSolution(product.slug);
  const related = productsByCategory(product.category)
    .filter((p) => p.slug !== product.slug)
    .slice(0, 3);
  const faqs = productFaqs(product);

  return (
    <>
      <JsonLd
        data={[
          productJsonLd({
            name: product.name,
            slug: product.slug,
            description: product.description,
            sku: product.sku,
            category: category.label,
            image: CATEGORY_HERO[product.category],
            properties: product.specs,
          }),
          faqJsonLd(faqs),
          breadcrumbJsonLd([
            { name: "Products", url: `${SITE_URL}/products` },
            { name: category.short, url: `${SITE_URL}/products#range` },
            {
              name: product.name,
              url: `${SITE_URL}/products/${product.slug}`,
            },
          ]),
        ]}
      />
      <PageHero
        title={product.name}
        eyebrow={category.short.toUpperCase()}
        blurb={product.tagline}
        minHeight="min(54vh, 460px)"
        titleClassName="text-[clamp(32px,4.4vw,62px)]"
        image={CATEGORY_HERO[product.category]}
        imageAlt={`${product.name} — ${category.label.toLowerCase()} from Power Clean`}
      />

      {/* BREADCRUMB */}
      <nav
        aria-label="Breadcrumb"
        className="mx-auto max-w-[1320px] px-5 pt-6 text-[12.5px] text-muted"
      >
        <TransitionLink href="/products" className="hover:text-green">
          Catalogue
        </TransitionLink>
        <span className="mx-2 text-line-3">/</span>
        <span className="text-navy">{category.short}</span>
        <span className="mx-2 text-line-3">/</span>
        <span className="text-navy">{seriesOf(product.seriesKey).label}</span>
        <span className="mx-2 text-line-3">/</span>
        <span className="text-navy">{product.name}</span>
      </nav>

      {/* OVERVIEW + SPECS */}
      <div className="mx-auto max-w-[1320px] px-5 pb-5 pt-[clamp(24px,4vw,44px)]">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-start gap-7">
          <Reveal dir="left">
            <Eyebrow label="OVERVIEW" className="mb-3.5" />
            <h2 className="mb-[18px] text-[clamp(26px,3.2vw,40px)] font-semibold leading-[1.14] tracking-[-0.02em] text-navy">
              About This Product
            </h2>
            <p className="mb-7 text-[14.5px] leading-[1.75] text-muted-3">
              {product.description}
            </p>

            <Eyebrow label="TYPICAL APPLICATIONS" className="mb-3.5" />
            <div className="mb-7 flex flex-col gap-3">
              {product.applications.map((a) => (
                <div key={a} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-green-tint text-[11px] font-bold text-green-deep">
                    ✓
                  </span>
                  <span className="text-sm text-ink">{a}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {product.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-green-tint px-3.5 py-1.5 text-[12px] font-semibold text-navy"
                >
                  {t}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal
            dir="right"
            className="sticky top-[90px] rounded-card-lg border border-line-2 bg-white p-7"
          >
            <div
              className="mb-5 flex items-end justify-center rounded-img-lg py-4"
              style={{ background: category.accentSoft }}
            >
              <ProductDrum
                name={product.name}
                sku={product.sku}
                accent={category.accent}
                className="h-[200px] w-auto drop-shadow-[0_14px_26px_rgba(29,31,35,.20)]"
              />
            </div>
            <h3 className="mb-1.5 text-lg font-semibold text-navy">
              Key Specifications
            </h3>
            <p className="mb-6 text-[12.5px] leading-[1.6] text-muted">
              Full technical data sheet and SDS available on request.
            </p>
            <dl className="mb-7 flex flex-col divide-y divide-line-2">
              {product.specs.map((s) => (
                <div
                  key={s.label}
                  className="flex items-baseline justify-between gap-4 py-3 first:pt-0"
                >
                  <dt className="text-[12.5px] text-muted">{s.label}</dt>
                  <dd className="text-right font-mono text-[12.5px] font-semibold tracking-[-0.02em] text-ink">
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>

            {solution && (
              <TransitionLink
                href={`/solutions/${solution.slug}`}
                className="group mb-3 flex items-center justify-between rounded-full bg-azure px-[18px] py-3 text-[13px] font-semibold text-navy no-underline transition-colors hover:text-green"
              >
                See the full solution page <Arrow />
              </TransitionLink>
            )}

            <Magnetic style={{ display: "block" }}>
              <TransitionLink
                href="/contact"
                className="group block rounded-full bg-green-cta p-[13px] text-center text-sm font-semibold text-white no-underline shadow-cta transition-colors hover:bg-green-cta-dark"
              >
                Request a Sample <Arrow />
              </TransitionLink>
            </Magnetic>
            <p className="mt-3 text-center text-[11.5px] leading-[1.5] text-muted">
              Free chemical samples for qualified applications.
            </p>
          </Reveal>
        </div>
      </div>

      {/* PACKAGING */}
      <SectionPanel tone="tint" outerClassName="p-3">
        <SectionHeading
          eyebrow="PACKAGING & SUPPLY"
          title="Choose Your Supply Format"
          size="md"
          className="mb-9 max-w-[620px]"
        />
        <div className="mx-auto flex max-w-[980px] flex-col gap-3.5">
          {packagingRows.map((row, i) => (
            <Reveal
              key={row.size}
              dir="left"
              delay={i * 100}
              className={`flex flex-wrap items-center gap-[18px] rounded-img-lg px-[22px] py-4 transition-transform duration-300 hover:translate-x-1.5 ${
                row.highlight ? "bg-white shadow-card" : "bg-white/70"
              }`}
            >
              <span className="shrink-0 rounded-full bg-navy px-[18px] py-2.5 font-mono text-[13px] font-bold text-white">
                {row.size}
              </span>
              <div className="min-w-[200px] flex-1">
                <div className="text-[15px] font-semibold text-navy">
                  {row.title}
                </div>
                <div className="mt-0.5 text-[12.5px] text-muted">
                  {row.body}
                </div>
              </div>
              <span
                className={`text-xs ${row.highlight ? "rounded-full bg-green-tint px-3 py-[5px] font-semibold text-navy" : "text-muted"}`}
              >
                {row.tag}
              </span>
            </Reveal>
          ))}
        </div>
      </SectionPanel>

      <RippleDivider />

      {/* RELATED */}
      {/* PRODUCT FAQ — derived from this product's own specification, so the
          answers differ per grade rather than repeating one template */}
      <SectionPanel tone="tint" outerClassName="p-3">
        <SectionHeading
          eyebrow="PRODUCT FAQ"
          title={`${product.name} — Common Questions`}
          className="mb-9 max-w-[680px]"
        />
        <div className="mx-auto max-w-[880px]">
          <FaqList faqs={faqs} />
        </div>

        {/* TDS / brochure request. There is no PDF library yet, so this asks
            for the sheet by email with the product prefilled rather than
            linking a file that does not exist. Swap in a real download once
            Roovel supplies the TDS set. */}
        <Reveal dir="up" className="mx-auto mt-10 max-w-[880px]">
          <div className="flex flex-wrap items-center justify-between gap-5 rounded-card-lg bg-white p-7 ring-1 ring-inset ring-line-2">
            <div className="max-w-[520px]">
              <h3 className="mb-1.5 text-[16px] font-semibold text-navy">
                Technical data sheet &amp; SDS
              </h3>
              <p className="text-[13.5px] leading-[1.65] text-muted-3">
                Every product ships with a safety data sheet and dosing
                guidance. Ask for the {product.name} documents and we will send
                them across.
              </p>
            </div>
            <a
              href={`mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(
                `TDS & SDS request — ${product.name}${product.sku ? ` (SKU ${product.sku})` : ""}`
              )}&body=${encodeURIComponent(
                `Please send the technical data sheet and safety data sheet for ${product.name}.\n\nCompany:\nApplication:\nPhone:\n`
              )}`}
              className="rounded-full bg-green-cta px-6 py-3 text-[13.5px] font-semibold text-white no-underline transition-colors hover:bg-green-cta-dark"
            >
              Request the TDS
            </a>
          </div>
        </Reveal>

        <div className="mx-auto mt-6 max-w-[880px]">
          <MicroForm
            context={`Product: ${product.name}`}
            heading={`Is ${product.name} right for your parts?`}
            blurb="Tell us the metal, the soil and the wash equipment — we will confirm the grade and the dilution, or point you at a better fit."
          />
        </div>
      </SectionPanel>

      {related.length > 0 && (
        <div className="mx-auto max-w-[1320px] px-5 pb-5 pt-[clamp(30px,5vw,56px)]">
          <Reveal
            dir="up"
            className="mb-8 flex flex-wrap items-end justify-between gap-5"
          >
            <div>
              <Eyebrow label="SAME FAMILY" className="mb-3.5" />
              <h2 className="text-[clamp(26px,3.2vw,40px)] font-semibold tracking-[-0.02em] text-navy">
                Also in {category.short}
              </h2>
            </div>
            <TransitionLink
              href="/products"
              className="group rounded-full bg-green-tint px-[22px] py-[11px] text-[13.5px] font-semibold text-navy no-underline transition-colors hover:text-green"
            >
              View All Products <Arrow />
            </TransitionLink>
          </Reveal>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5">
            {related.map((r, i) => (
              <Reveal key={r.slug} dir="up" delay={i * 120}>
                <TransitionLink
                  href={`/products/${r.slug}`}
                  className="group relative flex h-full flex-col overflow-hidden rounded-card border border-line-2 bg-white p-6 no-underline transition-[transform,box-shadow] duration-[350ms] hover:-translate-y-1.5 hover:shadow-card-lg"
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-2 top-6 w-[76px] opacity-90 transition-transform duration-500 group-hover:-translate-y-1"
                  >
                    <ProductDrum
                      name={r.name}
                      sku={r.sku}
                      accent={category.accent}
                      size="sm"
                      className="h-auto w-full"
                    />
                  </span>
                  <h3 className="mb-2 max-w-[calc(100%-64px)] text-[17px] font-semibold text-navy">
                    {r.name}
                  </h3>
                  <p className="mb-4 max-w-[calc(100%-56px)] flex-1 text-[12.5px] leading-[1.6] text-muted">
                    {r.tagline}
                  </p>
                  <span className="flex items-center gap-2 text-[13px] font-semibold text-navy transition-colors group-hover:text-green">
                    View product <Arrow />
                  </span>
                </TransitionLink>
              </Reveal>
            ))}
          </div>
        </div>
      )}

      <CtaBanner
        heading={`Trial ${product.name} on Your Line`}
        body="Request a free sample and a supervised trial — measured against your current process."
        ctaLabel="Request a Sample"
        ctaHref="/contact"
        imageBrief="Photo — product containers on a plant floor beside a parts washer"
        minHeight={400}
        image="/photos/packaging.webp"
      />
    </>
  );
}
