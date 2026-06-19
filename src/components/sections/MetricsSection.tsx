"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

import { useReducedMotionContext } from "@/components/motion/ReducedMotionProvider";
import { capabilities } from "@/config/checkpoint-two.config";
import { cn } from "@/lib/cn";

const metricThemes = [
  { background: "#050507", accent: "#C4B5FD" },
  { background: "#130D20", accent: "#D8B4FE" },
  { background: "#07162B", accent: "#93C5FD" },
  { background: "#241309", accent: "#F4B860" },
] as const;

export function MetricsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const stageContentRef = useRef<HTMLDivElement>(null);
  const sectionLabelRef = useRef<HTMLParagraphElement>(null);
  const sectionLineRef = useRef<HTMLSpanElement>(null);
  const progressRef = useRef<HTMLSpanElement>(null);
  const technicalLineRef = useRef<HTMLSpanElement>(null);
  const transitionRef = useRef<HTMLDivElement>(null);
  const metricRefs = useRef<Array<HTMLElement | null>>([]);
  const valueRefs = useRef<Array<HTMLParagraphElement | null>>([]);
  const labelRefs = useRef<Array<HTMLHeadingElement | null>>([]);
  const indicatorRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const prefersReducedMotion = useReducedMotionContext();

  useEffect(() => {
    if (prefersReducedMotion || !sectionRef.current || !stageRef.current) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const stage = stageRef.current;
    const metrics = metricRefs.current.filter(Boolean) as HTMLElement[];
    const values = valueRefs.current.filter(Boolean) as HTMLParagraphElement[];
    const labels = labelRefs.current.filter(Boolean) as HTMLHeadingElement[];
    const indicators = indicatorRefs.current.filter(Boolean) as HTMLSpanElement[];
    const matchMedia = gsap.matchMedia();

    const context = gsap.context(() => {
      matchMedia.add("(min-width: 1024px)", () => {
        const directions = [-35, 35, -35, 35];
        const exitDirections = [-12, 12, -12, 12];

        gsap.set(metrics, {
          autoAlpha: 0,
          scale: 0.82,
          transformOrigin: "center center",
        });
        metrics.forEach((metric, index) => {
          gsap.set(metric, {
            xPercent: directions[index],
            yPercent: 30,
            rotation: index % 2 === 0 ? -1 : 1,
          });
        });
        gsap.set(values, {
          yPercent: 105,
          clipPath: "inset(0 0 100% 0)",
        });
        gsap.set(labels, {
          yPercent: 120,
          clipPath: "inset(0 0 100% 0)",
        });
        gsap.set(indicators, { autoAlpha: 0, yPercent: 70 });
        gsap.set(indicators[0], { autoAlpha: 1, yPercent: 0 });
        gsap.set(sectionLineRef.current, { scaleX: 0, transformOrigin: "left center" });
        gsap.set(progressRef.current, { scaleX: 0, transformOrigin: "left center" });
        gsap.set(technicalLineRef.current, { scaleX: 0, xPercent: -22 });
        gsap.set(transitionRef.current, { yPercent: 100 });

        const timeline = gsap.timeline({
          defaults: { ease: "power3.out" },
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${window.innerHeight * 1.8}`,
            pin: stage,
            scrub: 0.8,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        timeline
          .fromTo(
            sectionLabelRef.current,
            { clipPath: "inset(0 100% 0 0)", yPercent: 60 },
            { clipPath: "inset(0 0% 0 0)", yPercent: 0, duration: 0.7 },
            0,
          )
          .to(sectionLineRef.current, { scaleX: 1, duration: 0.9 }, 0.08)
          .fromTo(
            ".metrics-ambient",
            { xPercent: -5, yPercent: 4, scale: 0.94, opacity: 0.35 },
            { xPercent: 7, yPercent: -5, scale: 1.08, opacity: 0.72, duration: 9 },
            0,
          )
          .fromTo(
            ".metrics-orbit",
            { xPercent: 10, yPercent: 8, scale: 0.84, rotation: -2, opacity: 0.18 },
            { xPercent: -8, yPercent: -10, scale: 1.08, rotation: 2, opacity: 0.46, duration: 9 },
            0,
          )
          .to(progressRef.current, { scaleX: 1, duration: 9, ease: "none" }, 0)
          .set(metrics[0], { autoAlpha: 1 }, 0.22)
          .to(
            metrics[0],
            { xPercent: 0, yPercent: 0, scale: 1, rotation: 0, duration: 1.05 },
            0.22,
          )
          .to(
            values[0],
            { yPercent: 0, clipPath: "inset(0 0 0% 0)", duration: 0.9 },
            0.26,
          )
          .to(
            labels[0],
            { yPercent: 0, clipPath: "inset(0 0 0% 0)", duration: 0.7 },
            0.7,
          )
          .fromTo(
            metrics[0].querySelector(".metric-accent"),
            { scaleX: 0 },
            { scaleX: 1, duration: 0.5 },
            0.86,
          )
          .to(
            metrics[1],
            { autoAlpha: 0.16, xPercent: 22, yPercent: 34, scale: 0.82, duration: 0.7 },
            1.08,
          )
          .to(
            values[1],
            { yPercent: 62, clipPath: "inset(0 0 58% 0)", duration: 0.6 },
            1.08,
          )
          .to(
            metrics[0],
            {
              xPercent: exitDirections[0],
              yPercent: -28,
              scale: 0.82,
              rotation: -1,
              autoAlpha: 0.28,
              duration: 1.05,
            },
            1.75,
          )
          .to(section, { backgroundColor: metricThemes[1].background, duration: 1.1 }, 1.75)
          .to(indicators[0], { autoAlpha: 0, yPercent: -70, duration: 0.35 }, 1.82)
          .to(indicators[1], { autoAlpha: 1, yPercent: 0, duration: 0.45 }, 1.94)
          .to(
            metrics[1],
            { autoAlpha: 1, xPercent: 0, yPercent: 0, scale: 1, rotation: 0, duration: 1.05 },
            1.84,
          )
          .to(
            values[1],
            { yPercent: 0, clipPath: "inset(0 0 0% 0)", duration: 0.85 },
            1.88,
          )
          .to(
            labels[1],
            { yPercent: 0, clipPath: "inset(0 0 0% 0)", duration: 0.65 },
            2.32,
          )
          .fromTo(
            metrics[1].querySelector(".metric-accent"),
            { scaleX: 0 },
            { scaleX: 1, duration: 0.45 },
            2.48,
          )
          .to(
            metrics[2],
            { autoAlpha: 0.16, xPercent: -22, yPercent: 34, scale: 0.82, duration: 0.7 },
            2.84,
          )
          .to(
            values[2],
            { yPercent: 62, clipPath: "inset(0 0 58% 0)", duration: 0.6 },
            2.84,
          )
          .to(
            metrics[1],
            {
              xPercent: exitDirections[1],
              yPercent: -28,
              scale: 0.8,
              rotation: 1,
              autoAlpha: 0.26,
              duration: 1.05,
            },
            3.55,
          )
          .to(section, { backgroundColor: metricThemes[2].background, duration: 1.1 }, 3.55)
          .to(
            metrics[0],
            { autoAlpha: 0, yPercent: -48, scale: 0.7, duration: 0.7 },
            3.55,
          )
          .to(indicators[1], { autoAlpha: 0, yPercent: -70, duration: 0.35 }, 3.62)
          .to(indicators[2], { autoAlpha: 1, yPercent: 0, duration: 0.45 }, 3.74)
          .to(
            metrics[2],
            { autoAlpha: 1, xPercent: 0, yPercent: 0, scale: 1, rotation: 0, duration: 1.05 },
            3.64,
          )
          .to(
            values[2],
            { yPercent: 0, clipPath: "inset(0 0 0% 0)", duration: 0.85 },
            3.68,
          )
          .to(
            technicalLineRef.current,
            { scaleX: 1, xPercent: 18, duration: 1.2, ease: "power2.inOut" },
            3.88,
          )
          .to(
            labels[2],
            { yPercent: 0, clipPath: "inset(0 0 0% 0)", duration: 0.65 },
            4.12,
          )
          .fromTo(
            metrics[2].querySelector(".metric-accent"),
            { scaleX: 0 },
            { scaleX: 1, duration: 0.45 },
            4.28,
          )
          .to(
            metrics[3],
            { autoAlpha: 0.16, xPercent: 22, yPercent: 34, scale: 0.82, duration: 0.7 },
            4.64,
          )
          .to(
            values[3],
            { yPercent: 62, clipPath: "inset(0 0 58% 0)", duration: 0.6 },
            4.64,
          )
          .to(
            metrics[2],
            {
              xPercent: exitDirections[2],
              yPercent: -28,
              scale: 0.8,
              rotation: -1,
              autoAlpha: 0.25,
              duration: 1.05,
            },
            5.36,
          )
          .to(technicalLineRef.current, { scaleX: 0.28, xPercent: 48, duration: 0.9 }, 5.36)
          .to(section, { backgroundColor: metricThemes[3].background, duration: 1.1 }, 5.36)
          .to(
            metrics[1],
            { autoAlpha: 0, yPercent: -48, scale: 0.7, duration: 0.7 },
            5.36,
          )
          .to(indicators[2], { autoAlpha: 0, yPercent: -70, duration: 0.35 }, 5.43)
          .to(indicators[3], { autoAlpha: 1, yPercent: 0, duration: 0.45 }, 5.55)
          .to(
            metrics[3],
            { autoAlpha: 1, xPercent: 0, yPercent: 0, scale: 1, rotation: 0, duration: 1.05 },
            5.45,
          )
          .to(
            values[3],
            { yPercent: 0, clipPath: "inset(0 0 0% 0)", duration: 0.85 },
            5.49,
          )
          .to(
            labels[3],
            { yPercent: 0, clipPath: "inset(0 0 0% 0)", duration: 0.65 },
            5.93,
          )
          .fromTo(
            metrics[3].querySelector(".metric-accent"),
            { scaleX: 0 },
            { scaleX: 1, duration: 0.45 },
            6.08,
          )
          .to(
            metrics[3],
            { xPercent: 8, yPercent: -8, scale: 0.88, rotation: 1, duration: 1.1 },
            7.05,
          )
          .to(
            stageContentRef.current,
            { yPercent: -4, scale: 0.94, transformOrigin: "center center", duration: 1.1 },
            7.05,
          )
          .to(transitionRef.current, { yPercent: 72, duration: 1.1, ease: "power3.inOut" }, 7.05)
          .to(".metrics-grid", { opacity: 0.08, yPercent: -5, duration: 1.1 }, 7.05);

        return () => {
          timeline.scrollTrigger?.kill();
          timeline.kill();
        };
      });

      matchMedia.add("(max-width: 1023px)", () => {
        const mobileMetrics = gsap.utils.toArray<HTMLElement>(".metric-mobile");

        mobileMetrics.forEach((metric, index) => {
          const content = metric.querySelector("[data-mobile-content]");
          const value = metric.querySelector("[data-mobile-value]");
          const label = metric.querySelector("[data-mobile-label]");
          const direction = index % 2 === 0 ? -18 : 18;
          const timeline = gsap.timeline({
            scrollTrigger: {
              trigger: metric,
              start: "top 88%",
              end: "top 34%",
              scrub: 0.45,
              invalidateOnRefresh: true,
            },
          });

          timeline
            .fromTo(
              content,
              { xPercent: direction, yPercent: 16, scale: 0.9 },
              { xPercent: 0, yPercent: 0, scale: 1, ease: "none" },
              0,
            )
            .fromTo(
              value,
              { yPercent: 56, clipPath: "inset(0 0 62% 0)" },
              { yPercent: 0, clipPath: "inset(0 0 0% 0)", ease: "none" },
              0,
            )
            .fromTo(
              label,
              { yPercent: 65, clipPath: "inset(0 0 100% 0)" },
              { yPercent: 0, clipPath: "inset(0 0 0% 0)", ease: "none" },
              0.32,
            );
        });
      });
    }, section);

    let resizeTimer = 0;
    const refresh = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => ScrollTrigger.refresh(), 120);
    };

    document.fonts.ready.then(() => ScrollTrigger.refresh());
    window.addEventListener("resize", refresh);
    ScrollTrigger.refresh();

    return () => {
      window.clearTimeout(resizeTimer);
      window.removeEventListener("resize", refresh);
      matchMedia.revert();
      context.revert();
    };
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) {
    return <ReducedMetrics />;
  }

  return (
    <section
      ref={sectionRef}
      id="capacidades"
      className="relative bg-[#050507] text-[#F6F4EF]"
      aria-labelledby="metrics-title"
    >
      <div className="lg:hidden">
        {capabilities.map((capability, index) => {
          const theme = metricThemes[index];
          const alignRight = index % 2 === 1;

          return (
            <article
              key={capability.label}
              className="metric-mobile flex min-h-[64svh] flex-col justify-center overflow-hidden px-6 py-16 sm:px-8"
              style={{ backgroundColor: theme.background }}
            >
              <div className="mb-10 flex items-center justify-between font-mono text-[9px] font-black uppercase tracking-[0.22em] text-white/55">
                <span>{index === 0 ? "Capacidades" : "Hyper Galaxy"}</span>
                <span>{String(index + 1).padStart(2, "0")} / 04</span>
              </div>
              <div data-mobile-content className={cn(alignRight && "text-right")}>
                <div className="overflow-hidden">
                  <p
                    data-mobile-value
                    className="whitespace-nowrap text-[clamp(4.5rem,22vw,7rem)] font-black uppercase leading-[0.82] tracking-[-0.065em]"
                    style={{ color: theme.accent }}
                  >
                    {capability.value}
                  </p>
                </div>
                <div className="mt-7 overflow-hidden">
                  <h2
                    data-mobile-label
                    className="text-[clamp(1.05rem,5vw,1.35rem)] font-black uppercase leading-tight tracking-[0.055em]"
                  >
                    {capability.label}
                  </h2>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div ref={stageRef} className="relative hidden h-screen min-h-[700px] overflow-hidden lg:block">
        <div className="metrics-ambient pointer-events-none absolute -inset-[16%] bg-[radial-gradient(circle_at_22%_38%,rgba(139,92,246,0.2),transparent_27%),radial-gradient(circle_at_78%_64%,rgba(59,130,246,0.14),transparent_24%)]" />
        <div className="metrics-grid pointer-events-none absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] [background-size:100%_11.111%,8.333%_100%]" />
        <div className="metrics-orbit pointer-events-none absolute -right-[11vw] top-[9vh] h-[42vw] w-[42vw] rounded-full border border-[#8B5CF6]/25 shadow-[0_0_100px_rgba(139,92,246,0.08)]" />
        <div className="pointer-events-none absolute left-[7%] top-[22%] h-1.5 w-1.5 rounded-full bg-[#93C5FD]/65 shadow-[0_0_18px_#93C5FD]" />
        <div className="pointer-events-none absolute bottom-[18%] right-[16%] h-1 w-1 rounded-full bg-[#C4B5FD]/70 shadow-[0_0_14px_#C4B5FD]" />

        <div ref={stageContentRef} className="relative mx-auto flex h-full max-w-[1440px] flex-col px-10 pb-8 pt-20 xl:px-14">
          <div className="relative z-20 flex items-end justify-between gap-8">
            <div className="overflow-hidden">
              <p
                ref={sectionLabelRef}
                id="metrics-title"
                className="font-mono text-[11px] font-black uppercase tracking-[0.3em] text-[#93C5FD]"
              >
                Capacidades em movimento
              </p>
            </div>
            <div className="flex items-center gap-3 font-mono text-[10px] font-black tracking-[0.22em] text-white/58">
              <span className="relative block h-4 w-5 overflow-hidden text-right">
                {capabilities.map((_, index) => (
                  <span
                    key={index}
                    ref={(node) => {
                      indicatorRefs.current[index] = node;
                    }}
                    className="absolute inset-0"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                ))}
              </span>
              <span className="text-white/30">/</span>
              <span>04</span>
            </div>
          </div>
          <span ref={sectionLineRef} className="relative z-20 mt-5 block h-px w-full bg-white/24" />

          <div className="relative min-h-0 flex-1">
            <span
              ref={technicalLineRef}
              className="pointer-events-none absolute left-[8%] top-1/2 z-0 h-px w-[84%] origin-left bg-gradient-to-r from-transparent via-[#93C5FD]/65 to-transparent"
            />
            {capabilities.map((capability, index) => {
              const alignRight = index % 2 === 1;
              const theme = metricThemes[index];

              return (
                <article
                  key={capability.label}
                  ref={(node) => {
                    metricRefs.current[index] = node;
                  }}
                  className={cn(
                    "invisible absolute inset-0 z-10 flex items-center px-[clamp(1rem,5vw,4rem)]",
                    alignRight ? "justify-end text-right" : "justify-start text-left",
                  )}
                >
                  <div
                    className={cn(
                      "flex w-[min(72vw,980px)] items-center gap-[clamp(2rem,5vw,5rem)]",
                      alignRight && "flex-row-reverse",
                    )}
                  >
                    <div className="shrink-0 overflow-hidden py-3">
                      <p
                        ref={(node) => {
                          valueRefs.current[index] = node;
                        }}
                        className="whitespace-nowrap text-[clamp(4.5rem,9vw,9rem)] font-black uppercase leading-[0.82] tracking-[-0.065em]"
                        style={{ color: theme.accent }}
                      >
                        {capability.value}
                      </p>
                    </div>
                    <div className="w-[clamp(17rem,26vw,23rem)] shrink-0 overflow-hidden">
                      <h2
                        ref={(node) => {
                          labelRefs.current[index] = node;
                        }}
                        className="text-[clamp(1.05rem,1.65vw,1.55rem)] font-black uppercase leading-tight tracking-[0.055em]"
                      >
                        {capability.label}
                      </h2>
                      <span
                        className={cn(
                          "metric-accent mt-4 block h-1 w-16 origin-left",
                          alignRight && "ml-auto origin-right",
                        )}
                        style={{ backgroundColor: theme.accent }}
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="relative z-20 flex items-center gap-5 border-t border-white/16 pt-4">
            <span className="font-mono text-[9px] font-black uppercase tracking-[0.22em] text-white/48">
              Progresso
            </span>
            <span className="relative h-px flex-1 overflow-hidden bg-white/16">
              <span ref={progressRef} className="absolute inset-0 origin-left bg-[#93C5FD]" />
            </span>
            <span className="font-mono text-[9px] font-black uppercase tracking-[0.22em] text-white/48">
              Próximo capítulo
            </span>
          </div>
        </div>

        <div
          ref={transitionRef}
          className="pointer-events-none absolute inset-x-0 bottom-0 z-30 h-[22vh] bg-[#F6F4EF]"
          aria-hidden="true"
        />
      </div>
    </section>
  );
}

function ReducedMetrics() {
  return (
    <section
      id="capacidades"
      className="bg-[#050507] px-6 py-20 text-[#F6F4EF] sm:px-8 lg:px-10"
      aria-labelledby="metrics-title"
    >
      <div className="mx-auto max-w-[1280px]">
        <p
          id="metrics-title"
          className="font-mono text-[11px] font-black uppercase tracking-[0.3em] text-[#93C5FD]"
        >
          Capacidades em movimento
        </p>
        <div className="mt-10 grid gap-px overflow-hidden bg-white/14 sm:grid-cols-2">
          {capabilities.map((capability, index) => (
            <article
              key={capability.label}
              className="min-w-0 bg-[#050507] p-8 lg:p-12"
            >
              <p
                className="whitespace-nowrap text-[clamp(4.5rem,9vw,9rem)] font-black uppercase leading-[0.82] tracking-[-0.065em]"
                style={{ color: metricThemes[index].accent }}
              >
                {capability.value}
              </p>
              <h2 className="mt-6 text-lg font-black uppercase tracking-[0.055em]">
                {capability.label}
              </h2>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
