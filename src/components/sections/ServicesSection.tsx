"use client";

import { FlipCard } from "@/components/cards/FlipCard";
import { ScrollTextReveal } from "@/components/motion/ScrollTextReveal";
import { SectionTransition } from "@/components/motion/SectionTransition";
import { services } from "@/config/checkpoint-two.config";

export function ServicesSection() {
  return (
    <section
      id="servicos"
      className="relative overflow-hidden bg-[#F6F4EF] px-6 py-24 text-[#050507] sm:px-8 lg:px-10"
    >
      <span id="solucoes" className="absolute -top-16" aria-hidden="true" />
      <div className="mx-auto max-w-[1280px]">
        <SectionTransition className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="hidden font-mono text-xs font-black uppercase tracking-[0.3em] text-[#6D28D9] lg:block">
              Passe o cursor para descobrir.
            </p>
            <p className="mt-2 font-mono text-xs font-black uppercase tracking-[0.3em] text-[#17181E]/68 lg:hidden">
              Toque para descobrir.
            </p>
            <h2 className="mt-7 max-w-[11ch] text-[clamp(2.5rem,8vw,3.4rem)] font-black uppercase leading-[0.9] sm:text-[clamp(4rem,10vw,9rem)] sm:leading-[0.86]">
              <ScrollTextReveal>O QUE</ScrollTextReveal>
              <ScrollTextReveal delay={0.1}>CONSTRUÍMOS.</ScrollTextReveal>
            </h2>
          </div>
          <p className="max-w-[20rem] text-base leading-8 text-[#17181E]/68 sm:max-w-xl sm:text-lg lg:justify-self-end">
            Cada frente combina arquitetura, automação e operação conectada. Os
            cards revelam aplicação prática, tecnologias e caminho de ação.
          </p>
        </SectionTransition>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <FlipCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
