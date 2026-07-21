"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { ShieldCheck, Send } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-obsidian border-t border-gold-default/20 relative pt-16 pb-12 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gold-glow pointer-events-none opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gold-gradient p-[1px]">
                <div className="w-full h-full bg-obsidian rounded-[11px] flex items-center justify-center font-heading text-gold-default text-xl font-bold">
                  ♠
                </div>
              </div>
              <span className="font-heading font-black text-xl text-gold-metallic">
                ROYAL FLUSH POKER
              </span>
            </div>
            <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
              The premier AAA Online Poker destination. Certified 100% fair play RNG, multi-million dollar tournaments, and instant crypto payouts.
            </p>

            {/* 18+ Responsible Gaming Badge */}
            <div className="flex items-center gap-3 pt-2">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-red-500/50 bg-red-950/30 text-red-400 font-mono font-bold text-xs">
                18+
              </span>
              <span className="text-xs text-gray-400">
                Play Responsibly. Gambling can be addictive.
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-heading text-sm font-bold text-gold-default uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#features" className="hover:text-gold-default transition-colors">Features</a></li>
              <li><a href="#gameplay" className="hover:text-gold-default transition-colors">3D Gameplay</a></li>
              <li><a href="#tournament" className="hover:text-gold-default transition-colors">World Series</a></li>
              <li><a href="#leaderboard" className="hover:text-gold-default transition-colors">Hall of Fame</a></li>
              <li><a href="#download" className="hover:text-gold-default transition-colors">App Download</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-3">
            <h4 className="font-heading text-sm font-bold text-gold-default uppercase tracking-wider">
              Legal & Trust
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-gold-default transition-colors">RNG Certificate</a></li>
              <li><a href="#" className="hover:text-gold-default transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-gold-default transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gold-default transition-colors">Anti-Money Laundering</a></li>
              <li><a href="#" className="hover:text-gold-default transition-colors">Responsible Gaming</a></li>
            </ul>
          </div>

          {/* VIP Newsletter */}
          <div className="space-y-3">
            <h4 className="font-heading text-sm font-bold text-gold-default uppercase tracking-wider">
              VIP Pass Newsletter
            </h4>
            <p className="text-xs text-gray-400">
              Get exclusive satellite passwords and $1,000 freeroll tickets directly to your inbox.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 bg-obsidian-card border border-white/10 rounded-lg text-xs text-white placeholder-gray-500 focus:outline-none focus:border-gold-default"
              />
              <button
                type="submit"
                className="p-2 bg-gold-gradient text-obsidian rounded-lg hover:brightness-110 transition-all"
                aria-label="Subscribe"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom copyright & Licence info */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© 2026 ROYAL FLUSH POKER ENTERTAINMENT N.V. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>License No. 8048/JAZ2026-001 (Curacao)</span>
            <span className="flex items-center gap-1 text-emerald-400">
              <ShieldCheck className="w-4 h-4" /> 256-Bit SSL Encrypted
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
