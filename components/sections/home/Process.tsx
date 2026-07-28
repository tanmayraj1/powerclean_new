import { Reveal } from "@/components/motion/Reveal";
import { SectionPanel } from "@/components/ui/SectionPanel";
import { SectionHeading } from "@/components/ui/SectionHeading";

const STEPS = [
  {
    num: "01",
    title: "Discovery & Site Audit",
    time: "1–2 weeks",
    body: "We walk your line, sample soils and substrates, and document the current wash process, chemistry, and costs.",
    dir: "left" as const,
  },
  {
    num: "02",
    title: "Formulation Match",
    time: "2–3 weeks",
    body: "Our lab matches or custom-blends chemistry against your samples, validating dilution, temperature, and contact time.",
    dir: "right" as const,
  },
  {
    num: "03",
    title: "Supervised Plant Trial",
    time: "1 week · on your line",
    body: "A live trial on your equipment with our applications engineer on-site — measured against agreed pass/fail criteria before you commit.",
    dir: "left" as const,
    highlight: true,
  },
  {
    num: "04",
    title: "Deployment",
    time: "1–2 weeks",
    body: "Dosing setup, operator training, SOPs, and safety documentation — handed over with your first production supply.",
    dir: "right" as const,
  },
  {
    num: "05",
    title: "Ongoing Support",
    time: "continuous",
    body: "Bath monitoring, scheduled resupply, and quarterly optimization reviews to keep cost-per-part trending down.",
    dir: "left" as const,
  },
];

/** 5-step engagement process — step 03 (the trial) carries the accent. */
export function Process() {
  return (
    <SectionPanel outerClassName="p-3">
      <SectionHeading
        eyebrow="PROCESS"
        title="How an Engagement Works"
        lede="A structured path from first site audit to a running, supported cleaning program."
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
                s.highlight ? "bg-green-tint" : "bg-card-tint"
              }`}
            >
              <span
                className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-[15px] font-bold text-white ${
                  s.highlight ? "bg-green" : "bg-navy"
                }`}
              >
                {s.num}
              </span>
              <div className="flex-1">
                <div className="flex flex-wrap justify-between gap-3">
                  <h3 className="text-[17px] font-semibold text-navy">
                    {s.title}
                  </h3>
                  <span
                    className={`rounded-full bg-white px-3 py-[5px] font-mono text-[11px] ${
                      s.highlight ? "font-semibold text-navy" : "text-muted"
                    }`}
                  >
                    {s.time}
                  </span>
                </div>
                <p
                  className={`mt-2 text-[13.5px] leading-[1.6] ${
                    s.highlight ? "text-muted-3" : "text-muted"
                  }`}
                >
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
