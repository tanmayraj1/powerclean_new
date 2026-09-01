import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectionPanel } from "@/components/ui/SectionPanel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { FaqFilter } from "@/components/ui/FaqFilter";
import { Arrow } from "@/components/ui/Arrow";
import { Reveal } from "@/components/motion/Reveal";
import { TransitionLink } from "@/components/layout/TransitionLink";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  SITE_URL,
  breadcrumbJsonLd,
  faqJsonLd,
  webPageJsonLd,
} from "@/lib/seo";
import { homeFaqs, contactFaqs, type Faq } from "@/lib/site-config";
import { blogPosts } from "@/lib/blog";
import { industryPages } from "@/lib/industries";

export const metadata: Metadata = {
  title: "Industrial Cleaning FAQ",
  description:
    "The questions plant engineers actually ask about industrial cleaning chemicals — dilutions, temperatures, foam, aluminium, rust and bath life.",
  keywords: [
    "industrial cleaning FAQ",
    "degreaser questions",
    "parts washing questions",
    "industrial cleaning chemical dilution",
  ],
  alternates: { canonical: "/faq" },
  openGraph: {
    type: "website",
    title: "Industrial Cleaning FAQ — Power Clean",
    description:
      "The questions plant engineers ask most about cleaning chemistry, answered with real numbers.",
    url: `${SITE_URL}/faq`,
  },
};

/**
 * One aggregated answer surface. Questions are pulled from the pages that
 * already answer them so nothing is duplicated by hand and nothing drifts —
 * each entry is tagged by where it came from.
 */
function buildFaqs(): Faq[] {
  const seen = new Set<string>();
  const out: Faq[] = [];
  const push = (f: Faq) => {
    const key = f.q.toLowerCase().replace(/[^a-z0-9]/g, "");
    if (seen.has(key)) return;
    seen.add(key);
    out.push(f);
  };

  homeFaqs.forEach(push);
  contactFaqs.forEach(push);
  blogPosts.forEach((p) =>
    p.faqs.forEach((f) => push({ q: f.q, a: f.a, tag: "Process & Chemistry" }))
  );
  industryPages.forEach((i) =>
    i.faqs.forEach((f) => push({ q: f.q, a: f.a, tag: "By Industry" }))
  );

  return out;
}

export default function FaqPage() {
  const faqs = buildFaqs();
  const chips = Array.from(new Set(faqs.map((f) => f.tag))).filter(
    (t): t is string => Boolean(t)
  );

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([{ name: "FAQ", url: `${SITE_URL}/faq` }]),
          // the full aggregated set — the single richest answer surface on the site
          faqJsonLd(faqs.map((f) => ({ q: f.q, a: f.a }))),
          webPageJsonLd({
            name: "Industrial Cleaning FAQ",
            description:
              "Answers to common questions about industrial cleaning chemicals, parts washing processes and corrosion protection.",
            path: "/faq",
            about: [
              "Industrial cleaning chemicals",
              "Parts washing",
              "Corrosion protection",
            ],
          }),
        ]}
      />
      <PageHero
        title="Industrial Cleaning, Answered"
        eyebrow="FAQ"
        blurb="Every question we get asked on a plant visit, collected in one place — with the dilutions, temperatures and numbers rather than a sales answer."
        minHeight="min(50vh, 440px)"
        image="/photos/gallery-2.webp"
        imageAlt="Plant engineers reviewing an industrial parts cleaning process"
      />

      <SectionPanel outerClassName="px-3 pb-3 pt-10">
        <div className="page-answer mb-10 max-w-[840px]">
          <p className="text-[clamp(16px,1.9vw,20px)] leading-[1.6] text-muted-3 [text-wrap:pretty]">
            {faqs.length} questions covering chemistry selection, wash
            processes, foam, aluminium and white rust, cleanliness
            specifications, bath management, rust protection, documentation and
            supply. Answers are drawn from Power Clean&apos;s own published
            product data and field results.
          </p>
        </div>

        <SectionHeading
          eyebrow="BROWSE"
          title="Filter by Topic"
          className="mb-8 max-w-[620px]"
        />
        <FaqFilter faqs={faqs} chips={chips} />

        <Reveal dir="up" delay={140} className="mt-12 rounded-card-lg bg-card-tint p-7">
          <div className="flex flex-wrap items-center justify-between gap-5">
            <div className="max-w-[580px]">
              <h2 className="mb-1.5 text-[17px] font-semibold text-navy">
                Want the reasoning, not just the answer?
              </h2>
              <p className="text-[13.5px] leading-[1.65] text-muted-3">
                The blog works through each of these properly — selection,
                diagnosis and process — and the glossary defines every term
                used along the way.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <TransitionLink
                href="/blog"
                className="group rounded-full border-[1.5px] border-navy px-6 py-3 text-[13.5px] font-semibold text-navy no-underline transition-colors duration-300 hover:bg-navy hover:text-white"
              >
                Read the blog <Arrow />
              </TransitionLink>
              <TransitionLink
                href="/glossary"
                className="group rounded-full border-[1.5px] border-navy px-6 py-3 text-[13.5px] font-semibold text-navy no-underline transition-colors duration-300 hover:bg-navy hover:text-white"
              >
                Open the glossary <Arrow />
              </TransitionLink>
            </div>
          </div>
        </Reveal>
      </SectionPanel>

      <CtaBanner
        eyebrow="STILL STUCK"
        heading="Ask Us About Your Actual Line"
        body="Describe your parts, soil and wash equipment. Our applications lab replies with a matched grade, dilution and trial plan — not a brochure."
        ctaLabel="Ask an Engineer"
        ctaHref="/contact"
        image="/photos/qc-lab.webp"
      />
    </>
  );
}
