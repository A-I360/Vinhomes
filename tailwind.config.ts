import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // Deep forest / emerald greens
          night: "#0a1a13",
          green950: "#0d241b",
          green900: "#0f2d21",
          green800: "#133a2b",
          green700: "#164a37",
          green600: "#1c5a43",
          // Metallic champagne gold
          gold: "#c6a36a",
          goldLight: "#e5cf9e",
          goldDeep: "#a5813d",
          // Ivory / cream
          ivory: "#f5efe3",
          cream: "#faf6ec",
          paper: "#fffdf7",
          // Stone / architectural gray
          stone: "#a39d8f",
          stoneSoft: "#c9c3b5",
          line: "#d9d2c2",
          // Charcoal / near-black
          ink: "#141a16",
          charcoal: "#1d231f",
        },
      },
      fontFamily: {
        serif: ["var(--font-display)", "Georgia", "serif"],
        cormorant: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        luxe: "0.28em",
        wide2: "0.18em",
        wide3: "0.12em",
      },
      maxWidth: {
        page: "1440px",
        prose: "72ch",
      },
      boxShadow: {
        card: "0 18px 50px -24px rgba(15, 32, 25, 0.35)",
        soft: "0 10px 34px -20px rgba(15, 32, 25, 0.30)",
        lift: "0 30px 60px -30px rgba(10, 26, 19, 0.45)",
      },
      transitionTimingFunction: {
        luxe: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(22px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "kenburns": {
          "0%": { transform: "scale(1.02)" },
          "100%": { transform: "scale(1.12)" },
        },
        "scroll-hint": {
          "0%": { opacity: "0", transform: "translateY(0)" },
          "40%": { opacity: "1" },
          "100%": { opacity: "0", transform: "translateY(16px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 1s cubic-bezier(0.22,1,0.36,1) both",
        "fade-in": "fade-in 1.4s ease both",
        kenburns: "kenburns 22s ease-out both",
        "scroll-hint": "scroll-hint 2.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
