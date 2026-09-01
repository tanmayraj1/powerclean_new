type ProductDrumProps = {
  /** full product name, e.g. "POWER CLEAN XL-45" */
  name: string;
  sku?: string;
  /** category accent, from lib/products categories[].accent */
  accent: string;
  size?: "sm" | "lg";
  className?: string;
};

/**
 * Power Clean ships in large blue drums with a printed label — this renders
 * that pack as clean brand artwork rather than leaving product pages
 * imageless. Pure SVG (no raster), so every one of the 41 products gets a
 * visual carrying its own name, SKU and category colour. Swap for real
 * product photography when it lands.
 */
export function ProductDrum({
  name,
  sku,
  accent,
  size = "lg",
  className,
}: ProductDrumProps) {
  const short = name.replace(/^POWER CLEAN\s*/i, "").trim() || name;
  const id = `drum-${(sku ?? short).replace(/[^a-z0-9]/gi, "")}`;
  const compact = size === "sm";

  return (
    <svg
      viewBox="0 0 260 320"
      className={className}
      role="img"
      aria-label={`${name}${sku ? `, SKU ${sku}` : ""} — supplied in Power Clean drums`}
    >
      <defs>
        {/* cylindrical shading across the drum body */}
        <linearGradient id={`${id}-body`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#123c69" />
          <stop offset="6%" stopColor="#14416f" />
          <stop offset="26%" stopColor="#3d86ce" />
          <stop offset="46%" stopColor="#2f70b4" />
          <stop offset="72%" stopColor="#1d5590" />
          <stop offset="100%" stopColor="#0f3560" />
        </linearGradient>
        <linearGradient id={`${id}-lid`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4a92da" />
          <stop offset="100%" stopColor="#1e5a97" />
        </linearGradient>
        <radialGradient id={`${id}-shadow`} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="rgba(29,31,35,.30)" />
          <stop offset="100%" stopColor="rgba(29,31,35,0)" />
        </radialGradient>
      </defs>

      {/* ground shadow */}
      <ellipse cx="130" cy="296" rx="86" ry="15" fill={`url(#${id}-shadow)`} />

      {/* body */}
      <path
        d="M46 52 h168 v212 a84 22 0 0 1 -168 0 z"
        fill={`url(#${id}-body)`}
      />
      {/* top rim */}
      <ellipse cx="130" cy="52" rx="84" ry="21" fill={`url(#${id}-lid)`} />
      <ellipse
        cx="130"
        cy="52"
        rx="84"
        ry="21"
        fill="none"
        stroke="rgba(255,255,255,.35)"
        strokeWidth="1.6"
      />
      {/* bung caps */}
      <ellipse cx="98" cy="48" rx="13" ry="5" fill="#0f3560" opacity=".55" />
      <ellipse cx="162" cy="52" rx="9" ry="3.5" fill="#0f3560" opacity=".45" />

      {/* rolling hoops */}
      <rect x="46" y="96" width="168" height="11" fill="rgba(255,255,255,.16)" />
      <rect x="46" y="238" width="168" height="11" fill="rgba(255,255,255,.16)" />
      <rect x="46" y="96" width="168" height="2" fill="rgba(255,255,255,.28)" />
      <rect x="46" y="238" width="168" height="2" fill="rgba(255,255,255,.28)" />

      {/* specular highlight */}
      <rect x="66" y="52" width="15" height="223" fill="rgba(255,255,255,.16)" />

      {/* label */}
      <rect x="62" y="122" width="136" height="98" rx="7" fill="#ffffff" />
      <rect x="62" y="122" width="136" height="9" rx="4" fill={accent} />
      {!compact && (
        <>
          <text
            x="130"
            y="152"
            textAnchor="middle"
            fontFamily="var(--font-poppins), sans-serif"
            fontSize="11"
            fontWeight="700"
            letterSpacing="1.6"
            fill="#292F6E"
          >
            POWER CLEAN
          </text>
          <text
            x="130"
            y="182"
            textAnchor="middle"
            fontFamily="var(--font-poppins), sans-serif"
            fontSize={short.length > 9 ? 19 : 25}
            fontWeight="700"
            fill="#1D1F23"
          >
            {short}
          </text>
          {sku ? (
            <text
              x="130"
              y="205"
              textAnchor="middle"
              fontFamily="var(--font-plex-mono), monospace"
              fontSize="11"
              fill="#6a7080"
            >
              SKU {sku}
            </text>
          ) : (
            <text
              x="130"
              y="205"
              textAnchor="middle"
              fontFamily="var(--font-plex-mono), monospace"
              fontSize="10"
              fill="#6a7080"
            >
              INDUSTRIAL GRADE
            </text>
          )}
        </>
      )}
      {compact && (
        <rect x="76" y="146" width="108" height="7" rx="3.5" fill="#e2e6ec" />
      )}
      {compact && (
        <rect x="76" y="162" width="72" height="7" rx="3.5" fill="#eef1f5" />
      )}
    </svg>
  );
}
