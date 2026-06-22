import type { Metadata } from "next";
import { ArrowLeft, MessageCircle } from "lucide-react";
import Link from "next/link";

import { ProjectBriefingForm } from "@/components/briefing/ProjectBriefingForm";
import { Wordmark } from "@/components/navigation/Wordmark";
import { contactConfig } from "@/config/contact.config";

export const metadata: Metadata = {
  title: "Iniciar projeto",
  description:
    "Organize o briefing do seu projeto de software, IA, automação ou plataforma com a Hyper Galaxy.",
  alternates: { canonical: "/iniciar-projeto" },
};

export default function StartProjectPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050507] px-5 pb-24 text-[#F5F3EE] sm:px-8 lg:px-10">
      <div className="briefing-star-field pointer-events-none absolute inset-0 opacity-45" aria-hidden="true" />
      <div className="briefing-orbit briefing-orbit-one pointer-events-none absolute right-[-10rem] top-40 hidden size-[34rem] rounded-full border border-[#7546E8]/18 lg:block" aria-hidden="true" />
      <div className="briefing-orbit briefing-orbit-two pointer-events-none absolute right-20 top-72 hidden size-3 rounded-full bg-[#4A8FFF] lg:block" aria-hidden="true" />

      <header className="relative z-10 mx-auto flex h-24 max-w-[1280px] items-center justify-between">
        <Link href="/" aria-label="Voltar para a página inicial">
          <Wordmark className="w-[154px] sm:w-[170px]" priority />
        </Link>
        <Link
          href="/"
          className="inline-flex min-h-11 items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-white/58 transition hover:text-white"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          Voltar ao site
        </Link>
      </header>

      <section className="relative z-10 mx-auto max-w-[1280px] pb-14 pt-14 sm:pt-20 lg:pb-20 lg:pt-24">
        <div className="max-w-5xl">
          <p className="font-mono text-xs font-black uppercase tracking-[0.28em] text-[#C4B5FD]">
            Briefing de projeto / 01—03
          </p>
          <h1 className="mt-7 max-w-[13ch] text-[clamp(3rem,8vw,7.8rem)] font-black uppercase leading-[0.84]">
            Vamos construir o próximo sistema da sua operação.
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-7 text-white/58 sm:text-lg sm:leading-8">
            Responda algumas perguntas rápidas para entendermos o cenário, o nível de
            complexidade e o melhor caminho para o seu projeto.
          </p>
          {contactConfig.whatsappUrl ? (
            <a
              href={contactConfig.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex min-h-12 items-center gap-3 border border-white/16 px-5 text-xs font-black uppercase tracking-[0.08em] transition hover:border-[#93C5FD] hover:text-[#93C5FD]"
            >
              <MessageCircle size={17} aria-hidden="true" />
              Prefere falar direto? Chamar no WhatsApp
            </a>
          ) : (
            <p className="mt-7 inline-flex min-h-12 items-center gap-3 border border-white/10 px-5 text-xs font-black uppercase tracking-[0.08em] text-white/38">
              <MessageCircle size={17} aria-hidden="true" />
              Contato direto em configuração
            </p>
          )}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-[1280px]" aria-label="Formulário de briefing">
        <ProjectBriefingForm whatsappUrl={contactConfig.whatsappUrl} />
      </section>
    </main>
  );
}
