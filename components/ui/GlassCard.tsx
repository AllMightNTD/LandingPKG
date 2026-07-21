"use client";

import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "gold" | "purple" | "obsidian" | "emerald";
  tilt?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className,
  variant = "gold",
  tilt = true,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!tilt || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    if (!tilt) return;
    setRotate({ x: 0, y: 0 });
  };

  const variantStyles = {
    gold: "glass-panel border-gold-default/20 hover:border-gold-default/60 hover:shadow-gold-glow",
    purple: "glass-panel-purple border-royalPurple/30 hover:border-royalPurple/70 hover:shadow-purple-glow",
    obsidian: "bg-obsidian-card/90 border-obsidian-border hover:border-gold-default/40",
    emerald: "glass-panel border-emerald-500/30 hover:border-emerald-400 hover:shadow-emerald-glow",
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        transition: rotate.x === 0 ? "transform 0.5s ease-out, border-color 0.3s, box-shadow 0.3s" : "none",
      }}
      className={cn(
        "relative rounded-2xl p-6 overflow-hidden transition-colors duration-300",
        variantStyles[variant],
        className
      )}
    >
      {/* Dynamic ambient highlight spot */}
      <div className="absolute -top-24 -left-24 w-48 h-48 bg-gold-default/10 rounded-full blur-3xl pointer-events-none group-hover:bg-gold-default/20 transition-all duration-500" />
      <div className="relative z-10">{children}</div>
    </div>
  );
};
