"use client";

import { Button } from "@/components/ui/Button";
import { Globe, Menu, User, X } from "lucide-react";
import React, { useEffect, useState } from "react";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "Gameplay", href: "#gameplay" },
    { label: "Tournaments", href: "#tournament" },
    { label: "Leaderboard", href: "#leaderboard" },
    { label: "Download", href: "#download" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? "bg-obsidian/85 backdrop-blur-xl border-b border-gold-default/20 py-3 shadow-glass"
        : "bg-transparent py-5"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gold-gradient p-[1px] shadow-gold-glow group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-obsidian rounded-[11px] flex items-center justify-center">
              <span className="font-heading text-gold-default text-xl font-bold">♠</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-black text-lg sm:text-xl tracking-wider text-gold-metallic">
              ROYAL FLUSH
            </span>
            <span className="text-[9px] font-mono tracking-widest text-gold-default/70 -mt-1 uppercase">
              AAA Poker Club
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-semibold text-gray-300 hover:text-gold-default transition-colors duration-200 tracking-wide uppercase"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Action Controls */}
        <div className="hidden md:flex items-center gap-4">
          {/* Language Selector */}
          <div className="flex items-center gap-1 text-xs text-gray-400 border border-white/10 rounded-lg px-2.5 py-1.5 hover:border-gold-default/40 cursor-pointer transition-colors">
            <Globe className="w-3.5 h-3.5 text-gold-default" />
            <span className="font-mono font-bold">EN</span>
          </div>

          <button onClick={() => window.location.href = 'https://poker-game-lake.vercel.app/login'} className="flex items-center gap-1.5 text-sm font-bold text-gray-300 hover:text-white px-3 py-2 transition-colors">
            <User className="w-4 h-4 text-gold-default" />
            <span>Login</span>
          </button>

          <Button onClick={() => window.location.href = 'https://poker-game-lake.vercel.app'} variant="gold" size="sm" glow>
            PLAY NOW
          </Button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-3">
          <Button onClick={() => window.location.href = 'https://poker-game-lake.vercel.app'} variant="gold" size="sm" className="text-[10px] px-3 py-1.5">
            PLAY
          </Button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-obsidian-card border border-white/10 text-gold-default"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-t border-gold-default/20 px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-bold text-gray-200 hover:text-gold-default uppercase tracking-wider"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <Button onClick={() => window.location.href = 'https://poker-game-lake.vercel.app/login'} variant="outline" size="md" className="w-full">
              LOGIN
            </Button>
            <Button onClick={() => window.location.href = 'https://poker-game-lake.vercel.app/register'} variant="gold" size="md" className="w-full">
              REGISTER & PLAY NOW
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};
