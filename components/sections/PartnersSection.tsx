"use client";

import React from "react";
import { PARTNERS } from "@/lib/constants";
import { ShieldCheck } from "lucide-react";

export const PartnersSection: React.FC = () => {
  return (
    <section className="py-16 bg-obsidian border-t border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <span className="text-xs font-mono font-bold text-gray-500 uppercase tracking-widest">
            OFFICIALLY CERTIFIED & AUDITED BY GLOBAL GAMING AUTHORITIES
          </span>
        </div>

        {/* Partner Logo Cloud */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center">
          {PARTNERS.map((partner, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl glass-panel border-white/5 flex flex-col items-center justify-center text-center hover:border-gold-default/40 hover:shadow-gold-glow transition-all duration-300 group cursor-pointer"
            >
              <ShieldCheck className="w-6 h-6 text-gold-default mb-2 group-hover:scale-110 transition-transform" />
              <span className="font-heading font-bold text-xs text-gray-300 group-hover:text-white uppercase tracking-wider">
                {partner.logo}
              </span>
              <span className="text-[9px] font-mono text-gray-500 mt-0.5">{partner.category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
