# Asset Audit

## Status

No final Hyper Galaxy visual assets have been produced or imported during the
first execution.

The project contains only the required asset directory structure:

- `public/assets/brand`
- `public/assets/planets`
- `public/assets/nova`
- `public/assets/stars`
- `public/assets/services`
- `public/assets/agents`
- `public/assets/projects`
- `public/assets/icons`
- `public/assets/textures`

## Required Before Checkpoint 1 Hero

| Asset | Format | Minimum resolution | Background | Status |
| --- | --- | ---: | --- | --- |
| Hyper Galaxy logo | SVG | vector | transparent | pending |
| Nova / main hero planet | WebP or AVIF | 1024 x 1024 | transparent | pending |
| Hyper Agents planet | WebP or AVIF | 1024 x 1024 | transparent | pending |
| Hyper Cloud planet | WebP or AVIF | 1024 x 1024 | transparent | pending |
| Hyper Flow planet | WebP or AVIF | 1024 x 1024 | transparent | pending |
| Hyper Dev planet | WebP or AVIF | 1024 x 1024 | transparent | pending |
| Hyper Support planet | WebP or AVIF | 1024 x 1024 | transparent | pending |
| Hyper Connect planet | WebP or AVIF | 1024 x 1024 | transparent | pending |
| Star field texture | SVG/WebP | responsive | transparent | pending |

## Rejection Rules

Reject any asset that is:

- blurred
- a screenshot
- cropped incorrectly
- compressed too aggressively
- shipped with the wrong background
- scaled above natural resolution
- reused as the same texture with only hue rotation
- visually a flat CSS-like circle rather than a planet

## Current Finding

The default Next/Vercel public SVGs were removed from the foundation so they do
not become accidental visual dependencies.
