import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Orbitron", "sans-serif"],
        body: ["Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
