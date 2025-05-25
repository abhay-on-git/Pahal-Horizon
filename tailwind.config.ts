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
        primary: '#18181b',
    secondary: "#0a0a0a", 
    background: "#ededed",
    gray: '#374151',
    lightGray: '#f3f4f6',
    mediumGray:'#d1d5db',
    text: "#333333",
    error: "#ff4d4f",
    success: "#52c41a",
      },
      fontFamily: {
        clash: ["Clash Display", "sans-serif"], // Add Clash Display
      },
      keyframes: {
        shake3856: {
          "0%": { transform: "translate(0)" },
          "20%": { transform: "translate(-2px, 2px)" },
          "40%": { transform: "translate(-2px, -2px)" },
          "60%": { transform: "translate(2px, 2px)" },
          "80%": { transform: "translate(2px, -2px)" },
          "100%": { transform: "translate(0)" },
        },
      },
      animation: {
        shake3856: "shake3856 0.3s linear infinite both",
      },
    },
  },
  plugins: [],
} satisfies Config;
