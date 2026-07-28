import { Reveal } from "@/components/motion/Reveal";
import { SectionPanel } from "@/components/ui/SectionPanel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { Arrow } from "@/components/ui/Arrow";
import { resources } from "@/lib/site-config";

/** Resources grid on a green-tint wash — 3 article cards (PLACEHOLDER articles). */
export function Resources() {
  return (
    <SectionPanel id="resources" tone="tint" outerClassName="p-3">
      <SectionHeading
        eyebrow="RESOURCES"
        title="The Cleaning Knowledge Center"
        lede="Application notes and guides from our technical team."
        className="mb-10 max-w-[620px]"
      />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5">
        {resources.map((r, i) => (
          <Reveal key={r.title} dir="up" delay={i * 120}>
            <a
              href="#"
              className="group block rounded-card bg-[linear-gradient(170deg,#ffffff_0%,#fbfdfc_60%,#f4faf7_100%)] px-3 pb-5 pt-3 no-underline ring-1 ring-inset ring-line-2 transition-[transform,box-shadow,ring-color] duration-[350ms] hover:-translate-y-1.5 hover:shadow-card-lg hover:ring-green/25"
            >
              <div className="relative mb-4 h-[180px] overflow-hidden rounded-img">
                <ImageSlot brief={r.image} className="absolute inset-0" />
              </div>
              <div className="px-2">
                <h3 className="mb-2.5 text-base font-semibold leading-[1.4] text-navy">
                  {r.title}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted">{r.byline}</span>
                  <span className="flex h-[26px] w-[26px] items-center justify-center rounded-full bg-green-tint text-[12px] text-green">
                    <Arrow />
                  </span>
                </div>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </SectionPanel>
  );
}
