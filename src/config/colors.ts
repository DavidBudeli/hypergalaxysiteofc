export const colors = {
  cosmicBlack: "#050507",
  deepSpace: "#090A10",
  graphite: "#1B1C22",
  warmWhite: "#F5F3EE",
  silver: "#B8BBC4",
  hyperPurple: "#7546E8",
  electricPurple: "#8B5CF6",
  lavender: "#C4B5FD",
  electricBlue: "#4A8FFF",
  iceBlue: "#93C5FD",
  magenta: "#EC4899",
  orange: "#F97316",
  teal: "#14B8A6",
  limeFunctional: "#A3E635",
  warning: "#F4B860",
  error: "#FF647C",
} as const;

export const colorDistribution = {
  dark: "45%",
  neutral: "30%",
  purple: "15%",
  blue: "5%",
  accents: "5%",
} as const;

export const backgroundRhythm = [
  colors.cosmicBlack,
  colors.graphite,
  colors.warmWhite,
  colors.lavender,
  colors.deepSpace,
  colors.hyperPurple,
] as const;

export type ColorToken = keyof typeof colors;
