"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { motionTokens } from "@/config/motion-tokens";
import { useReducedMotionContext } from "./ReducedMotionProvider";

export function CounterReveal({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });
  const reducedMotion = useReducedMotionContext();
  const source = useMotionValue(0);
  const spring = useSpring(source, motionTokens.springs.soft);
  const rounded = useTransform(spring, (latest) => `${Math.round(latest)}${suffix}`);
  const [text, setText] = useState(`0${suffix}`);

  useEffect(() => {
    if (reducedMotion) {
      return;
    }

    const unsubscribe = rounded.on("change", setText);
    if (inView) {
      source.set(value);
    }

    return unsubscribe;
  }, [inView, reducedMotion, rounded, source, suffix, value]);

  return (
    <motion.span ref={ref} aria-label={`${value}${suffix}`}>
      {reducedMotion ? `${value}${suffix}` : text}
    </motion.span>
  );
}
