"use client";

import { Marquee } from "@/components/motion/Marquee";
import { SectionTransition } from "@/components/motion/SectionTransition";
import { technologies } from "@/config/checkpoint-two.config";

export function TechnologyMarqueeSection() {
  const first = technologies.slice(0, 7);
  const second = technologies.slice(7);

  return (
    <section
      id="tecnologias"
      className="overflow-hidden bg-[#F6F4EF] py-20 text-[#050507]"
      style={{ contentVisibility: "auto", containIntrinsicSize: "620px" }}
    >
      <SectionTransition className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-10">
        <p className="font-mono text-xs font-black uppercase tracking-[0.3em] text-[#6D28D9]">
          Tecnologias que impulsionam o ecossistema
        </p>
        <p className="mt-5 max-w-3xl text-2xl font-black uppercase leading-tight md:text-4xl">
          Tecnologias e integrações planejadas para conectar software,
          automações e canais. Não são clientes.
        </p>
      </SectionTransition>

      <div className="mt-12 grid gap-4">
        <Marquee items={first} speed="34s" />
        <Marquee items={second} reverse speed="42s" />
      </div>
    </section>
  );
}
