import { SectionPanel } from "@/components/ui/SectionPanel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { TransitionLink } from "@/components/layout/TransitionLink";

/**
 * The old homepage's product-uses and versatility claims: one chemistry
 * across manual, ultrasonic, spray and immersion processes, with the grades
 * that match each machine.
 */

const PROCESSES: {
  title: string;
  body: string;
  grades: { label: string; slug: string }[];
}[] = [
  {
    title: "Manual & Soak Cleaning",
    body: "Hand wipe, brush or soak — concentrates that work at ambient temperature and low dilution, with no fumes on the shop floor.",
    grades: [
      { label: "XL", slug: "power-clean-xl" },
      { label: "SS", slug: "power-clean-ss" },
      { label: "CD-9", slug: "power-clean-cd-9" },
    ],
  },
  {
    title: "Ultrasonic Machines",
    body: "Single-stage and multi-stage ultrasonic systems — cavitation-friendly chemistry for intricate parts, blind holes and millipore targets.",
    grades: [
      { label: "XL", slug: "power-clean-xl" },
      { label: "NF-14", slug: "power-clean-nf-14" },
      { label: "LF-59", slug: "power-clean-lf-59" },
    ],
  },
  {
    title: "Hi-Jet Spray & Tunnel",
    body: "Low and no-foam grades built for jet spray, rotary and conveyor tunnel washers — full mechanical energy, no pump cavitation.",
    grades: [
      { label: "LF", slug: "power-clean-lf" },
      { label: "LF-45", slug: "power-clean-lf-45" },
      { label: "XL-32", slug: "power-clean-xl-32" },
    ],
  },
  {
    title: "Dip & Immersion Tanks",
    body: "Heated dip and agitated immersion tanks — suspends and disperses soils, sheets off water, and leaves rust protection behind.",
    grades: [
      { label: "SP", slug: "power-clean-sp" },
      { label: "BW-77", slug: "power-clean-bw-77" },
      { label: "RP-14", slug: "pc-rp-14" },
    ],
  },
];

const VERSATILITY = [
  "Low or no-foam grades for high-jet spray machines",
  "Hi-foam cleaners for automotive service stations",
  "Works on regular tap water",
  "Effective even at low concentration",
  "Longer bath life — change your wash bath less often",
  "Runs from ambient temperature up to high-temperature cycles",
];

export function WashProcesses() {
  return (
    <SectionPanel tone="tint" outerClassName="p-3">
      <SectionHeading
        eyebrow="ONE CHEMISTRY, EVERY WASH PROCESS"
        title="Built for the Machine You Run"
        lede="Power Clean degreasing chemicals are used manually and in single-stage or multi-stage ultrasonic machines, soak tanks and industrial hi-jet spray systems — one supplier across every line."
        className="mb-10 max-w-[680px]"
      />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
        {PROCESSES.map((p, i) => (
          <Reveal
            key={p.title}
            dir="up"
            delay={i * 90}
            className="flex flex-col rounded-card-lg bg-white p-6"
          >
            <span className="mb-3.5 font-mono text-[12px] font-semibold text-green-deep">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mb-2 text-[15.5px] font-semibold leading-tight text-navy">
              {p.title}
            </h3>
            <p className="mb-4 flex-1 text-[13px] leading-[1.65] text-muted-3">
              {p.body}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {p.grades.map((g) => (
                <TransitionLink
                  key={g.slug}
                  href={`/catalogue/${g.slug}`}
                  className="rounded-full bg-green-tint px-3 py-1 font-mono text-[11px] font-semibold text-navy no-underline transition-colors hover:bg-navy hover:text-white"
                >
                  {g.label}
                </TransitionLink>
              ))}
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal dir="up" className="mt-8 rounded-card-lg bg-white/70 p-6">
        <ul className="grid list-none grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-x-8 gap-y-2.5 p-0">
          {VERSATILITY.map((v) => (
            <li key={v} className="flex items-start gap-2.5">
              <span aria-hidden="true" className="mt-0.5 font-bold text-green-deep">
                +
              </span>
              <span className="text-[13.5px] leading-[1.6] text-muted-3">{v}</span>
            </li>
          ))}
        </ul>
        <p className="mt-5 border-t border-line-2 pt-4 text-[13px] leading-[1.65] text-muted-3">
          One-stop solution: we also help you procure the right cleaning
          machine — table-top ultrasonic, multi-stage ultrasonic or hi-jet
          spray — supply free chemical samples, and train your team on the
          complete process.
        </p>
      </Reveal>
    </SectionPanel>
  );
}
