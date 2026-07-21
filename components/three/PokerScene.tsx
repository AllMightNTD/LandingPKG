"use client";

import React, { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Float, Sparkles, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";
import "@/components/three/shaders/customShaders";

export const PokerScene: React.FC = () => {
  const tableRef = useRef<THREE.Group>(null);
  const cardsGroupRef = useRef<THREE.Group>(null);
  const chipsGroupRef = useRef<THREE.Group>(null);
  const diceGroupRef = useRef<THREE.Group>(null);
  const coinsGroupRef = useRef<THREE.Group>(null);
  const gemsGroupRef = useRef<THREE.Group>(null);
  const cursorLightRef = useRef<THREE.PointLight>(null);
  const foilMatRef = useRef<any>(null);

  const { mouse } = useThree();

  // Mouse Parallax & Dynamic Light Tracking Frame Loop
  useFrame((state, delta) => {
    // Smooth camera damping following mouse
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, mouse.x * 1.8, delta * 2.5);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, 2.2 + mouse.y * 0.9, delta * 2.5);
    state.camera.lookAt(0, 0, 0);

    // Update custom GLSL shader uniform time
    if (foilMatRef.current) {
      foilMatRef.current.uTime = state.clock.elapsedTime;
    }

    // Cursor-reactive dynamic light in 3D space
    if (cursorLightRef.current) {
      cursorLightRef.current.position.x = mouse.x * 6;
      cursorLightRef.current.position.y = mouse.y * 4 + 2;
    }

    // Subtle table rotation
    if (tableRef.current) {
      tableRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.25) * 0.06;
    }

    // Cards floating wave
    if (cardsGroupRef.current) {
      cardsGroupRef.current.rotation.y = mouse.x * 0.35;
      cardsGroupRef.current.rotation.x = -mouse.y * 0.25;
    }

    // Chips spinning
    if (chipsGroupRef.current) {
      chipsGroupRef.current.rotation.y += delta * 0.5;
    }

    // Dice slow rotation
    if (diceGroupRef.current) {
      diceGroupRef.current.rotation.x += delta * 0.6;
      diceGroupRef.current.rotation.y += delta * 0.8;
    }

    // Coins slow floating rotation
    if (coinsGroupRef.current) {
      coinsGroupRef.current.rotation.y += delta * 1.2;
    }

    // Gems floating rotation
    if (gemsGroupRef.current) {
      gemsGroupRef.current.rotation.x += delta * 0.4;
      gemsGroupRef.current.rotation.z += delta * 0.5;
    }
  });

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 2.5, 7.5]} fov={45} />

      {/* Lighting Setup */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[6, 12, 6]} intensity={1.8} color="#FDF0A6" castShadow />
      <spotLight
        position={[0, 9, 3]}
        intensity={3}
        angle={0.6}
        penumbra={0.8}
        color="#00E676"
        castShadow
      />
      <pointLight position={[-6, 4, -2]} intensity={1.5} color="#7C3AED" />

      {/* Cursor-Reactive Dynamic Light */}
      <pointLight ref={cursorLightRef} position={[0, 2, 3]} intensity={2} color="#D4AF37" distance={8} />

      {/* 3D Golden & Cyan Dust Sparkles */}
      <Sparkles
        count={300}
        scale={[14, 9, 14]}
        size={4.5}
        speed={0.5}
        color="#D4AF37"
      />
      <Sparkles
        count={150}
        scale={[12, 7, 12]}
        size={6}
        speed={0.9}
        color="#00F0FF"
      />

      {/* Main Scene Group */}
      <group ref={tableRef} position={[0, -0.8, 0]}>
        {/* 3D Felt Poker Table Base */}
        <mesh position={[0, 0, 0]} receiveShadow castShadow>
          <cylinderGeometry args={[4.2, 4.5, 0.4, 64]} />
          <meshStandardMaterial color="#051A10" roughness={0.4} metalness={0.3} />
        </mesh>

        {/* Emerald Table Surface (Felt) */}
        <mesh position={[0, 0.21, 0]} receiveShadow>
          <cylinderGeometry args={[3.9, 3.9, 0.05, 64]} />
          <meshStandardMaterial color="#00E676" roughness={0.75} metalness={0.15} />
        </mesh>

        {/* Royal Gold Table Border Trim */}
        <mesh position={[0, 0.22, 0]}>
          <torusGeometry args={[3.95, 0.08, 16, 64]} />
          <meshStandardMaterial color="#D4AF37" roughness={0.15} metalness={0.95} />
        </mesh>

        {/* 3D Royal Flush Playing Cards Set with Custom Metallic Foil GLSL Shader */}
        <group ref={cardsGroupRef} position={[0, 0.8, 1]}>
          {[-1.6, -0.8, 0, 0.8, 1.6].map((xOffset, index) => (
            <Float key={index} speed={2.5} rotationIntensity={0.35} floatIntensity={0.6}>
              <mesh
                position={[xOffset * 0.9, 0, (2 - Math.abs(xOffset)) * 0.15]}
                rotation={[-0.3, xOffset * -0.1, 0]}
                castShadow
              >
                <boxGeometry args={[0.7, 1.05, 0.02]} />
                <cardFoilMaterial ref={index === 2 ? foilMatRef : null} />
              </mesh>
            </Float>
          ))}
        </group>

        {/* 3D Poker Chips Stacks with Custom Fresnel Glow Rim */}
        <group ref={chipsGroupRef} position={[0, 0.4, 0]}>
          {/* Gold Chip Stack */}
          {Array.from({ length: 7 }).map((_, i) => (
            <mesh key={`gold-${i}`} position={[-1.8, i * 0.06, 0.5]} castShadow receiveShadow>
              <cylinderGeometry args={[0.4, 0.4, 0.05, 32]} />
              <meshStandardMaterial color="#D4AF37" metalness={0.9} roughness={0.15} />
            </mesh>
          ))}

          {/* Purple Chip Stack */}
          {Array.from({ length: 9 }).map((_, i) => (
            <mesh key={`purple-${i}`} position={[1.8, i * 0.06, 0.2]} castShadow receiveShadow>
              <cylinderGeometry args={[0.4, 0.4, 0.05, 32]} />
              <meshStandardMaterial color="#7C3AED" metalness={0.8} roughness={0.2} />
            </mesh>
          ))}

          {/* Black High Roller Stack */}
          {Array.from({ length: 11 }).map((_, i) => (
            <mesh key={`black-${i}`} position={[0.2, i * 0.06, -1.2]} castShadow receiveShadow>
              <cylinderGeometry args={[0.4, 0.4, 0.05, 32]} />
              <meshStandardMaterial color="#1E2433" metalness={0.95} roughness={0.1} />
            </mesh>
          ))}
        </group>

        {/* 3D Floating Realistic Casino Dice */}
        <group ref={diceGroupRef} position={[-2.8, 1.8, 0.8]}>
          <Float speed={3} rotationIntensity={1} floatIntensity={1}>
            <mesh castShadow>
              <boxGeometry args={[0.5, 0.5, 0.5]} />
              <meshStandardMaterial color="#DC2626" metalness={0.5} roughness={0.2} />
            </mesh>
          </Float>
        </group>
        <group position={[2.9, 2.1, -0.5]}>
          <Float speed={2.5} rotationIntensity={1.2} floatIntensity={0.8}>
            <mesh castShadow rotation={[0.5, 0.8, 0]}>
              <boxGeometry args={[0.45, 0.45, 0.45]} />
              <meshStandardMaterial color="#F8FAFC" metalness={0.3} roughness={0.1} />
            </mesh>
          </Float>
        </group>

        {/* 3D Floating Glowing Gold Coins */}
        <group ref={coinsGroupRef}>
          {[-2.2, 2.3, -1.2, 1.5].map((x, i) => (
            <Float key={`coin-${i}`} speed={2 + i * 0.5} floatIntensity={0.7}>
              <mesh position={[x, 1.5 + (i % 2) * 0.6, (i % 2 === 0 ? 1 : -1) * 1.2]} rotation={[Math.PI / 3, 0, 0]} castShadow>
                <cylinderGeometry args={[0.3, 0.3, 0.06, 32]} />
                <meshStandardMaterial color="#F5D061" metalness={0.95} roughness={0.1} />
              </mesh>
            </Float>
          ))}
        </group>

        {/* 3D Floating Diamond Gems */}
        <group ref={gemsGroupRef} position={[0, 2.6, -2]}>
          <Float speed={2.8} floatIntensity={0.9}>
            <mesh castShadow>
              <octahedronGeometry args={[0.35, 0]} />
              <meshStandardMaterial color="#00F0FF" metalness={0.9} roughness={0.05} />
            </mesh>
          </Float>
        </group>
      </group>
    </>
  );
};
