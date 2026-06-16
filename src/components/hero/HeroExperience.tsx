"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { homepageCopy } from "@/config/homepage.config";
import { motionTokens } from "@/config/motion-tokens";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { ScrambleLabel } from "@/components/motion/ScrambleLabel";
import { SplitTextReveal } from "@/components/motion/SplitTextReveal";
import { SpringTextReveal } from "@/components/motion/SpringTextReveal";
import { PlanetSystem } from "@/components/planets/PlanetSystem";

import { MobilePlanetSwipe } from "./MobilePlanetSwipe";

export function HeroExperience({ ready }: { ready: boolean }) {
  const sectionRef = useRef<HTMLElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const headlineY = useTransform(scrollYProgress, [0, 0.55], [0, -88]);
  const headlineX = useTransform(scrollYProgress, [0, 0.55], [0, -28]);
  const labelY = useTransform(scrollYProgress, [0, 0.55], [0, -42]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.64], [1, 0.26]);
  const sweepScale = useTransform(scrollYProgress, [0.26, 0.82], [0, 1.55]);
  const sweepOpacity = useTransform(scrollYProgress, [0.22, 0.44, 0.86], [0, 0.7, 0]);
  const nextOpacity = useTransform(scrollYProgress, [0.54, 0.94], [0, 1]);

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
              className="max-w-4xl"
              style={{ x: headlineX, y: headlineY, opacity: textOpacity }}
            >
              <motion.div style={{ y: labelY }}>
                <ScrambleLabel text={homepageCopy.hero.label} ready={ready} />
              </motion.div>

              <h1 className="mt-8 text-[clamp(3.6rem,11vw,8.6rem)] font-black uppercase leading-[0.86] tracking-normal lg:text-[clamp(5.2rem,8.2vw,8.1rem)]">
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
                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <MagneticButton href="#iniciar-projeto">
                    {homepageCopy.hero.primaryCta}
                  </MagneticButton>
                  <MagneticButton href="#plataforma" variant="secondary">
                    {homepageCopy.hero.secondaryCta}
                  </MagneticButton>
                </div>
              </SpringTextReveal>

              <MobilePlanetSwipe />
            </motion.div>

            <div className="hidden lg:block" aria-hidden="true" />
          </div>

          <PlanetSystem transitionProgress={scrollYProgress} />

          <div className="pointer-events-none absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
            <motion.div
              className="h-[74vmax] w-[74vmax] rounded-full bg-[#F6F4EF]"
              style={{ scale: sweepScale, opacity: sweepOpacity }}
            />
          </div>
        </div>
      </section>

      <motion.section
        className="relative -mt-[72vh] min-h-[72vh] overflow-hidden bg-[#F6F4EF] px-6 py-24 text-[#050507] sm:px-8 lg:px-10"
        style={{ opacity: nextOpacity }}
      >
        <div className="mx-auto max-w-[1280px]">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.28em] text-[#6D28D9]">
            Proxima experiencia
          </p>
          <h2 className="mt-6 max-w-4xl text-5xl font-black uppercase leading-[0.9] md:text-7xl">
            Seu proximo nivel esta aqui dentro.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#17181E]/68">
            A transicao da hero termina aqui. A experiencia interativa completa
            desta regiao fica para o Checkpoint 2.
          </p>
        </div>
        <motion.div
          className="absolute bottom-0 left-0 h-2 w-full bg-[#8B5CF6]"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: motionTokens.durations.sweep, ease: motionTokens.easings.enter }}
          style={{ transformOrigin: "left" }}
        />
      </motion.section>
    </>
  );
}
