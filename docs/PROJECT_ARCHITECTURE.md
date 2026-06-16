# Hyper Galaxy Project Architecture

## Status

Foundation created for the official rebuild. This repository starts from zero and
does not import code, assets, layouts, dashboards, motion, or visual decisions
from the previous Hyper Galaxy site.

## Stack

- Next.js `16.2.9`
- React `19.2.4`
- App Router
- TypeScript
- Tailwind CSS v4
- ESLint
- npm
- `src` directory

Allowed runtime dependencies for this stage:

- `framer-motion`
- `gsap`
- `lenis`
- `lucide-react`
- `clsx`
- `tailwind-merge`

Not present in this foundation:

- Three.js
- React Three Fiber
- carousel libraries
- complete UI kits
- WebGL libraries
- authentication
- database
- billing
- dashboard/backend implementation

## Directory Contract

```txt
src/
  app/
    layout.tsx
    page.tsx
    globals.css

  components/
    layout/
    navigation/
    preloader/
    hero/
    planets/
    motion/
    sections/
    cards/
    cursor/
    drag/
    nova/
    ui/

  config/
    colors.ts
    motion-tokens.ts
    planets.config.ts
    navigation.config.ts
    homepage.config.ts

  hooks/
    use-pointer-capability.ts
    use-reduced-motion.ts
    use-responsive-motion.ts
    use-scroll-progress.ts

  lib/
    cn.ts
    motion-utils.ts

public/
  assets/
    brand/
    planets/
    nova/
    stars/
    services/
    agents/
    projects/
    icons/
    textures/

docs/
  PROJECT_ARCHITECTURE.md
  UP_REFERENCE_AUDIT.md
  UP_TO_HYPER_MATRIX.md
  ASSET_AUDIT.md
  MOTION_AUDIT.md
  HERO_CHECKPOINT_REPORT.md
  HOMEPAGE_CHECKPOINT_REPORT.md
```

## Public Site Boundary

The current app is only the public homepage foundation. Future SaaS areas must
be isolated from this public experience and must not leak dashboard patterns into
the homepage.

## Current Page

`src/app/page.tsx` is a technical initialization page only. It intentionally
shows:

- `Hyper Galaxy`
- `Projeto inicializado`
- Checkpoint 1 pending state

It does not include a hero, preloader, planets, custom cursor, transition,
dashboard, login, video, or temporary visual effects.

## Next Implementation Boundary

Checkpoint 1 may add components under:

- `components/preloader`
- `components/navigation`
- `components/hero`
- `components/planets`
- `components/cursor`
- `components/motion`
- `components/layout`

It must not add Checkpoint 2 or Checkpoint 3 sections.
