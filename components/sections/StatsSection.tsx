"use client";

import React from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { LIVE_STATS } from "@/lib/constants";
import { Users, DollarSign, Activity, Globe } from "lucide-react";

export const StatsSection: React.FC = () => {
  const getStatIcon = (id: string) => {
    switch (id) {
      case "players":
        return <Users className="w-6 h-6 text-gold-default" />;
      case "prize":
        return <DollarSign className="w-6 h-6 text-pokerGreen-emerald" />;
      case "hands":
        return <Activity className="w-6 h-6 text-neonCyan" />;
      case "countries":
        return <Globe className="w-6 h-6 text-royalPurple-light" />;
      default:
        return <Users className="w-6 h-6 text-gold-default" />;
    }
  };

  return (
    <section id="stats" className="py-20 bg-obsidian relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {LIVE_STATS.map((stat) => (
            <GlassCard
              key={stat.id}
              variant="gold"
              className="p-6 flex flex-col justify-between items-center text-center group hover:scale-105 transition-transform"
            >
              <div className="p-3 rounded-full bg-obsidian border border-white/10 mb-4 group-hover:border-gold-default/60">
                {getStatIcon(stat.id)}
              </div>

              <div className="text-3xl sm:text-4xl font-heading font-black tracking-tight mb-2">
                <AnimatedCounter
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  isCurrency={stat.id === "prize"}
                />
              </div>

              <span className="text-xs font-mono font-bold text-gray-400 uppercase tracking-wider">
                {stat.label}
              </span>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
