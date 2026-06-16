"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { useRef } from "react";

import { motionTokens } from "@/config/motion-tokens";
import { cn } from "@/lib/cn";

type MagneticButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export function MagneticButton({
  children,
  className,
  variant = "primary",
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);

  return (
    <motion.a
      ref={ref}
      className={cn(
        "inline-flex h-14 min-w-48 items-center justify-center gap-3 px-6 text-sm font-black uppercase tracking-[0.08em] transition-colors",
        variant === "primary"
          ? "bg-[#F6F4EF] text-[#050507] hover:bg-[#C4B5FD]"
          : "border border-white/16 text-white/56 hover:border-white/32 hover:text-white",
        className,
      )}
      data-cursor={variant === "primary" ? "cta" : "link"}
      whileHover={{ scale: 1.035 }}
      whileTap={{ scale: 0.985 }}
      transition={{ type: "spring", ...motionTokens.springs.hover }}
      {...props}
    >
      {children}
      {variant === "primary" ? <ArrowUpRight size={18} /> : null}
    </motion.a>
  );
}
