import { SectionPanel } from "@/components/ui/SectionPanel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SolutionCard } from "@/components/ui/SolutionCard";
import { solutions } from "@/lib/solutions";

/** Six real Power Clean products in the signature tilt/aperture card grid. */
export function SolutionsGrid() {
  return (
    <SectionPanel id="solutions" outerClassName="px-3 pb-3">
      <SectionHeading
        eyebrow="SOLUTIONS"
        title="Cleaning Solutions for Every Industry"
        lede="From heavy-duty degreasing to solvent replacement — formulations matched to your metals, soils, and wash process."
        className="mb-11"
      />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(290px,1fr))] gap-5">
        {solutions.map((s, i) => (
          <SolutionCard key={s.slug} solution={s} delay={(i % 3) * 120} />
        ))}
      </div>
    </SectionPanel>
  );
}
