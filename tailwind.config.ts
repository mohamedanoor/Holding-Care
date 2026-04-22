import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      colors: {
        brand: {
          green:       "#2d7a50",
          "green-dark":"#1f5c3a",
          "green-light":"#e8f5ee",
          blue:        "#1a5c8c",
          "blue-dark": "#134870",
          "blue-light":"#e6f1f8",
        },
      },
      fontSize: {
        base: ["17px", "1.7"],
      },
    },
  },
  plugins: [],
};

export default config;
