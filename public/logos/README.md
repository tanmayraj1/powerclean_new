# Client logos

Drop the official logo files here using the exact filenames listed in
`lib/site-config.ts` → `siteConfig.clients`:

| Client              | Filename            |
| ------------------- | ------------------- |
| BOSCH               | `bosch.svg`         |
| TVS Group           | `tvs.svg`           |
| Bharat Forge        | `bharat-forge.svg`  |
| Murugappa Group     | `murugappa.svg`     |
| Minda Group         | `minda.svg`         |
| Sandhar Group       | `sandhar.svg`       |
| Amalgamation Group  | `amalgamation.svg`  |

Any file present is picked up automatically on the next build; names without a
file fall back to a same-size typographic wordmark, so the strip always stays
visually consistent.

**Guidance**

- Prefer SVG (PNG with transparency also works — change the extension in
  `site-config.ts` to match).
- Supply the horizontal/landscape lockup; marks are normalised to a 38px
  optical height and rendered grayscale, going full colour on hover.
- Use logos obtained from each company's official brand/press kit, and only
  with their permission to show the relationship publicly.
