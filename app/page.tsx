import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { GameplaySection } from "@/components/sections/GameplaySection";
import { StatsSection } from "@/components/sections/StatsSection";
import { TournamentSection } from "@/components/sections/TournamentSection";
import { LeaderboardSection } from "@/components/sections/LeaderboardSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { DownloadSection } from "@/components/sections/DownloadSection";
import { PartnersSection } from "@/components/sections/PartnersSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-obsidian relative selection:bg-gold-default selection:text-obsidian">
      {/* Sticky Header */}
      <Navbar />

      {/* Landing Page 12-Section Storytelling Flow */}
      <HeroSection />
      <FeaturesSection />
      <GameplaySection />
      <StatsSection />
      <TournamentSection />
      <LeaderboardSection />
      <TestimonialsSection />
      <FAQSection />
      <DownloadSection />
      <PartnersSection />

      {/* Premium Footer */}
      <Footer />
    </main>
  );
}
