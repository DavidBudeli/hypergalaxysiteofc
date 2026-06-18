"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import {
  Bell,
  Bot,
  Boxes,
  CreditCard,
  FolderKanban,
  LifeBuoy,
  Workflow,
} from "lucide-react";
import { useRef, useState } from "react";

import { ScrollTextReveal } from "@/components/motion/ScrollTextReveal";
import { platformModules } from "@/config/checkpoint-three.config";
import { motionTokens } from "@/config/motion-tokens";
import { cn } from "@/lib/cn";

const platformIcons = [Bot, Boxes, FolderKanban, LifeBuoy, CreditCard, Workflow, Bell] as const;

export function PlatformStorySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    const next = Math.min(
      platformModules.length - 1,
      Math.floor(progress * platformModules.length),
    );
    setActiveIndex(next);
  });

  return (
    <section
      ref={sectionRef}
      id="plataforma"
      className="relative bg-[#090A10] text-[#F6F4EF] lg:min-h-[320vh]"
    >
      <span id="projetos" className="absolute -top-16" aria-hidden="true" />

      <div className="px-6 py-24 sm:px-8 lg:hidden">
        <p className="font-mono text-xs font-black uppercase tracking-[0.3em] text-[#93C5FD]">
          Operação conectada
        </p>
        <h2 className="mt-7 text-[clamp(3rem,13vw,5rem)] font-black uppercase leading-[0.86]">
          TUDO O QUE SUA OPERAÇÃO PRECISA. EM UM SÓ LUGAR.
        </h2>
        <p className="mt-7 max-w-xl text-base leading-7 text-white/58">
          Uma visão integrada para acompanhar agentes, projetos, solicitações e operação.
        </p>

        <div className="mt-12 grid gap-5">
          {platformModules.map((module, index) => (
            <PlatformPreview key={module.id} module={module} index={index} compact />
          ))}
        </div>
      </div>

      <div className="sticky top-0 hidden min-h-screen overflow-hidden px-10 py-20 lg:block">
        <div className="mx-auto grid min-h-[calc(100vh-10rem)] max-w-[1280px] grid-cols-[0.76fr_1.24fr] items-center gap-16">
          <div>
            <p className="font-mono text-xs font-black uppercase tracking-[0.3em] text-[#93C5FD]">
              Operação conectada
            </p>
            <h2 className="mt-7 text-[clamp(4rem,6vw,7rem)] font-black uppercase leading-[0.86]">
              <ScrollTextReveal>TUDO O QUE</ScrollTextReveal>
              <ScrollTextReveal delay={0.08}>SUA OPERAÇÃO PRECISA.</ScrollTextReveal>
              <ScrollTextReveal delay={0.16}>EM UM SÓ LUGAR.</ScrollTextReveal>
            </h2>
            <p className="mt-8 max-w-lg text-lg leading-8 text-white/58">
              Um módulo por vez para transformar contexto disperso em decisões claras.
            </p>

            <ol className="mt-10 grid gap-2" aria-label="Modulos da plataforma">
              {platformModules.map((module, index) => (
                <li key={module.id}>
                  <button
                    type="button"
                    className={cn(
                      "flex h-11 w-full items-center border-l px-4 text-left transition-colors",
                      activeIndex === index
                        ? "border-white bg-white/8 text-white"
                        : "border-white/12 text-white/64 hover:text-white",
                    )}
                    onClick={() => setActiveIndex(index)}
                  >
                    <span className="w-10 font-mono text-[10px] font-black">{module.index}</span>
                    <span className="text-sm font-black uppercase">{module.title}</span>
                  </button>
                </li>
              ))}
            </ol>
          </div>

          <div className="relative min-h-[560px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={platformModules[activeIndex].id}
                initial={{ opacity: 0, x: 46, clipPath: "inset(0 0 0 18%)" }}
                animate={{ opacity: 1, x: 0, clipPath: "inset(0 0 0 0%)" }}
                exit={{ opacity: 0, x: -28, clipPath: "inset(0 18% 0 0)" }}
                transition={{
                  duration: motionTokens.durations.pageEnter,
                  ease: motionTokens.easings.enter,
                }}
              >
                <PlatformPreview
                  module={platformModules[activeIndex]}
                  index={activeIndex}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function PlatformPreview({
  module,
  index,
  compact = false,
}: {
  module: (typeof platformModules)[number];
  index: number;
  compact?: boolean;
}) {
  const Icon = platformIcons[index];

  return (
    <article
      className={cn(
        "relative overflow-hidden border border-white/12 bg-[#111218]",
        compact ? "min-h-[22rem] p-5" : "min-h-[560px] p-8 xl:p-10",
      )}
    >
      <div className="flex items-center justify-between border-b border-white/10 pb-5">
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center border border-white/14" style={{ color: module.accent }}>
            <Icon size={20} aria-hidden="true" />
          </span>
          <div>
            <p className="font-mono text-[9px] font-black uppercase tracking-[0.2em] text-white/68">
              Visão ilustrativa
            </p>
            <h3 className="mt-1 text-lg font-black uppercase">{module.title}</h3>
          </div>
        </div>
        <span className="font-mono text-xs font-black text-white/68">{module.index} / 07</span>
      </div>

      <div className={cn("grid gap-8", compact ? "mt-7" : "mt-12")}>
        <div>
          <p className={cn("font-black uppercase leading-none", compact ? "text-4xl" : "text-6xl xl:text-7xl")}>
            {module.title}
          </p>
          <p className="mt-5 max-w-xl text-base leading-7 text-white/58">{module.summary}</p>
        </div>

        <div className="grid gap-3">
          {module.rows.map((row, rowIndex) => (
            <div
              key={row}
              className="grid min-h-16 grid-cols-[auto_1fr_auto] items-center gap-4 border border-white/10 bg-white/[0.025] px-4"
            >
              <span
                className="h-2.5 w-2.5"
                style={{ backgroundColor: module.accent }}
                aria-hidden="true"
              />
              <span className="text-sm font-bold">{row}</span>
              <span className="font-mono text-[9px] font-black uppercase tracking-[0.16em] text-white/68">
                Exemplo {String(rowIndex + 1).padStart(2, "0")}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-1" style={{ width: `${((index + 1) / 7) * 100}%`, backgroundColor: module.accent }} />
    </article>
  );
}
