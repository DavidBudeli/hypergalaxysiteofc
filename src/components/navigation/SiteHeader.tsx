"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { navigationActions, navigationLinks } from "@/config/navigation.config";
import { motionTokens } from "@/config/motion-tokens";
import { cn } from "@/lib/cn";

import { Wordmark } from "./Wordmark";

export function SiteHeader({ ready = true }: { ready?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const menuDialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 18);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const previousActiveElement = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusFrame = window.requestAnimationFrame(() => closeButtonRef.current?.focus());
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setMenuOpen(false);
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const dialog = menuDialogRef.current;
      const focusable = dialog?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );

      if (!dialog || !focusable?.length) {
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && (active === first || !dialog.contains(active))) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previousActiveElement?.focus({ preventScroll: true });
    };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: ready ? 0 : -80, opacity: ready ? 1 : 0 }}
        transition={{
          duration: motionTokens.durations.pageEnter,
          ease: motionTokens.easings.enter,
        }}
        className={cn(
          "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "h-[58px] border-b border-white/10 bg-[#050507]/78 backdrop-blur-xl"
            : "h-16 bg-transparent",
        )}
      >
        <nav className="mx-auto grid h-full max-w-[1280px] grid-cols-[1fr_auto_1fr] items-center px-5 sm:px-8 lg:px-10">
          <Link href="/" data-cursor="link">
            <Wordmark />
          </Link>

          <div className="hidden items-center gap-7 lg:flex">
            {navigationLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-white/68 transition-colors hover:text-white"
                data-cursor="link"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center justify-end gap-5 lg:flex">
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-white/54">
              {navigationActions.language.current}
            </span>
            <a
              href={navigationActions.login.href}
              className="text-sm font-medium text-white/62 transition-colors hover:text-white"
              data-cursor="link"
            >
              {navigationActions.login.label}
            </a>
            <a
              href={navigationActions.primaryCta.href}
              className="inline-flex h-10 items-center gap-2 bg-[#F6F4EF] px-5 text-sm font-bold uppercase tracking-[0.04em] text-[#050507] transition-colors hover:bg-[#C4B5FD]"
              data-cursor="cta"
            >
              {navigationActions.primaryCta.label}
              <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="flex justify-end lg:hidden">
            <button
              ref={menuButtonRef}
              type="button"
              className="grid h-10 w-10 place-items-center border border-white/18 text-white"
              onClick={() => setMenuOpen(true)}
              aria-label="Abrir menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              data-cursor="link"
            >
              <Menu size={24} />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            ref={menuDialogRef}
            id="mobile-navigation"
            className="fixed inset-0 z-[70] bg-[#050507] px-6 py-5 text-white lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Menu principal"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{
              duration: motionTokens.durations.routeOverlay,
              ease: motionTokens.easings.route,
            }}
          >
            <div className="absolute bottom-0 right-0 top-0 w-2 bg-[#8B5CF6]" />
            <div className="flex items-center justify-between">
              <Wordmark />
              <button
                ref={closeButtonRef}
                type="button"
                className="grid h-11 w-11 place-items-center border border-[#C4B5FD] text-white"
                onClick={() => setMenuOpen(false)}
                aria-label="Fechar menu"
              >
                <X size={24} />
              </button>
            </div>

            <div className="mt-12 grid gap-5">
              {navigationLinks.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex min-h-11 items-center text-3xl font-semibold leading-none text-white"
                  initial={{ y: 18, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 0.08 + index * motionTokens.stagger.menu,
                    duration: motionTokens.durations.fast,
                    ease: motionTokens.easings.enter,
                  }}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>

            <motion.a
              href={navigationActions.primaryCta.href}
              onClick={() => setMenuOpen(false)}
              className="absolute bottom-6 left-6 right-8 flex h-14 items-center justify-center gap-2 bg-[#F6F4EF] text-sm font-black uppercase tracking-[0.08em] text-[#050507]"
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.52, duration: motionTokens.durations.fast }}
            >
              {navigationActions.primaryCta.label}
              <ArrowUpRight size={18} />
            </motion.a>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
