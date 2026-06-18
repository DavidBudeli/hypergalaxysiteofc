"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { CounterReveal } from "@/components/motion/CounterReveal";
import { capabilities } from "@/config/checkpoint-two.config";
import { motionTokens } from "@/config/motion-tokens";
import { cn } from "@/lib/cn";

export function MetricsSection() {
  return (
    <section
      id="capacidades"
      className="bg-[#050507] text-[#F6F4EF]"
    >
      <div className="mx-auto max-w-[1280px] px-6 py-24 sm:px-8 lg:px-10">
        <p className="font-mono text-xs font-black uppercase tracking-[0.3em] text-[#93C5FD]">
          Métricas e capacidades
        </p>
        <div className="mt-12 grid gap-10">
          {capabilities.map((capability, index) => (
            <MetricRow key={capability.label} capability={capability} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MetricRow({
  capability,
  index,
}: {
  capability: (typeof capabilities)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px -15% 0px" });
  const alignRight = index % 2 === 1;

  return (
    <motion.div
      ref={ref}
      className={cn(
        "min-h-[15rem] border-t border-white/12 py-8",
        alignRight ? "text-right" : "text-left",
      )}
      initial={{ scale: 0.94, y: 24 }}
      animate={inView ? { scale: 1, y: 0 } : { scale: 0.94, y: 24 }}
      transition={{
        duration: motionTokens.durations.slow,
        ease: motionTokens.easings.enter,
      }}
    >
      <p
        className={cn(
          "text-[clamp(4.6rem,17vw,13rem)] font-black uppercase leading-[0.78] tracking-normal",
          capability.tone === "light" && "text-[#F6F4EF]",
          capability.tone === "blue" && "text-[#93C5FD]",
          capability.tone === "warm" && "text-[#F4B860]",
        )}
      >
        {"counter" in capability ? (
          <CounterReveal value={capability.counter} suffix={capability.suffix} />
        ) : (
          capability.value
        )}
      </p>
      <p className="mt-5 font-mono text-sm font-black uppercase tracking-[0.26em] text-white/58 md:text-lg">
        {capability.label}
      </p>
    </motion.div>
  );
}
