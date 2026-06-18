"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, MessageCircle, Sparkles, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { ScrollTextReveal } from "@/components/motion/ScrollTextReveal";
import { useReducedMotionContext } from "@/components/motion/ReducedMotionProvider";
import { motionTokens } from "@/config/motion-tokens";

export function NovaSection() {
  const [conversationOpen, setConversationOpen] = useState(false);
  const prefersReducedMotion = useReducedMotionContext();

  return (
    <section
      id="nova"
      className="relative overflow-hidden bg-[#C4B5FD] px-6 py-24 text-[#050507] sm:px-8 lg:px-10 lg:py-32"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-[#050507]/12" />
      <div className="mx-auto grid max-w-[1280px] gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="font-mono text-xs font-black uppercase tracking-[0.3em] text-[#4C1D95]">
            Nova / assistente Hyper Galaxy
          </p>
          <h2 className="mt-7 text-[clamp(3rem,4vw,3.8rem)] font-black uppercase leading-[0.86]">
            <ScrollTextReveal>CONHECA NOVA,</ScrollTextReveal>
            <ScrollTextReveal delay={0.08}>SUA ASSISTENTE</ScrollTextReveal>
            <ScrollTextReveal delay={0.16}>HYPER GALAXY.</ScrollTextReveal>
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-8 text-[#17181E]/72">
            Uma presença digital para orientar, conectar agentes e tornar a operação mais
            simples. Esta conversa é uma demonstração de interface, sem integração ativa com
            modelos de IA.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              className="inline-flex h-14 items-center justify-center gap-3 bg-[#050507] px-6 text-sm font-black uppercase tracking-[0.08em] text-[#F6F4EF]"
              onClick={() => setConversationOpen((value) => !value)}
              aria-expanded={conversationOpen}
              aria-controls="nova-conversation"
              data-cursor="cta"
            >
              {conversationOpen ? "Fechar demonstração" : "Conversar com a Nova"}
              {conversationOpen ? <X size={18} aria-hidden="true" /> : <MessageCircle size={18} aria-hidden="true" />}
            </button>
            <a
              href="#agentes-ia"
              className="inline-flex h-14 items-center justify-center gap-3 border border-[#050507]/22 px-6 text-sm font-black uppercase tracking-[0.08em]"
              data-cursor="cta"
            >
              Conhecer agentes
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>

          <AnimatePresence initial={false}>
            {conversationOpen ? (
              <motion.div
                id="nova-conversation"
                className="mt-6 max-w-xl border border-[#050507]/18 bg-[#F6F4EF] p-5"
                initial={{ opacity: 0, height: 0, y: 16 }}
                animate={{ opacity: 1, height: "auto", y: 0 }}
                exit={{ opacity: 0, height: 0, y: 12 }}
                transition={{ duration: motionTokens.durations.fast, ease: motionTokens.easings.enter }}
                aria-live="polite"
              >
                <div className="flex items-center gap-3 border-b border-[#050507]/10 pb-4">
                  <span className="h-2.5 w-2.5 bg-[#A3E635]" aria-hidden="true" />
                  <span className="font-mono text-[10px] font-black uppercase tracking-[0.22em]">
                    Preview ativo / respostas demonstrativas
                  </span>
                </div>
                <div className="mt-4 grid gap-3 text-sm leading-6">
                  <p className="mr-8 bg-[#EDE9FE] p-4">
                    Olá. Posso ajudar a mapear onde software, agentes e automações reduzem
                    atrito na sua operação.
                  </p>
                  <p className="ml-8 border border-[#050507]/12 p-4 text-[#17181E]/68">
                    Exemplo: quero conectar atendimento, vendas e dados.
                  </p>
                  <p className="mr-8 bg-[#050507] p-4 text-[#F6F4EF]">
                    Podemos começar pelo fluxo atual e priorizar uma primeira integração com
                    impacto mensuravel.
                  </p>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>

        <motion.div
          className="relative mx-auto aspect-[765/1433] w-full max-w-[590px]"
          onPointerMove={(event) => {
            if (prefersReducedMotion) {
              return;
            }

            const rect = event.currentTarget.getBoundingClientRect();
            event.currentTarget.style.setProperty(
              "--nova-x",
              `${((event.clientX - rect.left) / rect.width - 0.5) * 14}px`,
            );
            event.currentTarget.style.setProperty(
              "--nova-y",
              `${((event.clientY - rect.top) / rect.height - 0.5) * 10}px`,
            );
          }}
          animate={prefersReducedMotion ? undefined : { y: [0, -10, 0] }}
          transition={
            prefersReducedMotion
              ? undefined
              : { duration: 5.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }
          }
          data-cursor="preview"
          data-cursor-label="NOVA"
        >
          <Image
            src="/assets/nova/nova-assistant.webp"
            alt="Nova, assistente digital da Hyper Galaxy, representada como uma personagem robótica original em branco, grafite e roxo"
            fill
            sizes="(max-width: 1023px) 90vw, 46vw"
            loading="lazy"
            className="nova-character-image object-contain [transform:translate3d(var(--nova-x,0),var(--nova-y,0),0)] [transition:transform_220ms_cubic-bezier(0.16,1,0.3,1)]"
          />
          <div className="absolute bottom-[6%] left-1/2 flex -translate-x-1/2 items-center gap-3 border border-[#050507]/16 bg-[#F6F4EF]/92 px-4 py-3 backdrop-blur-sm">
            <Sparkles size={16} aria-hidden="true" />
            <span className="whitespace-nowrap font-mono text-[9px] font-black uppercase tracking-[0.2em]">
              Nova / preview
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
