# Handoff: Power Clean — Marketing Website (5 pages)

## Overview
Complete marketing site for **Power Clean**, an industrial cleaning solutions manufacturer (brand of Roovel Solutions Pvt Ltd). Five linked pages — Home, About, Solutions, Solution Detail, Contact — plus a shared Nav and Footer, a motion/animation library, and a signature "ripple mark" visual system. The structure follows a reference site's layout skeleton (rounded full-width section cards on a light background, centered pill nav, giant footer wordmark).

## About the Design Files
The files in this bundle are **design references created in HTML** (a component format with inline styles + small logic classes). They are prototypes showing intended look and behavior — **not production code to copy directly**. Recreate these designs in your target codebase's environment (Next.js/React recommended given the motion requirements — Framer Motion + GSAP/ScrollTrigger + Lenis were the intended production stack) using its established patterns. If no codebase exists yet, choose the framework best suited to a motion-heavy marketing site.

## Fidelity
**High-fidelity** for layout, spacing, color, typography, copy, and motion choreography. **Placeholder** for: all photography (image drop-zones with shot descriptions; only each page's hero has a temp stock image), pricing/stats figures, and contact details. Product shots are explicitly marked `[PRODUCT PHOTO PLACEHOLDER]`.

## Running the bundle locally
This folder is a self-contained working site, not disconnected flat files. Serve it with any static server (`npx serve .` or `python3 -m http.server`) and open `Home.dc.html` — `support.js` is the component runtime that boots each page, `Nav.dc.html`/`Footer.dc.html` are imported into every page automatically, and `assets/motion.js` wires the cross-page behavior. All five pages are linked (nav, footer, CTAs, card buttons) and every internal navigation runs the smooth green wipe-out → ripple wipe-in transition defined in `assets/motion.js` (`transitions()` + `entryWipe()`, sessionStorage handshake `pc-nav-out`). Recreate that same route-transition choreography in production (e.g. Next.js route events + Framer Motion overlay).

## Files
- `Home.dc.html` — homepage (hero, logo marquee, core values, 6 solution cards, karaoke statement, skewed marquee, facility split, 5-step engagement process, case-study accordion, diagonal CTA form banner, testimonial carousel, resources grid, FAQ + side CTA)
- `About.dc.html` — hero, vision/mission cards (with charts), story + animated stat counters, CTA strip, team grid, year-selector milestones (with ripple field bg), facilities + OpenStreetMap embed
- `Solutions.dc.html` — hero, 6 solution cards, industries grid (`#industries`), CTA banner
- `Solution Detail.dc.html` — "PowerWash AQ Series": hero, about + sticky mono spec sidebar, dilution motion graphic (animated bars + counters), interactive before/after wipe slider, 5-step deploy timeline, packaging rows, testimonial, CTA, related cards, scroll-driven horizontal gallery
- `Contact.dc.html` — hero, consultation form, map + info cards (ripple field bg), FAQ + side CTA
- `Nav.dc.html` — shared header (see Behavior)
- `Footer.dc.html` — shared footer with giant SVG "POWERCLEAN" wordmark
- `assets/motion.js` — the entire motion library (read this first for animation specs)
- `assets/logo.png` — Power Clean logo (transparent PNG)
- `assets/pattern.svg` — subtle leaf/ripple background tile (320px, ~5% opacity strokes)
- `image-slot.js` — placeholder drop-zone component (design-tool only; replace with real `<img>`/next-image)

## Design Tokens
Colors (use exactly):
- Navy `#292F6E` — headlines, nav text (scrolled), dark section moments, step circles
- Vivid Green `#00A651` — logo, primary CTAs, footer wordmark, ripple mark, tags, eyebrow dots. Hover: `#00934a`
- Light Green `#E6F7EE` — highlighted card/row tint, icon chips, active nav pill (scrolled)
- Light Azure `#F3F5F7` — page background, input backgrounds, inner card tint (`#F8FAFB` for nested cards)
- Dark Gray Blue `#1D1F23` — body text, dark overlays
- Muted text: `#6a7080` (secondary), `#8b90a0` (tertiary), `#4b5060` (mid)
- Hairlines: `#e2e6ec`, `#edf0f4`, `#c9d2dd` (divider lines)

**Color discipline (non-negotiable):** ≤15–20% of any viewport carries saturated navy/green. Green never fills sections; navy only for headlines/nav/footer-adjacent dark moments. One accent moment per card.

Typography:
- **Poppins** (400/500/600/700) — all UI. Headlines weight 600, letter-spacing -0.02em
- **IBM Plex Mono** (400/500/600) — technical data ONLY: spec values, dilution ratios, %/µm figures, timing chips, intro counter
- Scale: hero `clamp(34px, 4.4vw, 66px)`; section H2 `clamp(30px, 4vw, 48px)`; sub-H2 `clamp(28px, 3.4vw, 42px)`; body 14–15px; captions 12–13px; eyebrow 11px, letter-spacing .16em, uppercase

Radii: section cards 28px; inner cards 20–22px; images 14–18px; pills/buttons 999px. Shadows: cards `0 18-20px 40-44px rgba(29,31,35,.08-.1)`; green CTA `0 6px 22px rgba(0,166,81,.35)`.

Spacing: sections are white rounded cards with 12px outer gutters on `#F3F5F7`; inner padding `clamp(28px, 4.5vw, 60px)`; content max-width 1320px; grids use `repeat(auto-fit, minmax(280-300px, 1fr))` with 20px gap.

Easing: **one curve site-wide** — `cubic-bezier(.22, 1, .36, 1)`. Nothing bounces except liquid/droplet moments.

## Signature element: Ripple Mark (used ONLY in these places)
1. Section dividers: thin line + 3 concentric rings SVG (see `RIP` snippet in pages)
2. Intro: once-per-session green curtain — mono counter 000→100 ("CONCENTRATION READOUT · % ACTIVE"), 3 rings expand scale(0→9), panel wipes up. ~2s total. Gate with sessionStorage
3. Card hover: solution-card images reveal through expanding `clip-path: circle(13% → 125%)`
4. Ambient: faint concentric-circle SVG field (5% opacity, 26s drift loop) behind About-Milestones and Contact-map cards; `assets/pattern.svg` tiles all white section cards

## Interactions & Behavior (all implemented in `assets/motion.js` — port to Framer Motion/GSAP)
- **Nav**: fixed; transparent with white text + white (inverted) logo over hero → on scroll >40px solidifies to white/blur, navy text, full-color logo, condensed padding; active page pill; mobile (<940px) hamburger with animated full-screen menu; magnetic CTA
- **Reveals**: IntersectionObserver, directional (up/down/left/right/scale/clip-inset), .9s, staggered `data-delay`
- **Counters**: ease-out cubic count-up (1.5s) w/ prefix/suffix/decimals; **chart paths**: stroke-dashoffset draw-in (1.8s); **bars/gauges**: scaleX/scaleY grow
- **Karaoke**: statement text colors in word-by-word with scroll position (base `#c3c9d6` → navy)
- **Scramble**: eyebrow labels decode through random glyphs (~16 frames) on enter
- **Marquees**: logo strip (slow, 0.6px/f); skewed -2° "PRECISION CLEANING ◎ POWERCLEAN" strip — speed reacts to scroll velocity, direction follows scroll direction
- **Cards**: pointer tilt (perspective 900px, ±5°/±7°) + ring-aperture image reveal + shadow lift; ↗ arrows nudge translate(3px,-3px) on hover of link OR parent card
- **Cursor** (pointer:fine only): 30px ring lerp-follows; scales + green tint over interactive elements; becomes green "DRAG" chip over the horizontal gallery
- **Parallax**: hero image layer translates at 0.16× viewport-center offset, scale(1.14)
- **Horizontal gallery** (Detail): vertical scroll drives track translateX
- **Inspect** (Detail product img): scroll-linked rotate ±3° + scale .95→1.03
- **Page transitions**: green panel slides up on internal-link click → navigate → next page reveals via collapsing circle clip (sessionStorage handshake)
- **Accordions** (FAQ/case studies): max-height + opacity + icon rotate (45°/180°), .45s
- **Before/after slider** (Detail): range input drives `clip-path: inset(0 0 0 X%)` on the "after" layer + divider line
- **Testimonial carousel**: prev/next cycle 3 quotes
- **Milestones** (About): year pill selector swaps title/body
- **Reduced motion**: every effect gates on `prefers-reduced-motion` → instant/opacity-only
- **Mobile**: fluid grids + wrap; keep reveals/counters/accordions; tilt/cursor/parallax/pinning are desktop-only

## State Management
Per page, minimal local state: FAQ open index, accordion open index, testimonial index, rotating-industry word index (2.4s interval), milestone year, wipe-slider %, mobile-menu open, viewport width. No data fetching; forms are visual (no submit wiring yet).

## Assets
- `assets/logo.png` — provided brand logo (transparent). Footer wordmark is SVG `<text textLength>` scaled to container — keep that technique so it never clips
- All photography = labeled placeholders; shot briefs are in each slot's `placeholder` attribute (documentary-industrial style, desaturated, navy/green accents). Hero slots temporarily reference loremflickr URLs — replace with real photography
- Maps: OpenStreetMap embed iframes (Delhi NCR bbox)
- Fonts: Google Fonts — Poppins + IBM Plex Mono

## Placeholder content to replace before launch
Contact details (hello@powerclean.in, +91 98100 00000, address), all stats (120+ facilities, 12+ years, etc.), partner logo names (AXIOM/VERTEK/…), team names, testimonial quotes/names, product naming ("PowerWash AQ Series").
