import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: "#07080B",
          light: "#0E1118",
          card: "#121620",
          border: "#1E2433",
        },
        gold: {
          light: "#FDF0A6",
          DEFAULT: "#D4AF37",
          dark: "#997A15",
          accent: "#F5D061",
        },
        pokerGreen: {
          DEFAULT: "#0B2B1A",
          emerald: "#00E676",
          dark: "#051A10",
        },
        royalPurple: {
          DEFAULT: "#7C3AED",
          light: "#A855F7",
          dark: "#4C1D95",
        },
        neonCyan: "#00F0FF",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-cinzel)", "serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #FDF0A6 0%, #D4AF37 50%, #997A15 100%)",
        "gold-glow": "radial-gradient(circle, rgba(212,175,55,0.25) 0%, rgba(7,8,11,0) 70%)",
        "purple-glow": "radial-gradient(circle, rgba(124,58,237,0.25) 0%, rgba(7,8,11,0) 70%)",
        "green-felt": "radial-gradient(circle, rgba(0,230,118,0.15) 0%, rgba(5,26,16,0.9) 100%)",
        "glass-gradient": "linear-gradient(180deg, rgba(255, 255, 255, 0.07) 0%, rgba(255, 255, 255, 0.02) 100%)",
      },
      boxShadow: {
        "gold-glow": "0 0 25px rgba(212, 175, 55, 0.35)",
        "emerald-glow": "0 0 25px rgba(0, 236, 118, 0.35)",
        "purple-glow": "0 0 25px rgba(124, 58, 237, 0.35)",
        "glass": "0 8px 32px 0 rgba(0, 0, 0, 0.5)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "shimmer": "shimmer 2.5s infinite linear",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
