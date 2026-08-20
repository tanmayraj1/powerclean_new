import { Reveal } from "@/components/motion/Reveal";
import { SectionPanel } from "@/components/ui/SectionPanel";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * REAL methodology — the TACT cleaning principle Power Clean formulations are
 * optimised around: Time, Action, Chemical, Temperature, held in balance.
 * The example values are illustrative; every line gets its own spec.
 */
const FACTORS = [
  {
    letter: "T",
    title: "Time",
    accent: "#1d6fb8",
    soft: "#e3eef8",
    body: "The duration the cleaner stays in contact with the soil.",
    example: "e.g. 5–8 min spray / flood",
  },
  {
    letter: "A",
    title: "Action",
    accent: "#00853f",
    soft: "#e6f7ee",
    body: "Mechanical force that helps dislodge and remove soil.",
    example: "e.g. 2–4 bar, full-cone nozzle",
  },
  {
    letter: "C",
    title: "Chemical",
    accent: "#c2570b",
    soft: "#fdf0e3",
    body: "The cleaning agent that breaks down and suspends soil.",
    example: "e.g. 2.0% (20 ml per 1 L water)",
  },
  {
    letter: "T",
    title: "Temperature",
    accent: "#6d28d9",
    soft: "#f0eafa",
    body: "Heat that improves chemical performance and speeds up cleaning.",
    example: "e.g. 45 °C ideal · 50 °C max",
  },
];

const BALANCE = [
  { low: "Low temperature", fix: "increase time or chemical strength" },
  { low: "Low concentration", fix: "increase action or temperature" },
  { low: "Low action", fix: "increase time, temperature or chemical" },
  { low: "Shorter time", fix: "increase chemical, action or temperature" },
];

export function TactPrinciple() {
  return (
    <SectionPanel outerClassName="p-3">
      <SectionHeading
        eyebrow="THE TACT CLEANING PRINCIPLE"
        title="The Right Balance Delivers the Best Results"
        lede="Every Power Clean recommendation is optimised across four factors — Time, Action, Chemical and Temperature. Get the balance right and cleaning is consistent, fast and economical."
        className="mb-10 max-w-[680px]"
      />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-4">
        {FACTORS.map((f, i) => (
          <Reveal
            key={f.title}
            dir="up"
            delay={i * 90}
            className="rounded-card p-6 ring-1 ring-inset ring-line-2"
            style={{ background: f.soft }}
          >
            <span
              className="mb-4 flex h-12 w-12 items-center justify-center rounded-full font-mono text-[22px] font-bold text-white"
              style={{ background: f.accent }}
              aria-hidden="true"
            >
              {f.letter}
            </span>
            <h3 className="mb-1.5 text-[17px] font-semibold text-navy">
              {f.title}
            </h3>
            <p className="mb-3 text-[13px] leading-[1.6] text-muted-3">
              {f.body}
            </p>
            <span
              className="inline-block rounded-full bg-white px-3 py-1.5 font-mono text-[11px] font-semibold"
              style={{ color: f.accent }}
            >
              {f.example}
            </span>
          </Reveal>
        ))}
      </div>

      {/* Balance is the key */}
      <Reveal
        dir="up"
        className="mt-6 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-center gap-6 rounded-card bg-navy p-[clamp(24px,3.5vw,40px)]"
      >
        <div>
          <div className="mb-1.5 flex items-center gap-2.5">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#00c161" strokeWidth="1.9" aria-hidden="true">
              <path d="M12 3v18M4 7h16" />
              <path d="M6 7l-3 6a3.5 3.5 0 007 0zM18 7l-3 6a3.5 3.5 0 007 0z" />
            </svg>
            <h3 className="text-[19px] font-semibold text-white">
              Balance is the key
            </h3>
          </div>
          <p className="max-w-[400px] text-[13.5px] leading-[1.65] text-white/70">
            If one factor is reduced, increase one or more of the others to
            maintain cleaning performance — that trade-off is what our lab
            tunes for your line.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          {BALANCE.map((b) => (
            <div
              key={b.low}
              className="flex flex-wrap items-baseline gap-x-2.5 gap-y-0.5 rounded-img bg-white/6 px-4 py-2.5 ring-1 ring-inset ring-white/10"
            >
              <span className="text-[13px] font-semibold text-white">
                {b.low}
              </span>
              <span aria-hidden="true" className="text-green-bright">→</span>
              <span className="text-[12.5px] text-white/70">{b.fix}</span>
            </div>
          ))}
        </div>
      </Reveal>
      <p className="mt-5 text-center text-[12px] text-muted">
        Example values are illustrative — recommended operating conditions are
        set per product and per line, and confirmed during lab validation.
      </p>
    </SectionPanel>
  );
}
