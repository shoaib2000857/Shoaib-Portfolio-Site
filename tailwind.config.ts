import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Celestial Archive — Observatory Noir.
        // Midnight-indigo void; nebula used as atmosphere, never wallpaper.
        ink: "#070A12", // the void
        "ink-2": "#0B0F1A", // raised band, faint indigo
        panel: "#0F1320", // card — indigo graphite
        "panel-2": "#141A2A", // raised panel
        hairline: "#252D40", // cool blue-gray border
        "hairline-soft": "#1A2030",
        fg: "#ECEEF4", // starlight white
        "fg-dim": "#B6BCCB",
        muted: "#828AA0", // cool gray
        "muted-2": "#565E73", // faint
        // cold accent — instruments / signal
        teal: "#5BD7C8",
        "teal-dim": "#3A8F86",
        // warm accent — cockpit indicators / verified proof (rationed)
        amber: "#F5A524",
        "amber-dim": "#A8741E",
        // nebula atmosphere / mystery (sparing)
        plum: "#8B7BC0",
        "plum-dim": "#5A4E86",
        // danger / mystery (rare)
        crimson: "#C8556A",
      },
      fontFamily: {
        // cinematic serif — hero & chapter titles (books + myth + scale)
        serif: ["var(--font-serif)", "Georgia", "serif"],
        // technical grotesque — UI headings, card titles (cockpit precision)
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        shell: "72rem",
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
        twinkle: {
          "0%,100%": { opacity: "0.25" },
          "50%": { opacity: "1" },
        },
        "scan-sweep": {
          "0%": { transform: "translateY(-120%)", opacity: "0" },
          "20%": { opacity: "0.6" },
          "100%": { transform: "translateY(120%)", opacity: "0" },
        },
      },
      animation: {
        blink: "blink 1.1s step-end infinite",
        twinkle: "twinkle 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
