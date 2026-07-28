import { Parallax } from "@/components/motion/Parallax";
import { Reveal } from "@/components/motion/Reveal";
import { ImageSlot } from "./ImageSlot";
import { Eyebrow } from "./Eyebrow";

type PageHeroProps = {
  title: string;
  eyebrow: string;
  blurb: string;
  image: { src?: string; brief: string };
  /** e.g. "min(66vh,560px)" — per-page hero heights from the design */
  minHeight: string;
  titleClassName?: string;
};

/**
 * Interior page hero (About / Solutions / Detail / Contact): rounded
 * navy-gradient card, parallax photo, bottom-aligned headline + eyebrow rail.
 */
export function PageHero({
  title,
  eyebrow,
  blurb,
  image,
  minHeight,
  titleClassName = "text-[clamp(36px,5vw,72px)]",
}: PageHeroProps) {
  return (
    <div className="px-3 pt-3">
      <div
        className="relative flex overflow-hidden rounded-section bg-[linear-gradient(135deg,#23273f,#292F6E_55%,#3a4188)]"
        style={{ minHeight }}
      >
        <Parallax className="absolute inset-0">
          <ImageSlot
            brief={image.brief}
            src={image.src}
            className="absolute inset-0"
            sizes="100vw"
            eager
          />
        </Parallax>
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(29,31,35,.75),rgba(41,47,110,.2)_60%)]" />
        <div className="pointer-events-none relative z-[2] flex w-full flex-wrap items-end justify-between gap-6 self-end p-[clamp(24px,4vw,56px)]">
          <div className="max-w-[720px] overflow-hidden">
            <Reveal
              dir="up"
              delay={100}
              as="div"
              className={`font-semibold leading-[1.06] tracking-[-0.02em] text-white ${titleClassName}`}
            >
              <h1 className="text-inherit">{title}</h1>
            </Reveal>
          </div>
          <Reveal dir="right" delay={300} className="max-w-[340px]">
            <Eyebrow label={eyebrow} light className="mb-2.5" />
            <p className="text-sm leading-[1.6] text-white/85">{blurb}</p>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
