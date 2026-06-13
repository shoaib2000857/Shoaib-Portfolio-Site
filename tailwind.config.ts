import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Dark technical lab palette — "Signal from noise"
        ink: "#0B0C0E", // background
        "ink-2": "#0F1114", // slightly raised background band
        panel: "#131519", // card / surface
        "panel-2": "#171A1F", // raised panel
        hairline: "#232830", // borders, grid
        "hairline-soft": "#1B1F26",
        fg: "#E8EAED", // primary text
        "fg-dim": "#B4BAC3", // secondary text
        muted: "#8A929E", // muted / labels
        "muted-2": "#5C636E", // faint
        // cold accent — the machinery / baseline
        teal: "#5BD7C8",
        "teal-dim": "#3A8F86",
        // warm accent — the resolved signal / proof (rationed)
        amber: "#F5A524",
        "amber-dim": "#A8741E",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        shell: "72rem", // ~1152px content shell
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(14px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "0%,49%": { opacity: "1" },
          "50%,100%": { opacity: "0" },
        },
      },
      animation: {
        blink: "blink 1.1s step-end infinite",
      },
    },
  },
  plugins: [],
};
export default config;
