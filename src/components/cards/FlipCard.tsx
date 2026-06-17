"use client";

import { ArrowUpRight } from "lucide-react";
import { useCallback, useState, type CSSProperties, type PointerEvent } from "react";

import { motionTokens } from "@/config/motion-tokens";
import { cn } from "@/lib/cn";

type Service = {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  description: string;
  practical: string;
  technologies: readonly string[];
  color: string;
  surface: string;
  ink: string;
};

export function FlipCard({ service }: { service: Service }) {
  const [flipped, setFlipped] = useState(false);

  const handlePointerMove = useCallback((event: PointerEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    event.currentTarget.style.setProperty("--tilt-x", `${-y * 5}deg`);
    event.currentTarget.style.setProperty("--tilt-y", `${x * 5}deg`);
  }, []);

  return (
    <article
      className={cn("flip-card group min-h-[25rem]", flipped && "is-flipped")}
      style={
        {
          "--card-color": service.color,
          "--card-surface": service.surface,
          "--card-ink": service.ink,
          "--tilt-x": "0deg",
          "--tilt-y": "0deg",
        } as CSSProperties
      }
      onPointerMove={handlePointerMove}
      onPointerLeave={(event) => {
        event.currentTarget.style.setProperty("--tilt-x", "0deg");
        event.currentTarget.style.setProperty("--tilt-y", "0deg");
      }}
      data-cursor="preview"
    >
      <div
        className="flip-card-inner relative h-full min-h-[25rem] transition-transform"
        style={{
          transitionDuration: `${motionTokens.durations.fast}s`,
          transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <button
          type="button"
          className="flip-face flip-front absolute inset-0 flex h-full w-full flex-col justify-between border border-black/10 p-5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B5CF6]"
          aria-pressed={flipped}
          aria-label={`${service.title}. Toque para descobrir.`}
          tabIndex={flipped ? -1 : 0}
          onClick={() => setFlipped((current) => !current)}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              setFlipped((current) => !current);
            }
          }}
        >
          <span className="flex items-center justify-between font-mono text-xs font-black uppercase tracking-[0.22em]">
            {service.number}
            <span>Descobrir</span>
          </span>
          <ServiceGlyph id={service.id} />
          <span>
            <span className="block text-2xl font-black uppercase leading-none sm:text-3xl">
              {service.title}
            </span>
            <span className="mt-5 block max-w-xs text-sm font-semibold leading-6 opacity-72">
              {service.description}
            </span>
          </span>
        </button>

        <div
          className="flip-face flip-back absolute inset-0 flex h-full w-full flex-col justify-between border border-white/12 bg-[#050507] p-5 text-[#F6F4EF]"
          aria-hidden={!flipped}
        >
          <button
            type="button"
            className="self-start border border-white/12 px-3 py-2 font-mono text-[10px] font-black uppercase tracking-[0.2em]"
            tabIndex={flipped ? 0 : -1}
            onClick={() => setFlipped(false)}
          >
            Voltar
          </button>
          <div>
            <p className="font-mono text-xs font-black uppercase tracking-[0.22em] text-[#C4B5FD]">
              {service.number} / {service.shortTitle}
            </p>
            <h3 className="mt-4 text-3xl font-black uppercase leading-none">
              {service.title}
            </h3>
            <p className="mt-5 text-sm leading-6 text-[#B9BBC5]">
              {service.practical}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {service.technologies.map((technology) => (
                <span
                  key={technology}
                  className="border border-white/12 px-3 py-2 font-mono text-[10px] font-black uppercase tracking-[0.14em] text-white/72"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
          <a
            href="#iniciar-projeto"
            className="inline-flex h-12 items-center justify-center gap-2 bg-[#F6F4EF] px-5 text-sm font-black uppercase tracking-[0.08em] text-[#050507]"
            data-cursor="cta"
            tabIndex={flipped ? 0 : -1}
          >
            Solicitar escopo
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </article>
  );
}

function ServiceGlyph({ id }: { id: string }) {
  const seed = id.length;

  return (
    <svg
      className="my-8 h-32 w-full"
      viewBox="0 0 280 140"
      fill="none"
      aria-hidden="true"
    >
      <rect x="18" y="18" width="244" height="104" rx="2" fill="currentColor" opacity="0.055" />
      <circle cx={72 + seed * 2} cy="70" r="38" stroke="var(--card-color)" strokeWidth="2" />
      <path
        d="M52 92 C88 40 130 112 168 48 C196 12 226 52 242 26"
        stroke="var(--card-color)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M46 42 H92 V88 H138 V52 H184 V100 H236"
        stroke="currentColor"
        strokeOpacity="0.22"
        strokeWidth="2"
        strokeDasharray="8 10"
      />
      <circle cx="232" cy="98" r="10" fill="var(--card-color)" />
      <circle cx="48" cy="42" r="7" fill="var(--card-color)" opacity="0.7" />
    </svg>
  );
}
