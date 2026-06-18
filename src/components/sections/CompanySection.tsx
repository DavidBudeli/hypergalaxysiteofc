"use client";

import { ArrowUpRight } from "lucide-react";

import { SectionTransition } from "@/components/motion/SectionTransition";
import { ScrollTextReveal } from "@/components/motion/ScrollTextReveal";
import { PlanetVisual } from "@/components/planets/PlanetVisual";
import { planetsConfig } from "@/config/planets.config";

const nova = planetsConfig.find((planet) => planet.id === "nova") ?? planetsConfig[0];

export function CompanySection() {
  return (
    <section
      id="empresa"
      className="relative overflow-hidden bg-[#090A10] px-6 py-28 text-[#F6F4EF] sm:px-8 lg:px-10"
    >
      <div className="absolute right-[8%] top-20 hidden opacity-55 lg:block" aria-hidden="true">
        <PlanetVisual planet={nova} size={86} priority />
      </div>
      <div className="absolute bottom-0 left-0 h-px w-full bg-white/12" />

      <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <SectionTransition>
          <p className="font-mono text-xs font-black uppercase tracking-[0.3em] text-[#93C5FD]">
            Mais que uma software house
          </p>
          <h2 className="mt-7 text-[clamp(3rem,8vw,7.4rem)] font-black uppercase leading-[0.86]">
            <ScrollTextReveal>SOMOS A EQUIPE</ScrollTextReveal>
            <ScrollTextReveal delay={0.08}>DE TECNOLOGIA</ScrollTextReveal>
            <ScrollTextReveal delay={0.16}>DA SUA OPERAÇÃO.</ScrollTextReveal>
          </h2>
        </SectionTransition>

        <SectionTransition delay={0.16} className="lg:pb-3">
          <div className="border-l border-white/18 pl-6">
            <p className="max-w-xl text-xl leading-9 text-[#B9BBC5]">
              Criamos software, agentes inteligentes e automações conectados às
              necessidades reais de cada negócio.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#servicos"
                className="inline-flex h-14 items-center justify-center gap-2 bg-[#F6F4EF] px-6 text-sm font-black uppercase tracking-[0.08em] text-[#050507]"
                data-cursor="cta"
              >
                Conhecer soluções
                <ArrowUpRight size={17} />
              </a>
              <a
                href="#iniciar-projeto"
                className="inline-flex h-14 items-center justify-center border border-white/16 px-6 text-sm font-black uppercase tracking-[0.08em] text-[#F6F4EF]"
                data-cursor="cta"
              >
                Iniciar projeto
              </a>
            </div>
          </div>

          <div className="mt-12 inline-flex items-center gap-4 border border-white/12 px-4 py-3">
            <span className="h-2 w-2 rounded-full bg-[#A3E635]" />
            <span className="font-mono text-[10px] font-black uppercase tracking-[0.24em] text-white/62">
              Nova acompanha a arquitetura
            </span>
          </div>
        </SectionTransition>
      </div>
    </section>
  );
}
