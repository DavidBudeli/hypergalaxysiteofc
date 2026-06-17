"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

import { motionTokens } from "@/config/motion-tokens";
import { cn } from "@/lib/cn";

export function SectionTransition({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-12% 0px -12% 0px", once: true });

  return (
    <motion.div
      ref={ref}
      className={cn("will-change-transform", className)}
      initial={{ opacity: 0, y: 36, clipPath: "inset(12% 0 0 0)" }}
      animate={
        inView
          ? { opacity: 1, y: 0, clipPath: "inset(0% 0 0 0)" }
          : { opacity: 0, y: 36, clipPath: "inset(12% 0 0 0)" }
      }
      transition={{
        delay,
        duration: motionTokens.durations.slow,
        ease: motionTokens.easings.enter,
      }}
    >
      {children}
    </motion.div>
  );
}
