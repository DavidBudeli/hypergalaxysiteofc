"use client";

import { ArrowUpRight, Menu } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { cn } from "@/lib/cn";

type BackgroundMode = "dark" | "light";
type BrandVersion = "institutional" | "expressive";
type BrandPart = "complete" | "symbol" | "wordmark";

const sizes = [120, 160, 240, 320] as const;

export function BrandLab() {
  const [background, setBackground] = useState<BackgroundMode>("dark");
  const [version, setVersion] = useState<BrandVersion>("institutional");
  const [part, setPart] = useState<BrandPart>("complete");
  const [size, setSize] = useState<(typeof sizes)[number]>(320);

  const isDark = background === "dark";
  const asset = getAsset({ background, version, part });

  return (
    <main className="min-h-screen bg-[#E9E8E3] text-[#050507]">
      <header className="border-b border-[#050507]/14 px-5 py-5 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-mono text-[10px] font-black uppercase tracking-[0.26em] text-[#6D28D9]">
              Hyper Galaxy / laboratorio interno
            </p>
            <h1 className="mt-3 text-4xl font-black uppercase leading-none sm:text-6xl">
              Brand Lab
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-[#17181E]/62">
              Duas hierarquias para o mesmo sistema original: Nova simplificada, wordmark
              legível e roxo como assinatura. Nenhuma opção está integrada ao site público.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4" aria-label="Controles da marca">
            <ControlGroup label="Fundo">
              <ControlButton active={background === "dark"} onClick={() => setBackground("dark")}>Escuro</ControlButton>
              <ControlButton active={background === "light"} onClick={() => setBackground("light")}>Claro</ControlButton>
            </ControlGroup>
            <ControlGroup label="Versão">
              <ControlButton active={version === "institutional"} onClick={() => setVersion("institutional")}>A</ControlButton>
              <ControlButton active={version === "expressive"} onClick={() => setVersion("expressive")}>B</ControlButton>
            </ControlGroup>
            <ControlGroup label="Elemento">
              <select
                className="h-11 border border-[#050507]/18 bg-transparent px-3 text-xs font-bold uppercase"
                value={part}
                onChange={(event) => setPart(event.target.value as BrandPart)}
                aria-label="Elemento da marca"
              >
                <option value="complete">Completa</option>
                <option value="symbol">Símbolo</option>
                <option value="wordmark">Wordmark</option>
              </select>
            </ControlGroup>
            <ControlGroup label="Tamanho">
              <select
                className="h-11 border border-[#050507]/18 bg-transparent px-3 text-xs font-bold uppercase"
                value={size}
                onChange={(event) => setSize(Number(event.target.value) as (typeof sizes)[number])}
                aria-label="Tamanho da marca"
              >
                {sizes.map((value) => <option key={value} value={value}>{value}px</option>)}
              </select>
            </ControlGroup>
          </div>
        </div>
      </header>

      <section
        id="brand-preview"
        className={cn(
          "grid min-h-[66vh] place-items-center px-6 py-20 transition-colors",
          isDark ? "bg-[#050507]" : "bg-[#F6F4EF]",
        )}
      >
        <Image
          src={asset}
          alt={`Proposta ${version === "institutional" ? "A institucional" : "B expressiva"} da marca Hyper Galaxy`}
          width={version === "expressive" && part === "complete" ? 250 : 360}
          height={version === "expressive" && part === "complete" ? 116 : 64}
          style={{ width: size, height: "auto" }}
          priority
        />
      </section>

      <section id="brand-options" className="px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="bg-[#050507] p-8 sm:p-12">
              <p className="font-mono text-[10px] font-black uppercase tracking-[0.24em] text-[#C4B5FD]">
                Opção A / institucional
              </p>
              <Image src="/assets/brand/logo-horizontal-dark.svg" alt="Logo horizontal institucional" width={360} height={64} className="mt-12 h-auto w-full max-w-[420px]" />
              <p className="mt-12 max-w-lg text-sm leading-6 text-white/56">
                Leitura rápida em uma linha. Recomendada para header desktop, propostas,
                documentos e interfaces enterprise.
              </p>
            </div>
            <div className="bg-[#F6F4EF] p-8 sm:p-12">
              <p className="font-mono text-[10px] font-black uppercase tracking-[0.24em] text-[#6D28D9]">
                Opção B / expressiva
              </p>
              <Image src="/assets/brand/logo-stacked-light.svg" alt="Logo empilhada expressiva" width={250} height={116} className="mt-10 h-auto w-full max-w-[300px]" />
              <p className="mt-10 max-w-lg text-sm leading-6 text-[#17181E]/62">
                Maior presença e contraste entre as palavras. Recomendada para mobile,
                social, capas e momentos de assinatura.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="brand-sizes" className="border-y border-[#050507]/12 bg-[#F6F4EF] px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-[1440px]">
          <p className="font-mono text-[10px] font-black uppercase tracking-[0.24em] text-[#6D28D9]">
            Símbolo em tamanhos mínimos
          </p>
          <div className="mt-10 flex flex-wrap items-end gap-10">
            {[16, 24, 32, 48, 64, 128].map((value) => (
              <div key={value} className="grid justify-items-center gap-4">
                <Image src="/assets/brand/logo-symbol-color.svg" alt={`Simbolo em ${value} pixels`} width={value} height={value} style={{ width: value, height: value }} />
                <span className="font-mono text-[10px] font-black">{value}px</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="brand-applications" className="px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-[1440px]">
          <p className="font-mono text-[10px] font-black uppercase tracking-[0.24em] text-[#6D28D9]">
            Aplicacoes controladas
          </p>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            <div className="bg-[#050507] p-5 text-white">
              <div className="flex h-16 items-center justify-between border-b border-white/10">
                <Image src="/assets/brand/logo-horizontal-dark.svg" alt="Aplicacao no header" width={200} height={36} className="h-auto w-[180px]" />
                <span className="grid h-10 w-10 place-items-center border border-white/18"><Menu size={20} /></span>
              </div>
              <p className="mt-5 font-mono text-[9px] uppercase tracking-[0.2em] text-white/42">Header / desktop</p>
            </div>
            <div className="bg-[#17181E] p-6 text-white">
              <Image src="/assets/brand/logo-stacked-dark.svg" alt="Aplicacao mobile" width={180} height={84} className="h-auto w-[170px]" />
              <button className="mt-10 flex h-12 w-full items-center justify-between bg-[#F6F4EF] px-4 text-xs font-black uppercase tracking-[0.08em] text-[#050507]" type="button">
                Iniciar projeto <ArrowUpRight size={17} />
              </button>
              <p className="mt-5 font-mono text-[9px] uppercase tracking-[0.2em] text-white/42">Mobile / CTA</p>
            </div>
            <div className="border border-[#050507]/14 bg-white p-6">
              <Image src="/assets/brand/logo-symbol-color.svg" alt="Aplicacao em card" width={64} height={64} />
              <h2 className="mt-12 text-2xl font-black uppercase">Operacao conectada.</h2>
              <p className="mt-3 text-sm leading-6 text-[#17181E]/58">Símbolo isolado em uma aplicação de produto.</p>
              <p className="mt-7 font-mono text-[9px] uppercase tracking-[0.2em] text-[#6D28D9]">Card / produto</p>
            </div>
          </div>
        </div>
      </section>

      <section id="brand-favicon" className="border-y border-[#050507]/12 bg-white px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
          <div>
            <p className="font-mono text-[10px] font-black uppercase tracking-[0.24em] text-[#6D28D9]">
              Favicon e app icon
            </p>
            <h2 className="mt-5 text-4xl font-black uppercase leading-none sm:text-6xl">
              Reconhecível no menor espaço.
            </h2>
            <p className="mt-6 max-w-lg text-sm leading-6 text-[#17181E]/62">
              O visor e a silhueta da Nova permanecem legíveis sem depender do wordmark.
            </p>
          </div>
          <div className="flex flex-wrap items-end gap-8 bg-[#050507] p-8 sm:p-12">
            {[16, 32, 48, 64].map((value) => (
              <div key={value} className="grid justify-items-center gap-4 text-white">
                <Image src="/favicon.svg" alt={`Favicon candidato em ${value} pixels`} width={value} height={value} style={{ width: value, height: value }} />
                <span className="font-mono text-[9px] text-white/42">{value}px</span>
              </div>
            ))}
            <div className="grid justify-items-center gap-4 text-white">
              <Image src="/apple-touch-icon.png" alt="Apple touch icon candidato" width={120} height={120} />
              <span className="font-mono text-[9px] text-white/42">APP ICON</span>
            </div>
          </div>
        </div>
      </section>

      <section id="brand-comparison" className="bg-[#050507] px-5 py-16 text-white sm:px-8 lg:px-10">
        <div className="mx-auto max-w-[1440px]">
          <p className="font-mono text-[10px] font-black uppercase tracking-[0.24em] text-[#C4B5FD]">
            Comparacao com a identidade atual
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="border border-white/12 p-8">
              <Image src="/assets/brand/hyper-galaxy-wordmark.svg" alt="Identidade atual" width={220} height={64} className="h-auto max-h-20 w-auto" />
              <p className="mt-8 text-sm text-white/48">Atual / preservada até aprovação.</p>
            </div>
            <div className="border border-[#8B5CF6]/46 p-8">
              <Image src="/assets/brand/logo-horizontal-dark.svg" alt="Nova proposta institucional" width={360} height={64} className="h-auto max-h-20 w-full max-w-[360px]" />
              <p className="mt-8 text-sm text-white/48">Proposta / mais simples, madura e escalável.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function ControlGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="mb-2 font-mono text-[9px] font-black uppercase tracking-[0.18em] text-[#17181E]/48">{label}</p>
      <div className="flex">{children}</div>
    </div>
  );
}

function ControlButton({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      className={cn(
        "h-11 border border-[#050507]/18 px-3 text-xs font-black uppercase",
        active ? "bg-[#050507] text-white" : "bg-transparent text-[#050507]",
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function getAsset({ background, version, part }: { background: BackgroundMode; version: BrandVersion; part: BrandPart }) {
  if (part === "symbol") {
    return `/assets/brand/logo-symbol-${background === "dark" ? "white" : "black"}.svg`;
  }
  if (part === "wordmark") {
    return `/assets/brand/logo-wordmark-${background}.svg`;
  }
  if (version === "expressive") {
    return `/assets/brand/logo-stacked-${background}.svg`;
  }
  return `/assets/brand/logo-horizontal-${background}.svg`;
}
