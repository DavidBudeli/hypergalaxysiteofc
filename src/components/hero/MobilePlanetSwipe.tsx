"use client";

import { useRef, useState } from "react";

import { planetsConfig } from "@/config/planets.config";
import { PlanetVisual } from "@/components/planets/PlanetVisual";

export function MobilePlanetSwipe() {
  const [active, setActive] = useState(0);
  const frame = useRef(0);

  return (
    <div className="lg:hidden">
      <div
        className="-mx-6 mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-[30vw] pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        data-cursor="drag"
        onScroll={(event) => {
          cancelAnimationFrame(frame.current);
          const currentTarget = event.currentTarget;
          frame.current = requestAnimationFrame(() => {
            const itemWidth = currentTarget.scrollWidth / planetsConfig.length;
            setActive(Math.round(currentTarget.scrollLeft / itemWidth));
          });
        }}
      >
        {planetsConfig.map((planet, index) => (
          <div key={planet.id} className="flex min-w-[54vw] snap-center flex-col items-center">
            <PlanetVisual
              planet={planet}
              size={index === active ? 188 : 142}
              variant={index === active ? "active" : "normal"}
              priority={index < 2}
            />
            <p className="mt-4 font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-[#93C5FD]">
              {planet.label} / {planet.name}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-2 flex justify-center gap-2">
        {planetsConfig.map((planet, index) => (
          <span
            key={planet.id}
            className={`h-1.5 w-6 transition-colors ${
              index === active ? "bg-[#C4B5FD]" : "bg-white/18"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
