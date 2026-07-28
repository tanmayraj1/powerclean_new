/** OpenStreetMap embed (real facility area — Mahadevapura, Bangalore). */
export function MapEmbed({
  bbox,
  title,
  className,
}: {
  bbox: string;
  title: string;
  className?: string;
}) {
  return (
    <iframe
      src={`https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik`}
      className={className}
      style={{ border: "none" }}
      title={title}
      loading="lazy"
    />
  );
}
