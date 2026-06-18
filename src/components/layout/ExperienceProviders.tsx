"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

import { CustomCursor } from "@/components/cursor/CustomCursor";
import { AnimationPauser } from "@/components/motion/AnimationPauser";
import { ReducedMotionProvider } from "@/components/motion/ReducedMotionProvider";
import { SmoothScrollProvider } from "@/components/motion/SmoothScrollProvider";

export function ExperienceProviders({ children }: { children: ReactNode }) {
  return (
    <ReducedMotionProvider>
      <MotionConfig reducedMotion="user">
        <SmoothScrollProvider>
          {children}
          <AnimationPauser />
          <CustomCursor />
        </SmoothScrollProvider>
      </MotionConfig>
    </ReducedMotionProvider>
  );
}
