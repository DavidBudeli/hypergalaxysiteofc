export const colors = {
  cosmicBlack: "#050507",
  deepSpace: "#090A10",
  graphite: "#17181E",
  warmWhite: "#F6F4EF",
  silver: "#B9BBC5",
  hyperPurple: "#6D28D9",
  electricPurple: "#8B5CF6",
  lavender: "#C4B5FD",
  electricBlue: "#2563EB",
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
  neutral: "25%",
  purple: "15%",
  blue: "10%",
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
