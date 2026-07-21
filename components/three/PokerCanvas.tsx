"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { PokerScene } from "./PokerScene";

export const PokerCanvas: React.FC = () => {
  return (
    <div className="w-full h-full relative">
      <Canvas
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        dpr={[1, 2]}
        className="w-full h-full"
      >
        <Suspense fallback={null}>
          <PokerScene />
        </Suspense>
      </Canvas>

      {/* Subtle overlay vignette gradient over 3D canvas */}
      <div className="absolute inset-0 pointer-events-none bg-radial-vignette" />
    </div>
  );
};
