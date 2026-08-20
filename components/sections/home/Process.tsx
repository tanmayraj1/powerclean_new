import { Reveal } from "@/components/motion/Reveal";
import { SectionPanel } from "@/components/ui/SectionPanel";
import { SectionHeading } from "@/components/ui/SectionHeading";

// REAL — Roovel's published End-to-End Partnership process
const STEPS = [
  {
    num: "01",
    title: "Requirement Mapping",
    time: "on-site",
    body: "Understand your components, contaminants, process requirements, and cleaning objectives.",
    dir: "left" as const,
  },
  {
    num: "02",
    title: "Contaminant & Part Study",
    time: "your parts",
    body: "Analyze parts and contaminants to identify the most effective cleaning solution.",
    dir: "right" as const,
  },
  {
    num: "03",
    title: "Lab Validation",
    time: "our lab",
    body: "Validate cleaning performance, compatibility, bath life, and overall process efficiency.",
    dir: "left" as const,
  },
  {
    num: "04",
    title: "Solution Recommendation",
    time: "matched grade",
    body: "Recommend the ideal formulation based on testing and application requirements.",
    dir: "right" as const,
  },
  {
    num: "05",
    title: "Trial & Feedback",
    time: "on your line",
    body: "Conduct onsite trials and optimize performance using real production feedback — free chemical samples for qualified applications.",
    dir: "left" as const,
    highlight: true,
  },
  {
    num: "06",
    title: "Supply & Support",
    time: "continuous",
    body: "Ensure reliable supply with continuous technical guidance and after-sales support.",
    dir: "right" as const,
  },
];

/** Real six-step End-to-End Partnership — a navy dark moment; the trial step carries the accent. */
export function Process() {
  return (
    <SectionPanel tone="navy" outerClassName="p-3">
      <SectionHeading
        eyebrow="PROCESS"
        title="An End-to-End Partnership"
        lede="Roovel doesn’t just sell a chemical — our published six-step process takes you from requirement mapping to a running, supported cleaning program."
        light
        className="mb-[42px] max-w-[620px]"
      />
      <div className="mx-auto max-w-[980px]">
        <div className="flex flex-col gap-3.5">
          {STEPS.map((s, i) => (
            <Reveal
              key={s.num}
              dir={s.dir}
              delay={i * 80}
              className={`flex items-start gap-[18px] rounded-img-lg px-[22px] py-5 transition-transform duration-300 hover:translate-x-1.5 ${
                s.highlight
                  ? "bg-green/15 ring-1 ring-green/40"
                  : "bg-white/6 ring-1 ring-white/10"
              }`}
            >
              <span
                className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-[15px] font-bold ${
                  s.highlight ? "bg-green-deep text-white" : "bg-white text-navy"
                }`}
              >
                {s.num}
              </span>
              <div className="flex-1">
                <div className="flex flex-wrap justify-between gap-3">
                  <h3 className="text-[17px] font-semibold text-white">
                    {s.title}
                  </h3>
                  <span
                    className={`rounded-full px-3 py-[5px] font-mono text-[11px] ${
                      s.highlight
                        ? "bg-white font-semibold text-navy"
                        : "bg-white/12 text-white/80"
                    }`}
                  >
                    {s.time}
                  </span>
                </div>
                <p className="mt-2 text-[13.5px] leading-[1.6] text-white/65">
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionPanel>
  );
}
