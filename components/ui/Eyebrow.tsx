import { Scramble } from "@/components/motion/Scramble";

type EyebrowProps = {
  label: string;
  light?: boolean;
  center?: boolean;
  className?: string;
};

/** Green dot + scramble-decoding uppercase label. */
export function Eyebrow({ label, light, center, className }: EyebrowProps) {
  return (
    <div
      className={`flex items-center gap-2 ${center ? "justify-center" : ""} ${className ?? ""}`}
    >
      <span className="h-[7px] w-[7px] rounded-full bg-green" />
      <Scramble
        text={label}
        className={
          light
            ? "text-[11px] font-semibold tracking-[0.14em] text-white/85"
            : "text-[11px] font-semibold tracking-[0.16em] text-muted"
        }
      />
    </div>
  );
}
