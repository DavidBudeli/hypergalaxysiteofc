"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

import { motionTokens } from "@/config/motion-tokens";
import { cn } from "@/lib/cn";

export function SpringTextReveal({
  children,
  className,
  delay = 0,
  ready = true,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  ready?: boolean;
}) {
  return (
    <motion.div
      className={cn(className)}
      initial={{ y: 18, opacity: 0 }}
      animate={ready ? { y: 0, opacity: 1 } : { y: 18, opacity: 0 }}
      transition={{
        delay,
        duration: motionTokens.durations.pageEnter,
        ease: motionTokens.easings.enter,
      }}
    >
      {children}
    </motion.div>
  );
}
