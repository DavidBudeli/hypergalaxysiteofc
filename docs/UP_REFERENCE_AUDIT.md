# Up Digital Reference Audit

Reference: https://www.helloupdigital.com/

Audit date: 2026-06-16

Observed with the Codex browser at the required viewports:

- 1920 x 1080
- 1440 x 900
- 1366 x 768
- 430 x 932
- 390 x 844
- 360 x 800

This document records observable structure, proportions, motion behavior, and
interaction patterns only. It is not permission to copy proprietary code, assets,
brand, text, clients, or identity.

## Viewport Measurements

| Viewport | Effective client | Page height | Header | Hero | Second region | Notes |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| 1920 x 1080 | 1914 x 1080 | 10425 | 64 | 1080 | y 1080 / h 1033 | Nav maxes near 1280px and is centered. |
| 1440 x 900 | 1434 x 900 | 10049 | 64 | 900 | y 900 / h 1033 | Primary desktop composition. |
| 1366 x 768 | 1360 x 768 | 9772 | 64 | 768 | y 768 / h 1033 | Same system compressed vertically. |
| 430 x 932 | 424 x 932 | 11415 | 64 | 839 | y 839 / h 902 | Hero is shorter than viewport, next region peeks. |
| 390 x 844 | 384 x 844 | 11341 | 64 | 760 | y 760 / h 883 | Mobile hero prioritizes headline and CTA. |
| 360 x 800 | 354 x 800 | 11394 | 64 | 720 | y 720 / h 889 | No horizontal overflow observed. |

## Global Structure

Observed public homepage regions:

1. Hero with fixed header, large editorial headline, star field, cursor, and
   planet/case-study system.
2. Interactive reveal on deep purple background: `YOUR FUTURE IS IN THERE`.
3. Company positioning on warm white background.
4. Small moving character/marquee strip.
5. Trusted-by marquee.
6. Lime metric band.
7. Services with flip cards.
8. Portfolio pod/object section.
9. Selected work drag rail.
10. Real results on warm white.
11. Differentials on dark background.
12. Maya AI assistant section.
13. Final CTA/footer.

## Header

- Fixed at top, 64px high in all tested viewports.
- Desktop nav is constrained to roughly 1280px and centered.
- At 1440px, nav starts around x 77px, leaving strong outer margins.
- Desktop structure: logo left, navigation centered, lime CTA right.
- Initial state: transparent background, no heavy border, integrated with hero.
- Scrolled state: `rgba(10,10,15,0.9)` background, 1px low-opacity white
  border, strong backdrop blur, same height.
- Desktop link text: Space Grotesk-like sans, 14px, 500 weight, white at around
  70% opacity.
- CTA: lime fill, black text, 161 x 36px in header, 14px bold.
- Mobile: logo left, 40 x 40 menu button right. Menu opens fullscreen with large
  links, a lime vertical accent on the right edge, close button in a square, and
  a large lime CTA at the bottom.

## Layout Proportions

Desktop hero:

- Text block begins at x 80px on 1440 and 1366.
- Text area is about 46% to 52% of the viewport width.
- Planet/case-study system uses the right half, with objects distributed from
  upper right to lower center.
- Negative space is intentional; the middle is dark and breathable.
- Hero height equals viewport height on desktop.

Mobile hero:

- Header remains 64px.
- Text starts at x 32px.
- Hero is 720px to 839px tall depending on viewport.
- Desktop planets are hidden from the first mobile fold; the headline and CTAs
  carry the first impression.
- The next purple section is allowed to peek below the hero, preserving scroll
  motivation.

## Typography

Reference uses a Space Grotesk-like sans plus a Fraunces-like serif/outline
voice.

Hero desktop:

- Large filled line around 122px at 1440 x 900.
- Large filled line around 116px at 1366 x 768.
- Large filled line around 163px at 1920 x 1080.
- Line-height is tight, around 0.88 of font size for the largest line.
- The first line uses an outlined serif treatment.
- The accent word is lime and fully filled.
- Body copy is small, grey, and low-contrast compared to the headline.
- Labels use uppercase mono-like spacing with heavy tracking.

Hero mobile:

- Large headline lines are around 60px with 52.8px line-height.
- Headline remains forceful but stacks in a compact editorial block.
- Label tracking remains wide.

Section headings:

- Reveal h2 is about 64px desktop, 32px mobile.
- Company h2 is about 64px desktop, 35px mobile.
- Portfolio display can reach 88px foreground and 352px background word on
  desktop.
- Several sections mix filled sans and serif/outlined words.

## Preloader And Entry

The captured early state shows:

- A dark full-width overlay/wipe still moving out of the viewport.
- Headline text in a scrambled/transitional state (`GROWYZ` observed before
  resolving).
- Planet objects already present under the overlay.
- No static black cut; the entry feels connected to the hero.

Hyper Galaxy should not copy this implementation, but should keep the principle:
the preloader must hand off into the hero through a visible shared object and
staggered text/object resolution.

## Planet System

Observed behavior:

- Desktop hero contains five visible case-study planets.
- Planet hit areas are circular links.
- Sizes at 1440 x 900 are approximately 100px, 110px, 127px, 132px, and 148px.
- At 1920 x 1080 sizes stay in the same range, with more spatial separation.
- Larger active/hovered object can scale to about 1.06 and gain a colored glow.
- Labels use small numeric identifiers and project/service names.
- Distribution is asymmetric, not a grid.
- The green/teal planet is the largest and acts as a focal object.
- A ringed orange planet adds silhouette variety.
- Planets appear as textured/layered spheres, not flat CSS circles.
- Mobile hides the desktop planet field in the first fold.

Hyper Galaxy response:

- Build seven original planet assets before hero implementation.
- No placeholder CSS circles.
- Keep asymmetry, varied scale, labels, depth, hover states, and individual
  float timing.

## Cursor

- Desktop body cursor is `none`.
- Custom cursor has a small dot and a larger ring.
- Cursor layers are fixed, z-indexed around 9998/9999.
- A larger invisible/follow area around 210 x 140 was observed.
- Cursor ring is visible at the top-left on initial screenshots and follows
  interaction targets.
- On planet hover, ring locks/scales over the planet area and the hovered planet
  gains emphasis.
- Mobile keeps the native touch pattern and uses no custom cursor.

## Hover And Buttons

- Header links use subtle opacity changes.
- Lime CTA uses a strong color contrast and slight glow/brightness presence.
- Planet hover emphasizes the active planet with scale and glow rather than a
  generic underline.
- Service cards flip on hover/touch and each card has its own accent color.
- Portfolio/pod region invites hover/open/click behavior.

## Drag And Swipe

- Selected work region is a horizontal drag rail.
- Cards are wider than the viewport flow and the next item is partially visible.
- Copy says `drag to explore`.
- There are progress markers/buttons and an `01 / 06` counter.
- No autoplay was observed as the main driver.
- Mobile keeps partial-card visibility and swipe expectations.

## Scroll And Section Transitions

- Smooth scroll feel is present.
- Header changes state once the page scrolls.
- Hero to second region is not a simple fade: the next region uses deep purple,
  a central object, stars, and a visual wipe feeling.
- Background rhythm alternates: black, deep purple, warm white, lime, black,
  warm white, black, final CTA.
- Large pauses and section height shifts are used to make each region feel like
  a separate scene.
- Several sections include clip/wipe keyframes and staggered text reveals.

## Mobile Behavior

- Header: 64px, logo left, menu button right.
- Menu: fullscreen panel, large vertical links, separate case-study group, CTA
  bottom, lime edge.
- First fold: headline, description, CTA, secondary link; no desktop planets.
- No horizontal overflow in tested widths.
- Section heights are recalibrated rather than blindly stacking desktop.
- Cards and rails remain touch-oriented.
- Motion is reduced in density but still present through typography and section
  transitions.

## Performance Signals

Observed:

- 0 canvas elements.
- 0 video elements.
- 17 images on the page snapshot.
- 77 SVG elements.
- Uses Next image optimization for many assets (`/_next/image?...`).
- Images below the fold use lazy loading.
- Heavy scene is DOM/CSS/SVG/image based, not WebGL.
- Cursor and hero animation rely on transforms, opacity, fixed layers, and CSS
  keyframes.
- Some decorative assets are intentionally small; larger visual objects are
  clipped/layered.

Risks to avoid for Hyper Galaxy:

- Do not add multiple canvases or particle systems.
- Do not use video background.
- Do not use giant blur fields everywhere.
- Do not animate invisible content.
- Do not ship oversized planet assets beyond natural resolution.

## Hyper Galaxy Translation Principles

- Preserve the Up Digital rhythm: editorial headline, object field, cursor,
  reveal, object/pod, drag rail, assistant, final CTA.
- Replace all brand content with Hyper Galaxy technology/service meaning.
- Use purple as a signature, not a full-page wash.
- Make planets original, high-resolution, and visibly spherical.
- Let each section have a distinct primary mechanic.
- Keep the first execution as foundation only; visual implementation starts in
  Checkpoint 1 after approval.
