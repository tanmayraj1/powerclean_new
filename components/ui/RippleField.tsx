/**
 * Ambient ripple field — faint concentric-circle SVG (5% opacity, 26s drift)
 * behind the About-Milestones and Contact-map panels.
 */
export function RippleField() {
  return (
    <svg
      viewBox="0 0 600 600"
      className="animate-pc-rip-drift pointer-events-none absolute -right-[120px] -top-[120px] h-[480px] w-[480px] opacity-5"
      aria-hidden="true"
    >
      {[70, 130, 190, 250].map((r) => (
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
