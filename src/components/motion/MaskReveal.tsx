"use client";

import type { ReactNode } from "react";

export function MaskReveal({
  progress,
  before,
  after,
}: {
  progress: number;
  before: ReactNode;
  after: ReactNode;
}) {
  const clamped = Math.min(100, Math.max(0, progress));

  return (
    <div className="relative isolate min-h-[520px] overflow-hidden bg-[#111218] md:min-h-[560px]">
      <div className="absolute inset-0">{before}</div>
      <div
        className="absolute inset-0 will-change-[clip-path]"
        style={{ clipPath: `inset(0 ${100 - clamped}% 0 0)` }}
      >
        {after}
      </div>
      <div
        className="pointer-events-none absolute bottom-0 top-0 z-20 w-px bg-[#F6F4EF]"
        style={{ left: `${clamped}%` }}
      />
      <div
        className="pointer-events-none absolute top-1/2 z-20 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#F6F4EF]/60 bg-[#F6F4EF]/8 backdrop-blur-sm"
        style={{ left: `${clamped}%` }}
      />
    </div>
  );
}
