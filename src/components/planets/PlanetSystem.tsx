"use client";

import { AnimatePresence, motion, useTransform, type MotionValue } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";

import { motionTokens } from "@/config/motion-tokens";
import { planetsConfig, type PlanetConfig, type PlanetKind } from "@/config/planets.config";
import { cn } from "@/lib/cn";

import { PlanetVisual } from "./PlanetVisual";

export function PlanetSystem({
  transitionProgress,
}: {
  transitionProgress: MotionValue<number>;
}) {
  const [hovered, setHovered] = useState<PlanetKind | null>(null);
  const [active, setActive] = useState<PlanetConfig | null>(null);

  return (
    <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[48%] lg:block">
      {planetsConfig.map((planet, index) => (
        <PlanetOrbit
          key={planet.id}
          planet={planet}
          index={index}
          transitionProgress={transitionProgress}
          muted={Boolean((hovered || active) && hovered !== planet.id && active?.id !== planet.id)}
          active={active?.id === planet.id}
          onHover={setHovered}
          onSelect={() => setActive(planet)}
        />
      ))}

      <AnimatePresence>
        {active ? (
          <motion.aside
            className="pointer-events-auto absolute bottom-[9%] right-[9%] z-30 w-[min(360px,42vw)] border border-white/12 bg-[#050507]/80 p-5 text-white shadow-2xl backdrop-blur-xl"
            data-cursor="preview"
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            transition={{ duration: motionTokens.durations.fast, ease: motionTokens.easings.enter }}
          >
            <button
              type="button"
              className="absolute right-3 top-3 grid h-8 w-8 place-items-center border border-white/10 text-white/64 transition-colors hover:text-white"
              onClick={() => setActive(null)}
              aria-label="Fechar preview"
              data-cursor="link"
            >
              <X size={16} />
            </button>
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#C4B5FD]">
              {active.label} / {active.category}
            </p>
            <h3 className="mt-4 text-3xl font-semibold leading-none">{active.name}</h3>
            <p className="mt-4 text-sm leading-6 text-[#B9BBC5]">{active.description}</p>
            <a
              href="#iniciar-projeto"
              className="mt-5 inline-flex text-xs font-bold uppercase tracking-[0.18em] text-[#F6F4EF]"
              data-cursor="cta"
            >
              Abrir orbita
            </a>
          </motion.aside>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

function PlanetOrbit({
  planet,
  index,
  transitionProgress,
  muted,
  active,
  onHover,
  onSelect,
}: {
  planet: PlanetConfig;
  index: number;
  transitionProgress: MotionValue<number>;
  muted: boolean;
  active: boolean;
  onHover: (id: PlanetKind | null) => void;
  onSelect: () => void;
}) {
  const scatterX = useTransform(
    transitionProgress,
    [0, 1],
    [0, (planet.depth - 2) * 34 + (index % 2 === 0 ? 44 : -58)],
  );
  const scatterY = useTransform(
    transitionProgress,
    [0, 1],
    [0, planet.depth * -28 + (index % 3) * 26],
  );
  const scale = useTransform(transitionProgress, [0, 1], [1, planet.id === "hyper-flow" ? 1.85 : 0.78]);
  const opacity = useTransform(transitionProgress, [0, 0.72, 1], [1, planet.id === "hyper-flow" ? 1 : 0.6, planet.id === "hyper-flow" ? 0.92 : 0.1]);

  return (
    <motion.button
      type="button"
      className={cn(
        "group pointer-events-auto absolute z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center border-0 bg-transparent p-0 text-center",
        muted && "opacity-45",
      )}
      style={{
        left: planet.position.desktop.x,
        top: planet.position.desktop.y,
        x: scatterX,
        y: scatterY,
        scale,
        opacity,
      }}
      initial={{ opacity: 0, y: 28, scale: 0.86 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        delay: 0.58 + index * motionTokens.stagger.planets,
        duration: motionTokens.durations.slow,
        ease: motionTokens.easings.enter,
      }}
      onPointerEnter={() => onHover(planet.id)}
      onPointerLeave={() => onHover(null)}
      onFocus={() => onHover(planet.id)}
      onBlur={() => onHover(null)}
      onClick={onSelect}
      data-cursor="planet"
      data-cursor-label="EXPLORAR"
    >
      <motion.div
        layoutId={planet.id === "hyper-flow" ? "hyper-flow-planet" : undefined}
        className="relative"
        animate={{
          y:
            planet.float.direction === "x"
              ? [0, 0, 0]
              : [0, -planet.float.amplitude, 0],
          x:
            planet.float.direction === "y"
              ? [0, 0, 0]
              : [0, planet.float.amplitude * 0.45, 0],
        }}
        transition={{
          duration: planet.float.duration,
          delay: planet.float.delay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <PlanetVisual
          planet={planet}
          size={planet.size.desktop}
          variant={active ? "active" : "normal"}
          priority={planet.id === "hyper-flow"}
        />
      </motion.div>
      <span className="mt-2 font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-white/42">
        {planet.label}
      </span>
      <span className="mt-1 max-w-36 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#93C5FD] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        {planet.name}
      </span>
    </motion.button>
  );
}
