import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { SectionPanel } from "@/components/ui/SectionPanel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RippleDivider } from "@/components/ui/RippleDivider";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { Arrow } from "@/components/ui/Arrow";
import { Reveal } from "@/components/motion/Reveal";
import { CountUp } from "@/components/motion/CountUp";
import { GrowBar } from "@/components/motion/GrowBar";
import { Magnetic } from "@/components/motion/Magnetic";
import { InspectImage } from "@/components/motion/InspectImage";
import { HScrollGallery } from "@/components/motion/HScrollGallery";
import { TransitionLink } from "@/components/layout/TransitionLink";
import { BeforeAfterSlider } from "@/components/sections/solution-detail/BeforeAfterSlider";
import {
  deploySteps,
  detailTestimonial,
  getSolution,
  packagingRows,
  sharedGalleryPhotos,
  solutions,
} from "@/lib/solutions";

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export const dynamicParams = false;

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const solution = getSolution(slug);
  if (!solution) return {};
  return {
    title: `${solution.name} — Industrial Cleaning Solution`,
    description: solution.tagline,
    alternates: { canonical: `/solutions/${slug}` },
    openGraph: {
      title: `${solution.name} · Power Clean`,
      description: solution.tagline,
    },
  };
}

export default async function SolutionDetailPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const solution = getSolution(slug);
  if (!solution) notFound();
  const related = solution.related
    .map(getSolution)
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <>
      <PageHero
        title={solution.name}
        eyebrow="SOLUTION DETAILS"
        blurb={solution.tagline}
        minHeight="min(58vh, 500px)"
        titleClassName="text-[clamp(34px,4.6vw,66px)]"
      />

      {/* ABOUT + SPECS SIDEBAR */}
      <div className="mx-auto max-w-[1320px] px-5 pb-5 pt-[clamp(36px,5vw,64px)]">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-start gap-7">
          <Reveal dir="left">
            <Eyebrow label="ABOUT" className="mb-3.5" />
            <h2 className="mb-[18px] text-[clamp(28px,3.4vw,42px)] font-semibold leading-[1.12] tracking-[-0.02em] text-navy">
              Learn About This Product
            </h2>
            <p className="mb-4 text-[14.5px] leading-[1.7] text-muted">
              {solution.about[0]}
            </p>
            <p className="mb-7 text-[14.5px] leading-[1.7] text-muted">
              {solution.about[1]}
            </p>
            <Eyebrow label="WHAT IT SOLVES" className="mb-3.5" />
            <div className="flex flex-col gap-3">
              {solution.removes.map((r) => (
                <div key={r} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-green-tint text-[11px] font-bold text-green">
                    ✓
                  </span>
                  <span className="text-sm text-ink">{r}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal
            dir="right"
            className="sticky top-[90px] rounded-card-lg bg-white p-7"
          >
            <h3 className="mb-1.5 text-lg font-semibold text-navy">
              Inside The Product
            </h3>
            <p className="mb-5 text-[12.5px] leading-[1.6] text-muted">
              Key specifications at a glance — full technical data sheet on
              request.
            </p>
            <div className="mb-[22px] grid grid-cols-2 gap-x-5 gap-y-4">
              {solution.specs.map((s) => (
                <div key={s.label}>
                  <div className="mb-[3px] text-[11px] text-muted">
                    {s.label}
                  </div>
                  <div className="font-mono text-[12.5px] font-semibold tracking-[-0.02em] text-ink">
                    {s.value}
                  </div>
                </div>
              ))}
            </div>
            <InspectImage className="relative mb-5 h-[150px] overflow-hidden rounded-img">
              <ImageSlot
                brief="[PRODUCT PHOTO PLACEHOLDER — 35L pail / 200L barrel, to be replaced with real photography]"
                src="/photos/packaging.webp"
                alt="Blue supply drums staged beside the filling line"
                className="absolute inset-0"
              />
            </InspectImage>
            <Magnetic style={{ display: "block" }}>
              <TransitionLink
                href="/contact"
                className="group block rounded-full bg-green-cta p-[13px] text-center text-sm font-semibold text-white no-underline shadow-[0_6px_20px_rgba(0,166,81,.3)] transition-colors hover:bg-green-cta-dark"
              >
                Request a Sample <Arrow />
              </TransitionLink>
            </Magnetic>
          </Reveal>
        </div>
      </div>

      {/* DILUTION MOTION GRAPHIC */}
      <SectionPanel tone="tint" outerClassName="p-3">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-center gap-9">
          <Reveal dir="left">
            <Eyebrow label="DILUTION" className="mb-3.5" />
            <h2 className="mb-4 text-[clamp(26px,3.2vw,40px)] font-semibold leading-[1.15] tracking-[-0.02em] text-navy">
              {solution.dilution.heading}
            </h2>
            <p className="mb-6 text-[14.5px] leading-[1.7] text-muted-3">
              {solution.dilution.body}
            </p>
            <div className="flex flex-wrap gap-[34px]">
              {solution.dilution.stats.map((s) => (
                <div key={s.caption}>
                  <div className="font-mono text-[30px] font-semibold tracking-[-0.04em] text-navy">
                    <CountUp
                      to={s.count}
                      dec={s.dec ?? 0}
                      prefix={s.prefix ?? ""}
                      suffix={s.suffix ?? ""}
                    />
                  </div>
                  <div className="text-xs text-muted-3">{s.caption}</div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal dir="right" className="rounded-card-lg bg-white p-[30px] shadow-card">
            <div className="mb-[22px] text-[13px] font-semibold text-navy">
              {solution.dilution.barsTitle}
            </div>
            {solution.dilution.bars.map((b, i) => (
              <div key={b.label} className={i === 0 ? "mb-5" : "mb-[26px]"}>
                <div className="mb-2 flex justify-between text-xs text-muted">
                  <span>{b.label}</span>
                  <span
                    className={`font-semibold ${b.color === "green" ? "text-green-deep" : "text-navy"}`}
                  >
                    {b.value}
                  </span>
                </div>
                <div className="h-[18px] overflow-hidden rounded-full bg-line-2">
                  <GrowBar
                    axis="x"
                    delay={0.2 + i * 0.25}
                    className={`h-full min-w-[26px] rounded-full ${
                      b.color === "green" ? "bg-green" : "bg-navy"
                    }`}
                    style={{ width: `${b.percent}%` }}
                  />
                </div>
              </div>
            ))}
            <div className="flex items-center gap-3.5 rounded-img bg-green-tint px-[18px] py-3.5">
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#00A651"
                strokeWidth="1.8"
                aria-hidden="true"
              >
                <path d="M12 2s6 7 6 12a6 6 0 01-12 0c0-5 6-12 6-12z" />
              </svg>
              <span className="text-[13px] leading-[1.5] text-ink">
                {solution.dilution.note}
              </span>
            </div>
          </Reveal>
        </div>
      </SectionPanel>

      {/* BEFORE / AFTER */}
      <SectionPanel outerClassName="p-3">
        <SectionHeading
          eyebrow="RESULTS"
          title="Before & After, One Wash Cycle"
          lede={solution.beforeAfterCaption}
          size="md"
          className="mb-9 max-w-[620px]"
        />
        <BeforeAfterSlider />
      </SectionPanel>

      {/* HOW WE DEPLOY */}
      <div className="mx-auto max-w-[1320px] px-5 py-[clamp(40px,6vw,72px)]">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-center gap-8">
          <Reveal
            dir="left"
            className="relative min-h-[420px] overflow-hidden rounded-card-lg"
          >
            <ImageSlot
              brief="Photo — applications engineer beside a running parts washer"
              className="absolute inset-0"
            />
          </Reveal>
          <Reveal dir="right">
            <Eyebrow label="HOW IT WORKS" className="mb-3.5" />
            <h2 className="mb-[26px] text-[clamp(28px,3.4vw,42px)] font-semibold leading-[1.12] tracking-[-0.02em] text-navy">
              From Sample to Running Bath
            </h2>
            <div className="relative pl-1">
              <GrowBar
                axis="y"
                duration={1.6}
                delay={0}
                className="absolute bottom-4 left-[17px] top-4 w-0.5 bg-[linear-gradient(#00A651,#292F6E)]"
              />
              <div className="flex flex-col gap-[22px]">
                {deploySteps.map((s, i) => (
                  <Reveal
                    key={s.num}
                    dir="up"
                    delay={i * 90}
                    className="relative flex gap-4"
                  >
                    <span
                      className={`flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full text-xs font-bold text-white ${
                        "highlight" in s && s.highlight
                          ? "bg-green-deep"
                          : "bg-navy"
                      }`}
                    >
                      {s.num}
                    </span>
                    <div>
                      <div className="text-[15px] font-semibold text-navy">
                        {s.title}
                      </div>
                      <div className="mt-[3px] text-[13px] leading-[1.6] text-muted">
                        {s.body}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* PACKAGING ROWS */}
      <SectionPanel outerClassName="p-3">
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
                row.highlight ? "bg-green-tint" : "bg-card-tint"
              }`}
            >
              <span className="shrink-0 rounded-full bg-white px-[18px] py-2.5 text-[13px] font-bold text-navy">
                {row.size}
              </span>
              <div className="min-w-[200px] flex-1">
                <div className="text-[15px] font-semibold text-navy">
                  {row.title}
                </div>
                <div
                  className={`mt-0.5 text-[12.5px] ${row.highlight ? "text-muted-3" : "text-muted"}`}
                >
                  {row.body}
                </div>
              </div>
              {row.highlight ? (
                <span className="rounded-full bg-white px-3 py-[5px] text-xs font-semibold text-navy">
                  {row.tag}
                </span>
              ) : (
                <span className="text-xs text-muted">{row.tag}</span>
              )}
            </Reveal>
          ))}
        </div>
      </SectionPanel>

      <RippleDivider />

      {/* TESTIMONIAL — REAL (TVS Group) */}
      <Reveal
        dir="up"
        className="mx-auto max-w-[900px] px-5 py-[clamp(40px,6vw,72px)] text-center"
      >
        <div className="mb-4 text-lg tracking-[3px] text-green">★★★★★</div>
        <p className="mb-5 text-[clamp(19px,2.4vw,26px)] font-medium leading-[1.5] text-ink [text-wrap:pretty]">
          &ldquo;{detailTestimonial.quote}&rdquo;
        </p>
        <div className="text-[15px] font-semibold text-navy">
          {detailTestimonial.name}
        </div>
        <div className="text-[12.5px] text-muted">{detailTestimonial.role}</div>
      </Reveal>

      {/* CTA */}
      <CtaBanner
        heading={solution.cta.heading}
        body={solution.cta.body}
        ctaLabel="Request a Sample"
        ctaHref="/contact"
        imageBrief="Photo — clean parts leaving the washer on a conveyor"
        minHeight={400}
      />

      {/* RELATED */}
      <div className="mx-auto max-w-[1320px] px-5 pb-5 pt-[clamp(40px,6vw,72px)]">
        <Reveal
          dir="up"
          className="mb-8 flex flex-wrap items-end justify-between gap-5"
        >
          <div>
            <Eyebrow label="OTHER SOLUTIONS" className="mb-3.5" />
            <h2 className="text-[clamp(26px,3.2vw,40px)] font-semibold tracking-[-0.02em] text-navy">
              Pairs Well With
            </h2>
          </div>
          <TransitionLink
            href="/solutions"
            className="rounded-full bg-green-tint px-[22px] py-[11px] text-[13.5px] font-semibold text-navy no-underline transition-colors hover:text-green"
          >
            View All Solutions
          </TransitionLink>
        </Reveal>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5">
          {related.map((r, i) => (
            <Reveal key={r.slug} dir="up" delay={i * 120}>
              <TransitionLink
                href={`/solutions/${r.slug}`}
                className="group block rounded-card border border-line-2 bg-white px-3 pb-5 pt-3 no-underline transition-[transform,box-shadow] duration-[350ms] hover:-translate-y-1.5 hover:shadow-card-lg"
              >
                <div className="relative mb-4 h-[170px] overflow-hidden rounded-img">
                  <ImageSlot brief={r.cardImage} className="absolute inset-0" />
                </div>
                <div className="px-2">
                  <h3 className="mb-1.5 text-[17px] font-semibold text-navy">
                    {r.name}
                  </h3>
                  <p className="text-[12.5px] leading-[1.6] text-muted">
                    {r.tagline}
                  </p>
                </div>
              </TransitionLink>
            </Reveal>
          ))}
        </div>
      </div>

      {/* SCROLL-DRIVEN GALLERY */}
      <div className="mx-auto max-w-[1320px] px-5 pb-[clamp(30px,5vw,50px)] pt-5">
        <HScrollGallery>
          {solution.gallery.map((g, i) => (
            <Reveal
              key={g}
              dir="clip"
              delay={i * 100}
              className="relative h-[220px] w-[min(340px,78vw)] shrink-0 overflow-hidden rounded-img-lg"
            >
              <ImageSlot
                brief={g}
                src={sharedGalleryPhotos[i]}
                className="absolute inset-0"
              />
            </Reveal>
          ))}
        </HScrollGallery>
      </div>
    </>
  );
}
