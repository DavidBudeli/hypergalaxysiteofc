"use client";

import {
  animate,
  motion,
  useMotionValue,
  type PanInfo,
} from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Bot,
  Braces,
  BriefcaseBusiness,
  HeartPulse,
  Landmark,
  MessageCircleMore,
  Scale,
  Workflow,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { ScrollTextReveal } from "@/components/motion/ScrollTextReveal";
import { useReducedMotionContext } from "@/components/motion/ReducedMotionProvider";
import { marketplaceAgents } from "@/config/checkpoint-three.config";
import { motionTokens } from "@/config/motion-tokens";
import { cn } from "@/lib/cn";

const agentIcons = [
  MessageCircleMore,
  BriefcaseBusiness,
  Scale,
  HeartPulse,
  Landmark,
  Braces,
  Bot,
  Workflow,
] as const;

export function AgentMarketplaceSection() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [step, setStep] = useState(340);
  const [cardWidth, setCardWidth] = useState(320);
  const prefersReducedMotion = useReducedMotionContext();

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) {
      return;
    }

    const update = () => {
      const width = viewport.clientWidth;
      const nextCardWidth =
        width >= 1024
          ? Math.min(520, Math.max(390, width * 0.47))
          : Math.min(390, Math.max(270, width * 0.84));
      setCardWidth(nextCardWidth);
      setStep(nextCardWidth + (width >= 640 ? 20 : 14));
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(viewport);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      x.set(-activeIndex * step);
      return;
    }

    const controls = animate(x, -activeIndex * step, {
      type: "spring",
      stiffness: motionTokens.springs.soft.stiffness,
      damping: motionTokens.springs.soft.damping,
      mass: motionTokens.springs.soft.mass,
    });

    return () => controls.stop();
  }, [activeIndex, prefersReducedMotion, step, x]);

  const goTo = (index: number) => {
    setActiveIndex(Math.max(0, Math.min(marketplaceAgents.length - 1, index)));
  };

  const handleDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.x < -56 || info.velocity.x < -420) {
      goTo(activeIndex + 1);
    } else if (info.offset.x > 56 || info.velocity.x > 420) {
      goTo(activeIndex - 1);
    } else {
      goTo(activeIndex);
    }
  };

  return (
    <section
      id="agentes-ia"
      className="overflow-hidden bg-[#F6F4EF] py-20 text-[#050507] lg:py-24"
      aria-labelledby="agents-title"
    >
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="font-mono text-xs font-black uppercase tracking-[0.3em] text-[#6D28D9]">
              Agentes especializados
            </p>
            <h2
              id="agents-title"
              className="mt-7 max-w-[10ch] text-[clamp(3rem,8vw,7.5rem)] font-black uppercase leading-[0.86]"
            >
              <ScrollTextReveal>AGENTES QUE</ScrollTextReveal>
              <ScrollTextReveal delay={0.08}>TRABALHAM COM VOCÊ.</ScrollTextReveal>
            </h2>
            <p className="mt-6 font-mono text-xs font-black uppercase tracking-[0.24em] text-[#17181E]/68">
              Arraste para explorar. Use as setas no teclado ou os controles.
            </p>
          </div>

          <div className="flex gap-2" aria-label="Controles do marketplace">
            <button
              type="button"
              className="grid h-12 w-12 place-items-center border border-[#050507]/18 disabled:opacity-30"
              onClick={() => goTo(activeIndex - 1)}
              disabled={activeIndex === 0}
              aria-label="Agente anterior"
            >
              <ArrowLeft size={20} aria-hidden="true" />
            </button>
            <button
              type="button"
              className="grid h-12 w-12 place-items-center border border-[#050507]/18 disabled:opacity-30"
              onClick={() => goTo(activeIndex + 1)}
              disabled={activeIndex === marketplaceAgents.length - 1}
              aria-label="Proximo agente"
            >
              <ArrowRight size={20} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={viewportRef}
        className="mx-auto mt-12 max-w-[1280px] overflow-visible px-6 sm:px-8 lg:px-10"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") {
            event.preventDefault();
            goTo(activeIndex + 1);
          }
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            goTo(activeIndex - 1);
          }
        }}
        aria-label="Marketplace de agentes. Use as setas esquerda e direita para navegar."
      >
        <motion.div
          className="flex touch-pan-y"
          style={{ x, gap: step - cardWidth }}
          drag="x"
          dragConstraints={{
            left: -(marketplaceAgents.length - 1) * step,
            right: 0,
          }}
          dragElastic={0.08}
          dragMomentum
          dragTransition={motionTokens.drag}
          onDragEnd={handleDragEnd}
          data-cursor="drag"
          data-cursor-label="ARRASTE"
        >
          {marketplaceAgents.map((agent, index) => {
            const Icon = agentIcons[index];
            const active = index === activeIndex;

            return (
              <motion.article
                key={agent.id}
                className={cn(
                  "relative flex min-h-[32rem] shrink-0 flex-col overflow-hidden border p-6 text-[#F6F4EF] sm:p-8",
                  active ? "border-transparent" : "border-white/10",
                )}
                style={{
                  width: cardWidth,
                  backgroundColor: agent.surface,
                  borderColor: active ? agent.accent : undefined,
                }}
                animate={{ y: active ? 0 : 22, scale: active ? 1 : 0.96 }}
                transition={motionTokens.springs.soft}
                aria-current={active ? "true" : undefined}
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-sm font-black tracking-[0.22em] text-white/56">
                    {agent.number} / 08
                  </span>
                  <span
                    className="border px-3 py-1 font-mono text-[9px] font-black uppercase tracking-[0.2em]"
                    style={{ borderColor: agent.accent, color: agent.accent }}
                  >
                    Conceito
                  </span>
                </div>

                <div className="relative mt-10 grid h-40 place-items-center border border-white/12">
                  <span
                    className="absolute inset-x-7 top-1/2 h-px"
                    style={{ backgroundColor: agent.accent }}
                  />
                  <span
                    className="absolute inset-y-7 left-1/2 w-px"
                    style={{ backgroundColor: agent.accent }}
                  />
                  <span
                    className="relative z-10 grid h-20 w-20 place-items-center bg-[#050507]"
                    style={{ color: agent.accent }}
                  >
                    <Icon size={34} strokeWidth={1.5} aria-hidden="true" />
                  </span>
                </div>

                <p className="mt-7 font-mono text-[10px] font-black uppercase tracking-[0.22em] text-white/62">
                  {agent.category}
                </p>
                <h3 className="mt-3 text-3xl font-black uppercase leading-[0.95] sm:text-4xl">
                  {agent.title}
                </h3>
                <p className="mt-5 text-base leading-7 text-white/65">{agent.description}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {agent.integrations.map((integration) => (
                    <span
                      key={integration}
                      className="border border-white/12 px-3 py-2 font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-white/58"
                    >
                      {integration}
                    </span>
                  ))}
                </div>

                <a
                  href="/iniciar-projeto"
                  className="mt-auto flex h-12 items-center justify-between border-t border-white/16 pt-5 text-xs font-black uppercase tracking-[0.14em]"
                  data-cursor="cta"
                >
                  Solicitar avaliação
                  <ArrowUpRight size={18} aria-hidden="true" />
                </a>
              </motion.article>
            );
          })}
        </motion.div>
      </div>

      <div className="mx-auto mt-8 grid max-w-[1280px] grid-cols-[auto_1fr] items-center gap-6 px-6 sm:px-8 lg:px-10">
        <p className="font-mono text-sm font-black tracking-[0.18em]" aria-live="polite">
          {String(activeIndex + 1).padStart(2, "0")} / 08
        </p>
        <div className="h-1 bg-[#050507]/12" aria-hidden="true">
          <motion.div
            className="h-full bg-[#6D28D9]"
            animate={{ width: `${((activeIndex + 1) / marketplaceAgents.length) * 100}%` }}
            transition={{ duration: motionTokens.durations.fast, ease: motionTokens.easings.enter }}
          />
        </div>
      </div>
    </section>
  );
}
