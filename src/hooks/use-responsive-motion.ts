"use client";

import { useEffect, useState } from "react";

type ResponsiveMotion = {
  isMobile: boolean;
  intensity: "compact" | "standard";
};

export function useResponsiveMotion(): ResponsiveMotion {
  const [state, setState] = useState<ResponsiveMotion>({
    isMobile: false,
    intensity: "standard",
  });

  useEffect(() => {
    const query = window.matchMedia("(max-width: 767px)");
    const update = () =>
      setState({
        isMobile: query.matches,
        intensity: query.matches ? "compact" : "standard",
      });

    update();
    query.addEventListener("change", update);

    return () => query.removeEventListener("change", update);
  }, []);

  return state;
}
