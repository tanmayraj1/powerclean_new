/**
 * Decorative section backdrop — soft brand glows, an optional ripple-ring
 * field and a pattern tile, rendered behind content.
 *
 * Purely material: absolutely positioned, pointer-events-none and z-index
 * behind siblings, so it adds depth to sections that sit directly on the page
 * canvas without moving a single element.
 *
 * Drop into any container that has `relative` (and `isolate` if it should not
 * bleed past its own stacking context).
 */
export function Backdrop({
  variant = "glow",
  className,
}: {
  /** glow = soft colour wash · rings = concentric ripple field · tile = pattern */
  variant?: "glow" | "rings" | "tile";
  className?: string;
}) {
  if (variant === "rings") {
    return (
      <svg
        viewBox="0 0 600 600"
        aria-hidden="true"
        className={`animate-pc-rip-drift pointer-events-none absolute -z-10 opacity-[0.055] ${className ?? ""}`}
      >
        {[80, 150, 220, 290].map((r) => (
          <circle
            key={r}
            cx="300"
            cy="300"
            r={r}
            fill="none"
            stroke="#292F6E"
            strokeWidth="2"
          />
        ))}
      </svg>
    );
  }

  if (variant === "tile") {
    return (
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 -z-10 opacity-50 ${className ?? ""}`}
        style={{
          backgroundImage: "url('/pattern.svg')",
          backgroundRepeat: "repeat",
          backgroundSize: "320px",
        }}
      />
    );
  }

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 -z-10 ${className ?? ""}`}
      style={{
        backgroundImage:
          "radial-gradient(ellipse 55% 60% at 8% 18%, rgba(0,166,81,.08), transparent 62%), radial-gradient(ellipse 50% 55% at 95% 82%, rgba(41,47,110,.07), transparent 62%)",
      }}
    />
  );
}
