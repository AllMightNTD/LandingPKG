"use client";

import React, { useEffect, useState } from "react";
import { formatNumber, formatCurrency } from "@/lib/utils";

interface AnimatedCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  isCurrency?: boolean;
  duration?: number;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  prefix = "",
  suffix = "",
  isCurrency = false,
  duration = 2000,
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3); // Ease Out Cubic
      setCount(Math.floor(easeProgress * value));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [value, duration]);

  const formattedValue = isCurrency ? formatCurrency(count) : formatNumber(count);

  return (
    <span className="font-mono font-black text-transparent bg-clip-text bg-gold-gradient">
      {prefix}
      {formattedValue}
      {suffix}
    </span>
  );
};
