# Client logos

All seven client marks are present and render in colour. `ClientLogo` checks
`public/logos/<file>` (filenames mapped in `lib/site-config.ts`) at build time
and falls back to a same-size wordmark if a file is missing.

| Client             | File                | Source                                        |
| ------------------ | ------------------- | --------------------------------------------- |
| BOSCH              | `bosch.svg`         | Wikimedia Commons (public domain)             |
| TVS Group          | `tvs.svg`           | tvsmotor.com header lockup (colour)           |
| Bharat Forge       | `bharat-forge.png`  | bharatforge.com via Wayback (dark/colour)     |
| Murugappa Group    | `murugappa.svg`     | murugappa.com header lockup (#E3000F)         |
| Minda Group        | `minda.png`         | unominda.com — **verify entity, see below**   |
| Sandhar Group      | `sandhar.png`       | sandhargroup.com via Wayback (dark)           |
| Amalgamation Group | `amalgamation.gif`  | Wikimedia Commons (public domain)             |

## Notes

- **Minda is ambiguous.** The file is **UNO Minda** (formerly Minda Industries).
  If the client is **Spark Minda** (Minda Corporation), replace `minda.png`.
- Two sites only publish reversed (white) lockups for light-on-dark headers;
  the versions here are the dark/colour variants suitable for the light strip.
  Verified: no mark renders with an average luminance above 200.
- Prefer replacing any of these with assets from the company's own brand kit
  when available, and confirm each client is happy to be named publicly.
- Marks are normalised to a 52px optical height in a 190px box and loaded
  eagerly (the marquee moves them by transform, so lazy loading never fires).
