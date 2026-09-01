import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { SectionPanel } from "@/components/ui/SectionPanel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { Arrow } from "@/components/ui/Arrow";
import { Reveal } from "@/components/motion/Reveal";
import { MicroForm } from "@/components/ui/MicroForm";
import { TransitionLink } from "@/components/layout/TransitionLink";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  SITE_URL,
  breadcrumbJsonLd,
  faqJsonLd,
  webPageJsonLd,
} from "@/lib/seo";
import { industryPages, getIndustry } from "@/lib/industries";

export const dynamicParams = false;

export function generateStaticParams() {
  return industryPages.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const ind = getIndustry(slug);
  if (!ind) return {};
  return {
    title: ind.metaTitle,
    description: ind.metaDescription,
    keywords: ind.keywords,
    alternates: { canonical: `/industries/${ind.slug}` },
    openGraph: {
      type: "article",
      title: ind.metaTitle,
      description: ind.metaDescription,
      url: `${SITE_URL}/industries/${ind.slug}`,
      images: [{ url: ind.photo, alt: ind.photoAlt }],
    },
  };
}

export default async function IndustryPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const ind = getIndustry(slug);
  if (!ind) notFound();

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Industries", url: `${SITE_URL}/industries` },
            { name: ind.name, url: `${SITE_URL}/industries/${ind.slug}` },
          ]),
          faqJsonLd(ind.faqs),
          webPageJsonLd({
            name: ind.title,
            description: ind.metaDescription,
            path: `/industries/${ind.slug}`,
            about: [ind.name, "Industrial cleaning chemicals"],
          }),
        ]}
      />
      <PageHero
        title={ind.title}
        eyebrow={`INDUSTRY · ${ind.name.toUpperCase()}`}
        blurb={ind.intro}
        minHeight="min(56vh, 500px)"
        titleClassName="text-[clamp(28px,3.8vw,54px)]"
        image={ind.photo}
        imageAlt={ind.photoAlt}
      />

      <nav
        aria-label="Breadcrumb"
        className="mx-auto max-w-[1320px] px-5 pt-6 text-[12.5px] text-muted"
      >
        <TransitionLink href="/industries" className="hover:text-green">
          Industries
        </TransitionLink>
        <span className="mx-2 text-line-3">/</span>
        <span className="text-navy">{ind.name}</span>
      </nav>

      {/* THE ANSWER */}
      <SectionPanel outerClassName="px-3 pb-3 pt-6">
        <Reveal dir="up" as="div">
          <div className="page-answer mb-9 rounded-card-lg bg-navy p-[clamp(22px,3vw,36px)]">
            <h2 className="mb-3 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#4FD98A]">
              The short answer
            </h2>
            <p className="max-w-[760px] text-[clamp(15.5px,1.7vw,18px)] font-medium leading-[1.6] text-white [text-wrap:pretty]">
              {ind.answer}
            </p>
          </div>
        </Reveal>

        {/* SPEC STRIP */}
        <Reveal dir="up" as="div">
          <dl className="mb-12 grid grid-cols-[repeat(auto-fit,minmax(170px,1fr))] gap-x-6 gap-y-5 rounded-card bg-green-tint p-7">
            {ind.spec.map((s) => (
              <div key={s.label}>
                <dt className="mb-1 font-mono text-[10.5px] uppercase tracking-[0.1em] text-green-deep">
                  {s.label}
                </dt>
                <dd className="text-[15px] font-semibold text-navy">{s.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        {/* CHALLENGES */}
        <SectionHeading
          eyebrow="WHAT GOES WRONG"
          title={`The ${ind.name} Failure Modes`}
          lede="These are the problems we are called in for most often in this sector — and what causes each one."
          className="mb-9 max-w-[660px]"
        />
        <div className="mb-14 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5">
          {ind.challenges.map((c, i) => (
            <Reveal
              key={c.title}
              dir="up"
              delay={Math.min(i, 4) * 80}
              className="rounded-card-lg bg-white p-7 ring-1 ring-inset ring-line-2"
            >
              <span className="mb-3.5 flex h-8 w-8 items-center justify-center rounded-full bg-green-tint font-mono text-[12px] font-bold text-green-deep">
                {i + 1}
              </span>
              <h3 className="mb-2.5 text-[16.5px] font-semibold leading-[1.35] text-navy">
                {c.title}
              </h3>
              <p className="text-[13.5px] leading-[1.68] text-muted-3">
                {c.body}
              </p>
            </Reveal>
          ))}
        </div>
      </SectionPanel>

      {/* PRODUCTS + APPLICATIONS */}
      <SectionPanel tone="tint" outerClassName="p-3">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-start gap-9">
          <Reveal dir="left">
            <SectionHeading
              eyebrow="MATCHED GRADES"
              title="What We Recommend"
              className="mb-7 max-w-[520px]"
            />
            <div className="flex flex-col gap-3">
              {ind.products.map((p) => (
                <TransitionLink
                  key={p.href}
                  href={p.href}
                  className="group rounded-card bg-white p-5 no-underline ring-1 ring-inset ring-line-2 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-card-lg"
                >
                  <span className="mb-1.5 flex items-center justify-between text-[15px] font-semibold text-navy transition-colors group-hover:text-green">
                    {p.name} <Arrow />
                  </span>
                  <span className="block text-[13px] leading-[1.6] text-muted-3">
                    {p.why}
                  </span>
                </TransitionLink>
              ))}
            </div>
          </Reveal>
          <Reveal dir="right">
            <SectionHeading
              eyebrow="APPLICATIONS"
              title="Where It Is Used"
              className="mb-7 max-w-[520px]"
            />
            <ul className="flex flex-wrap gap-2.5 pl-0">
              {ind.applications.map((a) => (
                <li
                  key={a}
                  className="list-none rounded-full bg-white px-4 py-2 text-[13px] font-medium text-navy ring-1 ring-inset ring-line-2"
                >
                  {a}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </SectionPanel>

      {/* FAQ */}
      <div className="mx-auto max-w-[900px] px-5 py-[clamp(40px,6vw,80px)]">
        <SectionHeading
          eyebrow="QUESTIONS"
          title={`${ind.name} Cleaning — FAQ`}
          className="mb-9 max-w-[620px]"
        />
        <div className="flex flex-col gap-4">
          {ind.faqs.map((f, i) => (
            <Reveal
              key={f.q}
              dir="up"
              delay={Math.min(i, 4) * 70}
              className="rounded-card bg-white p-7 ring-1 ring-inset ring-line-2"
            >
              <h3 className="mb-2.5 text-[16px] font-semibold leading-[1.4] text-navy">
                {f.q}
              </h3>
              <p className="text-[14px] leading-[1.7] text-muted-3 [text-wrap:pretty]">
                {f.a}
              </p>
            </Reveal>
          ))}
        </div>

        {/* lead capture — the architecture asks for one on every page */}
        <Reveal dir="up" className="mt-10">
          <MicroForm
            context={`Industry: ${ind.name}`}
            heading={`Cleaning ${ind.name.toLowerCase()} components?`}
            blurb="Tell us the part and the soil, and we will come back with a matched grade, dilution and trial plan."
          />
        </Reveal>

        {/* related reading */}
        <Reveal dir="up" className="mt-10 border-t border-line-2 pt-8">
          <h2 className="mb-4 text-[17px] font-semibold text-navy">
            Read further
          </h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-3.5">
            {ind.related.map((r) => (
              <TransitionLink
                key={r.href}
                href={r.href}
                className="group flex items-center justify-between gap-3 rounded-card bg-white px-5 py-4 text-[13.5px] font-semibold text-navy no-underline ring-1 ring-inset ring-line-2 transition-colors duration-300 hover:ring-green/30"
              >
                {r.label}
                <span className="text-green">
                  <Arrow />
                </span>
              </TransitionLink>
            ))}
          </div>
        </Reveal>
      </div>

      <CtaBanner
        eyebrow="NEXT STEP"
        heading={`Run a Trial on Your ${ind.name} Line`}
        body="Send a sample part with your soil and wash equipment details. The lab matches a formulation and returns a dosing and trial plan before anything ships in volume."
        ctaLabel="Request a Trial"
        ctaHref="/contact"
        image={ind.photo}
      />
    </>
  );
}
