"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { Download, Monitor, Smartphone, QrCode, ShieldCheck } from "lucide-react";

export const DownloadSection: React.FC = () => {
  return (
    <section id="download" className="py-24 bg-obsidian-light relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-gold-glow pointer-events-none opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-panel border-gold-default/30 rounded-3xl p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center shadow-glass">
          {/* Left Column: Platform Download Info */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-gold-default bg-gold-default/10 px-3 py-1 rounded-full border border-gold-default/30">
              CROSS-PLATFORM CLIENT
            </span>

            <h2 className="font-heading font-black text-3xl sm:text-5xl text-white uppercase">
              DOWNLOAD THE <br />
              <span className="text-gold-metallic">POKER CLIENT</span>
            </h2>

            <p className="text-gray-300 text-base leading-relaxed max-w-xl">
              Experience seamless multi-tabling, customizable 3D themes, zero input lag, and hardware-accelerated 60 FPS graphics across all your devices.
            </p>

            {/* Platform Options */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              <Button variant="gold" size="md" className="flex-col py-4 gap-1">
                <Monitor className="w-5 h-5" />
                <span className="text-xs font-bold">WINDOWS</span>
              </Button>
              <Button variant="glass" size="md" className="flex-col py-4 gap-1">
                <Monitor className="w-5 h-5" />
                <span className="text-xs font-bold">macOS</span>
              </Button>
              <Button variant="glass" size="md" className="flex-col py-4 gap-1">
                <Smartphone className="w-5 h-5" />
                <span className="text-xs font-bold">iOS APP</span>
              </Button>
              <Button variant="glass" size="md" className="flex-col py-4 gap-1">
                <Smartphone className="w-5 h-5" />
                <span className="text-xs font-bold">ANDROID</span>
              </Button>
            </div>
          </div>

          {/* Right Column: QR Code Container */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center p-8 bg-obsidian-card/90 rounded-2xl border border-white/10 text-center">
            <div className="w-44 h-44 bg-white p-3 rounded-2xl shadow-gold-glow flex items-center justify-center mb-4">
              {/* QR Code SVG placeholder simulation */}
              <div className="w-full h-full bg-obsidian rounded-xl flex flex-col items-center justify-center text-gold-default">
                <QrCode className="w-24 h-24 stroke-[1.5]" />
                <span className="text-[9px] font-mono text-gray-300 mt-1">SCAN TO PLAY MOBILE</span>
              </div>
            </div>
            <span className="font-bold text-white text-sm">Instant Mobile Web App (PWA)</span>
            <span className="text-xs text-gray-400 mt-1">No App Store download required</span>
          </div>
        </div>
      </div>
    </section>
  );
};
