"use client";

import { LayoutGroup } from "framer-motion";
import { useCallback, useState } from "react";

import { HeroExperience } from "@/components/hero/HeroExperience";
import { SiteHeader } from "@/components/navigation/SiteHeader";
import { HyperPreloader } from "@/components/preloader/HyperPreloader";

import { CompanySection } from "./CompanySection";
import { MetricsSection } from "./MetricsSection";
import { ServicesSection } from "./ServicesSection";
import { TechnologyMarqueeSection } from "./TechnologyMarqueeSection";

export function CheckpointTwoExperience() {
  const [ready, setReady] = useState(false);
  const handleComplete = useCallback(() => setReady(true), []);

  return (
    <LayoutGroup>
      <SiteHeader ready={ready} />
      <HeroExperience ready={ready} />
      <CompanySection />
      <TechnologyMarqueeSection />
      <MetricsSection />
      <ServicesSection />
      <HyperPreloader onComplete={handleComplete} />
    </LayoutGroup>
  );
}
