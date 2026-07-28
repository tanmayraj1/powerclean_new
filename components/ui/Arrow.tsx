/**
 * ↗ arrow (crisp SVG, currentColor) that nudges translate(3px,-3px) when its
 * `group` parent (link or whole card) is hovered — port of motion.js `arrows`.
 */
export function Arrow({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block align-[-0.08em] transition-transform duration-[350ms] ease-site group-hover:translate-x-[3px] group-hover:-translate-y-[3px] ${className ?? ""}`}
    >
      <svg
        width="0.85em"
        height="0.85em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M7 17L17 7" />
        <path d="M9 7h8v8" />
      </svg>
    </span>
  );
}
