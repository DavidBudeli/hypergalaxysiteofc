import { motionTokens } from "@/config/motion-tokens";

export type MotionPreference = "full" | "reduced";

export function getMotionDuration(
  key: keyof typeof motionTokens.durations,
  preference: MotionPreference = "full",
) {
  return preference === "reduced" ? motionTokens.durations.instant : motionTokens.durations[key];
}

export function getStagger(
  key: keyof typeof motionTokens.stagger,
  preference: MotionPreference = "full",
) {
  return preference === "reduced" ? 0 : motionTokens.stagger[key];
}
