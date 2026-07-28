import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { SectionPanel } from "@/components/ui/SectionPanel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RippleDivider } from "@/components/ui/RippleDivider";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Arrow } from "@/components/ui/Arrow";
import { Reveal } from "@/components/motion/Reveal";
import { Magnetic } from "@/components/motion/Magnetic";
import { TransitionLink } from "@/components/layout/TransitionLink";
import {
  categoryOf,
  getProduct,
  products,
  productsByCategory,
} from "@/lib/catalogue";
import { getSolution, packagingRows } from "@/lib/solutions";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const product = getProduct(slug);
  if (!product) return {};
  return { title: product.name, description: product.tagline };
}

export default async function ProductPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const product = getProduct(slug);
  if (!product) notFound();

  const category = categoryOf(product.category);
  // Six products also carry rich solution content (dilution graphic,
  // before/after, deploy timeline) — link through when it exists.
  const solution = getSolution(product.slug);
  const related = productsByCategory(product.category)
    .filter((p) => p.slug !== product.slug)
    .slice(0, 3);

  return (
    <>
      <PageHero
        title={product.name}
        eyebrow={category.short.toUpperCase()}
        blurb={product.tagline}
        minHeight="min(54vh, 460px)"
        titleClassName="text-[clamp(32px,4.4vw,62px)]"
      />

      {/* BREADCRUMB */}
      <nav
        aria-label="Breadcrumb"
        className="mx-auto max-w-[1320px] px-5 pt-6 text-[12.5px] text-muted"
      >
        <TransitionLink href="/catalogue" className="hover:text-green">
          Catalogue
        </TransitionLink>
        <span className="mx-2 text-line-3">/</span>
        <span className="text-navy">{category.short}</span>
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
              href="/catalogue"
              className="group rounded-full bg-green-tint px-[22px] py-[11px] text-[13.5px] font-semibold text-navy no-underline transition-colors hover:text-green"
            >
              View Full Catalogue <Arrow />
            </TransitionLink>
          </Reveal>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5">
            {related.map((r, i) => (
              <Reveal key={r.slug} dir="up" delay={i * 120}>
                <TransitionLink
                  href={`/catalogue/${r.slug}`}
                  className="group flex h-full flex-col rounded-card border border-line-2 bg-white p-6 no-underline transition-[transform,box-shadow] duration-[350ms] hover:-translate-y-1.5 hover:shadow-card-lg"
                >
                  <h3 className="mb-2 text-[17px] font-semibold text-navy">
                    {r.name}
                  </h3>
                  <p className="mb-4 flex-1 text-[12.5px] leading-[1.6] text-muted">
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
      />
    </>
  );
}
