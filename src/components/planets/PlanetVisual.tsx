import Image from "next/image";
import type { CSSProperties } from "react";

import type { PlanetConfig } from "@/config/planets.config";
import { cn } from "@/lib/cn";

type PlanetVisualProps = {
  planet: PlanetConfig;
  size: number;
  variant?: "normal" | "hover" | "active";
  priority?: boolean;
  className?: string;
};

export function PlanetVisual({
  planet,
  size,
  variant = "normal",
  priority = false,
  className,
}: PlanetVisualProps) {
  return (
    <div
      className={cn(
        "planet-visual relative isolate shrink-0",
        variant === "hover" && "planet-visual-hover",
        variant === "active" && "planet-visual-active",
        className,
      )}
      style={
        {
          "--planet-size": `${size}px`,
          "--planet-accent": planet.accentColor,
          "--planet-atmosphere": planet.atmosphereColor,
          "--surface-speed": `${Math.max(9, 24 - planet.surfaceSpeed * 50)}s`,
        } as CSSProperties
      }
      data-cursor="planet"
      data-cursor-label="EXPLORAR"
    >
      <Image
        src={planet.asset.src}
        alt={`${planet.name} planet`}
        width={1024}
        height={1024}
        priority={priority}
        loading={priority ? "eager" : "lazy"}
        sizes={`${size}px`}
        className="planet-visual-image relative z-10 h-full w-full object-contain"
      />
      <span className="planet-visual-atmosphere" aria-hidden="true" />
      <span className="planet-visual-terminator" aria-hidden="true" />
      <span className="planet-visual-surface" aria-hidden="true" />
    </div>
  );
}
