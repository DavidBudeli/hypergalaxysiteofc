"use client";

import { useCallback, useRef, useState } from "react";

import {
  revealConnectedItems,
  revealFragmentedItems,
} from "@/config/checkpoint-two.config";
import { cn } from "@/lib/cn";
import { MaskReveal } from "@/components/motion/MaskReveal";

const fragmentedPositions = [
  "left-[8%] top-[16%]",
  "left-[42%] top-[11%]",
  "left-[68%] top-[24%]",
  "left-[16%] top-[54%]",
  "left-[51%] top-[61%]",
  "left-[72%] top-[74%]",
] as const;

const connectedPositions = [
  "left-[13%] top-[20%]",
  "left-[40%] top-[14%]",
  "left-[70%] top-[25%]",
  "left-[18%] top-[62%]",
  "left-[52%] top-[58%]",
  "left-[73%] top-[70%]",
] as const;

export function DragReveal() {
  const [progress, setProgress] = useState(54);
  const [dragging, setDragging] = useState(false);
  const frame = useRef(0);
  const panelRef = useRef<HTMLDivElement>(null);

  const updateFromClientX = useCallback((clientX: number) => {
    const panel = panelRef.current;
    if (!panel) {
      return;
    }

    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      const rect = panel.getBoundingClientRect();
      const next = ((clientX - rect.left) / rect.width) * 100;
      setProgress(Math.min(92, Math.max(8, next)));
    });
  }, []);

  return (
    <div className="relative">
      <div
        ref={panelRef}
        className="relative overflow-hidden border border-[#050507]/14 bg-[#050507] shadow-2xl"
        onPointerMove={(event) => {
          if (event.pointerType === "mouse" || dragging) {
            updateFromClientX(event.clientX);
          }
        }}
        onPointerUp={() => setDragging(false)}
        onPointerCancel={() => setDragging(false)}
        onTouchStart={(event) => updateFromClientX(event.touches[0]?.clientX ?? 0)}
        onTouchMove={(event) => updateFromClientX(event.touches[0]?.clientX ?? 0)}
        data-cursor="reveal"
        data-cursor-label="REVELAR"
      >
        <MaskReveal
          progress={progress}
          before={<RevealState items={revealFragmentedItems} mode="fragmented" />}
          after={<RevealState items={revealConnectedItems} mode="connected" />}
        />

        <button
          type="button"
          className="absolute top-0 z-30 flex h-full w-14 -translate-x-1/2 cursor-ew-resize items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#050507]"
          style={{ left: `${progress}%` }}
          aria-label={`Comparação em ${Math.round(progress)}%. Arraste para revelar a operação conectada`}
          onPointerDown={(event) => {
            setDragging(true);
            event.currentTarget.setPointerCapture(event.pointerId);
            updateFromClientX(event.clientX);
          }}
          data-cursor="reveal"
          data-cursor-label="REVELAR"
        >
          <span className="grid h-12 w-12 place-items-center rounded-full bg-[#050507] font-mono text-[10px] font-black uppercase tracking-[0.12em] text-[#F6F4EF] ring-1 ring-[#F6F4EF]/35">
            {Math.round(progress)}
          </span>
        </button>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
        <button
          type="button"
          className="h-11 border border-[#050507]/15 px-4 text-left font-mono text-xs font-black uppercase tracking-[0.18em] text-[#050507]"
          onClick={() => setProgress(12)}
        >
          Operação fragmentada
        </button>
        <input
          className="h-11 accent-[#6D28D9] sm:w-72"
          type="range"
          min={8}
          max={92}
          value={progress}
          aria-label="Controle de comparação da operação"
          onChange={(event) => setProgress(Number(event.target.value))}
        />
        <button
          type="button"
          className="h-11 border border-[#050507]/15 px-4 text-left font-mono text-xs font-black uppercase tracking-[0.18em] text-[#050507]"
          onClick={() => setProgress(88)}
        >
          Ecossistema inteligente
        </button>
      </div>
    </div>
  );
}

function RevealState({
  items,
  mode,
}: {
  items: readonly string[];
  mode: "fragmented" | "connected";
}) {
  const connected = mode === "connected";
  const positions = connected ? connectedPositions : fragmentedPositions;

  return (
    <div
      className={cn(
        "relative h-full min-h-[520px] overflow-hidden p-6 text-[#F6F4EF] md:min-h-[560px] md:p-10",
        connected
          ? "bg-[#F6F4EF] text-[#050507]"
          : "bg-[radial-gradient(circle_at_20%_10%,rgba(236,72,153,0.18),transparent_24%),#101116]",
      )}
    >
      <p className="font-mono text-[10px] font-black uppercase tracking-[0.28em] opacity-70">
        {connected ? "Estado B / ecossistema inteligente" : "Estado A / operação fragmentada"}
      </p>
      <div className="absolute inset-x-6 top-24 h-px bg-current/12 md:inset-x-10" />
      <div className="absolute inset-y-28 left-1/2 w-px bg-current/10" />

      {connected ? (
        <div className="absolute left-1/2 top-1/2 grid h-32 w-32 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-[#6D28D9]/35 bg-[#6D28D9] text-[#F6F4EF] shadow-[0_0_60px_rgba(109,40,217,0.28)]">
          <span className="font-mono text-xs font-black uppercase tracking-[0.22em]">
            Core
          </span>
        </div>
      ) : (
        <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 border border-dashed border-[#F6F4EF]/18" />
      )}

      {items.map((item, index) => (
        <div
          key={item}
          className={cn(
            "absolute max-w-[11rem] border p-3 text-xs shadow-lg backdrop-blur-sm sm:text-sm",
            positions[index],
            connected
              ? "border-[#050507]/12 bg-white/80"
              : "border-white/12 bg-black/38",
          )}
        >
          <span className="block font-mono text-[10px] font-black uppercase tracking-[0.22em] opacity-54">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="mt-2 block font-bold leading-tight">{item}</span>
          <span
            className={cn(
              "mt-3 block h-1 w-12",
              connected ? "bg-[#6D28D9]" : "bg-[#EC4899]",
            )}
          />
        </div>
      ))}

      <svg className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true">
        {items.slice(0, 5).map((item, index) => (
          <line
            key={item}
            x1={connected ? "50%" : `${18 + index * 10}%`}
            y1={connected ? "50%" : `${28 + index * 8}%`}
            x2={`${22 + index * 12}%`}
            y2={`${22 + (index % 3) * 24}%`}
            stroke={connected ? "#6D28D9" : "#F6F4EF"}
            strokeDasharray={connected ? "0" : "4 8"}
            strokeOpacity={connected ? "0.28" : "0.14"}
          />
        ))}
      </svg>
    </div>
  );
}
