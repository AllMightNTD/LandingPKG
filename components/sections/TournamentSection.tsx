"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Trophy, Flame, Clock, Award } from "lucide-react";

export const TournamentSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 14, minutes: 32, seconds: 45 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 24, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="tournament" className="py-24 bg-obsidian-light relative overflow-hidden">
      {/* Background ambient gold aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gold-glow opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-panel-purple border-royalPurple/40 rounded-3xl p-8 sm:p-14 text-center relative overflow-hidden shadow-glass">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-royalPurple/30 border border-royalPurple-light/50 text-royalPurple-light text-xs font-mono font-bold uppercase mb-6">
            <Flame className="w-4 h-4 text-red-400" />
            <span>WORLD CHAMPIONSHIP SERIES 2026</span>
          </div>

          <h2 className="font-heading font-black text-4xl sm:text-6xl text-white uppercase tracking-tight">
            <span className="text-gold-metallic">$5,000,000 GTD</span> MAIN EVENT
          </h2>

          <p className="mt-4 text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
            Compete against the world's top poker pros. Direct Buy-in for $530 or win your ticket via daily Satellites starting from $1.
          </p>

          {/* Countdown Clock */}
          <div className="my-10 flex items-center justify-center gap-4 sm:gap-8 font-mono">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-obsidian border border-gold-default/30 flex items-center justify-center text-3xl sm:text-4xl font-black text-gold-default shadow-gold-glow">
                {String(timeLeft.hours).padStart(2, "0")}
              </div>
              <span className="text-[10px] sm:text-xs text-gray-400 font-bold uppercase mt-2">HOURS</span>
            </div>
            <span className="text-3xl font-black text-gold-default">:</span>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-obsidian border border-gold-default/30 flex items-center justify-center text-3xl sm:text-4xl font-black text-gold-default shadow-gold-glow">
                {String(timeLeft.minutes).padStart(2, "0")}
              </div>
              <span className="text-[10px] sm:text-xs text-gray-400 font-bold uppercase mt-2">MINUTES</span>
            </div>
            <span className="text-3xl font-black text-gold-default">:</span>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-obsidian border border-gold-default/30 flex items-center justify-center text-3xl sm:text-4xl font-black text-gold-default shadow-gold-glow">
                {String(timeLeft.seconds).padStart(2, "0")}
              </div>
              <span className="text-[10px] sm:text-xs text-gray-400 font-bold uppercase mt-2">SECONDS</span>
            </div>
          </div>

          {/* CTA Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="gold" size="lg">
              <Trophy className="w-5 h-5 mr-1" />
              REGISTER FOR $530
            </Button>
            <Button variant="glass" size="lg">
              ENTER $1 SATELLITE
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
