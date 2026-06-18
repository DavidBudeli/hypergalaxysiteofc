"use client";

import { LayoutGroup } from "framer-motion";
import { useCallback, useState } from "react";

import { HeroExperience } from "@/components/hero/HeroExperience";
import { SiteHeader } from "@/components/navigation/SiteHeader";
import { HyperPreloader } from "@/components/preloader/HyperPreloader";

import { AgentCoreSection } from "./AgentCoreSection";
import { AgentMarketplaceSection } from "./AgentMarketplaceSection";
import { CompanySection } from "./CompanySection";
import { DifferentialsSection } from "./DifferentialsSection";
import { FinalCtaSection } from "./FinalCtaSection";
import { MetricsSection } from "./MetricsSection";
import { NovaSection } from "./NovaSection";
import { PlatformStorySection } from "./PlatformStorySection";
import { ServicesSection } from "./ServicesSection";
import { TechnologyMarqueeSection } from "./TechnologyMarqueeSection";

export function CheckpointThreeExperience() {
  const [ready, setReady] = useState(false);
  const handleComplete = useCallback(() => setReady(true), []);

  return (
    <LayoutGroup>
      <SiteHeader ready={ready} />
      <main>
        <HeroExperience ready={ready} />
        <CompanySection />
        <TechnologyMarqueeSection />
        <MetricsSection />
        <ServicesSection />
        <AgentCoreSection />
        <AgentMarketplaceSection />
        <PlatformStorySection />
        <DifferentialsSection />
        <NovaSection />
        <FinalCtaSection />
      </main>
      <HyperPreloader onComplete={handleComplete} />
    </LayoutGroup>
  );
}
