"use client";

import type { CSSProperties } from "react";

import { cn } from "@/lib/cn";

export function Marquee({
  items,
  reverse = false,
  speed = "36s",
}: {
  items: readonly string[];
  reverse?: boolean;
  speed?: string;
}) {
  const repeated = [...items, ...items, ...items];

  return (
    <div
      className="marquee group overflow-hidden border-y border-[#050507]/12 py-5"
      style={{ "--marquee-speed": speed } as CSSProperties}
      data-cursor="drag"
      data-cursor-label="ARRASTE"
    >
      <div
        className={cn(
          "marquee-track flex w-max items-center gap-4 sm:gap-6",
          reverse && "marquee-track-reverse",
        )}
      >
        {repeated.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="shrink-0 rounded-full border border-[#050507]/12 px-5 py-3 font-mono text-xs font-black uppercase tracking-[0.2em] text-[#050507] sm:text-sm"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
