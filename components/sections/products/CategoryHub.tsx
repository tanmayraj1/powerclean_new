import { SectionPanel } from "@/components/ui/SectionPanel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { PageHero } from "@/components/ui/PageHero";
import { Arrow } from "@/components/ui/Arrow";
import { ProductDrum } from "@/components/ui/ProductDrum";
import { FaqList } from "@/components/ui/FaqList";
import { Reveal } from "@/components/motion/Reveal";
import { MicroForm } from "@/components/ui/MicroForm";
import { TransitionLink } from "@/components/layout/TransitionLink";
import {
  categoryOf,
  productHref,
  productsByCategory,
  productsBySeries,
  seriesByCategory,
  type CategoryKey,
} from "@/lib/products";
import { categoryContent } from "@/lib/category-content";

/**
 * A product-family hub — /products/aqueous, /products/rust-preventive and so
 * on. These are the head terms ("aqueous degreaser", "rust preventive") that
 * previously had no page of their own, only a JS filter on the index.
 *
 * Layout deliberately mirrors the industry pages: answer box, facts strip,
 * body, then the products themselves, so the site reads as one system.
 */
export function CategoryHub({ categoryKey }: { categoryKey: CategoryKey }) {
  const cat = categoryOf(categoryKey);
  const c = categoryContent[categoryKey];
  const catSeries = seriesByCategory(categoryKey);
  const items = productsByCategory(categoryKey);

  return (
    <>
      <PageHero
        title={cat.label}
        eyebrow={`PRODUCT FAMILY · ${items.length} PRODUCTS`}
        blurb={cat.blurb}
        minHeight="min(54vh, 470px)"
        titleClassName="text-[clamp(28px,3.8vw,54px)]"
        image={c.photo}
        imageAlt={c.photoAlt}
      />

      <nav
        aria-label="Breadcrumb"
        className="mx-auto max-w-[1320px] px-5 pt-6 text-[12.5px] text-muted"
      >
        <TransitionLink href="/products" className="hover:text-green">
          Products
        </TransitionLink>
        <span className="mx-2 text-line-3">/</span>
        <span className="text-navy">{cat.short}</span>
      </nav>

      <SectionPanel outerClassName="px-3 pb-3 pt-6">
        {/* THE ANSWER */}
        <Reveal dir="up" as="div">
          <div className="page-answer mb-9 rounded-card-lg bg-navy p-[clamp(22px,3vw,36px)]">
            <h2 className="mb-3 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#4FD98A]">
              The short answer
            </h2>
            <p className="max-w-[760px] text-[clamp(15.5px,1.7vw,18px)] font-medium leading-[1.6] text-white [text-wrap:pretty]">
              {c.answer}
            </p>
          </div>
        </Reveal>

        {/* FACTS */}
        <Reveal dir="up" as="div">
          <dl className="mb-12 grid grid-cols-[repeat(auto-fit,minmax(170px,1fr))] gap-x-6 gap-y-5 rounded-card bg-green-tint p-7">
            {c.facts.map((f) => (
              <div key={f.label}>
                <dt className="mb-1 font-mono text-[10.5px] uppercase tracking-[0.1em] text-green-deep">
                  {f.label}
                </dt>
                <dd className="text-[15px] font-semibold text-navy">{f.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        {/* BODY */}
        <div className="mx-auto mb-14 max-w-[820px]">
          {c.body.map((para, i) => (
            <Reveal
              key={i}
              dir="up"
              as="p"
              className="mb-5 text-[15.5px] leading-[1.78] text-muted-3 [text-wrap:pretty]"
            >
              {para}
            </Reveal>
          ))}
        </div>
      </SectionPanel>

      {/* THE PRODUCTS, GROUPED BY SERIES */}
      <SectionPanel tone="tint" outerClassName="p-3">
        <SectionHeading
          eyebrow="THE PRODUCTS"
          title={`Every ${cat.short} Grade`}
          lede={`${items.length} products across ${catSeries.length} series — each links to its own page with the full specification, dilution and application method.`}
          className="mb-10 max-w-[680px]"
        />
        <div className="flex flex-col gap-10">
          {catSeries.map((s) => {
            const inSeries = productsBySeries(s.key);
            if (!inSeries.length) return null;
            return (
              <div key={s.key}>
                <h3 className="mb-4 border-b border-line-2 pb-2.5 font-mono text-[10.5px] uppercase tracking-[0.12em] text-green-deep">
                  {s.label}
                  <span className="ml-2 font-normal text-muted">
                    {inSeries.length}
                  </span>
                </h3>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-[repeat(auto-fill,minmax(290px,1fr))] sm:gap-4">
                  {inSeries.map((p, i) => (
                    <Reveal key={p.slug} dir="up" delay={Math.min(i, 5) * 50}>
                      <TransitionLink
                        href={productHref(p)}
                        className="group flex h-full items-center gap-3 rounded-card bg-white p-4 no-underline ring-1 ring-inset ring-line-2 transition-[transform,box-shadow,ring-color] duration-[350ms] hover:-translate-y-1 hover:shadow-card-lg hover:ring-green/25"
                      >
                        <span aria-hidden="true" className="w-[42px] shrink-0">
                          <ProductDrum
                            name={p.name}
                            sku={p.sku}
                            accent={cat.accent}
                            size="sm"
                            className="h-auto w-full"
                          />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-[15px] font-semibold leading-[1.25] text-navy">
                            {p.name}
                          </span>
                          <span className="mt-1 line-clamp-1 block text-[12.5px] leading-[1.5] text-muted">
                            {p.tagline}
                          </span>
                        </span>
                        <span
                          aria-hidden="true"
                          className="flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full bg-green-cta text-white"
                        >
                          <Arrow />
                        </span>
                      </TransitionLink>
                    </Reveal>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </SectionPanel>

      {/* WHO USES IT + FURTHER READING */}
      <div className="mx-auto max-w-[1320px] px-5 py-[clamp(32px,4.5vw,56px)]">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-x-8 gap-y-7">
          <Reveal dir="up">
            <h2 className="mb-3 border-b border-line-2 pb-2.5 font-mono text-[10.5px] uppercase tracking-[0.12em] text-green-deep">
              Who uses this family
            </h2>
            <ul className="flex flex-col gap-1.5 pl-0">
              {c.industries.map((l) => (
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
          <Reveal dir="up" delay={70}>
            <h2 className="mb-3 border-b border-line-2 pb-2.5 font-mono text-[10.5px] uppercase tracking-[0.12em] text-green-deep">
              Read further
            </h2>
            <ul className="flex flex-col gap-1.5 pl-0">
              {c.related.map((l) => (
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
          <Reveal dir="up" delay={140}>
            <h2 className="mb-3 border-b border-line-2 pb-2.5 font-mono text-[10.5px] uppercase tracking-[0.12em] text-green-deep">
              Compare the whole range
            </h2>
            <ul className="flex flex-col gap-1.5 pl-0">
              <li className="list-none">
                <TransitionLink
                  href="/products"
                  className="block text-[13px] leading-[1.45] text-muted-3 no-underline transition-colors hover:text-green"
                >
                  All 41 products and the selection matrix
                </TransitionLink>
              </li>
              <li className="list-none">
                <TransitionLink
                  href="/faq"
                  className="block text-[13px] leading-[1.45] text-muted-3 no-underline transition-colors hover:text-green"
                >
                  Industrial cleaning FAQ
                </TransitionLink>
              </li>
            </ul>
          </Reveal>
        </div>
      </div>

      {/* FAQ */}
      <SectionPanel tone="tint" outerClassName="p-3">
        <SectionHeading
          eyebrow="FAMILY FAQ"
          title={`${cat.short} — Common Questions`}
          className="mb-9 max-w-[660px]"
        />
        <div className="mx-auto max-w-[880px]">
          <FaqList faqs={c.faqs} />
        </div>

        <div className="mx-auto mt-10 max-w-[880px]">
          <MicroForm
            context={`Product family: ${cat.short}`}
            heading="Not sure which grade in this family?"
            blurb="Tell us the metal, the soil and the wash equipment — we will match the grade and the dilution."
          />
        </div>
      </SectionPanel>

      <CtaBanner
        eyebrow="NOT SURE WHICH GRADE?"
        heading="Send Us a Sample Part"
        body="Our lab tests it against your soils and substrates, then comes back with a matched product, dilution and trial plan."
        ctaLabel="Request a Consultation"
        ctaHref="/get-consultation"
        image={c.photo}
      />
    </>
  );
}
