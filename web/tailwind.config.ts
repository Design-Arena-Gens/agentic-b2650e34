import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent: "var(--accent)",
        "accent-soft": "var(--accent-soft)",
        muted: "var(--muted)",
        card: "var(--card)",
        midnight: "#030617",
        "midnight-light": "#0b1229",
        "mint-glow": "#0ff4c6",
        "ocean-500": "#0ea5e9",
        "violet-500": "#818cf8",
      },
      backgroundImage: {
        "grid-glow":
          "radial-gradient(circle at 1px 1px, rgba(148, 163, 184, 0.08) 1px, transparent 0)",
      },
      boxShadow: {
        glow: "0 10px 45px rgba(15, 244, 198, 0.35)",
        "glow-soft": "0 25px 60px rgba(14, 165, 233, 0.25)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
        pulseBorder: {
          "0%": { borderColor: "rgba(15, 244, 198, 0.35)" },
          "50%": { borderColor: "rgba(129, 140, 248, 0.25)" },
          "100%": { borderColor: "rgba(15, 244, 198, 0.35)" },
        },
        tilt: {
          "0%, 100%": { transform: "rotate3d(1, 1, 0, 0deg)" },
          "50%": { transform: "rotate3d(1, 1, 0, 3deg)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-border": "pulseBorder 12s linear infinite",
        tilt: "tilt 8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
