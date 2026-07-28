/**
 * ↗ arrow that nudges translate(3px,-3px) when its `group` parent (link or
 * whole card) is hovered — port of motion.js `arrows`.
 */
export function Arrow({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block transition-transform duration-[350ms] ease-site group-hover:translate-x-[3px] group-hover:-translate-y-[3px] ${className ?? ""}`}
    >
      ↗
    </span>
  );
}
