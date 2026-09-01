import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectionPanel } from "@/components/ui/SectionPanel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { Arrow } from "@/components/ui/Arrow";
import { Reveal } from "@/components/motion/Reveal";
import { TransitionLink } from "@/components/layout/TransitionLink";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_URL, breadcrumbJsonLd, itemListJsonLd } from "@/lib/seo";
import { blogPosts } from "@/lib/blog";
import { articles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Blog — Industrial Cleaning Insights",
  description:
    "Guides on industrial cleaning chemicals — degreaser selection, white rust on aluminium, TCE replacement, ultrasonic chemistry and bath life.",
  alternates: { canonical: "/blog", types: { "application/rss+xml": "/blog/rss.xml" } },
  openGraph: {
    type: "website",
    title: "Power Clean Blog — Industrial Cleaning Insights",
    description:
      "Guides from the Power Clean applications team on degreasing, aluminium cleaning, TCE replacement, ultrasonic chemistry and cooling tower treatment.",
    url: `${SITE_URL}/blog`,
  },
};

export default function BlogIndexPage() {
  const [lead, ...rest] = blogPosts;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([{ name: "Blog", url: `${SITE_URL}/blog` }]),
          itemListJsonLd({
            name: "Power Clean Blog",
            description:
              "Industrial cleaning chemical guides for plant, quality and maintenance engineers.",
            url: `${SITE_URL}/blog`,
            items: blogPosts.map((p) => ({
              name: p.title,
              url: `${SITE_URL}/blog/${p.slug}`,
            })),
          }),
        ]}
      />
      <PageHero
        title="Industrial Cleaning Insights"
        eyebrow="POWER CLEAN BLOG"
        blurb="Guides written by the people who run the trials — chemistry selection, defect fixes, solvent replacement and bath management, with the real numbers."
        minHeight="min(52vh, 460px)"
        image="/photos/gallery-1.webp"
        imageAlt="Industrial parts cleaning process on a plant floor"
      />

      {/* LEAD ARTICLE */}
      <SectionPanel outerClassName="px-3 pb-3 pt-10">
        <Reveal dir="up">
          <TransitionLink
            href={`/blog/${lead.slug}`}
            className="group grid grid-cols-1 overflow-hidden rounded-card-lg bg-white no-underline ring-1 ring-inset ring-line-2 transition-[transform,box-shadow] duration-[350ms] hover:-translate-y-1.5 hover:shadow-card-lg md:grid-cols-2"
          >
            <div className="relative min-h-[260px] overflow-hidden">
              <ImageSlot
                brief={lead.photoAlt}
                src={lead.photo}
                alt={lead.photoAlt}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="absolute inset-0"
              />
              <span className="absolute left-4 top-4 rounded-full bg-green-cta px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-white">
                Latest
              </span>
            </div>
            <div className="flex flex-col justify-center p-[clamp(24px,3.5vw,44px)]">
              <span className="mb-3 font-mono text-[11px] uppercase tracking-[0.12em] text-green-deep">
                {lead.kicker}
              </span>
              <h2 className="mb-3 text-[clamp(22px,2.8vw,32px)] font-semibold leading-[1.2] tracking-[-0.02em] text-navy">
                {lead.title}
              </h2>
              <p className="mb-5 text-[14.5px] leading-[1.7] text-muted-3">
                {lead.summary}
              </p>
              <span className="flex items-center gap-2 text-[13.5px] font-semibold text-navy transition-colors group-hover:text-green">
                Read the guide <Arrow />
                <span className="ml-auto font-mono text-[11.5px] font-normal text-muted">
                  {lead.readMinutes} min
                </span>
              </span>
            </div>
          </TransitionLink>
        </Reveal>
      </SectionPanel>

      {/* REST */}
      <SectionPanel tone="tint" outerClassName="p-3">
        <SectionHeading
          eyebrow="ALL ARTICLES"
          title="Solve It On Your Line"
          lede="Every article is built from real plant data — dilutions, temperatures, defect rates and the grades that fixed them."
          className="mb-10 max-w-[660px]"
        />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(290px,1fr))] gap-5">
          {rest.map((p, i) => (
            <Reveal key={p.slug} dir="up" delay={i * 80}>
              <TransitionLink
                href={`/blog/${p.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-card bg-white no-underline ring-1 ring-inset ring-line-2 transition-[transform,box-shadow,ring-color] duration-[350ms] hover:-translate-y-1.5 hover:shadow-card-lg hover:ring-green/25"
              >
                <div className="relative h-[172px] overflow-hidden">
                  <ImageSlot
                    brief={p.photoAlt}
                    src={p.photo}
                    alt={p.photoAlt}
                    sizes="(max-width: 940px) 100vw, 33vw"
                    className="absolute inset-0"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="mb-2.5 font-mono text-[10.5px] uppercase tracking-[0.12em] text-green-deep">
                    {p.kicker}
                  </span>
                  <h3 className="mb-2.5 text-[17px] font-semibold leading-[1.35] text-navy">
                    {p.title}
                  </h3>
                  <p className="mb-5 flex-1 text-[13px] leading-[1.65] text-muted-3">
                    {p.summary}
                  </p>
                  <span className="flex items-center justify-between text-[13px] font-semibold text-navy transition-colors group-hover:text-green">
                    Read article
                    <span className="font-mono text-[11px] font-normal text-muted">
                      {p.readMinutes} min
                    </span>
                  </span>
                </div>
              </TransitionLink>
            </Reveal>
          ))}
        </div>

        {/* cross-link to the technical guide library */}
        <Reveal dir="up" delay={160} className="mt-10 rounded-card-lg bg-white p-7 ring-1 ring-inset ring-line-2">
          <div className="flex flex-wrap items-center justify-between gap-5">
            <div className="max-w-[560px]">
              <h3 className="mb-1.5 text-[17px] font-semibold text-navy">
                Looking for the technical fundamentals?
              </h3>
              <p className="text-[13.5px] leading-[1.65] text-muted-3">
                Our knowledge center covers how aqueous cleaning works, the
                cleaning methods, TACT and WATCH, and the ultrasonic FAQ —{" "}
                {articles.length} reference guides.
              </p>
            </div>
            <TransitionLink
              href="/resources"
              className="group rounded-full border-[1.5px] border-navy px-6 py-3 text-[13.5px] font-semibold text-navy no-underline transition-colors duration-300 hover:bg-navy hover:text-white"
            >
              Open the knowledge center <Arrow />
            </TransitionLink>
          </div>
        </Reveal>
      </SectionPanel>

      <CtaBanner
        eyebrow="APPLY IT TO YOUR LINE"
        heading="Get a Recommendation for Your Parts"
        body="Send a sample component or describe your wash process — our lab replies with a matched grade, dilution and trial plan."
        ctaLabel="Talk to an Engineer"
        ctaHref="/contact"
        image="/photos/qc-lab.webp"
      />
    </>
  );
}
