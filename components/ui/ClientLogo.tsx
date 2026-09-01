import { existsSync } from "node:fs";
import path from "node:path";

/**
 * A client mark rendered at a uniform optical size, in full colour.
 *
 * If the official asset exists at `public/logos/<file>` it is used; otherwise a
 * same-size typographic wordmark stands in, so the row always reads as one
 * consistent system. The file check runs at build time (server component), so
 * dropping a logo into public/logos is all that's needed to upgrade a mark.
 */
export function ClientLogo({ name, file }: { name: string; file: string }) {
  const hasAsset =
    Boolean(file) &&
    existsSync(path.join(process.cwd(), "public", "logos", file));

  return (
    <span className="flex h-[52px] w-[190px] shrink-0 items-center justify-center px-2">
      {hasAsset ? (
        // Logos arrive in mixed formats and aspect ratios; object-contain inside
        // a fixed box normalises them to one optical size.
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`/logos/${file}`}
          // "BOSCH" alone is a weak accessible name in a row of eight marks —
          // the alt says what the logo is doing on this page
          alt={`${name} — Power Clean customer`}
          // eager: the marquee moves marks by transform, so lazy-loaded logos
          // that start off-screen never trigger a load
          loading="eager"
          decoding="async"
          className="max-h-full max-w-full object-contain opacity-90 transition-opacity duration-300 hover:opacity-100"
        />
      ) : (
        <span className="whitespace-nowrap text-center text-[15px] font-bold uppercase leading-none tracking-[0.08em] text-muted">
          {name}
        </span>
      )}
    </span>
  );
}
