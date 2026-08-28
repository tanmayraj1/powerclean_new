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
import { articles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Technical Guides on Industrial Cleaning & Degreasing",
  description:
    "Technical guides from the Power Clean applications team — aqueous cleaning explained, cleaning methods, replacing TCE, and ultrasonic cleaning answered.",
  alternates: { canonical: "/resources" },
};

export default function ResourcesPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Resources", url: `${SITE_URL}/resources` },
          ]),
          itemListJsonLd({
            name: "Power Clean technical guides",
            description:
              "Reference guides on aqueous cleaning, cleaning methods, TCE replacement and ultrasonic cleaning.",
            url: `${SITE_URL}/resources`,
            items: articles.map((a) => ({
              name: a.title,
              url: `${SITE_URL}/resources/${a.slug}`,
            })),
          }),
        ]}
      />
      <PageHero
        title="The Cleaning Knowledge Center"
        eyebrow="RESOURCES"
        blurb="Application notes and technical guides from our lab and applications engineers — the same guidance we give customers before a trial."
        minHeight="min(52vh, 460px)"
        image="/photos/qc-lab.webp"
        imageAlt=""
      />

      <SectionPanel outerClassName="px-3 pb-3 pt-10">
        <SectionHeading
          eyebrow="TECHNICAL GUIDES"
          title="Cleaning, Explained Properly"
          lede="No sales copy — how aqueous cleaning actually works, what the numbers should be, and how to move a line off solvents."
          className="mb-10 max-w-[660px]"
        />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(290px,1fr))] gap-5">
          {articles.map((a, i) => (
            <Reveal key={a.slug} dir="up" delay={i * 80}>
              <TransitionLink
                href={`/resources/${a.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-card bg-white no-underline ring-1 ring-inset ring-line-2 transition-[transform,box-shadow,ring-color] duration-[350ms] hover:-translate-y-1.5 hover:shadow-card-lg hover:ring-green/25"
              >
                <div className="relative h-[178px] overflow-hidden">
                  <ImageSlot
                    brief={a.photoAlt}
                    src={a.photo}
                    alt={a.photoAlt}
                    sizes="(max-width: 940px) 100vw, 33vw"
                    className="absolute inset-0"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="mb-2.5 font-mono text-[10.5px] uppercase tracking-[0.12em] text-green-deep">
                    {a.kicker}
                  </span>
                  <h2 className="mb-2.5 text-[17.5px] font-semibold leading-[1.35] text-navy">
                    {a.title}
                  </h2>
                  <p className="mb-5 flex-1 text-[13px] leading-[1.65] text-muted-3">
                    {a.summary}
                  </p>
                  <span className="flex items-center justify-between text-[13px] font-semibold text-navy transition-colors group-hover:text-green">
                    Read the guide
                    <span className="font-mono text-[11px] font-normal text-muted">
                      {a.readMinutes} min
                    </span>
                  </span>
                </div>
              </TransitionLink>
            </Reveal>
          ))}
        </div>
      </SectionPanel>

      <CtaBanner
        eyebrow="STILL DECIDING?"
        heading="Ask Our Applications Team"
        body="Describe your parts, soils and wash equipment — we will tell you what we would run and why, before you buy anything."
        ctaLabel="Talk to an Engineer"
        ctaHref="/contact"
      />
    </>
  );
}
