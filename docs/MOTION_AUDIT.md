# Motion Audit

## Status

Motion implementation has not started. This file records the reference behavior
and the token decisions for Checkpoint 1.

## Reference Behaviors To Preserve

- Entry should feel connected to the hero rather than a hard cut.
- Headline should enter by lines/words with stagger and occasional scramble.
- Planets should float independently and never sync.
- Hover should change object state, cursor state, and focus emphasis together.
- Header should transition on scroll.
- First transition should use sweep/radial expansion, not a simple fade.
- Mobile should reduce density, not remove motion entirely.

## Token Source

See `src/config/motion-tokens.ts`.

Mandatory values from the master spec are present:

- `easings.enter`
- `easings.route`
- `easings.smooth`
- `easings.standard`
- `durations.instant`
- `durations.fast`
- `durations.pageEnter`
- `durations.routeOverlay`
- `durations.slow`
- `durations.sweep`
- `durations.blast`
- `springs.headline`
- `springs.hover`
- `springs.soft`
- `stagger.letters`
- `stagger.words`
- `stagger.lines`
- `stagger.planets`
- `stagger.cards`
- `stagger.menu`
- `drag`

## Planned Checkpoint 1 Motion Components

- `SplitTextReveal`
- `SpringTextReveal`
- `MaskReveal`
- `ScrambleText`
- `MagneticButton`
- `CustomCursor`
- `AnimationPauser`
- `SmoothScrollProvider`
- `SectionTransition`

`DragRail`, `FlipCard`, `Marquee`, `CounterReveal`, `ScrollTextReveal`, and
`VelocityShift` remain planned for later checkpoints unless the first transition
requires a small shared primitive.
