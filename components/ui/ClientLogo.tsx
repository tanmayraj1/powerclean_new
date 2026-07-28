import { existsSync } from "node:fs";
import path from "node:path";

const LOGO_BOX = "h-[38px]"; // one optical height for every mark in the row

/**
 * A client mark rendered at a uniform size. If the official asset exists at
 * `public/logos/<file>` it is used; otherwise a same-size typographic wordmark
 * stands in, so the row always reads as one consistent system.
 *
 * Server component — the file check happens at build time, so dropping a real
 * logo into public/logos is all that's needed to upgrade a mark.
 */
export function ClientLogo({ name, file }: { name: string; file: string }) {
  const hasAsset =
    Boolean(file) &&
    existsSync(path.join(process.cwd(), "public", "logos", file));

  return (
    <span
      className={`flex ${LOGO_BOX} w-[168px] shrink-0 items-center justify-center`}
    >
      {hasAsset ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`/logos/${file}`}
          alt={name}
          className="max-h-full max-w-full object-contain opacity-70 grayscale transition-[opacity,filter] duration-300 hover:opacity-100 hover:grayscale-0"
        />
      ) : (
        <span className="whitespace-nowrap text-center text-[15px] font-bold uppercase leading-none tracking-[0.08em] text-muted">
          {name}
        </span>
      )}
    </span>
  );
}
