import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectionPanel } from "@/components/ui/SectionPanel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { Arrow } from "@/components/ui/Arrow";
import { Reveal } from "@/components/motion/Reveal";
import { MicroForm } from "@/components/ui/MicroForm";
import { TransitionLink } from "@/components/layout/TransitionLink";
import { VideoGrid } from "@/components/sections/videos/VideoGrid";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  SITE_URL,
  breadcrumbJsonLd,
  itemListJsonLd,
  webPageJsonLd,
} from "@/lib/seo";
import {
  cleaningVideos,
  videoEmbed,
  videoThumb,
  videoWatch,
} from "@/lib/videos";

export const metadata: Metadata = {
  title: "Industrial Cleaning Videos",
  description:
    "Watch Power Clean chemistry working on real components — engine degreasing, lapping paste removal, ultrasonic cleaning, aluminium castings and bin washing.",
  keywords: [
    "industrial cleaning videos",
    "ultrasonic cleaning video",
    "degreasing demonstration",
    "parts cleaning video india",
    "aluminium cleaning video",
  ],
  alternates: { canonical: "/cleaning-videos" },
  openGraph: {
    type: "website",
    title: "Cleaning Videos · Power Clean",
    description:
      "Real cleaning trials filmed on customer components — degreasing, ultrasonic, aluminium and bin washing.",
    url: `${SITE_URL}/cleaning-videos`,
  },
};

export default function CleaningVideosPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Cleaning videos", url: `${SITE_URL}/cleaning-videos` },
          ]),
          itemListJsonLd({
            name: "Power Clean cleaning videos",
            description:
              "Filmed cleaning trials showing Power Clean chemistry on real components.",
            url: `${SITE_URL}/cleaning-videos`,
            items: cleaningVideos.map((v) => ({
              name: v.title,
              url: videoWatch(v.id),
            })),
          }),
          webPageJsonLd({
            name: "Industrial cleaning videos",
            description:
              "Filmed cleaning trials showing Power Clean chemistry working on real customer components.",
            path: "/cleaning-videos",
            about: ["Industrial cleaning chemicals", "Ultrasonic cleaning"],
          }),
          // VideoObject per clip. uploadDate is deliberately absent — it is a
          // required property for Google's video rich result, and we do not
          // have the real publication dates. See DELIVERY.md.
          ...cleaningVideos.map((v) => ({
            "@context": "https://schema.org",
            "@type": "VideoObject",
            "@id": `${SITE_URL}/cleaning-videos#${v.id}`,
            name: v.title,
            description: v.description,
            thumbnailUrl: videoThumb(v.id),
            embedUrl: videoEmbed(v.id),
            contentUrl: videoWatch(v.id),
            inLanguage: "en-IN",
            publisher: { "@id": `${SITE_URL}/#organization` },
            isPartOf: { "@id": `${SITE_URL}/cleaning-videos#webpage` },
          })),
        ]}
      />
      <PageHero
        title="Watch the Chemistry Work"
        eyebrow="CLEANING VIDEOS"
        blurb="Filmed during real cleaning trials on customer components — not a studio demo. Engine parts, lapping paste, aluminium castings, ultrasonic baths and bin washing."
        minHeight="min(52vh, 460px)"
        image="/photos/gallery-1.webp"
        imageAlt="Technician loading components onto a parts washer fixture plate"
      />

      <SectionPanel outerClassName="px-3 pb-3 pt-10">
        <div className="page-answer mx-auto mb-10 max-w-[860px]">
          <p className="text-[clamp(16px,1.9vw,20px)] leading-[1.6] text-muted-3 [text-wrap:pretty]">
            {cleaningVideos.length} short clips recorded while cleaning real
            client components with Power Clean chemistry — oil and carbon off
            engine parts, lapping and buffing compound off machined metal,
            grease off aluminium castings with neutral-pH NF, and multi-stage
            ultrasonic and bin-washing systems in operation. There is also a
            foil test you can run yourself to check whether your ultrasonic
            bath is actually cavitating.
          </p>
        </div>

        {/* the cards are h3s, so the page needs this h2 between them and the
            hero's h1 — otherwise the heading order skips a level */}
        <SectionHeading
          eyebrow="THE LIBRARY"
          title="Filmed on the Line"
          lede="Filter by what you are cleaning, or play any clip to see the chemistry working."
          className="mb-9 max-w-[660px]"
        />

        <VideoGrid />

        <p className="mx-auto mt-9 max-w-[680px] text-center text-[12.5px] leading-[1.7] text-muted">
          Videos are hosted on YouTube and load only when you press play, so no
          third-party cookies are set until you choose to watch.
        </p>
      </SectionPanel>

      {/* ROUTE ONWARD */}
      <SectionPanel tone="tint" outerClassName="p-3">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-start gap-9">
          <Reveal dir="left">
            <SectionHeading
              eyebrow="SEEN SOMETHING RELEVANT?"
              title="Read the Process Behind It"
              className="mb-7 max-w-[520px]"
            />
            <ul className="flex flex-col gap-2.5 pl-0">
              {FURTHER.map((l) => (
                <li key={l.href} className="list-none">
                  <TransitionLink
                    href={l.href}
                    className="group flex items-center justify-between gap-4 rounded-card bg-white px-5 py-4 text-[14px] font-semibold text-navy no-underline ring-1 ring-inset ring-line-2 transition-colors duration-300 hover:ring-green/30"
                  >
                    {l.label}
                    <span className="text-green">
                      <Arrow />
                    </span>
                  </TransitionLink>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal dir="right">
            <MicroForm
              context="Cleaning videos"
              heading="Want this run on your parts?"
              blurb="Tell us what you are cleaning and we will film — or simply report — the same trial on your own components."
            />
          </Reveal>
        </div>
      </SectionPanel>

      <CtaBanner
        eyebrow="SEE IT ON YOUR OWN PARTS"
        heading="Send Us a Sample Component"
        body="Our lab tests it against your soils and substrates, then runs a supervised trial on your line — from a single 20 L pail."
        ctaLabel="Request a Free Consultation"
        ctaHref="/get-consultation"
        image="/photos/qc-lab.webp"
      />
    </>
  );
}

const FURTHER = [
  { label: "Ultrasonic cleaning solutions", href: "/solutions/ultrasonic-cleaning" },
  { label: "Spray & jet washing solutions", href: "/solutions/spray-jet-cleaning" },
  { label: "Cleaning aluminium without etching", href: "/blog/aluminium-cleaning-chemical-guide" },
  { label: "Carbon deposit removal", href: "/blog/carbon-deposit-removal-guide" },
  { label: "Case studies — measured results", href: "/resources/case-studies" },
  { label: "All 41 products", href: "/products" },
];
