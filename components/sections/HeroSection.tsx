"use client";

import { PokerCanvas } from "@/components/three/PokerCanvas";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Button } from "@/components/ui/Button";
import { Award, Download, Play, ShieldCheck, Zap } from "lucide-react";
import React from "react";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen pt-24 pb-16 flex items-center justify-center overflow-hidden">
      {/* 3D WebGL Background Layer */}
      <div className="absolute inset-0 z-0 opacity-80 pointer-events-auto">
        <PokerCanvas />
      </div>

      {/* Radial Dark Gradient Overlay to ensure typography contrast */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent pointer-events-none" />

      {/* Hero Content Overlay */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Status Live Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-obsidian/80 border border-gold-default/30 shadow-gold-glow mb-6 backdrop-blur-md">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pokerGreen-emerald opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-pokerGreen-emerald"></span>
          </span>
          <span className="text-xs font-mono font-bold tracking-wider text-gray-300">
            <AnimatedCounter value={142850} suffix=" PLAYERS ONLINE" />
          </span>
        </div>

        {/* Hero Main Heading */}
        <h1 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white uppercase max-w-5xl leading-none">
          THE WORLD'S MOST <br />
          <span className="text-gold-metallic">ELITE ONLINE POKER</span>
        </h1>

        {/* Hero Subtitle */}
        <p className="mt-6 text-base sm:text-xl text-gray-300 max-w-2xl font-normal leading-relaxed">
          High-stakes cash games, certified 100% fair RNG, multi-million dollar tournaments, and instant crypto payouts. Real 3D experience.
        </p>

        {/* Dual Primary CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto">
          <Button onClick={() => window.location.href = 'https://poker-game-lake.vercel.app'} variant="gold" size="xl" className="w-full sm:w-auto min-w-[220px]">
            <Play className="w-5 h-5 fill-current" />
            PLAY INSTANTLY
          </Button>
          <Button variant="glass" size="xl" className="w-full sm:w-auto min-w-[220px]">
            <Download className="w-5 h-5" />
            DOWNLOAD CLIENT
          </Button>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 border-t border-white/10 max-w-3xl w-full">
          <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
            <ShieldCheck className="w-4 h-4 text-gold-default" />
            <span>GLI & iTech Certified RNG</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
            <Zap className="w-4 h-4 text-pokerGreen-emerald" />
            <span>Under 60s Cashouts</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-xs text-gray-400 col-span-2 sm:col-span-1">
            <Award className="w-4 h-4 text-royalPurple-light" />
            <span>$5,000,000 GTD Weekly</span>
          </div>
        </div>
      </div>
    </section>
  );
};
