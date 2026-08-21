import { Reveal } from "@/components/motion/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { InquiryForm } from "@/components/ui/InquiryForm";

/** Diagonal CTA banner with the consultation form card. */
export function CtaFormBanner() {
  return (
    <div id="cta" className="px-3">
      <div className="animate-pc-drift relative mx-auto flex min-h-[620px] max-w-[1320px] items-center overflow-hidden rounded-section bg-[linear-gradient(120deg,#23273f,#292F6E_55%,#333b7e)] bg-[length:200%_200%]">
        <ImageSlot
          brief="Photo — fine mist of cleaning solution sprayed across a metal panel, backlit"
          src="/photos/spray-mist.webp"
          alt="Backlit spray of cleaning solution against a dark background"
          sizes="100vw"
          className="absolute inset-0"
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(100deg,rgba(29,31,35,.72)_0%,rgba(41,47,110,.45)_55%,rgba(29,31,35,.2)_100%)]" />
        <div className="pointer-events-none absolute -right-[8%] inset-y-0 w-[34%] bg-[linear-gradient(rgba(0,166,81,.32),rgba(0,166,81,.14))] [clip-path:polygon(38%_0,100%_0,100%_100%,0_100%)]" />
        <div className="animate-pc-float pointer-events-none absolute bottom-[10%] right-[8%] h-[130px] w-[130px] rounded-full bg-[radial-gradient(circle_at_35%_30%,rgba(255,255,255,.35),rgba(0,166,81,.25)_60%,rgba(41,47,110,.3))] blur-[1px]" />
        <Reveal
          dir="up"
          className="relative z-[2] m-[clamp(20px,4vw,64px)] w-[calc(100%-40px)] max-w-[620px] rounded-card-lg bg-white p-[clamp(24px,3.5vw,44px)] shadow-[0_30px_80px_rgba(29,31,35,.35)]"
        >
          <Eyebrow label="GET STARTED" className="mb-3" />
          <h2 className="mb-2 text-[clamp(26px,3vw,38px)] font-semibold leading-[1.15] tracking-[-0.02em] text-navy">
            Start Your Cleaning Transformation
          </h2>
          <p className="mb-[22px] text-sm leading-[1.6] text-muted">
            Tell us about your line and we&apos;ll come back with a matched
            formulation and trial plan.
          </p>
          <InquiryForm variant="home" />
        </Reveal>
      </div>
    </div>
  );
}
