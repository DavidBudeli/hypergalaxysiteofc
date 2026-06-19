"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

import { motionTokens } from "@/config/motion-tokens";
import { planetsConfig } from "@/config/planets.config";
import { PlanetVisual } from "@/components/planets/PlanetVisual";
import { Wordmark } from "@/components/navigation/Wordmark";
import { useReducedMotionContext } from "@/components/motion/ReducedMotionProvider";

const criticalAssets = [
  "/assets/brand/logo-horizontal-dark.svg",
  "/assets/stars/hero-stars.svg",
  "/assets/planets/hyper-flow.webp",
  "/assets/planets/nova.webp",
  "/assets/planets/hyper-agents.webp",
  "/assets/planets/hyper-cloud.webp",
];

const MINIMUM_PRELOAD_MS = 1450;

export function HyperPreloader({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const [progress, setProgress] = useState(0);
  const [complete, setComplete] = useState(false);
  const prefersReducedMotion = useReducedMotionContext();
  const hyperFlow = useMemo(
    () => planetsConfig.find((planet) => planet.id === "hyper-flow") ?? planetsConfig[3],
    [],
  );

  useEffect(() => {
    let cancelled = false;
    let loaded = 0;
    const total = criticalAssets.length + 1;
    const minimumDelay = new Promise<void>((resolve) => {
      window.setTimeout(resolve, prefersReducedMotion ? 0 : MINIMUM_PRELOAD_MS);
    });

    const markLoaded = () => {
      loaded += 1;
      if (!cancelled) {
        setProgress(Math.round((loaded / total) * 100));
      }
    };

    const fontPromise = document.fonts.ready.then(markLoaded).catch(markLoaded);
    const imagePromises = criticalAssets.map(
      (src) =>
        new Promise<void>((resolve) => {
          const img = new window.Image();
          img.onload = () => {
            markLoaded();
            resolve();
          };
          img.onerror = () => {
            markLoaded();
            resolve();
          };
          img.src = src;
        }),
    );

    Promise.all([minimumDelay, fontPromise, ...imagePromises]).then(() => {
      window.setTimeout(() => {
        if (!cancelled) {
          setProgress(100);
          setComplete(true);
          onComplete();
        }
      }, prefersReducedMotion ? 0 : 420);
    });

    return () => {
      cancelled = true;
    };
  }, [onComplete, prefersReducedMotion]);

  if (prefersReducedMotion) {
    return null;
  }

  return (
    <AnimatePresence>
      {!complete ? (
        <motion.div
          className="pointer-events-none fixed inset-0 z-[90] flex items-center justify-center overflow-hidden bg-[#050507] text-[#F6F4EF]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{
            duration: motionTokens.durations.routeOverlay,
            ease: motionTokens.easings.route,
          }}
        >
          <div
            className="absolute inset-0 opacity-36"
            style={{
              backgroundImage: "url('/assets/stars/hero-stars.svg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <motion.div
            className="relative z-10 flex flex-col items-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: motionTokens.durations.slow,
              ease: motionTokens.easings.enter,
            }}
          >
            <motion.div
              layoutId="hyper-flow-planet"
              className="relative"
              animate={{ rotate: 360 }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <PlanetVisual planet={hyperFlow} size={260} priority />
            </motion.div>

            <motion.div
              className="mt-8"
              animate={{ opacity: complete ? 0 : 1, y: complete ? -8 : 0 }}
              transition={{ duration: motionTokens.durations.fast }}
            >
              <Wordmark className="w-[190px]" priority />
            </motion.div>

            <motion.div
              className="mt-8 h-px w-56 overflow-hidden bg-white/10"
              animate={{ opacity: complete ? 0 : 1 }}
            >
              <motion.div
                className="h-full bg-[#C4B5FD]"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.24, ease: "easeOut" }}
              />
            </motion.div>
            <motion.p
              className="mt-4 font-mono text-xs font-bold tracking-[0.3em] text-white/54"
              animate={{ opacity: complete ? 0 : 1 }}
            >
              {progress.toString().padStart(3, "0")}%
            </motion.p>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
