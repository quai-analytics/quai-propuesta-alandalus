import { useEffect, useState } from "react";
import { loadConfig } from "./config";
import type { ProposalConfig } from "./config/types";

import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { DiagnosticSection } from "./components/DiagnosticSection";
import { RoadmapSection } from "./components/RoadmapSection";
import { TeamSection } from "./components/TeamSection";
import { InvestmentSection } from "./components/InvestmentSection";
import { NextStepsSection } from "./components/NextStepsSection";
import { Footer } from "./components/Footer";

export default function App() {
  const [config, setConfig] = useState<ProposalConfig | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadConfig()
      .then(setConfig)
      .catch((err) => setError(err.message));
  }, []);

  if (error) {
    return (
      <div className="min-h-screen bg-quai-navy text-red-400 flex items-center justify-center p-8">
        <p className="text-lg">Error cargando configuración: {error}</p>
      </div>
    );
  }

  if (!config) {
    return (
      <div className="min-h-screen bg-quai-navy text-slate-400 flex items-center justify-center">
        <p className="text-lg">Cargando propuesta…</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-quai-navy via-slate-950 to-slate-950 text-slate-50">
      <Header config={config} />
      <HeroSection config={config} />
      {config.diagnostic && <DiagnosticSection data={config.diagnostic} />}
      {config.roadmap && <RoadmapSection data={config.roadmap} />}
      {config.team && <TeamSection data={config.team} />}
      {config.investment && <InvestmentSection data={config.investment} />}
      <NextStepsSection
        data={config.nextSteps}
        clientName={config.clientName}
      />
      {config.footer && <Footer data={config.footer} />}
    </div>
  );
}
