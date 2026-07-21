"use client";

import React from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { TESTIMONIALS } from "@/lib/constants";
import { Star, Quote, CheckCircle2 } from "lucide-react";

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-obsidian-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-gold-default bg-gold-default/10 px-3 py-1 rounded-full border border-gold-default/30">
            PRO ENDORSEMENTS
          </span>
          <h2 className="mt-4 font-heading font-black text-3xl sm:text-5xl text-white uppercase">
            WHAT THE <span className="text-gold-metallic">PROS SAY</span>
          </h2>
          <p className="mt-4 text-gray-400 text-base">
            Trusted by World Series champions, high-stakes cash game grinders, and VIP club members worldwide.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <GlassCard
              key={item.id}
              variant="gold"
              className="p-8 flex flex-col justify-between relative"
            >
              <Quote className="w-10 h-10 text-gold-default/20 absolute top-6 right-6" />

              <div>
                {/* 5-Star Ratings */}
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gold-default fill-gold-default" />
                  ))}
                </div>

                <p className="text-sm text-gray-300 leading-relaxed italic mb-6">
                  "{item.content}"
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-11 h-11 rounded-full border border-gold-default/40 object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-white text-sm flex items-center gap-1">
                      {item.name} <CheckCircle2 className="w-3.5 h-3.5 text-pokerGreen-emerald" />
                    </h4>
                    <span className="text-xs text-gray-400 font-mono">{item.role}</span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] font-mono text-gray-400 uppercase block">Career Earnings</span>
                  <span className="text-xs font-mono font-bold text-gold-default">{item.winnings}</span>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
