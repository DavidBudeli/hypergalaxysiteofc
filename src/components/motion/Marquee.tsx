"use client";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import type { CSSProperties } from "react";

import { useReducedMotionContext } from "@/components/motion/ReducedMotionProvider";
import { cn } from "@/lib/cn";

export function Marquee({
  items,
  reverse = false,
  speed = "36s",
}: {
  items: readonly string[];
  reverse?: boolean;
  speed?: string;
}) {
  const repeated = [...items, ...items, ...items];
  const prefersReducedMotion = useReducedMotionContext();
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    stiffness: 90,
    damping: 28,
    mass: 0.5,
  });
  const scrollNudge = useTransform(
    smoothVelocity,
    [-1800, 0, 1800],
    reverse ? [26, 0, -26] : [-26, 0, 26],
  );

  return (
    <div
      className="marquee group overflow-hidden border-y border-[#050507]/12 py-5"
      style={{ "--marquee-speed": speed } as CSSProperties}
      data-cursor="drag"
      data-cursor-label="ARRASTE"
    >
      <motion.div style={{ x: prefersReducedMotion ? 0 : scrollNudge }}>
        <div
          className={cn(
            "marquee-track flex w-max items-center gap-4 sm:gap-6",
            reverse && "marquee-track-reverse",
          )}
        >
          {repeated.map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="shrink-0 rounded-full border border-[#050507]/12 px-5 py-3 font-mono text-xs font-black uppercase tracking-[0.2em] text-[#050507] sm:text-sm"
            >
              {item}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
