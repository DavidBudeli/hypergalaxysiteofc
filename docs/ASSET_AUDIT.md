# Asset Audit

Status: Checkpoint 1 approved with remaining watchpoints.

Date: 2026-06-16

Branch: `feat/checkpoint-1-experience`

## References Read

- `HYPERGALAXY_FROM_SCRATCH_MASTER_SPEC.md`
- `HYPERGALAXY_CONTINUACAO_COMPLETA.pdf`

The continuation PDF was copied into the repository root from `C:\Users\allys\Downloads\HYPERGALAXY_CONTINUACAO_COMPLETA.pdf` and read as reference for future phases only. No Checkpoint 2 asset scope was started.

## Current Asset Inventory

| Asset | Format | Resolution | Weight | Use | Status |
| --- | --- | ---: | ---: | --- | --- |
| `public/favicon.ico` | ICO | 32 x 32 | 4.2 KB | Browser favicon, prevents `/favicon.ico` 404 | approved |
| `public/assets/brand/hyper-galaxy-wordmark.svg` | SVG | vector | 788 B | Header, menu, preloader, metadata icon | approved |
| `public/assets/stars/hero-stars.svg` | SVG | vector | 9.1 KB | Hero/preloader star field | approved |
| `public/assets/planets/nova.webp` | WebP | 1024 x 1024 | 113.3 KB | Hero/lab planet system | approved |
| `public/assets/planets/hyper-agents.webp` | WebP | 1024 x 1024 | 116.6 KB | Hero/lab planet system | approved |
| `public/assets/planets/hyper-cloud.webp` | WebP | 1024 x 1024 | 83.5 KB | Hero/lab planet system | approved |
| `public/assets/planets/hyper-flow.webp` | WebP | 1024 x 1024 | 133.3 KB | Preloader, hero, lab | approved |
| `public/assets/planets/hyper-dev.webp` | WebP | 1024 x 1024 | 121.1 KB | Hero/lab planet system | approved |
| `public/assets/planets/hyper-support.webp` | WebP | 1024 x 1024 | 131.1 KB | Hero/lab planet system | approved |
| `public/assets/planets/hyper-connect.webp` | WebP | 1024 x 1024 | 146.5 KB | Hero/lab planet system | approved |
| `public/assets/planets/*-mobile.webp` | WebP | 640 x 640 | 50.3-75.2 KB | Mobile-ready derivatives | approved, not yet viewport-swapped |
| `public/assets/planets/*-thumb.webp` | WebP | 256 x 256 | 13.9-19.1 KB | Preview/thumb derivatives | approved |
| `public/assets/planets/planet-contact-sheet.png` | PNG | 1820 x 330 | 293.5 KB | Audit/contact sheet | approved |

## Problems Found And Fixes

- `HYPERGALAXY_CONTINUACAO_COMPLETA.pdf` was not present in the repo. It was copied into the project root and verified as readable.
- Browser validation reported `/favicon.ico` 404. Added `public/favicon.ico` and metadata icon wiring.
- Dev screenshots contained the Next.js dev indicator. Added `devIndicators: false` in `next.config.ts`.
- Browser console warned about LCP planet images. Desktop hero now renders only on desktop and uses eager prioritized planet images; the mobile swipe renders only on mobile; Planet Lab evidence images are eager on the dev route.
- `/dev/planet-lab` did not show every planet in the first viewport. Added an overview strip with all seven planets.

## Visual Quality Result

All seven Checkpoint 1 planets pass the asset bar for this phase:

- Distinct texture and identity.
- Visible highlight, atmosphere, shadow/terminator overlay, and animated surface layer.
- No reused recolor-only asset was found in the current rendered set.
- No blurry visible image was reported by the final browser validation.

## Evidence

Generated local evidence:

- `docs/checkpoint-1-screenshots/planet-lab-1920x1080.png`
- `docs/checkpoint-1-screenshots/planet-active-1440x900.png`
- `docs/checkpoint-1-screenshots/hover-cursor-1440x900.png`
- `docs/checkpoint-1-screenshots/mobile-swipe-390x844.png`
- `docs/checkpoint-1-screenshots/validation-results.json`

Reference comparison evidence:

- `docs/checkpoint-1-reference-screenshots/reference-1920x1080.png`
- `docs/checkpoint-1-reference-screenshots/reference-1440x900.png`
- `docs/checkpoint-1-reference-screenshots/reference-1366x768.png`
- `docs/checkpoint-1-reference-screenshots/reference-430x932.png`
- `docs/checkpoint-1-reference-screenshots/reference-390x844.png`
- `docs/checkpoint-1-reference-screenshots/reference-360x800.png`

## Remaining Asset Limitations

- Planet rendering is stylized and strong for Checkpoint 1, but not a physically simulated 3D system.
- Mobile-specific planet derivatives exist, but the current `PlanetVisual` still uses the primary source with Next image resizing.
- No video evidence was committed; the available evidence is screenshot plus interaction-state JSON.
- `npm.cmd install` reported two moderate npm audit findings. They were not force-fixed because dependency upgrades were outside this checkpoint scope.
