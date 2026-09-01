import { PageHero } from "@/components/ui/PageHero";
import { SectionPanel } from "@/components/ui/SectionPanel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { Arrow } from "@/components/ui/Arrow";
import { FaqList } from "@/components/ui/FaqList";
import { Reveal } from "@/components/motion/Reveal";
import { MicroForm } from "@/components/ui/MicroForm";
import { TransitionLink } from "@/components/layout/TransitionLink";
import type { Method } from "@/lib/methods";

/**
 * A cleaning-method page — /solutions/ultrasonic-cleaning and friends.
 *
 * The client's architecture organises Solutions by method; these four sit
 * alongside the six existing product deep-dives in the same route. Layout
 * mirrors the industry pages so the site reads as one system.
 */
export function MethodPage({ method: m }: { method: Method }) {
  return (
    <>
      <PageHero
        title={m.title}
        eyebrow={`SOLUTION · ${m.name.toUpperCase()}`}
        blurb={m.intro}
        minHeight="min(56vh, 490px)"
        titleClassName="text-[clamp(28px,3.8vw,54px)]"
        image={m.photo}
        imageAlt={m.photoAlt}
      />

      <nav
        aria-label="Breadcrumb"
        className="mx-auto max-w-[1320px] px-5 pt-6 text-[12.5px] text-muted"
      >
        <TransitionLink href="/solutions" className="hover:text-green">
          Solutions
        </TransitionLink>
        <span className="mx-2 text-line-3">/</span>
        <span className="text-navy">{m.name}</span>
      </nav>

      <SectionPanel outerClassName="px-3 pb-3 pt-6">
        {/* THE ANSWER */}
        <Reveal dir="up" as="div">
          <div className="page-answer mb-9 rounded-card-lg bg-navy p-[clamp(22px,3vw,36px)]">
            <h2 className="mb-3 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#4FD98A]">
              The short answer
            </h2>
            <p className="max-w-[760px] text-[clamp(15.5px,1.7vw,18px)] font-medium leading-[1.6] text-white [text-wrap:pretty]">
              {m.answer}
            </p>
          </div>
        </Reveal>

        {/* PROCESS SPEC */}
        <Reveal dir="up" as="div">
          <dl className="mb-12 grid grid-cols-[repeat(auto-fit,minmax(170px,1fr))] gap-x-6 gap-y-5 rounded-card bg-green-tint p-7">
            {m.spec.map((s) => (
              <div key={s.label}>
                <dt className="mb-1 font-mono text-[10.5px] uppercase tracking-[0.1em] text-green-deep">
                  {s.label}
                </dt>
                <dd className="text-[15px] font-semibold text-navy">{s.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        {/* HOW IT WORKS */}
        <div className="mx-auto mb-14 max-w-[820px]">
          <SectionHeading
            eyebrow="HOW IT WORKS"
            title={`${m.name} in practice`}
            className="mb-7"
          />
          {m.body.map((para, i) => (
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

      {/* WHAT GOES WRONG */}
      <SectionPanel tone="tint" outerClassName="p-3">
        <SectionHeading
          eyebrow="WHAT GOES WRONG"
          title="The Failure Modes"
          lede="These are the problems we are called in for most often on this method — and what causes each one."
          className="mb-9 max-w-[660px]"
        />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5">
          {m.pitfalls.map((c, i) => (
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

      {/* PROCEDURE + GRADES */}
      <div className="mx-auto max-w-[1320px] px-5 py-[clamp(40px,6vw,72px)]">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-start gap-9">
          <Reveal dir="left">
            <SectionHeading
              eyebrow="THE PROCEDURE"
              title="Running It Properly"
              className="mb-7 max-w-[520px]"
            />
            <ol className="flex flex-col gap-4 pl-0">
              {m.steps.map((s, i) => (
                <li key={s.name} className="flex list-none gap-4">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-navy font-mono text-[11.5px] font-bold text-white">
                    {i + 1}
                  </span>
                  <span>
                    <span className="mb-1 block text-[15px] font-semibold text-navy">
                      {s.name}
                    </span>
                    <span className="block text-[13.5px] leading-[1.65] text-muted-3">
                      {s.text}
                    </span>
                  </span>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal dir="right">
            <SectionHeading
              eyebrow="MATCHED GRADES"
              title="What We Recommend"
              className="mb-7 max-w-[520px]"
            />
            <div className="flex flex-col gap-3">
              {m.products.map((p) => (
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

            <h3 className="mb-3 mt-8 border-b border-line-2 pb-2.5 font-mono text-[10.5px] uppercase tracking-[0.12em] text-green-deep">
              Read further
            </h3>
            <ul className="flex flex-col gap-1.5 pl-0">
              {m.related.map((r) => (
                <li key={r.href} className="list-none">
                  <TransitionLink
                    href={r.href}
                    className="block text-[13px] leading-[1.45] text-muted-3 no-underline transition-colors hover:text-green"
                  >
                    {r.label}
                  </TransitionLink>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>

      {/* FAQ */}
      <SectionPanel tone="tint" outerClassName="p-3">
        <SectionHeading
          eyebrow="QUESTIONS"
          title={`${m.name} — FAQ`}
          className="mb-9 max-w-[620px]"
        />
        <div className="mx-auto max-w-[880px]">
          <FaqList faqs={m.faqs} />
        </div>

        <div className="mx-auto mt-10 max-w-[880px]">
          <MicroForm
            context={`Method: ${m.name}`}
            heading={`Running ${m.name.toLowerCase()}?`}
            blurb="Tell us the part and the equipment, and we will come back with a matched grade, dilution and trial plan."
          />
        </div>
      </SectionPanel>

      <CtaBanner
        eyebrow="NEXT STEP"
        heading="Prove It on Your Own Line"
        body="Send a sample part with your soil and equipment details. The lab matches a formulation and returns a dosing and trial plan before anything ships in volume."
        ctaLabel="Request a Trial"
        ctaHref="/get-consultation"
        image={m.photo}
      />
    </>
  );
}
