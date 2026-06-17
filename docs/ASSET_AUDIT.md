# Asset Audit

Status: Checkpoint 2 implemented and ready for visual approval.

Date: 2026-06-17

Branch: `feat/checkpoint-2-experience`

## References Read

- `HYPERGALAXY_FROM_SCRATCH_MASTER_SPEC.md`
- `HYPERGALAXY_CONTINUACAO_COMPLETA.pdf`
- `docs/HERO_CHECKPOINT_REPORT.md`
- `docs/HOMEPAGE_CHECKPOINT_REPORT.md`
- `docs/MOTION_AUDIT.md`
- `docs/ASSET_AUDIT.md`

Checkpoint 1 assets were preserved. No Checkpoint 3 assets were started.

## Current Asset Inventory

| Asset | Format | Use | Status |
| --- | --- | --- | --- |
| `public/favicon.ico` | ICO | Browser favicon | Preserved |
| `public/assets/brand/hyper-galaxy-wordmark.svg` | SVG | Header, menu, preloader, metadata | Preserved |
| `public/assets/stars/hero-stars.svg` | SVG | Hero/preloader star field | Preserved |
| `public/assets/planets/nova.webp` | WebP | Hero, lab, subtle company presence | Preserved; company instance prioritized |
| `public/assets/planets/hyper-agents.webp` | WebP | Hero/lab planet system | Preserved |
| `public/assets/planets/hyper-cloud.webp` | WebP | Hero/lab planet system | Preserved |
| `public/assets/planets/hyper-flow.webp` | WebP | Preloader, hero, lab | Preserved |
| `public/assets/planets/hyper-dev.webp` | WebP | Hero/lab planet system | Preserved |
| `public/assets/planets/hyper-support.webp` | WebP | Hero/lab planet system | Preserved |
| `public/assets/planets/hyper-connect.webp` | WebP | Hero/lab planet system | Preserved |
| `public/assets/planets/*-mobile.webp` | WebP | Mobile derivatives | Preserved |
| `public/assets/planets/*-thumb.webp` | WebP | Preview/thumb derivatives | Preserved |
| `public/assets/planets/planet-contact-sheet.png` | PNG | Audit/contact sheet | Preserved |
| `FlipCard` inline service glyphs | SVG in TSX | Original visuals for six service fronts | Added |
| `docs/checkpoint-2-screenshots/*.png` | PNG | Evidence captures | Added |
| `docs/checkpoint-2-screenshots/*.json` | JSON | Browser and Lighthouse evidence | Added |

## New Asset Work

- No new raster source assets were introduced for Checkpoint 2.
- Services use original inline SVG compositions in `src/components/cards/FlipCard.tsx`.
- The institutional section reuses Nova as a subtle Hyper Galaxy presence, not a full Nova section.
- The reveal board uses geometric UI elements, masks, lines, and cards generated in code.
- Technology marquee uses text chips only and clearly states that listed names are technologies/integrations, not clients.

## Problems Found And Fixes

- A development console warning identified `/assets/planets/nova.webp` as LCP in the company capture. The company Nova `PlanetVisual` now uses `priority`.
- Mobile services typography cut the final characters of the section title at 390px. The mobile scale was reduced and evidence regenerated.
- Lighthouse mobile CLS exceeded the target before reserving mobile hero planet space. The reserved space fixed the shift.

## Visual Quality Result

- Checkpoint 1 planets remain approved and unchanged in identity.
- Checkpoint 2 did not add generic stock imagery, dashboard mockups, client logos, or copied reference assets.
- Service visuals have distinct color personalities: purple, magenta, orange, blue, turquoise, and soft violet/white.
- No visible image failures were reported in the final browser validation.

## Evidence

Required Checkpoint 2 captures:

- `docs/checkpoint-2-screenshots/reveal-1440x900.png`
- `docs/checkpoint-2-screenshots/reveal-active-1440x900.png`
- `docs/checkpoint-2-screenshots/company-1440x900.png`
- `docs/checkpoint-2-screenshots/marquee-1440x900.png`
- `docs/checkpoint-2-screenshots/metrics-1440x900.png`
- `docs/checkpoint-2-screenshots/services-front-1440x900.png`
- `docs/checkpoint-2-screenshots/services-flip-1440x900.png`
- `docs/checkpoint-2-screenshots/checkpoint-2-mobile-390x844.png`
- `docs/checkpoint-2-screenshots/services-mobile-390x844.png`

Additional evidence:

- `docs/checkpoint-2-screenshots/validation-results.json`
- `docs/checkpoint-2-screenshots/lighthouse-desktop.json`
- `docs/checkpoint-2-screenshots/lighthouse-mobile.json`

## Remaining Asset Limitations

- No video evidence was committed.
- Mobile-specific planet derivatives exist, but `PlanetVisual` still relies on Next image resizing from the primary assets in the rendered path.
- The service visuals are original code-generated glyphs, not separate illustrated bitmap assets.
- `npm.cmd install` previously reported two moderate npm audit findings; they remain pending and were not force-fixed.

## Scores

| Item | Score | Notes |
| --- | ---: | --- |
| Existing planet assets | 8.6 | Preserved from Checkpoint 1. |
| New service visuals | 8.2 | Distinct and original, but code-generated rather than richer raster illustrations. |
| Reveal visual assets | 8.3 | Narrative board is clear and interactive. |
| Company/Nova usage | 8.2 | Subtle and scoped correctly. |
| Evidence completeness | 8.7 | Required screenshots and JSON evidence generated. |
| Asset performance | 8.6 | No visible image issues; LCP warning fixed. |

No essential asset item is below 8.
