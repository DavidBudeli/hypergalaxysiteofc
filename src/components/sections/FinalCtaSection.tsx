"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { Marquee } from "@/components/motion/Marquee";
import { PlanetVisual } from "@/components/planets/PlanetVisual";
import { planetsConfig } from "@/config/planets.config";

import { Wordmark } from "../navigation/Wordmark";

const closingPlanet =
  planetsConfig.find((planet) => planet.id === "hyper-connect") ?? planetsConfig[0];

const footerLinks = [
  { label: "Solucoes", href: "#solucoes" },
  { label: "Agentes IA", href: "#agentes-ia" },
  { label: "Plataforma", href: "#plataforma" },
  { label: "Nova", href: "#nova" },
] as const;

export function FinalCtaSection() {
  return (
    <>
      <section
        id="iniciar-projeto"
        className="relative overflow-hidden bg-[#050507] px-6 pb-24 pt-28 text-[#F6F4EF] sm:px-8 lg:px-10 lg:pb-32 lg:pt-40"
      >
        <span id="contato" className="absolute -top-16" aria-hidden="true" />
        <div className="final-cta-planet pointer-events-none absolute -right-[8%] top-[12%] hidden opacity-78 lg:block" aria-hidden="true">
          <PlanetVisual planet={closingPlanet} size={430} />
        </div>

        <motion.div
          className="relative z-10 mx-auto max-w-[1280px]"
          initial={{ opacity: 0, y: 44 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-mono text-xs font-black uppercase tracking-[0.3em] text-[#C4B5FD]">
            Proximo movimento
          </p>
          <h2 className="mt-7 max-w-[11ch] text-[clamp(3.4rem,10vw,10.5rem)] font-black uppercase leading-[0.8]">
            VAMOS CONSTRUIR O QUE VEM DEPOIS.
          </h2>
          <p className="mt-9 max-w-xl text-lg leading-8 text-white/58">
            Conte o que hoje trava sua operação. A primeira conversa organiza contexto,
            prioridades e o caminho técnico possível.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="/iniciar-projeto"
              className="inline-flex h-16 items-center justify-center gap-3 bg-[#F6F4EF] px-7 text-sm font-black uppercase tracking-[0.08em] text-[#050507] transition-colors hover:bg-[#C4B5FD]"
              data-cursor="cta"
            >
              Iniciar projeto
              <ArrowUpRight size={19} aria-hidden="true" />
            </a>
            <a
              href="#plataforma"
              className="inline-flex h-16 items-center justify-center gap-3 border border-white/18 px-7 text-sm font-black uppercase tracking-[0.08em] text-[#F6F4EF] transition-colors hover:border-[#93C5FD] hover:text-[#93C5FD]"
              data-cursor="cta"
            >
              Conhecer a plataforma
              <ArrowUpRight size={19} aria-hidden="true" />
            </a>
          </div>
        </motion.div>

        <div className="relative z-10 mt-24 border-y border-white/10 py-4">
          <Marquee
            items={["SOFTWARE", "AGENTES IA", "AUTOMAÇÃO", "CLOUD", "INTEGRAÇÕES"]}
            speed="46s"
          />
        </div>
      </section>

      <footer id="rodape" className="bg-[#050507] px-6 pb-8 text-[#F6F4EF] sm:px-8 lg:px-10">
        <div className="mx-auto max-w-[1280px] border-t border-white/12 pt-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto_auto] lg:items-start">
            <div>
              <a href="#topo" data-cursor="link">
                <Wordmark className="w-[170px]" />
              </a>
              <p className="mt-5 max-w-sm text-sm leading-6 text-white/62">
                Software, inteligência artificial, automação e cloud conectados à operação.
              </p>
            </div>

            <nav className="grid grid-cols-2 gap-x-10 gap-y-3" aria-label="Navegacao do rodape">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="flex min-h-11 items-center text-sm text-white/58 transition-colors hover:text-white"
                  data-cursor="link"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="grid gap-3 text-sm">
              <a
                href="/iniciar-projeto"
                className="flex min-h-11 items-center text-white/58 transition-colors hover:text-white"
                data-cursor="link"
              >
                Abrir canal de contato
              </a>
              <a
                href="/iniciar-projeto"
                className="inline-flex min-h-11 items-center text-white/58 transition-colors hover:text-white"
                data-cursor="link"
              >
                Enviar briefing
              </a>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-4 border-t border-white/8 pt-6 font-mono text-[10px] uppercase tracking-[0.16em] text-white/62 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Hyper Galaxy. Todos os direitos reservados.</p>
            <div className="flex gap-5">
              <a href="/privacidade" className="hover:text-white" data-cursor="link">
                Privacidade
              </a>
              <a href="/termos" className="hover:text-white" data-cursor="link">
                Termos
              </a>
              <span>PT-BR</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
