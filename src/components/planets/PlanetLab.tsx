import type { ReactNode } from "react";

import { planetsConfig } from "@/config/planets.config";

import { PlanetVisual } from "./PlanetVisual";

export function PlanetLab() {
  return (
    <main className="min-h-screen bg-[#050507] px-5 py-8 text-[#F6F4EF] sm:px-8 lg:px-12">
      <header className="mx-auto flex max-w-7xl flex-col gap-4 border-b border-white/10 pb-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.28em] text-[#93C5FD]">
            Dev / Planet Lab
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-none md:text-6xl">
            Hyper Galaxy Planet System
          </h1>
        </div>
        <p className="max-w-sm text-sm leading-6 text-[#B9BBC5]">
          Validacao interna de assets, escala, textura, atmosfera, sombra,
          movimento de superficie e estados interativos antes da hero.
        </p>
      </header>

      <section className="mx-auto mt-8 grid max-w-7xl gap-5">
        {planetsConfig.map((planet) => (
          <article
            key={planet.id}
            className="grid gap-6 border border-white/10 bg-white/[0.025] p-5 md:grid-cols-[220px_1fr] lg:grid-cols-[260px_1fr]"
          >
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#B9BBC5]">
                {planet.label} / {planet.visualType}
              </p>
              <h2 className="mt-3 text-2xl font-semibold">{planet.name}</h2>
              <p className="mt-2 text-sm text-[#93C5FD]">{planet.category}</p>
              <p className="mt-4 text-sm leading-6 text-[#B9BBC5]">
                {planet.description}
              </p>
              <dl className="mt-5 grid grid-cols-2 gap-3 text-xs text-[#B9BBC5]">
                <div>
                  <dt className="font-mono uppercase tracking-[0.18em] text-white/40">
                    Asset
                  </dt>
                  <dd className="mt-1 text-white">{planet.asset.status}</dd>
                </div>
                <div>
                  <dt className="font-mono uppercase tracking-[0.18em] text-white/40">
                    Depth
                  </dt>
                  <dd className="mt-1 text-white">{planet.depth}</dd>
                </div>
                <div>
                  <dt className="font-mono uppercase tracking-[0.18em] text-white/40">
                    Float
                  </dt>
                  <dd className="mt-1 text-white">
                    {planet.float.duration}s / {planet.float.amplitude}px
                  </dd>
                </div>
                <div>
                  <dt className="font-mono uppercase tracking-[0.18em] text-white/40">
                    Surface
                  </dt>
                  <dd className="mt-1 text-white">{planet.surfaceSpeed}</dd>
                </div>
              </dl>
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
              <PlanetSample title="Normal / grande">
                <PlanetVisual planet={planet} size={190} />
              </PlanetSample>
              <PlanetSample title="Hover / medio">
                <PlanetVisual planet={planet} size={142} variant="hover" />
              </PlanetSample>
              <PlanetSample title="Ativo / mobile">
                <PlanetVisual planet={planet} size={104} variant="active" />
              </PlanetSample>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

function PlanetSample({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-[250px] flex-col items-center justify-center gap-5 bg-black/35 p-5">
      <div className="flex min-h-[190px] items-center justify-center">
        {children}
      </div>
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/48">
        {title}
      </p>
    </div>
  );
}
