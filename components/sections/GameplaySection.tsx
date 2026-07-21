"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Play, Tv, Monitor, Cpu, Sparkles } from "lucide-react";

export const GameplaySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"holdem" | "omaha" | "spin" | "multitable">("holdem");

  const gameModes = [
    { id: "holdem", label: "No-Limit Hold'em", desc: "The Cadillac of Poker with stakes up to $1,000/$2,000" },
    { id: "omaha", label: "Pot-Limit Omaha", desc: "4-Card high-action variance tables for thrill-seekers" },
    { id: "spin", label: "Spin & Go 10,000x", desc: "Fast-paced 3-player Sit & Go with random jackpot multipliers" },
    { id: "multitable", label: "Pro Multi-Table HUD", desc: "Tile or cascade up to 16 tables with real-time VPIP stats" },
  ];

  return (
    <section id="gameplay" className="py-24 bg-obsidian-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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

        {/* Gameplay Video / Screenshot Canvas Viewer */}
        <div className="relative rounded-3xl overflow-hidden glass-panel border-gold-default/30 shadow-glass aspect-video max-w-5xl mx-auto flex items-center justify-center group">
          {/* Mock Game HUD Preview Background */}
          <div className="absolute inset-0 bg-gradient-to-tr from-obsidian via-pokerGreen-dark to-obsidian opacity-90" />

          {/* Table Graphics Simulation */}
          <div className="relative z-10 flex flex-col items-center justify-center p-8 text-center">
            <div className="w-20 h-20 rounded-full bg-gold-gradient/20 border-2 border-gold-default flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-gold-glow cursor-pointer">
              <Play className="w-8 h-8 text-gold-default fill-gold-default ml-1" />
            </div>

            <h3 className="font-heading font-black text-2xl sm:text-3xl text-white mb-2 uppercase">
              {gameModes.find((m) => m.id === activeTab)?.label}
            </h3>
            <p className="text-sm text-gray-300 max-w-md">
              {gameModes.find((m) => m.id === activeTab)?.desc}
            </p>

            <div className="mt-8 flex items-center gap-6 text-xs font-mono text-gray-400">
              <span className="flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-gold-default" /> 60 FPS Ultra HD
              </span>
              <span className="flex items-center gap-1.5">
                <Monitor className="w-4 h-4 text-neonCyan" /> Multi-Monitor Ready
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
