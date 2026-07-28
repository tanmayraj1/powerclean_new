import Image from "next/image";
import type { CSSProperties } from "react";

type ImageSlotProps = {
  /** shot brief — art-direction caption shown until real photography lands */
  brief: string;
  src?: string;
  alt?: string;
  className?: string;
  style?: CSSProperties;
  sizes?: string;
  eager?: boolean;
};

/**
 * Photography drop-zone — replaces the design bundle's <image-slot>.
 * With `src` it renders next/image (fill); without, a styled placeholder
 * carrying the shot brief, swap-ready for real photos.
 */
export function ImageSlot({
  brief,
  src,
  alt,
  className,
  style,
  sizes = "(max-width: 940px) 100vw, 50vw",
  eager = false,
}: ImageSlotProps) {
  if (src) {
    return (
      <div className={className} style={style}>
        <Image
          src={src}
          alt={alt ?? brief}
          fill
          sizes={sizes}
          loading={eager ? "eager" : "lazy"}
          fetchPriority={eager ? "high" : undefined}
          className="object-cover"
        />
      </div>
    );
  }
  return (
    <div
      className={`flex items-center justify-center overflow-hidden bg-[linear-gradient(135deg,#dfe4ea,#cfd6de)] ${className ?? ""}`}
      style={style}
      role="img"
      aria-label={`Placeholder image: ${brief}`}
    >
      <div className="pointer-events-none flex max-w-[85%] flex-col items-center gap-2 text-center">
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#8b90a0"
          strokeWidth="1.6"
          aria-hidden="true"
        >
          <rect x="3" y="3" width="18" height="18" rx="3" />
          <circle cx="9" cy="9" r="2" />
          <path d="M21 15l-5-5L5 21" />
        </svg>
        <span className="font-mono text-[10.5px] leading-[1.5] text-muted">
          {brief}
        </span>
      </div>
    </div>
  );
}
