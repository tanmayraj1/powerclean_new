import { Reveal } from "@/components/motion/Reveal";
import { Marquee } from "@/components/motion/Marquee";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ClientLogo } from "@/components/ui/ClientLogo";
import { siteConfig } from "@/lib/site-config";

/** Trusted-by strip — REAL client marks, all at one uniform size. */
export function LogoMarquee() {
  return (
    <Reveal dir="up" className="mx-auto max-w-[1320px] px-5 pb-2.5 pt-11">
      <Eyebrow label="TRUSTED BY MANUFACTURERS" center className="mb-[26px]" />
      <Marquee speed={0.6} reactive={false} trackStyle={{ gap: 56 }}>
        {siteConfig.clients.map((c) => (
          <ClientLogo key={c.name} name={c.name} file={c.file} />
        ))}
      </Marquee>
    </Reveal>
  );
}
