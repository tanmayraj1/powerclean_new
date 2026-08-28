import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { Reveal } from "@/components/motion/Reveal";

/**
 * What the company actually does, in place of staff portraits — Roovel has
 * never published team bios, so this describes verifiable capability instead
 * of inventing people.
 */

const CAPABILITIES = [
  {
    title: "Formulation Lab",
    body: "In-house chemistry: our own aqueous, solvent and rust-preventive formulations, plus custom development when a standard grade will not do.",
    photo: "/photos/story-facility.webp",
    alt: "Chemist testing a formulation sample in the laboratory",
    points: ["Custom formulation", "Substrate & soil testing", "Bath-life studies"],
  },
  {
    title: "Quality Control",
    body: "Batch-wise QC against an ISO 9001 certified system — every batch checked before it leaves the plant, with a certificate of analysis on request.",
    photo: "/photos/qc-lab.webp",
    alt: "Quality-control analyst running a titration",
    points: ["Batch-wise testing", "Certificate of analysis", "SDS with every shipment"],
  },
  {
    title: "Applications Engineering",
    body: "Engineers who work on your line: mapping the wash process, running supervised trials on your parts, and tuning dosing, temperature and cycle time.",
    photo: "/photos/gallery-1.webp",
    alt: "Applications engineer working beside a parts washer",
    points: ["On-site process study", "Supervised trials", "Operator training"],
  },
  {
    title: "Supply & Support",
    body: "Nationwide supply from Bangalore with distributors in major metros, packing from 35 L to 1000 L, and every enquiry answered within 24 hours.",
    photo: "/photos/dispatch-bay.webp",
    alt: "Palletised stock in the dispatch warehouse",
    points: ["35 L – 1000 L packing", "Distributors in metros", "24-hour response"],
  },
];

export function Capabilities() {
  return (
    <div className="mx-auto max-w-[1320px] px-5 py-[clamp(40px,6vw,80px)]">
      <SectionHeading
        eyebrow="OUR CAPABILITY"
        title="Chemistry, Lab and Plant Floor"
        lede="Power Clean is not a trading operation — the chemistry is formulated, tested and supported in-house, and proven on your line before you commit."
        className="mb-10 max-w-[660px]"
      />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-[18px]">
        {CAPABILITIES.map((c, i) => (
          <Reveal
            key={c.title}
            dir="up"
            delay={i * 100}
            className="group overflow-hidden rounded-card bg-white ring-1 ring-inset ring-line-2 transition-[transform,box-shadow] duration-[350ms] hover:-translate-y-1.5 hover:shadow-card-lg"
          >
            <div className="relative h-[180px] overflow-hidden">
              <ImageSlot
                brief={c.alt}
                src={c.photo}
                alt={c.alt}
                sizes="(max-width: 940px) 100vw, 25vw"
                className="absolute inset-0"
              />
            </div>
            <div className="p-6">
              <h3 className="mb-2 text-[16.5px] font-semibold text-navy">
                {c.title}
              </h3>
              <p className="mb-4 text-[13px] leading-[1.65] text-muted-3">
                {c.body}
              </p>
              <ul className="m-0 flex list-none flex-col gap-1.5 p-0">
                {c.points.map((pt) => (
                  <li
                    key={pt}
                    className="flex items-start gap-2 text-[12.5px] text-muted-3"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[6px] h-[5px] w-[5px] shrink-0 rounded-full bg-green"
                    />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
