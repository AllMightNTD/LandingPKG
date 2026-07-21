import * as THREE from "three";
import { shaderMaterial } from "@react-three/drei";
import { extend } from "@react-three/fiber";

// 1. Custom Fresnel Rim Glow Shader Material
export const FresnelGlowMaterial = shaderMaterial(
  {
    uGlowColor: new THREE.Color("#D4AF37"),
    uGlowIntensity: 1.5,
    uPower: 3.0,
  },
  // Vertex Shader
  /* glsl */ `
    varying vec3 vNormal;
    varying vec3 vViewPosition;
    void main() {
      vNormal = normalize(normalMatrix * normal);
      vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
      vViewPosition = -mvPosition.xyz;
      gl_Position = projectionMatrix * mvPosition;
    }
  `,
  // Fragment Shader
  /* glsl */ `
    uniform vec3 uGlowColor;
    uniform float uGlowIntensity;
    uniform float uPower;
    varying vec3 vNormal;
    varying vec3 vViewPosition;
    void main() {
      vec3 normal = normalize(vNormal);
      vec3 viewDir = normalize(vViewPosition);
      float fresnel = pow(1.0 - max(dot(normal, viewDir), 0.0), uPower);
      gl_FragColor = vec4(uGlowColor * fresnel * uGlowIntensity, fresnel);
    }
  `
);

// 2. Custom Card Metallic Foil Shader Material
export const CardFoilMaterial = shaderMaterial(
  {
    uTime: 0,
    uFoilColor: new THREE.Color("#FDF0A6"),
    uBaseColor: new THREE.Color("#07080B"),
  },
  // Vertex Shader
  /* glsl */ `
    varying vec2 vUv;
    varying vec3 vNormal;
    varying vec3 vViewPosition;
    void main() {
      vUv = uv;
      vNormal = normalize(normalMatrix * normal);
      vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
      vViewPosition = -mvPosition.xyz;
      gl_Position = projectionMatrix * mvPosition;
    }
  `,
  // Fragment Shader
  /* glsl */ `
    uniform float uTime;
    uniform vec3 uFoilColor;
    uniform vec3 uBaseColor;
    varying vec2 vUv;
    varying vec3 vNormal;
    varying vec3 vViewPosition;
    void main() {
      vec3 normal = normalize(vNormal);
      vec3 viewDir = normalize(vViewPosition);
      float fresnel = pow(1.0 - max(dot(normal, viewDir), 0.0), 2.5);
      
      // Moving metallic sheen sweep across UV
      float sweep = sin(vUv.x * 10.0 + vUv.y * 5.0 - uTime * 3.0) * 0.5 + 0.5;
      sweep = pow(sweep, 4.0);
      
      vec3 finalColor = mix(uBaseColor, uFoilColor, sweep * 0.7 + fresnel * 0.5);
      gl_FragColor = vec4(finalColor, 1.0);
    }
  `
);

// 3. Custom Hologram Scanline Shader Material
export const HologramMaterial = shaderMaterial(
  {
    uTime: 0,
    uColor: new THREE.Color("#00F0FF"),
    uScanlineSpeed: 4.0,
  },
  // Vertex Shader
  /* glsl */ `
    varying vec2 vUv;
    varying vec3 vNormal;
    void main() {
      vUv = uv;
      vNormal = normalize(normalMatrix * normal);
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  // Fragment Shader
  /* glsl */ `
    uniform float uTime;
    uniform vec3 uColor;
    uniform float uScanlineSpeed;
    varying vec2 vUv;
    varying vec3 vNormal;
    void main() {
      float scanline = sin(vUv.y * 80.0 - uTime * uScanlineSpeed) * 0.5 + 0.5;
      float alpha = scanline * 0.6 + 0.2;
      gl_FragColor = vec4(uColor, alpha);
    }
  `
);

// Extend for JSX R3F elements
extend({
  FresnelGlowMaterial,
  CardFoilMaterial,
  HologramMaterial,
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      fresnelGlowMaterial: any;
      cardFoilMaterial: any;
      hologramMaterial: any;
    }
  }
}
