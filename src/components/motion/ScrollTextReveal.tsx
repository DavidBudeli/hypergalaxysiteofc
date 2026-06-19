"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

import { motionTokens } from "@/config/motion-tokens";
import { cn } from "@/lib/cn";

export function ScrollTextReveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-8% 0px -8% 0px", once: true });

  return (
    <span ref={ref} className={cn("block overflow-hidden", className)}>
      <motion.span
        className="block"
        initial={{ y: "112%", rotate: 1.5 }}
        animate={inView ? { y: "0%", rotate: 0 } : { y: "112%", rotate: 1.5 }}
        transition={{
          delay,
          duration: motionTokens.durations.slow,
          ease: motionTokens.easings.enter,
        }}
      >
        {children}
      </motion.span>
    </span>
  );
}
