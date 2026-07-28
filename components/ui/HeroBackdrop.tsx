/**
 * Photo-free hero backdrop: navy gradient + a soft green glow and the
 * signature concentric ripple rings, kept faint so the headline stays dominant.
 */
export function HeroBackdrop() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_90%_at_85%_15%,rgba(0,166,81,.28),transparent_60%)]" />
      <svg
        viewBox="0 0 600 600"
        className="animate-pc-rip-drift pointer-events-none absolute -right-[6%] top-1/2 h-[min(120%,760px)] w-[min(120%,760px)] -translate-y-1/2 opacity-[0.13]"
        aria-hidden="true"
      >
        {[70, 130, 190, 250, 292].map((r) => (
          <circle
            key={r}
            cx="300"
            cy="300"
            r={r}
            fill="none"
            stroke="#ffffff"
            strokeWidth="1.4"
          />
        ))}
      </svg>
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "url('/pattern.svg')",
          backgroundRepeat: "repeat",
          backgroundSize: "320px",
          filter: "brightness(0) invert(1)",
        }}
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-[linear-gradient(to_top,rgba(29,31,35,.5),transparent)]" />
    </>
  );
}
