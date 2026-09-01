import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { Arrow } from "@/components/ui/Arrow";
import { Reveal } from "@/components/motion/Reveal";
import { TransitionLink } from "@/components/layout/TransitionLink";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  SITE_URL,
  breadcrumbJsonLd,
  definedTermJsonLd,
  metaDesc,
  qaPageJsonLd,
} from "@/lib/seo";
import { glossary, getTerm } from "@/lib/glossary";

export const dynamicParams = false;

export function generateStaticParams() {
  return glossary.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const t = getTerm(slug);
  if (!t) return {};
  // "VCI (vapour corrosion inhibitor)" and "Dip tank / immersion cleaning"
  // blow the 60-character SERP budget once the brand suffix is appended, so
  // the title uses the short form and only adds "— Definition" if it fits.
  const shortTerm = t.term.replace(/\s*[(/].*$/, "").trim();
  const base = `What is ${shortTerm}?`;
  return {
    title: base.length <= 33 ? `${base} — Definition` : base,
    description: metaDesc(t.short),
    keywords: t.keywords,
    alternates: { canonical: `/glossary/${t.slug}` },
    openGraph: {
      type: "article",
      title: `What is ${t.term}? — Power Clean Glossary`,
      description: t.short.slice(0, 200),
      url: `${SITE_URL}/glossary/${t.slug}`,
    },
  };
}

export default async function GlossaryTermPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const term = getTerm(slug);
  if (!term) notFound();

  const see = (term.see ?? [])
    .map((s) => getTerm(s))
    .filter((t): t is NonNullable<typeof t> => Boolean(t));

  return (
    <>
      <JsonLd
        data={[
          definedTermJsonLd({
            term: term.term,
            slug: term.slug,
            short: term.short,
            alsoKnownAs: term.alsoKnownAs,
          }),
          qaPageJsonLd({
            question: `What is ${term.term.toLowerCase()}?`,
            answer: term.short,
            url: `${SITE_URL}/glossary/${term.slug}`,
            dateModified: "2026-03-18",
          }),
          breadcrumbJsonLd([
            { name: "Glossary", url: `${SITE_URL}/glossary` },
            { name: term.term, url: `${SITE_URL}/glossary/${term.slug}` },
          ]),
        ]}
      />
      <PageHero
        title={term.term}
        eyebrow={`${term.category.toUpperCase()} · GLOSSARY`}
        blurb={term.short.split(". ")[0] + "."}
        minHeight="min(46vh, 400px)"
        titleClassName="text-[clamp(30px,4.2vw,58px)]"
      />

      <nav
        aria-label="Breadcrumb"
        className="mx-auto max-w-[1320px] px-5 pt-6 text-[12.5px] text-muted"
      >
        <TransitionLink href="/glossary" className="hover:text-green">
          Glossary
        </TransitionLink>
        <span className="mx-2 text-line-3">/</span>
        <span className="text-navy">{term.term}</span>
      </nav>

      <article className="mx-auto max-w-[800px] px-5 pb-10 pt-[clamp(20px,3vw,32px)]">
        {/* THE DEFINITION — the block AI engines lift */}
        <Reveal dir="up" as="div">
          <div className="page-answer mb-8 rounded-card-lg bg-navy p-[clamp(22px,3vw,32px)]">
            <h2 className="mb-3 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#4FD98A]">
              What is {term.term.toLowerCase()}?
            </h2>
            <p className="text-[clamp(15.5px,1.7vw,18px)] font-medium leading-[1.6] text-white [text-wrap:pretty]">
              {term.short}
            </p>
            {term.alsoKnownAs?.length ? (
              <p className="mt-4 border-t border-white/15 pt-4 text-[13px] text-white/70">
                Also called: {term.alsoKnownAs.join(", ")}
              </p>
            ) : null}
          </div>
        </Reveal>

        {term.facts?.length ? (
          <Reveal dir="up" as="div">
            <dl className="mb-8 grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-x-6 gap-y-4 rounded-card bg-green-tint p-6">
              {term.facts.map((f) => (
                <div key={f.label}>
                  <dt className="mb-1 font-mono text-[10.5px] uppercase tracking-[0.1em] text-green-deep">
                    {f.label}
                  </dt>
                  <dd className="text-[15px] font-semibold text-navy">
                    {f.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        ) : null}

        {term.body.map((p, i) => (
          <Reveal key={i} dir="up" as="p" className="mb-5 text-[15.5px] leading-[1.78] text-muted-3 [text-wrap:pretty]">
            {p}
          </Reveal>
        ))}

        {term.products?.length ? (
          <Reveal dir="up" as="div" className="mt-9 rounded-card-lg bg-card-tint p-7">
            <h2 className="mb-4 text-[17px] font-semibold text-navy">
              Power Clean grades for this
            </h2>
            <div className="flex flex-col gap-2.5">
              {term.products.map((p) => (
                <TransitionLink
                  key={p.href}
                  href={p.href}
                  className="group flex items-center justify-between gap-4 rounded-card bg-white px-5 py-3.5 text-[14px] font-semibold text-navy no-underline ring-1 ring-inset ring-line-2 transition-colors duration-300 hover:ring-green/30"
                >
                  {p.name}
                  <span className="text-green transition-transform group-hover:translate-x-0.5">
                    <Arrow />
                  </span>
                </TransitionLink>
              ))}
            </div>
          </Reveal>
        ) : null}

        {term.reading?.length ? (
          <Reveal dir="up" as="div" className="mt-7">
            <h2 className="mb-3.5 text-[17px] font-semibold text-navy">
              Read further
            </h2>
            <ul className="flex flex-col gap-2 pl-0">
              {term.reading.map((r) => (
                <li key={r.href} className="list-none">
                  <TransitionLink
                    href={r.href}
                    className="text-[14.5px] font-medium text-navy underline decoration-line-3 underline-offset-4 transition-colors hover:text-green hover:decoration-green"
                  >
                    {r.label}
                  </TransitionLink>
                </li>
              ))}
            </ul>
          </Reveal>
        ) : null}

        {see.length ? (
          <Reveal dir="up" as="div" className="mt-10 border-t border-line-2 pt-8">
            <h2 className="mb-4 text-[17px] font-semibold text-navy">
              Related terms
            </h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-3.5">
              {see.map((s) => (
                <TransitionLink
                  key={s.slug}
                  href={`/glossary/${s.slug}`}
                  className="group rounded-card bg-white p-5 no-underline ring-1 ring-inset ring-line-2 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-card-lg"
                >
                  <span className="mb-1.5 block text-[14.5px] font-semibold text-navy transition-colors group-hover:text-green">
                    {s.term}
                  </span>
                  <span className="block text-[12.5px] leading-[1.55] text-muted">
                    {s.short.split(". ")[0]}.
                  </span>
                </TransitionLink>
              ))}
            </div>
          </Reveal>
        ) : null}
      </article>

      <CtaBanner
        eyebrow="APPLY IT"
        heading="Bring Us the Actual Part"
        body="Definitions only go so far. Send a sample component and your wash details, and the lab replies with a matched grade, dilution and trial plan."
        ctaLabel="Talk to an Engineer"
        ctaHref="/contact"
        image="/photos/production-hall.webp"
      />
    </>
  );
}
