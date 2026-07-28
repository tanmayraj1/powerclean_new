const PATHS: Record<string, React.ReactNode> = {
  car: (
    <>
      <path d="M3 15l2-6h14l2 6v4H3z" />
      <circle cx="7" cy="19" r="1.6" />
      <circle cx="17" cy="19" r="1.6" />
    </>
  ),
  plane: (
    <path d="M2 16l9-5V4l2-2 2 2v7l7 5-1 2-8-3v4l2 2-3 2-3-2 2-2v-4l-8 3z" />
  ),
  train: (
    <>
      <rect x="5" y="3" width="14" height="14" rx="3" />
      <path d="M5 11h14" />
      <circle cx="9" cy="14" r="1" />
      <circle cx="15" cy="14" r="1" />
      <path d="M8 21l2-4M16 21l-2-4" />
    </>
  ),
  gear: (
    <>
      <circle cx="12" cy="12" r="3.2" />
      <circle cx="12" cy="12" r="8" strokeDasharray="3 3.5" />
    </>
  ),
  chip: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M9 9h6v6H9z" />
      <path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3" />
    </>
  ),
  tool: (
    <path d="M14.7 6.3a4 4 0 00-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 005.4-5.4L15 12l-3-3z" />
  ),
};

/** Inline stroke icons for the industries grid. */
export function IndustryIcon({ name }: { name: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#292F6E"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      {PATHS[name] ?? PATHS.gear}
    </svg>
  );
}
