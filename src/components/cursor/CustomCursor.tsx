"use client";

import { useEffect, useRef } from "react";

const CURSOR_LABELS: Record<string, string> = {
  link: "ABRIR",
  cta: "ABRIR",
  planet: "EXPLORAR",
  drag: "ARRASTE",
  preview: "ABRIR",
  reveal: "REVELAR",
};

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const frame = useRef(0);
  const visible = useRef(false);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine) and (min-width: 1024px)");

    if (!finePointer.matches) {
      return;
    }

    document.body.dataset.customCursor = "true";

    const setCursorState = (state = "default", label = "") => {
      const ring = ringRef.current;
      const labelEl = labelRef.current;

      if (!ring || !labelEl) {
        return;
      }

      ring.dataset.state = state;
      labelEl.textContent = label;
      labelEl.dataset.visible = label ? "true" : "false";
    };

    const handlePointerMove = (event: PointerEvent) => {
      target.current.x = event.clientX;
      target.current.y = event.clientY;
      visible.current = true;
      dotRef.current?.style.setProperty("opacity", "1");
      ringRef.current?.style.setProperty("opacity", "1");
    };

    const handlePointerOver = (event: PointerEvent) => {
      const targetElement = event.target as HTMLElement | null;
      const cursorTarget = targetElement?.closest<HTMLElement>("[data-cursor]");
      const linkTarget = targetElement?.closest<HTMLElement>("a, button");
      const state = cursorTarget?.dataset.cursor ?? (linkTarget ? "link" : "default");
      const label = cursorTarget?.dataset.cursorLabel ?? CURSOR_LABELS[state] ?? "";

      setCursorState(state, label);
    };

    const handlePointerOut = (event: PointerEvent) => {
      const targetElement = event.target as HTMLElement | null;
      if (targetElement?.closest("[data-cursor], a, button")) {
        setCursorState("default", "");
      }
    };

    const handleLeave = () => {
      visible.current = false;
      dotRef.current?.style.setProperty("opacity", "0");
      ringRef.current?.style.setProperty("opacity", "0");
      setCursorState("default", "");
    };

    const tick = () => {
      const dot = dotRef.current;
      const ring = ringRef.current;
      const labelEl = labelRef.current;

      current.current.x += (target.current.x - current.current.x) * 0.16;
      current.current.y += (target.current.y - current.current.y) * 0.16;

      if (dot && visible.current) {
        dot.style.transform = `translate3d(${target.current.x}px, ${target.current.y}px, 0)`;
      }

      if (ring && visible.current) {
        ring.style.transform = `translate3d(${current.current.x}px, ${current.current.y}px, 0)`;
      }

      if (labelEl && visible.current) {
        labelEl.style.transform = `translate3d(${current.current.x + 20}px, ${current.current.y - 12}px, 0)`;
      }

      frame.current = requestAnimationFrame(tick);
    };

    frame.current = requestAnimationFrame(tick);

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerover", handlePointerOver, { passive: true });
    window.addEventListener("pointerout", handlePointerOut, { passive: true });
    window.addEventListener("blur", handleLeave);
    document.documentElement.addEventListener("mouseleave", handleLeave);

    return () => {
      cancelAnimationFrame(frame.current);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerover", handlePointerOver);
      window.removeEventListener("pointerout", handlePointerOut);
      window.removeEventListener("blur", handleLeave);
      document.documentElement.removeEventListener("mouseleave", handleLeave);
      delete document.body.dataset.customCursor;
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F6F4EF] opacity-0 mix-blend-difference"
        aria-hidden="true"
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#C4B5FD] opacity-0 transition-[width,height,border-color,background-color] duration-300 data-[state=cta]:h-14 data-[state=cta]:w-14 data-[state=drag]:h-16 data-[state=drag]:w-16 data-[state=planet]:h-16 data-[state=planet]:w-16 data-[state=preview]:h-20 data-[state=preview]:w-20"
        aria-hidden="true"
      />
      <span
        ref={labelRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#C4B5FD] opacity-0 transition-opacity duration-200 data-[visible=true]:opacity-100"
        aria-hidden="true"
      />
    </>
  );
}
