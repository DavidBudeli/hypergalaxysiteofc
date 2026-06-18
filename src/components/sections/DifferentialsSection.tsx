"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { differentials } from "@/config/checkpoint-three.config";
import { motionTokens } from "@/config/motion-tokens";
import { cn } from "@/lib/cn";

export function DifferentialsSection() {
  return (
    <section id="diferenciais" aria-label="Diferenciais Hyper Galaxy">
      {differentials.map((differential, index) => (
        <DifferentialBand key={differential.label} differential={differential} index={index} />
      ))}
    </section>
  );
}

function DifferentialBand({
  differential,
  index,
}: {
  differential: (typeof differentials)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-18% 0px -18% 0px" });
  const alignRight = index % 2 === 1;

  return (
    <div
      ref={ref}
      className="relative min-h-[68vh] overflow-hidden px-6 py-20 sm:px-8 lg:px-10"
      style={{ backgroundColor: differential.background, color: differential.foreground }}
    >
      <div
        className={cn(
          "mx-auto flex min-h-[calc(68vh-10rem)] max-w-[1280px] flex-col justify-center",
          alignRight ? "items-end text-right" : "items-start text-left",
        )}
      >
        <motion.p
          className="font-mono text-xs font-black uppercase tracking-[0.3em]"
          initial={{ x: alignRight ? 36 : -36 }}
          animate={inView ? { x: 0 } : { x: alignRight ? 36 : -36 }}
          transition={{ duration: motionTokens.durations.pageEnter, ease: motionTokens.easings.enter }}
        >
          Diferencial {String(index + 1).padStart(2, "0")}
        </motion.p>
        <motion.h2
          className="mt-5 max-w-full text-[clamp(4rem,16vw,13rem)] font-black uppercase leading-[0.75]"
          style={{ color: differential.accent }}
          initial={{ clipPath: alignRight ? "inset(0 0 0 100%)" : "inset(0 100% 0 0)" }}
          animate={
            inView
              ? { clipPath: "inset(0 0 0 0)" }
              : { clipPath: alignRight ? "inset(0 0 0 100%)" : "inset(0 100% 0 0)" }
          }
          transition={{ duration: motionTokens.durations.sweep, ease: motionTokens.easings.route }}
        >
          {differential.label}
        </motion.h2>
        <motion.p
          className="mt-8 max-w-xl text-xl font-bold leading-8 sm:text-2xl"
          initial={{ y: 24 }}
          animate={inView ? { y: 0 } : { y: 24 }}
          transition={{ delay: 0.22, duration: motionTokens.durations.pageEnter, ease: motionTokens.easings.enter }}
        >
          {differential.description}
        </motion.p>
      </div>
    </div>
  );
}
