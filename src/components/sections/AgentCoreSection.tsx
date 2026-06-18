"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, Bot, Database, Network, Workflow } from "lucide-react";
import { useState } from "react";

import { ScrollTextReveal } from "@/components/motion/ScrollTextReveal";
import { SectionTransition } from "@/components/motion/SectionTransition";
import { useReducedMotionContext } from "@/components/motion/ReducedMotionProvider";
import { agentCategories } from "@/config/checkpoint-three.config";
import { motionTokens } from "@/config/motion-tokens";

const categoryIcons = [Bot, Network, Workflow, Database] as const;

export function AgentCoreSection() {
  const [expanded, setExpanded] = useState(false);
  const prefersReducedMotion = useReducedMotionContext();

  return (
    <section
      id="agent-core"
      className="relative overflow-hidden bg-[#050507] px-6 py-20 text-[#F6F4EF] sm:px-8 lg:px-10 lg:py-24"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-white/12" />
      <div className="mx-auto max-w-[1280px]">
        <SectionTransition className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-end">
          <div>
            <p className="font-mono text-xs font-black uppercase tracking-[0.3em] text-[#93C5FD]">
              Agent Core
            </p>
            <h2 className="mt-7 text-[clamp(3rem,5.2vw,5.5rem)] font-black uppercase leading-[0.86]">
              <ScrollTextReveal>UM NÚCLEO.</ScrollTextReveal>
              <ScrollTextReveal delay={0.08}>MÚLTIPLOS AGENTES.</ScrollTextReveal>
              <ScrollTextReveal delay={0.16}>UMA OPERAÇÃO CONECTADA.</ScrollTextReveal>
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-8 text-white/62 lg:justify-self-end">
            Um núcleo para coordenar agentes especializados, automações e dados. Abra para
            conhecer as frentes de atuação.
          </p>
        </SectionTransition>

        <div className="mt-10 grid items-center gap-12 lg:grid-cols-[1fr_0.72fr]">
          <motion.button
            type="button"
            className="group relative mx-auto grid aspect-square w-full max-w-[620px] place-items-center overflow-hidden border border-white/14 bg-[#090A10] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C4B5FD]"
            style={{ clipPath: "polygon(18% 0,82% 0,100% 18%,100% 82%,82% 100%,18% 100%,0 82%,0 18%)" }}
            onClick={() => setExpanded((value) => !value)}
            onPointerMove={(event) => {
              if (prefersReducedMotion) {
                return;
              }

              const rect = event.currentTarget.getBoundingClientRect();
              event.currentTarget.style.setProperty(
                "--core-x",
                `${((event.clientX - rect.left) / rect.width - 0.5) * 18}px`,
              );
              event.currentTarget.style.setProperty(
                "--core-y",
                `${((event.clientY - rect.top) / rect.height - 0.5) * 18}px`,
              );
            }}
            aria-expanded={expanded}
            aria-controls="agent-core-categories"
            data-cursor="preview"
            data-cursor-label={expanded ? "FECHAR" : "ABRIR"}
          >
            <div className="absolute inset-[7%] border border-[#8B5CF6]/42 transition-transform duration-700 group-hover:scale-[0.98]" />
            <div className="absolute inset-[15%] rotate-45 border border-[#93C5FD]/26 transition-transform duration-700 group-hover:rotate-[52deg]" />
            <div className="absolute left-1/2 top-[8%] h-[84%] w-px -translate-x-1/2 bg-white/12" />
            <div className="absolute left-[8%] top-1/2 h-px w-[84%] -translate-y-1/2 bg-white/12" />

            <motion.div
              className="relative z-10 grid h-[52%] w-[34%] min-w-[118px] place-items-center border border-[#C4B5FD]/70 bg-[#17181E]"
              style={{
                transform:
                  "translate3d(var(--core-x, 0), var(--core-y, 0), 0)",
                clipPath: "polygon(20% 0,80% 0,100% 16%,100% 84%,80% 100%,20% 100%,0 84%,0 16%)",
              }}
              animate={{ scale: expanded ? 1.12 : 1 }}
              transition={motionTokens.springs.soft}
            >
              <motion.div
                className="absolute inset-[12%] border border-[#8B5CF6]/44"
                animate={{ rotate: expanded ? 90 : 0 }}
                transition={{ duration: motionTokens.durations.sweep, ease: motionTokens.easings.enter }}
              />
              <div className="relative grid h-24 w-16 place-items-center border border-white/24 bg-[#050507] sm:h-32 sm:w-20">
                <span className="absolute top-2 font-mono text-[8px] font-black uppercase tracking-[0.22em] text-white/68">
                  HG
                </span>
                <span className="h-8 w-8 bg-[#8B5CF6] shadow-[0_0_0_8px_rgba(139,92,246,0.14)] sm:h-10 sm:w-10" />
                <span className="absolute bottom-2 h-px w-7 bg-[#93C5FD]" />
              </div>
            </motion.div>

            <span className="absolute bottom-[8%] left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-[10px] font-black uppercase tracking-[0.26em] text-white/68">
              {expanded ? "Núcleo aberto" : "Toque para abrir"}
            </span>
          </motion.button>

          <div>
            <p className="font-mono text-xs font-black uppercase tracking-[0.26em] text-[#C4B5FD]">
              Categorias conectadas
            </p>
            <div
              id="agent-core-categories"
              className="mt-6 grid gap-3"
              aria-live="polite"
            >
              {agentCategories.map((category, index) => {
                const Icon = categoryIcons[index];

                return (
                  <motion.div
                    key={category}
                    className="flex min-h-20 items-center gap-5 border border-white/12 bg-white/[0.035] px-5"
                    initial={false}
                    animate={{
                      x: expanded ? 0 : 18,
                    }}
                    transition={{
                      delay: expanded ? index * motionTokens.stagger.cards : 0,
                      duration: motionTokens.durations.fast,
                      ease: motionTokens.easings.enter,
                    }}
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center border border-[#8B5CF6]/45 text-[#C4B5FD]">
                      <Icon size={20} aria-hidden="true" />
                    </span>
                    <span className="text-lg font-black uppercase">{category}</span>
                    <span className="ml-auto font-mono text-xs text-white/68">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            <AnimatePresence>
              {expanded ? (
                <motion.a
                  href="#agentes-ia"
                  className="mt-6 inline-flex h-14 w-full items-center justify-between bg-[#F6F4EF] px-5 text-sm font-black uppercase tracking-[0.08em] text-[#050507]"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  data-cursor="cta"
                >
                  Explorar agentes
                  <ArrowDown size={18} aria-hidden="true" />
                </motion.a>
              ) : null}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
