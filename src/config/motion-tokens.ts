export const motionTokens = {
  easings: {
    enter: [0.16, 1, 0.3, 1],
    route: [0.76, 0, 0.24, 1],
    smooth: [0.22, 1, 0.36, 1],
    standard: [0.25, 0.46, 0.45, 0.94],
  },

  durations: {
    instant: 0.18,
    fast: 0.3,
    pageEnter: 0.52,
    routeOverlay: 0.68,
    slow: 0.85,
    sweep: 1.1,
    blast: 1.4,
  },

  springs: {
    headline: {
      stiffness: 260,
      damping: 14,
      mass: 0.4,
    },

    hover: {
      stiffness: 180,
      damping: 20,
      mass: 0.5,
    },

    soft: {
      stiffness: 120,
      damping: 18,
      mass: 0.8,
    },
  },

  stagger: {
    letters: 0.028,
    words: 0.06,
    lines: 0.12,
    planets: 0.16,
    cards: 0.1,
    menu: 0.06,
  },

  drag: {
    timeConstant: 750,
    bounceStiffness: 200,
    bounceDamping: 40,
    restDelta: 1,
    restSpeed: 10,
  },
} as const;
