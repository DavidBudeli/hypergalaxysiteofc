"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { homepageCopy } from "@/config/homepage.config";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { ScrambleLabel } from "@/components/motion/ScrambleLabel";
import { SplitTextReveal } from "@/components/motion/SplitTextReveal";
import { SpringTextReveal } from "@/components/motion/SpringTextReveal";
import { PlanetSystem } from "@/components/planets/PlanetSystem";
import { RevealSection } from "@/components/sections/RevealSection";
import { useReducedMotionContext } from "@/components/motion/ReducedMotionProvider";

import { MobilePlanetSwipe } from "./MobilePlanetSwipe";

export function HeroExperience({ ready }: { ready: boolean }) {
  const sectionRef = useRef<HTMLElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);
  const [viewportMode, setViewportMode] = useState<"desktop" | "mobile" | "unknown">("unknown");
  const prefersReducedMotion = useReducedMotionContext();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const transitionProgress = useTransform(scrollYProgress, [0, 0.42], [0, 1]);

  const headlineY = useTransform(transitionProgress, [0, 0.55], [0, -88]);
  const headlineX = useTransform(transitionProgress, [0, 0.55], [0, -28]);
  const labelY = useTransform(transitionProgress, [0, 0.55], [0, -42]);
  const textOpacity = useTransform(transitionProgress, [0, 0.64], [1, 0.26]);
  const sweepScale = useTransform(transitionProgress, [0.26, 0.82], [0, 1.55]);
  const sweepOpacity = useTransform(transitionProgress, [0.22, 0.44, 0.86], [0, 0.7, 0]);
  const nextOpacity = useTransform(transitionProgress, [0.54, 0.94], [0, 1]);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 1024px)");
    const updateViewportMode = () => {
      setViewportMode(desktopQuery.matches ? "desktop" : "mobile");
    };

    updateViewportMode();
    desktopQuery.addEventListener("change", updateViewportMode);

    return () => desktopQuery.removeEventListener("change", updateViewportMode);
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className="relative min-h-[172vh] bg-[#050507]"
        id="topo"
      >
        <div
          ref={sceneRef}
          className="sticky top-0 min-h-screen overflow-hidden bg-[#050507] text-[#F6F4EF]"
          onPointerMove={(event) => {
            if (prefersReducedMotion) {
              return;
            }

            const target = event.currentTarget;
            const rect = target.getBoundingClientRect();
            target.style.setProperty("--mouse-x", `${(event.clientX - rect.left) / rect.width - 0.5}`);
            target.style.setProperty("--mouse-y", `${(event.clientY - rect.top) / rect.height - 0.5}`);
          }}
        >
          <div
            className="absolute inset-0 opacity-44"
            style={{
              backgroundImage: "url('/assets/stars/hero-stars.svg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              transform:
                "translate(calc(var(--mouse-x, 0) * -18px), calc(var(--mouse-y, 0) * -14px))",
            }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_77%_47%,rgba(109,40,217,0.17),transparent_34%),radial-gradient(circle_at_18%_20%,rgba(37,99,235,0.12),transparent_30%)]" />

          <div className="relative z-10 mx-auto grid min-h-screen max-w-[1280px] items-center px-6 pb-16 pt-28 sm:px-8 lg:grid-cols-[54%_46%] lg:px-10 lg:pt-20">
            <motion.div
              className="w-full min-w-0 max-w-4xl"
              style={{ x: headlineX, y: headlineY, opacity: textOpacity }}
            >
              <motion.div style={{ y: labelY }}>
                <ScrambleLabel
                  text={homepageCopy.hero.label}
                  ready={ready}
                  className="max-w-[calc(100vw-48px)] whitespace-normal text-[10px] leading-5 tracking-[0.22em] sm:text-xs sm:tracking-[0.34em]"
                />
              </motion.div>

              <h1 className="mt-8 w-full max-w-[calc(100vw-48px)] text-[clamp(2.35rem,10.2vw,3.1rem)] font-black uppercase leading-[0.86] tracking-normal sm:text-[clamp(3.6rem,11vw,6rem)] lg:w-[min(64vw,900px)] lg:max-w-none lg:text-[clamp(4.4rem,6.9vw,6.5rem)]">
                <SplitTextReveal ready={ready} delay={0.08} outline>
                  {homepageCopy.hero.headline[0]}
                </SplitTextReveal>
                <SplitTextReveal ready={ready} delay={0.18} accent>
                  {homepageCopy.hero.headline[1]}
                </SplitTextReveal>
                <SplitTextReveal ready={ready} delay={0.3}>
                  {homepageCopy.hero.headline[2]}
                </SplitTextReveal>
                <SplitTextReveal ready={ready} delay={0.42}>
                  {homepageCopy.hero.headline[3]}
                </SplitTextReveal>
              </h1>

              <SpringTextReveal ready={ready} delay={0.62}>
                <p className="mt-8 max-w-xl text-base leading-7 text-[#B9BBC5] sm:text-lg">
                  {homepageCopy.hero.description}
                </p>
              </SpringTextReveal>

              <SpringTextReveal ready={ready} delay={0.76}>
                <div className="mt-8 flex w-full max-w-[23rem] flex-col gap-4 sm:max-w-none sm:flex-row sm:items-center">
                  <MagneticButton href="#iniciar-projeto" className="w-full sm:w-auto">
                    {homepageCopy.hero.primaryCta}
                  </MagneticButton>
                  <MagneticButton href="#plataforma" variant="secondary" className="w-full sm:w-auto">
                    {homepageCopy.hero.secondaryCta}
                  </MagneticButton>
                </div>
              </SpringTextReveal>

              {viewportMode === "mobile" ? (
                <MobilePlanetSwipe />
              ) : (
                <div className="mt-10 h-72 lg:hidden" aria-hidden="true" />
              )}
            </motion.div>

            <div className="hidden lg:block" aria-hidden="true" />
          </div>

          {ready && viewportMode === "desktop" ? (
            <PlanetSystem transitionProgress={transitionProgress} />
          ) : null}

          <div className="pointer-events-none absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
            <motion.div
              className="h-[74vmax] w-[74vmax] rounded-full bg-[#F6F4EF]"
              style={{ scale: sweepScale, opacity: sweepOpacity }}
            />
          </div>
        </div>
      </section>

      <RevealSection transitionOpacity={nextOpacity} />
    </>
  );
}
