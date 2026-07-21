"use client";

import React from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { FEATURES } from "@/lib/constants";
import { ShieldCheck, Zap, Layers, Crown } from "lucide-react";

export const FeaturesSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "ShieldCheck":
        return <ShieldCheck className="w-8 h-8 text-gold-default" />;
      case "Zap":
        return <Zap className="w-8 h-8 text-pokerGreen-emerald" />;
      case "Layers":
        return <Layers className="w-8 h-8 text-neonCyan" />;
      case "Crown":
        return <Crown className="w-8 h-8 text-royalPurple-light" />;
      default:
        return <ShieldCheck className="w-8 h-8 text-gold-default" />;
    }
  };

  return (
    <section id="features" className="py-24 bg-obsidian relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold-glow pointer-events-none opacity-30 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-glow pointer-events-none opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-gold-default bg-gold-default/10 px-3 py-1 rounded-full border border-gold-default/30">
            HIGH STAKES INFRASTRUCTURE
          </span>
          <h2 className="mt-4 font-heading font-black text-3xl sm:text-5xl text-white uppercase tracking-tight">
            ENGINEERED FOR <span className="text-gold-metallic">CHAMPIONS</span>
          </h2>
          <p className="mt-4 text-gray-400 text-base leading-relaxed">
            Experience next-generation poker technology designed with zero-latency gameplay, certified fairness, and VIP privileges.
          </p>
        </div>

        {/* Bento Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FEATURES.map((feature, idx) => (
            <GlassCard
              key={feature.id}
              variant={idx % 2 === 0 ? "gold" : "purple"}
              className="p-8 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3.5 rounded-xl bg-obsidian border border-white/10 group-hover:scale-110 transition-transform duration-300">
                    {getIcon(feature.icon)}
                  </div>
                  {feature.badge && (
                    <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-gold-default/20 text-gold-default border border-gold-default/40 uppercase">
                      {feature.badge}
                    </span>
                  )}
                </div>
                <h3 className="font-heading font-bold text-2xl text-white mb-3 tracking-wide">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-gold-default group-hover:translate-x-1 transition-transform">
                <span>EXPLORE TECHNICAL SPEC &rarr;</span>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
