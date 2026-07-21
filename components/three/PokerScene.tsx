"use client";

import React, { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Float, Sparkles, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

export const PokerScene: React.FC = () => {
  const tableRef = useRef<THREE.Group>(null);
  const cardsGroupRef = useRef<THREE.Group>(null);
  const chipsGroupRef = useRef<THREE.Group>(null);

  const { mouse } = useThree();

  // Mouse Parallax & Smooth Damping Frame Loop
  useFrame((state, delta) => {
    // Smooth camera damping following mouse
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, mouse.x * 1.5, delta * 2);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, 2 + mouse.y * 0.8, delta * 2);
    state.camera.lookAt(0, 0, 0);

    // Subtle table rotation
    if (tableRef.current) {
      tableRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.05;
    }

    // Cards floating wave
    if (cardsGroupRef.current) {
      cardsGroupRef.current.rotation.y = mouse.x * 0.3;
      cardsGroupRef.current.rotation.x = -mouse.y * 0.2;
    }

    // Chips spinning
    if (chipsGroupRef.current) {
      chipsGroupRef.current.rotation.y += delta * 0.4;
    }
  });

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 2.5, 7.5]} fov={45} />

      {/* Lighting Setup */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 10, 5]} intensity={1.5} color="#FDF0A6" castShadow />
      <spotLight
        position={[0, 8, 2]}
        intensity={2.5}
        angle={0.5}
        penumbra={1}
        color="#00E676"
      />
      <pointLight position={[-5, 3, -2]} intensity={1.2} color="#7C3AED" />

      {/* 3D Golden Dust Sparkles */}
      <Sparkles
        count={250}
        scale={[12, 8, 12]}
        size={4}
        speed={0.4}
        color="#D4AF37"
      />
      <Sparkles
        count={100}
        scale={[10, 6, 10]}
        size={6}
        speed={0.8}
        color="#00F0FF"
      />

      {/* Main Scene Group */}
      <group ref={tableRef} position={[0, -0.8, 0]}>
        {/* 3D Felt Poker Table Base */}
        <mesh position={[0, 0, 0]} receiveShadow>
          <cylinderGeometry args={[4.2, 4.5, 0.4, 64]} />
          <meshStandardMaterial color="#051A10" roughness={0.4} metalness={0.2} />
        </mesh>

        {/* Emerald Table Surface (Felt) */}
        <mesh position={[0, 0.21, 0]} receiveShadow>
          <cylinderGeometry args={[3.9, 3.9, 0.05, 64]} />
          <meshStandardMaterial color="#00E676" roughness={0.8} metalness={0.1} />
        </mesh>

        {/* Royal Gold Table Border Trim */}
        <mesh position={[0, 0.22, 0]}>
          <torusGeometry args={[3.95, 0.08, 16, 64]} />
          <meshStandardMaterial color="#D4AF37" roughness={0.2} metalness={0.9} />
        </mesh>

        {/* 3D Royal Flush Playing Cards Set */}
        <group ref={cardsGroupRef} position={[0, 0.8, 1]}>
          {[-1.6, -0.8, 0, 0.8, 1.6].map((xOffset, index) => (
            <Float key={index} speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
              <mesh
                position={[xOffset * 0.9, 0, (2 - Math.abs(xOffset)) * 0.15]}
                rotation={[-0.3, (xOffset * -0.1), 0]}
              >
                <boxGeometry args={[0.7, 1.05, 0.02]} />
                <meshStandardMaterial
                  color="#F8FAFC"
                  metalness={0.3}
                  roughness={0.2}
                />
              </mesh>
            </Float>
          ))}
        </group>

        {/* 3D Poker Chips Stacks */}
        <group ref={chipsGroupRef} position={[0, 0.4, 0]}>
          {/* Gold Chip Stack */}
          {Array.from({ length: 6 }).map((_, i) => (
            <mesh key={`gold-${i}`} position={[-1.8, i * 0.06, 0.5]}>
              <cylinderGeometry args={[0.4, 0.4, 0.05, 32]} />
              <meshStandardMaterial color="#D4AF37" metalness={0.8} roughness={0.2} />
            </mesh>
          ))}

          {/* Purple Chip Stack */}
          {Array.from({ length: 8 }).map((_, i) => (
            <mesh key={`purple-${i}`} position={[1.8, i * 0.06, 0.2]}>
              <cylinderGeometry args={[0.4, 0.4, 0.05, 32]} />
              <meshStandardMaterial color="#7C3AED" metalness={0.7} roughness={0.3} />
            </mesh>
          ))}

          {/* Black High Roller Stack */}
          {Array.from({ length: 10 }).map((_, i) => (
            <mesh key={`black-${i}`} position={[0.2, i * 0.06, -1.2]}>
              <cylinderGeometry args={[0.4, 0.4, 0.05, 32]} />
              <meshStandardMaterial color="#1E2433" metalness={0.9} roughness={0.1} />
            </mesh>
          ))}
        </group>
      </group>
    </>
  );
};
