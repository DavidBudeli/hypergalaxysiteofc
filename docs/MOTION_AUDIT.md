# Motion Audit

Status: Checkpoint 2 implemented and ready for visual approval.

Date: 2026-06-17

Branch: `feat/checkpoint-2-experience`

## Motion System

Token source: `src/config/motion-tokens.ts`.

Checkpoint 1 motion preserved:

- Preloader with black field, progress, planet motion, wordmark, and continuous handoff.
- Header entrance, scroll-state change, and fullscreen mobile menu.
- Hero label scramble, headline reveal, CTA entrance, desktop planet stagger, independent float, hover, active planet, mobile swipe, custom cursor, radial sweep, and first transition.

Checkpoint 2 primitives added:

- `MaskReveal`
- `DragReveal`
- `Marquee`
- `CounterReveal`
- `FlipCard`
- `ScrollTextReveal`
- `SectionTransition`

## Region Motion Results

| Region | Primary interaction | Result |
| --- | --- | --- |
| Region 2 - Reveal | Cursor mask, drag handle, range input, accessible buttons | Passed. The reveal responds immediately and is not a generic two-image slider. |
| Region 3 - Company | Editorial text reveal and section transition | Passed. Clear rhythm change from hero, with subtle Nova presence only. |
| Region 4 - Marquee | Continuous two-row motion, reverse direction, hover pause, reduced-motion pause | Passed. Normal state measured as `running`; reduced motion measured at `0.001s`. |
| Region 5 - Metrics | Scroll reveal and large counter/scale typography | Passed. Uses capabilities only, no invented commercial metrics. |
| Region 6 - Services | Flip, hover, tilt, focus, tap reveal, CTA on back | Passed after tab-order correction. |

## Problems Found And Fixes

- Reveal headline was too large in the first capture and collided with the interactive panel. Reduced desktop scale and adjusted the grid so the title fits without cutting.
- Marquee appeared paused during validation because the browser was emulating reduced motion and the pointer was over the track. The validator now captures normal motion with `prefers-reduced-motion: no-preference` and separately validates reduced motion.
- Mobile services title cut the final characters of `CONSTRUIMOS.` at 390px. Added a separate mobile type scale.
- Flip card back controls were reachable by tab before the card was revealed. Back controls now leave the tab order until the card is flipped.
- Mobile Lighthouse CLS was `0.0796`. Reserved the mobile planet-swipe space during viewport detection; final CLS is `0.0181`.
- The custom cursor only checked its desktop/fine-pointer media query on the initial mount. It now reacts to media-query changes, remaining disabled on mobile and activating after a desktop resize.

## Browser Validation

Evidence:

- `docs/checkpoint-2-screenshots/validation-results.json`

Results:

- Console events: 0.
- Failed network responses: 0.
- Visible image issues: 0.
- Desktop custom cursor active.
- Mobile custom cursor disabled.
- Reveal range/drag state recorded.
- Marquee tracks present and running in normal motion.
- Reduced motion pauses section animation and marquee.
- Keyboard flip state recorded.
- Mobile tap flip state recorded.
- Horizontal overflow: none in 1440 x 900, 430 x 932, 390 x 844, and 360 x 800 validation paths.

## Performance Motion Notes

- Continuous animation is limited to marquee and existing planet surfaces.
- Below-fold Checkpoint 2 sections keep `content-visibility: auto`.
- Motion uses transform, opacity, and clip-path rather than layout-heavy animation.
- No video background, WebGL, carousel library, or high-particle effect was added.

## Remaining Motion Limitations

- Video evidence was not committed; proof is represented by screenshots and validation JSON.
- The first transition now lands in the interactive reveal, but it is still tied to the Checkpoint 1 sticky hero timing.
- The mobile reveal is functional and controlled, but the dense comparison board is necessarily compact on 360px screens.
- Lighthouse CLI returned a Chrome temp-directory cleanup `EPERM` after writing JSON; the generated JSON files were readable and used for scoring.

## Scores

| Item | Score | Notes |
| --- | ---: | --- |
| Reveal interaction | 8.4 | Mask, drag, range, buttons, and contextual cursor pass. |
| Company motion | 8.3 | Editorial reveal works without feeling like a dashboard section. |
| Marquee | 8.2 | Moderate continuous motion, hover pause, and reduced-motion behavior pass. |
| Metrics motion | 8.1 | Large counter/scale rhythm is present; could be more cinematic later. |
| Services flip | 8.4 | Hover, tap, keyboard, tilt, and CTA states pass. |
| Mobile motion | 8.1 | No overflow; mobile interactions work without hover dependency. |
| Performance impact | 8.6 | Lighthouse desktop/mobile scores pass; CLS mobile corrected. |

No essential motion item is below 8.
