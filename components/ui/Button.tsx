"use client";

import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "gold" | "purple" | "outline" | "glass" | "emerald";
  size?: "sm" | "md" | "lg" | "xl";
  glow?: boolean;
  magnetic?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "gold",
  size = "md",
  glow = true,
  magnetic = true,
  className,
  children,
  ...props
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!magnetic || !buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPosition({ x: x * 0.2, y: y * 0.2 });
  };

  const handleMouseLeave = () => {
    if (!magnetic) return;
    setPosition({ x: 0, y: 0 });
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-xs font-semibold tracking-wider uppercase",
    md: "px-6 py-3 text-sm font-bold tracking-wider uppercase",
    lg: "px-8 py-4 text-base font-extrabold tracking-wider uppercase",
    xl: "px-10 py-5 text-lg font-black tracking-widest uppercase",
  };

  const variantStyles = {
    gold: "bg-gold-gradient text-obsidian shadow-gold-glow hover:brightness-110 border border-gold-light/40",
    purple: "bg-gradient-to-r from-royalPurple to-royalPurple-light text-white shadow-purple-glow hover:brightness-110 border border-purple-400/40",
    emerald: "bg-gradient-to-r from-emerald-600 to-pokerGreen-emerald text-obsidian shadow-emerald-glow hover:brightness-110 border border-emerald-300/40",
    glass: "bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20 hover:border-gold-default/60",
    outline: "bg-transparent text-gold-default border-2 border-gold-default hover:bg-gold-default/10 hover:shadow-gold-glow",
  };

  return (
    <button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: position.x === 0 ? "transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)" : "none",
      }}
      className={cn(
        "relative inline-flex items-center justify-center rounded-xl overflow-hidden cursor-pointer active:scale-95 transition-all duration-300 select-none group",
        sizeStyles[size],
        variantStyles[variant],
        glow && "after:absolute after:inset-0 after:rounded-xl after:opacity-0 after:hover:opacity-100 after:transition-opacity after:duration-500 after:bg-white/10",
        className
      )}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
};
