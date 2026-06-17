"use client";

import { useEffect } from "react";

import { useReducedMotionContext } from "./ReducedMotionProvider";

export function AnimationPauser() {
  const prefersReducedMotion = useReducedMotionContext();

  useEffect(() => {
    const sections = new Set<HTMLElement>();
    const observed = new Set<HTMLElement>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          entry.target.classList.toggle(
            "is-paused",
            prefersReducedMotion || !entry.isIntersecting,
          );
        }
      },
      {
        rootMargin: "15% 0px 15% 0px",
        threshold: 0,
      },
    );

    const observeSections = () => {
      document.querySelectorAll<HTMLElement>("section").forEach((section) => {
        sections.add(section);
        if (!observed.has(section)) {
          observed.add(section);
          observer.observe(section);
        }
      });
    };

    observeSections();

    const mutationObserver = new MutationObserver(observeSections);
    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      mutationObserver.disconnect();
      observed.forEach((section) => observer.unobserve(section));
      observer.disconnect();
      sections.forEach((section) => section.classList.remove("is-paused"));
    };
  }, [prefersReducedMotion]);

  return null;
}
