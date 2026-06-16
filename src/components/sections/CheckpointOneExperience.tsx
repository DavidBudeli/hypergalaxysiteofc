"use client";

import { LayoutGroup } from "framer-motion";
import { useCallback, useState } from "react";

import { HeroExperience } from "@/components/hero/HeroExperience";
import { SiteHeader } from "@/components/navigation/SiteHeader";
import { HyperPreloader } from "@/components/preloader/HyperPreloader";

export function CheckpointOneExperience() {
  const [ready, setReady] = useState(false);
  const handleComplete = useCallback(() => setReady(true), []);

  return (
    <LayoutGroup>
      <SiteHeader ready={ready} />
      <HeroExperience ready={ready} />
      <HyperPreloader onComplete={handleComplete} />
    </LayoutGroup>
  );
}
