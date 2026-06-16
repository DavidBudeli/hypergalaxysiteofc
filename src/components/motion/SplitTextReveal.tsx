"use client";

import { motion } from "framer-motion";

import { motionTokens } from "@/config/motion-tokens";
import { cn } from "@/lib/cn";

type SplitTextRevealProps = {
  children: string;
  className?: string;
  delay?: number;
  accent?: boolean;
  outline?: boolean;
  ready?: boolean;
};

export function SplitTextReveal({
  children,
  className,
  delay = 0,
  accent = false,
  outline = false,
  ready = true,
}: SplitTextRevealProps) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        className={cn(
          "block origin-left",
          accent && "text-[#8B5CF6]",
          outline && "hero-outline-text font-serif italic text-transparent",
          className,
        )}
        initial={{ y: "112%", rotate: outline ? 2 : 0 }}
        animate={ready ? { y: 0, rotate: 0 } : { y: "112%", rotate: outline ? 2 : 0 }}
        transition={{
          delay,
          type: "spring",
          ...motionTokens.springs.headline,
        }}
      >
        {children}
      </motion.span>
    </span>
  );
}
