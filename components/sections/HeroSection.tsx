"use client";

import { PokerCanvas } from "@/components/three/PokerCanvas";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Button } from "@/components/ui/Button";
import { Award, Download, Film, Play, ShieldCheck, X, Zap } from "lucide-react";
import React, { useState } from "react";
import { ScrollReveal } from "../ui/ScrollReveal";

export const HeroSection: React.FC = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <section className="relative w-full min-h-screen pt-24 pb-16 flex items-center justify-center overflow-hidden">
      {/* 3D WebGL Background Layer */}
      <div className="absolute inset-0 z-0 opacity-85 pointer-events-auto">
        <PokerCanvas />
      </div>

      {/* Ambient Radial Dark Gradient Overlay to ensure typography contrast */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-obsidian via-obsidian/50 to-transparent pointer-events-none" />

      {/* Floating Background Glow Aura */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gold-glow opacity-30 pointer-events-none blur-3xl animate-pulse-glow z-10" />

      {/* Hero Content Overlay - Explicit Center Alignment */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center w-full">
        {/* Status Live Tag */}
        <ScrollReveal delay={0.1} scale={false} className="w-full flex justify-center text-center">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-obsidian/80 border border-gold-default/30 shadow-gold-glow mb-6 backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pokerGreen-emerald opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-pokerGreen-emerald"></span>
            </span>
            <span className="text-xs font-mono font-bold tracking-wider text-gray-300">
              <AnimatedCounter value={142850} suffix=" PLAYERS ONLINE" />
            </span>
          </div>
        </ScrollReveal>

        {/* Hero Main Heading - Perfectly Centered */}
        <ScrollReveal delay={0.25} className="w-full flex justify-center text-center">
          <h1 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white uppercase max-w-5xl leading-none text-center mx-auto">
            THE WORLD'S MOST <br />
            <span className="text-gold-metallic">ELITE ONLINE POKER</span>
          </h1>
        </ScrollReveal>

        {/* Hero Subtitle - Perfectly Centered */}
        <ScrollReveal delay={0.4} className="w-full flex justify-center text-center">
          <p className="mt-6 text-base sm:text-xl text-gray-300 max-w-2xl font-normal leading-relaxed text-center mx-auto">
            High-stakes cash games, certified 100% fair RNG, multi-million dollar tournaments, and instant crypto payouts. Real 3D experience.
          </p>
        </ScrollReveal>

        {/* Dual Primary CTA Buttons + Watch Trailer Button */}
        <ScrollReveal delay={0.55} className="w-full flex justify-center text-center">
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mx-auto text-center">
            <Button
              onClick={() => (window.location.href = "https://poker-game-lake.vercel.app")}
              variant="gold"
              size="xl"
              className="w-full sm:w-auto min-w-[200px]"
            >
              <Play className="w-5 h-5 fill-current" />
              PLAY INSTANTLY
            </Button>
            <Button variant="glass" size="xl" className="w-full sm:w-auto min-w-[200px]">
              <Download className="w-5 h-5" />
              DOWNLOAD CLIENT
            </Button>
            <Button
              onClick={() => setIsVideoModalOpen(true)}
              variant="outline"
              size="xl"
              className="w-full sm:w-auto min-w-[180px]"
            >
              <Film className="w-5 h-5 text-gold-default" />
              TRAILER 4K
            </Button>
          </div>
        </ScrollReveal>

        {/* Trust Badges - Perfectly Centered */}
        <ScrollReveal delay={0.7} className="w-full flex justify-center text-center">
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 border-t border-white/10 max-w-3xl w-full mx-auto justify-items-center">
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
        </ScrollReveal>
      </div>

      {/* Cinematic 4K Video Trailer Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-fadeIn">
          <div className="relative w-full max-w-5xl rounded-3xl overflow-hidden glass-panel border-gold-default/40 shadow-gold-glow">
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-4 right-4 z-50 p-3 rounded-full bg-black/60 text-white hover:text-gold-default hover:bg-black/80 transition-all border border-white/20"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="aspect-video w-full">
              <video
                src="/videos/poker_video.mp4"
                controls
                autoPlay
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      )}

      {/* Seamless Section Divider Beam */}
      <div className="absolute bottom-0 left-0 right-0 z-30 section-divider-beam" />
    </section>
  );
};
