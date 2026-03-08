import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sky: {
          400: "#38BDF8",
          500: "#0EA5E9",
        },
        dark: {
          bg:  "#070D1A",
          bg2: "#0C1528",
        },
      },
      fontFamily: {
        syne: ["Syne", "sans-serif"],
        dm:   ["DM Sans", "sans-serif"],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%":       { transform: "translateY(-10px)" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%":       { opacity: "0" },
        },
        spin: {
          to: { transform: "rotate(360deg)" },
        },
        pulse: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%":       { opacity: "0.4", transform: "scale(0.8)" },
        },
      },
      animation: {
        float:    "float 4s ease-in-out infinite",
        "fade-up":"fade-up 0.7s ease both",
        blink:    "blink 0.9s step-end infinite",
        "spin-slow":"spin 8s linear infinite",
        pulse:    "pulse 2s infinite",
      },
      backgroundImage: {
        "sky-gradient":
          "linear-gradient(135deg, #0EA5E9, #38BDF8)",
      },
    },
  },
  plugins: [],
};

export default config;
