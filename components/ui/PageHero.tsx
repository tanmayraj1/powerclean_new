import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { Eyebrow } from "./Eyebrow";
import { HeroBackdrop } from "./HeroBackdrop";

type PageHeroProps = {
  title: string;
  eyebrow: string;
  blurb: string;
  /** e.g. "min(66vh,560px)" — per-page hero heights from the design */
  minHeight: string;
  titleClassName?: string;
  /** optional photographic layer, dimmed under the navy scrim */
  image?: string;
  imageAlt?: string;
};

/**
 * Interior page hero (About / Solutions / Detail / Contact): rounded
 * navy-gradient card with the ripple backdrop, bottom-aligned headline and
 * eyebrow rail.
 */
export function PageHero({
  title,
  eyebrow,
  blurb,
  minHeight,
  titleClassName = "text-[clamp(36px,5vw,72px)]",
  image,
  imageAlt = "",
}: PageHeroProps) {
  return (
    <div className="px-3 pt-3">
      <div
        className="relative flex overflow-hidden rounded-section bg-[linear-gradient(135deg,#23273f,#292F6E_55%,#3a4188)]"
        style={{ minHeight }}
      >
        {image && (
          <>
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="100vw"
              preload
              className="object-cover opacity-[0.38]"
            />
            {/* navy scrim keeps the white headline at AA over any photo */}
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(35,39,63,.82),rgba(41,47,110,.62)_55%,rgba(41,47,110,.45))]" />
          </>
        )}
        <HeroBackdrop />
        <div className="relative z-[2] flex w-full flex-wrap items-end justify-between gap-6 self-end p-[clamp(24px,4vw,56px)] pt-[clamp(96px,12vw,140px)]">
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
