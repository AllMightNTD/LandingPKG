"use client";

import React, { useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { VideoPlayer } from "@/components/ui/VideoPlayer";

export const GameplaySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"holdem" | "omaha" | "spin" | "multitable">("holdem");

  const gameModes = [
    {
      id: "holdem",
      label: "No-Limit Hold'em",
      title: "No-Limit Hold'em",
      desc: "The Cadillac of Poker with stakes up to $1,000/$2,000",
    },
    {
      id: "omaha",
      label: "Pot-Limit Omaha",
      title: "Pot-Limit Omaha",
      desc: "4-Card high-action variance tables for thrill-seekers",
    },
    {
      id: "spin",
      label: "Spin & Go 10,000x",
      title: "Spin & Go 10,000x",
      desc: "Fast-paced 3-player Sit & Go with random jackpot multipliers",
    },
    {
      id: "multitable",
      label: "Pro Multi-Table HUD",
      title: "Pro Multi-Table HUD",
      desc: "Tile or cascade up to 16 tables with real-time VPIP stats",
    },
  ];

  const currentMode = gameModes.find((m) => m.id === activeTab) || gameModes[0];

  return (
    <section id="gameplay" className="py-24 bg-obsidian-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          {/* Section Title */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-pokerGreen-emerald bg-pokerGreen-emerald/10 px-3 py-1 rounded-full border border-pokerGreen-emerald/30">
              AAA IMMERSIVE GRAPHICS
            </span>
            <h2 className="mt-4 font-heading font-black text-3xl sm:text-5xl text-white uppercase">
              NEXT-GEN <span className="text-emerald-metallic">3D GAMEPLAY</span>
            </h2>
            <p className="mt-4 text-gray-400 text-base">
              Powered by WebGL 2.0 and dynamic lighting physics. Built for both casual enthusiasts and high-roller professionals.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          {/* Game Mode Tab Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            {gameModes.map((mode) => (
              <button
                key={mode.id}
                onClick={() => setActiveTab(mode.id as any)}
                className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 ${
                  activeTab === mode.id
                    ? "bg-gold-gradient text-obsidian shadow-gold-glow scale-105"
                    : "bg-obsidian border border-white/10 text-gray-400 hover:text-white hover:border-gold-default/40"
                }`}
              >
                {mode.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.35}>
          {/* Custom AAA Interactive Video Player */}
          <VideoPlayer
            key={currentMode.id}
            src="/videos/poker_video.mp4"
            title={currentMode.title}
            description={currentMode.desc}
          />
        </ScrollReveal>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-30 section-divider-beam" />
    </section>
  );
};
