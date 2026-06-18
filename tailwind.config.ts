import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./sections/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--bg) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        "surface-2": "rgb(var(--surface-2) / <alpha-value>)",
        foreground: "rgb(var(--fg) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        line: "rgb(var(--line) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)",
        "accent-soft": "rgb(var(--accent-soft) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.045em",
      },
      maxWidth: {
        container: "1280px",
      },
      boxShadow: {
        glow: "0 0 80px -20px rgb(var(--accent) / 0.55)",
        "glow-sm": "0 0 40px -16px rgb(var(--accent) / 0.6)",
        card: "0 1px 0 0 rgb(var(--line) / 0.6), 0 24px 48px -24px rgb(0 0 0 / 0.5)",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "grid-fade": {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "0.6" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "grid-fade": "grid-fade 8s ease-in-out infinite",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
