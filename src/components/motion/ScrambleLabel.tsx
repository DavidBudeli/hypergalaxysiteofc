"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { motionTokens } from "@/config/motion-tokens";
import { cn } from "@/lib/cn";

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789*+<>/";

export function ScrambleLabel({
  text,
  className,
  delay = 0,
  ready = true,
}: {
  text: string;
  className?: string;
  delay?: number;
  ready?: boolean;
}) {
  const [value, setValue] = useState(text);

  useEffect(() => {
    let frame = 0;
    let tick = 0;

    if (!ready) {
      return;
    }

    const start = window.setTimeout(() => {
      const animate = () => {
        tick += 1;
        const progress = Math.min(1, tick / 28);
        const locked = Math.floor(text.length * progress);
        const next = text
          .split("")
          .map((char, index) => {
            if (char.trim() === "" || char === "·") {
              return char;
            }

            return index < locked
              ? char
              : GLYPHS[(index + tick) % GLYPHS.length];
          })
          .join("");

        setValue(next);

        if (progress < 1) {
          frame = requestAnimationFrame(animate);
        }
      };

      frame = requestAnimationFrame(animate);
    }, delay * 1000);

    return () => {
      window.clearTimeout(start);
      cancelAnimationFrame(frame);
    };
  }, [delay, ready, text]);

  return (
    <motion.p
      className={cn(
        "font-mono text-xs font-bold uppercase tracking-[0.34em] text-[#C4B5FD]",
        className,
      )}
      initial={{ opacity: 0, x: -18 }}
      animate={ready ? { opacity: 1, x: 0 } : { opacity: 0, x: -18 }}
      transition={{
        delay,
        duration: motionTokens.durations.fast,
        ease: motionTokens.easings.enter,
      }}
    >
      {value}
    </motion.p>
  );
}
