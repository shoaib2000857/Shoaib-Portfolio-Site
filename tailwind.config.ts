import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Celestial Archive — Observatory Noir.
        // Violet-black void; nebula (plum/indigo) is the atmosphere, teal is the
        // instrument accent. More purple than blue, but never pink soup.
        ink: "#08060F", // the void (faint violet-black)
        "ink-2": "#0C0A18", // raised band
        panel: "#120F20", // card — violet graphite
        "panel-2": "#18142C", // raised panel
        hairline: "#2B2740", // violet-gray border
        "hairline-soft": "#1C1830",
        fg: "#ECEAF4", // starlight white
        "fg-dim": "#BAB6C8",
        muted: "#8A86A0", // cool violet-gray
        "muted-2": "#5C5873", // faint
        // cold accent — instruments / signal / interactive (kept)
        teal: "#5BD7C8",
        "teal-dim": "#3A8F86",
        // warm accent — cockpit indicators / verified proof (rationed)
        amber: "#F5A524",
        "amber-dim": "#A8741E",
        // nebula atmosphere / mystery — pushed up, used for ambience & glow
        plum: "#A589D8",
        "plum-dim": "#6B5AA0",
        nebula: "#6E4FB0", // deep nebula, for atmospheric gradients
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
