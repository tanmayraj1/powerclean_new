import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectionPanel } from "@/components/ui/SectionPanel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { Arrow } from "@/components/ui/Arrow";
import { Reveal } from "@/components/motion/Reveal";
import { TransitionLink } from "@/components/layout/TransitionLink";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  SITE_URL,
  breadcrumbJsonLd,
  definedTermSetJsonLd,
  webPageJsonLd,
} from "@/lib/seo";
import { glossary, glossaryCategories } from "@/lib/glossary";

export const metadata: Metadata = {
  title: "Industrial Cleaning Glossary",
  description:
    "Plain-English definitions of 44 industrial parts-cleaning terms — aqueous cleaning, cavitation, white rust, Millipore value, bath life and VCI.",
  keywords: [
    "industrial cleaning glossary",
    "parts cleaning terms",
    "degreasing terminology",
    "cleaning chemistry definitions",
  ],
  alternates: { canonical: "/glossary" },
  openGraph: {
    type: "website",
    title: "Industrial Cleaning Glossary — Power Clean",
    description:
      "44 industrial parts-cleaning terms defined in plain English, from aqueous cleaning to VCI packaging.",
    url: `${SITE_URL}/glossary`,
  },
};

export default function GlossaryIndexPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([{ name: "Glossary", url: `${SITE_URL}/glossary` }]),
          definedTermSetJsonLd(
            glossary.map((t) => ({ term: t.term, slug: t.slug, short: t.short }))
          ),
          webPageJsonLd({
            name: "Industrial Cleaning Glossary",
            description:
              "Definitions of the terms used in industrial parts cleaning, degreasing, cleanliness measurement and corrosion protection.",
            path: "/glossary",
            about: [
              "Industrial cleaning chemicals",
              "Aqueous degreasing",
              "Component cleanliness",
            ],
          }),
        ]}
      />
      <PageHero
        title="Industrial Cleaning Glossary"
        eyebrow="REFERENCE"
        blurb="The vocabulary of parts cleaning, defined without jargon — what each term means, why it matters on a real line, and which chemistry it points to."
        minHeight="min(50vh, 440px)"
        image="/photos/qc-lab.webp"
        imageAlt="Laboratory analysis of industrial cleaning chemistry"
      />

      <SectionPanel outerClassName="px-3 pb-3 pt-10">
        <div className="page-answer mb-9 max-w-[820px]">
          <p className="text-[clamp(16px,1.9vw,20px)] leading-[1.6] text-muted-3 [text-wrap:pretty]">
            {glossary.length} terms used across industrial parts cleaning —
            chemistry, wash processes, cleanliness measurement, corrosion
            control and water treatment. Each entry gives a direct definition,
            the practical consequence on a production line, and a link to the
            Power Clean grade that addresses it.
          </p>
        </div>

        {/* jump rail */}
        <nav aria-label="Glossary categories" className="mb-11 flex flex-wrap gap-2.5">
          {glossaryCategories.map((c) => (
            <a
              key={c}
              href={`#${c.toLowerCase()}`}
              className="rounded-full border-[1.5px] border-line-2 px-4 py-2 text-[13px] font-semibold text-navy no-underline transition-colors duration-300 hover:border-green hover:bg-green-tint"
            >
              {c}
              <span className="ml-2 font-mono text-[11px] font-normal text-muted">
                {glossary.filter((t) => t.category === c).length}
              </span>
            </a>
          ))}
        </nav>

        {glossaryCategories.map((cat) => {
          const terms = glossary.filter((t) => t.category === cat);
          if (!terms.length) return null;
          return (
            <section key={cat} id={cat.toLowerCase()} className="mb-14 scroll-mt-28">
              <SectionHeading
                eyebrow={cat.toUpperCase()}
                title={`${cat} terms`}
                className="mb-7 max-w-[620px]"
              />
              <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4">
                {terms.map((t, i) => (
                  <Reveal key={t.slug} dir="up" delay={Math.min(i, 5) * 60}>
                    <TransitionLink
                      href={`/glossary/${t.slug}`}
                      className="group flex h-full flex-col rounded-card bg-white p-6 no-underline ring-1 ring-inset ring-line-2 transition-[transform,box-shadow,ring-color] duration-[350ms] hover:-translate-y-1 hover:shadow-card-lg hover:ring-green/25"
                    >
                      <h3 className="mb-2 text-[16.5px] font-semibold text-navy">
                        {t.term}
                      </h3>
                      <p className="mb-4 flex-1 text-[13px] leading-[1.62] text-muted-3">
                        {t.short.split(". ")[0]}.
                      </p>
                      <span className="flex items-center gap-1.5 text-[12.5px] font-semibold text-navy transition-colors group-hover:text-green">
                        Read the definition <Arrow />
                      </span>
                    </TransitionLink>
                  </Reveal>
                ))}
              </div>
            </section>
          );
        })}
      </SectionPanel>

      <CtaBanner
        eyebrow="APPLY IT"
        heading="Not Sure Which Applies to Your Line?"
        body="Describe your parts, soil and wash equipment — our applications lab replies with a matched grade, dilution and trial plan."
        ctaLabel="Talk to an Engineer"
        ctaHref="/contact"
        image="/photos/production-hall.webp"
      />
    </>
  );
}
