import { Bot, Cloud, Settings, ShieldCheck } from "lucide-react";
import Image from "next/image";

import { SiteHeader } from "@/components/navigation/SiteHeader";

const brandPath = "/assets/brand";

const palette = [
  { name: "Cosmic Black", hex: "#050507", className: "bg-[#050507] text-[#F5F3EE]" },
  { name: "Graphite", hex: "#1B1C22", className: "bg-[#1B1C22] text-[#F5F3EE]" },
  { name: "Warm White", hex: "#F5F3EE", className: "bg-[#F5F3EE] text-[#050507]" },
  { name: "Hyper Purple", hex: "#7546E8", className: "bg-[#7546E8] text-white" },
  { name: "Electric Blue", hex: "#4A8FFF", className: "bg-[#4A8FFF] text-white" },
] as const;

const capabilities = [
  { label: "AI & Automation", icon: Bot },
  { label: "Cloud Native", icon: Cloud },
  { label: "Integrations", icon: Settings },
  { label: "Trust & Security", icon: ShieldCheck },
] as const;

export function BrandLab({ capture }: { capture?: string }) {
  if (capture === "approved-dark") return <DarkLogoStrip />;
  if (capture === "approved-light") return <LightLogoStrip />;
  if (capture === "approved-applications") return <Applications />;
  if (capture === "approved-sizes") return <SymbolSizes />;
  if (capture === "applied-favicon") return <FaviconEvidence />;
  if (capture === "applied-header") return <HeaderEvidence />;
  if (capture === "applied-header-mobile") return <MobileHeaderEvidence />;
  if (capture === "applied-preloader") return <PreloaderEvidence />;
  if (capture === "applied-footer") return <FooterEvidence />;

  return (
    <main className="min-h-screen bg-[#F5F3EE] font-sans text-[#050507]">
      <section className="grid border-b border-[#B8BBC4] xl:grid-cols-[1.08fr_0.92fr]">
        <HeroPanel />
        <LogoSystemPanel />
      </section>
      <section className="grid border-b border-[#B8BBC4] lg:grid-cols-2">
        <DarkLogoStrip />
        <LightLogoStrip />
      </section>
      <Foundations />
      <Applications />
      <ApprovedSurfaces />
      <NovaAndEssence />
      <ApprovedReference />
    </main>
  );
}

function HeroPanel() {
  return (
    <section className="relative min-h-[460px] overflow-hidden bg-[#050507] px-7 py-7 text-[#F5F3EE] sm:px-10 lg:px-12">
      <div className="relative z-10 flex h-full flex-col">
        <div>
          <p className="text-xl font-medium tracking-[0.04em] text-[#7546E8]">HYPER GALAXY</p>
          <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.12em]">Identidade visual / aprovada</p>
        </div>

        <div className="mt-10 grid flex-1 gap-8 md:grid-cols-[0.95fr_1.05fr] md:items-center">
          <div>
            <h1 className="text-3xl font-medium leading-[1.1] tracking-[-0.035em] sm:text-[34px]">
              <span className="block whitespace-nowrap">Intelligent systems.</span>
              <span className="mt-2 block text-[#7546E8]">Stronger outcomes.</span>
            </h1>
            <p className="mt-6 max-w-sm text-sm leading-6 text-[#B8BBC4]">
              Hyper Galaxy builds AI-powered software that automates work, connects systems, and unlocks real business value.
            </p>
          </div>
          <Image
            src={`${brandPath}/logo-symbol-white.svg`}
            alt="Símbolo HG principal"
            width={480}
            height={448}
            className="mx-auto h-auto w-full max-w-[320px]"
            priority
            unoptimized
          />
        </div>

        <div className="mt-6 grid grid-cols-2 gap-5 sm:grid-cols-4">
          {capabilities.map(({ label, icon: Icon }) => (
            <div key={label} className="text-center">
              <Icon className="mx-auto text-[#F5F3EE]" size={26} strokeWidth={1.45} />
              <p className="mt-3 text-[9px] font-medium uppercase tracking-[0.08em] text-[#B8BBC4]">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LogoSystemPanel() {
  return (
    <section className="bg-[#F5F3EE] p-7 sm:p-8">
      <SpecLabel>Primary logo — horizontal</SpecLabel>
      <div className="grid min-h-32 place-items-center border-b border-[#B8BBC4] py-6">
        <Image src={`${brandPath}/logo-horizontal-light.svg`} alt="Logo horizontal Hyper Galaxy" width={799} height={144} className="h-auto w-full max-w-[620px]" priority unoptimized />
      </div>
      <div className="grid min-h-[280px] lg:grid-cols-2">
        <div className="border-b border-[#B8BBC4] py-6 lg:border-b-0 lg:border-r lg:pr-7">
          <SpecLabel>Stacked logo</SpecLabel>
          <Image src={`${brandPath}/logo-stacked-light.svg`} alt="Logo empilhado Hyper Galaxy" width={468} height={282} className="mx-auto mt-5 h-44 w-auto max-w-full" unoptimized />
        </div>
        <div className="py-6 lg:pl-7">
          <SpecLabel>Symbol — icon</SpecLabel>
          <Image src={`${brandPath}/logo-symbol-black.svg`} alt="Símbolo HG" width={128} height={128} className="mx-auto mt-7 h-44 w-auto max-w-full" unoptimized />
        </div>
      </div>
    </section>
  );
}

function DarkLogoStrip() {
  return (
    <section className="min-h-[190px] bg-[#050507] p-6 text-[#F5F3EE] sm:p-7">
      <SpecLabel dark>Logo — dark background</SpecLabel>
      <div className="mt-5 grid grid-cols-3 items-center gap-6">
        <Image src={`${brandPath}/logo-horizontal-dark.svg`} alt="Logo horizontal em fundo escuro" width={799} height={144} className="col-span-2 h-auto w-full max-w-[500px]" unoptimized />
        <Image src={`${brandPath}/logo-symbol-white.svg`} alt="Símbolo em fundo escuro" width={128} height={128} className="mx-auto h-24 w-auto" unoptimized />
      </div>
    </section>
  );
}

function LightLogoStrip() {
  return (
    <section className="min-h-[190px] bg-[#F5F3EE] p-6 sm:p-7">
      <SpecLabel>Logo — light background</SpecLabel>
      <div className="mt-5 grid grid-cols-3 items-center gap-6">
        <Image src={`${brandPath}/logo-horizontal-light.svg`} alt="Logo horizontal em fundo claro" width={799} height={144} className="col-span-2 h-auto w-full max-w-[500px]" unoptimized />
        <Image src={`${brandPath}/logo-symbol-black.svg`} alt="Símbolo em fundo claro" width={128} height={128} className="mx-auto h-24 w-auto" unoptimized />
      </div>
    </section>
  );
}

function Foundations() {
  return (
    <section className="grid border-b border-[#B8BBC4] xl:grid-cols-[1.35fr_1fr]">
      <div className="border-b border-[#B8BBC4] p-7 sm:p-10 xl:border-b-0 xl:border-r">
        <SpecLabel>Color palette</SpecLabel>
        <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-5">
          {palette.map((color) => (
            <div key={color.name} className={`flex aspect-[.82] min-h-36 flex-col justify-end p-4 ${color.className}`}>
              <p className="text-xs font-medium">{color.name}</p>
              <p className="mt-1 text-sm font-semibold uppercase tracking-[0.03em]">{color.hex}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="p-7 sm:p-10">
        <SpecLabel>Typography direction</SpecLabel>
        <div className="mt-5 grid gap-8 sm:grid-cols-2">
          <div className="border-b border-[#B8BBC4] pb-6 sm:border-b-0 sm:border-r sm:pb-0 sm:pr-8">
            <p className="text-[10px] font-semibold uppercase tracking-[0.08em]">Display / headline font</p>
            <p className="mt-3 text-5xl font-semibold tracking-[-0.04em]">Geist</p>
            <p className="mt-2 text-xs">Bold / Semibold / Medium</p>
            <p className="mt-4 text-[11px] leading-5 tracking-[0.02em]">ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />0123456789</p>
          </div>
          <div className="font-[Inter,Geist,sans-serif]">
            <p className="text-[10px] font-semibold uppercase tracking-[0.08em]">Interface / body font</p>
            <p className="mt-3 text-4xl">Inter</p>
            <p className="mt-2 text-xs">Regular / Medium / Semibold</p>
            <p className="mt-4 text-[11px] leading-5">Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm<br />Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Applications() {
  return (
    <section className="border-b border-[#B8BBC4] bg-[#F5F3EE] p-7 text-[#050507] sm:p-10">
      <SpecLabel>Brand applications</SpecLabel>
      <div className="mt-5 grid gap-px border border-[#B8BBC4] bg-[#B8BBC4] lg:grid-cols-[1.55fr_.7fr_.55fr_.62fr_.58fr]">
        <MiniWebsite />
        <FaviconPreview />
        <div className="bg-[#F5F3EE] p-5 text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.08em]">App icon</p>
          <Image src={`${brandPath}/app-icon-512.png`} alt="App icon Hyper Galaxy" width={140} height={140} className="mx-auto mt-8 h-28 w-28" unoptimized />
        </div>
        <div className="bg-[#F5F3EE] p-5">
          <p className="text-center text-[10px] font-semibold uppercase tracking-[0.08em]">Buttons</p>
          <button type="button" className="mt-8 h-11 w-full bg-[#8E3EFF] px-4 text-sm font-medium text-white">Get started →</button>
          <button type="button" className="mt-3 h-11 w-full border border-[#B8BBC4] bg-white px-4 text-sm">Schedule demo</button>
          <p className="mt-7 text-center text-sm font-medium text-[#7546E8]">Learn more →</p>
        </div>
        <div className="bg-[#F5F3EE] p-5 text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.08em]">Social avatar</p>
          <div className="mx-auto mt-8 grid h-28 w-28 place-items-center rounded-full bg-[#050507] p-5">
            <Image src={`${brandPath}/logo-symbol-white.svg`} alt="Avatar social Hyper Galaxy" width={96} height={96} className="h-auto w-full" unoptimized />
          </div>
        </div>
      </div>
    </section>
  );
}

function ApprovedSurfaces() {
  return (
    <section className="border-b border-[#B8BBC4] bg-white p-7 text-[#050507] sm:p-10">
      <SpecLabel>Aplicações públicas aprovadas</SpecLabel>
      <div className="mt-6 grid gap-px border border-[#B8BBC4] bg-[#B8BBC4] lg:grid-cols-2">
        <div className="bg-[#050507] p-6 text-[#F5F3EE]">
          <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[#B8BBC4]">Header desktop</p>
          <div className="mt-5 flex h-16 items-center justify-between border-y border-white/10 px-4">
            <Image src={`${brandPath}/logo-horizontal-dark.svg`} alt="Logo no header desktop" width={799} height={144} className="h-auto w-[168px]" unoptimized />
            <div className="flex items-center gap-7 text-[10px] text-white/65"><span>Projetos</span><span>Soluções</span><span>Plataforma</span><span className="bg-[#F5F3EE] px-4 py-2 text-[#050507]">Iniciar projeto</span></div>
          </div>
        </div>
        <div className="bg-[#1B1C22] p-6 text-[#F5F3EE]">
          <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[#B8BBC4]">Header mobile</p>
          <div className="mt-5 flex h-16 items-center justify-between border-y border-white/10 px-4">
            <Image src={`${brandPath}/logo-horizontal-dark.svg`} alt="Logo no header mobile" width={799} height={144} className="h-auto w-[132px]" unoptimized />
            <span className="grid h-10 w-10 place-items-center border border-white/20 text-xl">≡</span>
          </div>
        </div>
        <div className="bg-[#050507] p-6 text-center text-[#F5F3EE]">
          <p className="text-left text-[10px] font-semibold uppercase tracking-[0.1em] text-[#B8BBC4]">Preloader</p>
          <Image src={`${brandPath}/logo-horizontal-dark.svg`} alt="Logo no preloader" width={799} height={144} className="mx-auto mt-10 h-auto w-[190px]" unoptimized />
          <div className="mx-auto mt-7 h-px w-56 bg-white/10"><div className="h-px w-2/3 bg-[#7546E8]" /></div>
          <p className="mt-3 font-mono text-[10px] tracking-[0.24em] text-white/55">067%</p>
        </div>
        <div className="bg-[#050507] p-6 text-[#F5F3EE]">
          <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[#B8BBC4]">Footer</p>
          <div className="mt-5 grid gap-6 border-t border-white/12 pt-6 sm:grid-cols-[1fr_auto]">
            <div><Image src={`${brandPath}/logo-horizontal-dark.svg`} alt="Logo no footer" width={799} height={144} className="h-auto w-[170px]" unoptimized /><p className="mt-4 text-xs leading-5 text-white/55">Software, inteligência artificial, automação e cloud.</p></div>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-xs text-white/55"><span>Soluções</span><span>Plataforma</span><span>Agentes IA</span><span>Contato</span></div>
          </div>
        </div>
        <div className="bg-[#F5F3EE] p-6">
          <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[#1B1C22]">Monocromática</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2"><div className="grid min-h-28 place-items-center bg-white p-5"><Image src={`${brandPath}/logo-monochrome-black.svg`} alt="Logo monocromática preta" width={799} height={144} className="h-auto w-full max-w-[260px]" unoptimized /></div><div className="grid min-h-28 place-items-center bg-[#050507] p-5"><Image src={`${brandPath}/logo-monochrome-white.svg`} alt="Logo monocromática branca" width={799} height={144} className="h-auto w-full max-w-[260px]" unoptimized /></div></div>
        </div>
        <div className="bg-[#F5F3EE] p-6">
          <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[#1B1C22]">Open Graph</p>
          <Image src={`${brandPath}/og-brand.png`} alt="Open Graph Hyper Galaxy" width={1200} height={630} className="mt-5 h-auto w-full border border-[#B8BBC4]" unoptimized />
        </div>
      </div>
    </section>
  );
}

function MiniWebsite() {
  return (
    <div className="bg-[#F5F3EE] p-4">
      <div className="overflow-hidden rounded-lg border border-[#B8BBC4] bg-[#050507] text-[#F5F3EE]">
        <div className="flex h-10 items-center justify-between bg-white px-3 text-[#050507]">
          <Image src={`${brandPath}/logo-horizontal-light.svg`} alt="Logo no header" width={799} height={144} className="h-6 w-auto" unoptimized />
          <div className="hidden gap-4 text-[7px] sm:flex"><span>Products</span><span>Solutions</span><span>Integrations</span><span>Company</span></div>
          <span className="bg-[#7546E8] px-3 py-1 text-[7px] text-white">Get started</span>
        </div>
        <div className="relative min-h-48 overflow-hidden p-6">
          <h3 className="text-3xl font-medium leading-none">Automate. Integrate.<br />Elevate.</h3>
          <p className="mt-4 max-w-xs text-[11px] leading-4 text-[#B8BBC4]">AI-powered software and seamless integrations that scale with you.</p>
          <div className="mt-5 flex gap-2 text-[8px]"><span className="bg-[#7546E8] px-4 py-2">Book a demo</span><span className="border border-[#B8BBC4]/40 px-4 py-2">Explore solutions</span></div>
        </div>
      </div>
    </div>
  );
}

function FaviconPreview() {
  return (
    <div className="bg-[#F5F3EE] p-5">
      <p className="text-center text-[10px] font-semibold uppercase tracking-[0.08em]">Favicon</p>
      <div className="mt-7 rounded-2xl bg-[#1B1C22] p-5 text-[#F5F3EE]">
        <div className="flex gap-2"><span className="h-2 w-2 rounded-full bg-[#FF745E]" /><span className="h-2 w-2 rounded-full bg-[#F1C94A]" /><span className="h-2 w-2 rounded-full bg-[#55C271]" /></div>
        <p className="mt-4 truncate text-[10px] text-[#B8BBC4]">Hyper Galaxy</p>
        <div className="mt-8 grid h-12 w-12 place-items-center rounded-lg border border-[#B8BBC4]/30 bg-[#050507] p-2">
          <Image src="/favicon.svg" alt="Favicon Hyper Galaxy" width={40} height={40} className="h-auto w-full" unoptimized />
        </div>
      </div>
    </div>
  );
}

function NovaAndEssence() {
  const states = ["Listening", "Thinking", "Working", "Complete"];
  return (
    <section className="grid bg-[#F5F3EE] lg:grid-cols-[1.35fr_.65fr]">
      <div className="border-b border-[#B8BBC4] p-7 sm:p-10 lg:border-b-0 lg:border-r">
        <SpecLabel>Nova — your AI assistant</SpecLabel>
        <div className="mt-6 grid gap-8 md:grid-cols-[.65fr_1.35fr] md:items-center">
          <p className="max-w-sm text-sm leading-6 text-[#1B1C22]">Nova is the friendly AI assistant that lives within the Hyper Galaxy ecosystem—here to help, automate, and guide every step of the way.</p>
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
            {states.map((state, index) => (
              <div key={state} className="text-center">
                <div className="relative mx-auto grid h-24 w-24 place-items-center rounded-full border border-[#B8BBC4] bg-white">
                  <Image src="/assets/nova/nova-assistant.png" alt={`Nova ${state}`} width={110} height={110} className="h-20 w-20 object-contain" />
                  {index === 3 ? <span className="absolute -bottom-1 -right-1 grid h-7 w-7 place-items-center rounded-full bg-[#7546E8] text-xs text-white">✓</span> : null}
                </div>
                <p className="mt-3 text-xs text-[#1B1C22]/70">{state}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="p-7 sm:p-10">
        <SpecLabel>Brand essence</SpecLabel>
        <div className="mt-6 grid gap-7 sm:grid-cols-[1fr_auto] sm:items-end">
          <ul className="space-y-3 text-sm">
            {["Intelligent by design", "Automate with confidence", "Integrate without limits", "Built for scale and trust", "Focused on real outcomes"].map((item) => (
              <li key={item} className="flex items-center gap-3"><span className="h-1.5 w-1.5 bg-[#7546E8]" />{item}</li>
            ))}
          </ul>
          <div>
            <Image src={`${brandPath}/logo-horizontal-light.svg`} alt="Assinatura Hyper Galaxy" width={799} height={144} className="h-auto w-56" unoptimized />
            <p className="mt-6 text-lg leading-6">Smarter systems.<br />Stronger outcomes.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function SymbolSizes() {
  return (
    <main className="min-h-screen bg-[#F5F3EE] p-10 text-[#050507]">
      <SpecLabel>Approved symbol — scale test</SpecLabel>
      <h1 className="mt-5 text-6xl font-semibold tracking-[-0.05em]">Uma marca. Todos os tamanhos.</h1>
      <div className="mt-16 flex flex-wrap items-end gap-12 border border-[#B8BBC4] bg-white p-10">
        {[16, 24, 32, 48, 64, 128, 256].map((size) => (
          <div key={size} className="grid justify-items-center gap-4">
            <Image src={`${brandPath}/logo-symbol-black.svg`} alt={`Símbolo HG em ${size}px`} width={size} height={size} style={{ width: size, height: "auto" }} unoptimized />
            <span className="text-xs text-[#1B1C22]/60">{size}px</span>
          </div>
        ))}
      </div>
    </main>
  );
}

function FaviconEvidence() {
  return (
    <main className="min-h-screen bg-[#F5F3EE] p-10 text-[#050507]">
      <SpecLabel>Favicon aprovado / escala real</SpecLabel>
      <h1 className="mt-5 text-6xl font-semibold tracking-[-0.05em]">HG reconhecível no menor espaço.</h1>
      <div className="mt-16 flex flex-wrap items-end gap-12 border border-[#B8BBC4] bg-white p-10">
        {[16, 24, 32, 48, 64].map((size) => (
          <div key={size} className="grid justify-items-center gap-4">
            <Image src="/favicon.svg" alt={`Favicon HG em ${size}px`} width={size} height={size} style={{ width: size, height: size }} unoptimized />
            <span className="text-xs text-[#1B1C22]/60">{size}px</span>
          </div>
        ))}
        <div className="ml-auto grid justify-items-center gap-4">
          <Image src={`${brandPath}/app-icon-512.png`} alt="App icon HG" width={180} height={180} className="h-[180px] w-[180px]" unoptimized />
          <span className="text-xs text-[#1B1C22]/60">App icon</span>
        </div>
      </div>
    </main>
  );
}

function PreloaderEvidence() {
  return (
    <main className="relative grid min-h-screen place-items-center overflow-hidden bg-[#050507] text-[#F5F3EE]">
      <div className="absolute inset-0 bg-[url('/assets/stars/hero-stars.svg')] bg-cover bg-center opacity-35" />
      <div className="relative z-10 flex flex-col items-center">
        <Image src="/assets/planets/hyper-flow.webp" alt="Planeta Hyper Flow" width={260} height={260} className="h-[260px] w-[260px] object-contain" priority />
        <Image src={`${brandPath}/logo-horizontal-dark.svg`} alt="Hyper Galaxy" width={799} height={144} className="mt-8 h-auto w-[190px]" priority unoptimized />
        <div className="mt-8 h-px w-56 overflow-hidden bg-white/10"><div className="h-full w-2/3 bg-[#7546E8]" /></div>
        <p className="mt-4 font-mono text-xs font-bold tracking-[0.3em] text-white/55">067%</p>
      </div>
    </main>
  );
}

function HeaderEvidence() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050507] text-[#F5F3EE]">
      <SiteHeader />
      <div className="absolute inset-0 bg-[url('/assets/stars/hero-stars.svg')] bg-cover bg-center opacity-35" />
      <div className="relative mx-auto flex min-h-screen max-w-[1400px] items-center px-6 pt-20 sm:px-8 lg:px-10">
        <div><p className="font-mono text-xs font-bold uppercase tracking-[0.28em] text-[#B8BBC4]">AI · Software · Cloud · Automation</p><h1 className="mt-7 max-w-4xl text-5xl font-semibold leading-[0.94] sm:text-7xl">Sistemas para empresas irem além.</h1></div>
      </div>
    </main>
  );
}

function MobileHeaderEvidence() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050507] text-[#F5F3EE]">
      <div className="absolute inset-0 bg-[url('/assets/stars/hero-stars.svg')] bg-cover bg-center opacity-35" />
      <header className="relative z-10 flex h-[68px] items-center px-5">
        <Image src={`${brandPath}/logo-horizontal-dark.svg`} alt="Hyper Galaxy" width={799} height={144} className="h-auto w-[132px]" priority unoptimized />
        <span className="absolute right-5 top-[14px] grid h-10 w-10 place-content-center gap-1 border border-white/25" aria-hidden="true"><span className="h-px w-5 bg-white" /><span className="h-px w-5 bg-white" /><span className="h-px w-5 bg-white" /></span>
      </header>
      <div className="relative z-10 flex min-h-[calc(100vh-68px)] items-center px-6 pb-20"><div><p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#B8BBC4]">AI · Software · Cloud · Automation</p><h1 className="mt-7 text-5xl font-semibold leading-[0.94]">Sistemas para empresas irem além.</h1></div></div>
    </main>
  );
}

function FooterEvidence() {
  return (
    <main className="flex min-h-screen items-end bg-[#050507] px-10 pb-10 text-[#F5F3EE]">
      <footer className="mx-auto w-full max-w-[1280px] border-t border-white/12 pt-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_auto_auto]">
          <div>
            <Image src={`${brandPath}/logo-horizontal-dark.svg`} alt="Hyper Galaxy" width={799} height={144} className="h-auto w-[170px]" priority unoptimized />
            <p className="mt-5 max-w-sm text-sm leading-6 text-white/60">Software, inteligência artificial, automação e cloud conectados à operação.</p>
          </div>
          <div className="grid grid-cols-2 gap-x-12 gap-y-4 text-sm text-white/60"><span>Projetos</span><span>Soluções</span><span>Agentes IA</span><span>Plataforma</span><span>Nova</span><span>Contato</span></div>
          <div className="grid content-start gap-4 text-sm text-white/60"><span>Abrir canal de contato</span><span>GitHub</span></div>
        </div>
        <div className="mt-14 flex items-center justify-between border-t border-white/10 pt-7 font-mono text-[10px] uppercase tracking-[0.16em] text-white/60">
          <p>© 2026 Hyper Galaxy. Todos os direitos reservados.</p>
          <div className="flex gap-6"><span>Privacidade</span><span>Termos</span><span>PT-BR</span></div>
        </div>
      </footer>
    </main>
  );
}

function ApprovedReference() {
  return (
    <section className="border-t border-[#B8BBC4] bg-white p-7 text-[#050507] sm:p-10">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <SpecLabel>Referência aprovada</SpecLabel>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em]">Identidade HG / APROVADA</h2>
        </div>
        <p className="max-w-md text-sm leading-6 text-[#1B1C22]/65">A imagem permanece somente para comparação. Os pontos públicos usam exclusivamente os SVGs oficiais.</p>
      </div>
      <Image src="/reference/hyper-galaxy-hg-approved-reference.png" alt="Prancha de referência aprovada da identidade Hyper Galaxy" width={1448} height={1088} className="mt-8 h-auto w-full border border-[#B8BBC4]" unoptimized />
    </section>
  );
}

function SpecLabel({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return <p className={`text-[11px] font-semibold uppercase tracking-[0.1em] ${dark ? "text-[#F5F3EE]" : "text-[#1B1C22]"}`}>{children}</p>;
}
