import { Backdrop } from "@/components/ui/Backdrop";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Arrow } from "@/components/ui/Arrow";
import { Reveal } from "@/components/motion/Reveal";
import { TransitionLink } from "@/components/layout/TransitionLink";
import { applicationsIndex } from "@/lib/site-config";

/**
 * The full applications list from the live powerclean.in homepage as
 * semantic, crawlable grouped lists — the page's widest keyword surface.
 */
export function ApplicationsIndex() {
  return (
    <div className="relative isolate mx-auto max-w-[1320px] px-5 py-[clamp(40px,6vw,80px)]">
      <Backdrop />
      <Backdrop
        variant="rings"
        className="left-[-14%] top-[10%] h-[520px] w-[520px]"
      />
      <SectionHeading
        eyebrow="APPLICATIONS"
        title="Everything Power Clean Cleans"
        lede="From carburettors to cooling towers — the applications our degreasing and cleaning chemicals serve every day across Indian plants."
        className="mb-10 max-w-[640px]"
      />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-x-8 gap-y-8">
        {applicationsIndex.map((g, i) => (
          <Reveal key={g.group} dir="up" delay={i * 90}>
            <h3 className="mb-3.5 border-b border-line-2 pb-2.5 text-[13px] font-semibold uppercase tracking-[0.1em] text-navy">
              {g.group}
            </h3>
            <ul className="m-0 flex list-none flex-col gap-2 p-0">
              {g.items.map((item) => (
                <li
                  key={item}
                  className="group flex items-start gap-2.5 text-[13.5px] leading-[1.55] text-muted-3 transition-[color,transform] duration-300 hover:translate-x-1 hover:text-navy"
                >
                  <span
                    aria-hidden="true"
                    className="mt-[7px] h-[5px] w-[5px] shrink-0 rounded-full bg-green transition-transform duration-300 group-hover:scale-150"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
      <Reveal dir="up" className="mt-10 flex flex-wrap gap-3">
        <TransitionLink
          href="/catalogue"
          className="group rounded-full bg-green-cta px-6 py-3 text-[13.5px] font-semibold text-white no-underline shadow-cta transition-colors hover:bg-green-cta-dark"
        >
          Browse all 41 products <Arrow />
        </TransitionLink>
        <TransitionLink
          href="/catalogue#range"
          className="group rounded-full border-[1.5px] border-navy px-6 py-3 text-[13.5px] font-semibold text-navy no-underline transition-colors hover:bg-navy hover:text-white"
        >
          Explore by family <Arrow />
        </TransitionLink>
      </Reveal>
    </div>
  );
}
