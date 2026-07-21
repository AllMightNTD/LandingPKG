"use client";

import React, { useState } from "react";
import { FAQ_ITEMS } from "@/lib/constants";
import { ChevronDown, HelpCircle } from "lucide-react";

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>("faq-1");
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Security", "Payments", "Tournaments", "General"];

  const filteredFaqs =
    activeCategory === "All"
      ? FAQ_ITEMS
      : FAQ_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="faq" className="py-24 bg-obsidian relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-gold-default bg-gold-default/10 px-3 py-1 rounded-full border border-gold-default/30">
            KNOWLEDGE BASE
          </span>
          <h2 className="mt-4 font-heading font-black text-3xl sm:text-5xl text-white uppercase">
            FREQUENTLY ASKED <span className="text-gold-metallic">QUESTIONS</span>
          </h2>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-bold font-mono tracking-wider uppercase transition-colors ${
                activeCategory === cat
                  ? "bg-gold-gradient text-obsidian shadow-gold-glow"
                  : "bg-obsidian-card text-gray-400 border border-white/10 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="glass-panel border-gold-default/20 rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-white hover:text-gold-default transition-colors"
                >
                  <span className="flex items-center gap-3 text-base sm:text-lg">
                    <HelpCircle className="w-5 h-5 text-gold-default flex-shrink-0" />
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gold-default transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-sm text-gray-300 border-t border-white/5 leading-relaxed font-normal">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
