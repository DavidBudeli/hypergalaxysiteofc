"use client";

import { motion, type MotionValue } from "framer-motion";

import { DragReveal } from "@/components/drag/DragReveal";
import { ScrollTextReveal } from "@/components/motion/ScrollTextReveal";

export function RevealSection({
  transitionOpacity,
}: {
  transitionOpacity?: MotionValue<number>;
}) {
  return (
    <motion.section
      id="reveal"
      className="relative z-30 -mt-[72vh] min-h-[118vh] overflow-hidden bg-[#F6F4EF] px-6 py-24 text-[#050507] sm:px-8 lg:px-10"
      style={{ opacity: transitionOpacity }}
    >
      <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[0.38fr_0.62fr] lg:items-center">
        <div className="min-w-0">
          <p className="font-mono text-xs font-black uppercase tracking-[0.3em] text-[#6D28D9]">
            Da operação manual ao ecossistema inteligente
          </p>
          <h2 className="mt-7 max-w-[9ch] text-[clamp(3.1rem,6vw,5.6rem)] font-black uppercase leading-[0.86] tracking-normal">
            <ScrollTextReveal>SEU PRÓXIMO</ScrollTextReveal>
            <ScrollTextReveal delay={0.1}>NÍVEL ESTÁ</ScrollTextReveal>
            <ScrollTextReveal delay={0.2}>AQUI DENTRO.</ScrollTextReveal>
          </h2>
        </div>

        <div className="min-w-0 lg:justify-self-end">
          <p className="text-lg leading-8 text-[#17181E]/72">
            Arraste, mova o cursor ou use o controle para comparar uma operação
            fragmentada com um ecossistema Hyper Galaxy conectado.
          </p>
          <p className="mt-5 font-mono text-xs font-black uppercase tracking-[0.22em] text-[#17181E]/52">
            Arraste para revelar
          </p>
          <div className="mt-7">
            <DragReveal />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
