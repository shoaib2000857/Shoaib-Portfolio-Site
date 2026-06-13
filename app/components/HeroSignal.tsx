"use client";

import { motion } from "framer-motion";

type EvidenceItem = {
  label: string;
  value: string;
  tone?: "warm" | "cold";
};

const TRACE =
  "M0 34 L18 22 L36 44 L54 18 L72 40 L90 24 L108 38 L126 20 L144 42 L162 28 L180 36 L198 22 L214 34 L240 34 L380 34";

/**
 * Hero centerpiece: an "instrument readout" panel. A live signal trace
 * (noise resolving into a clean line) sits above the evidence stack —
 * literally framing the achievements as the signal pulled out of the noise.
 */
export function HeroSignal({ items }: { items: EvidenceItem[] }) {
  return (
    <div className="panel w-full p-5 sm:p-6">
      {/* header */}
      <div className="flex items-center justify-between border-b border-hairline pb-3">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 animate-blink rounded-full bg-teal shadow-[0_0_8px_rgba(91,215,200,0.8)]" />
          <span className="label">signal // live</span>
        </div>
        <span className="label text-muted-2">SSM·2026</span>
      </div>

      {/* live trace */}
      <div className="relative mt-4 h-16 w-full">
        <svg
          viewBox="0 0 380 68"
          preserveAspectRatio="none"
          className="h-full w-full overflow-visible"
        >
          <line x1="0" y1="34" x2="380" y2="34" stroke="#1B1F26" strokeWidth="1" />
          <motion.path
            d={TRACE}
            fill="none"
            stroke="#5BD7C8"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
          />
          {/* traveling monitor dot */}
          <motion.circle
            r="3"
            cy="34"
            fill="#F5A524"
            style={{ filter: "drop-shadow(0 0 5px rgba(245,165,36,0.9))" }}
            animate={{ cx: [240, 380], opacity: [0, 1, 1, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.6 }}
          />
        </svg>
        <span className="label absolute -top-1 left-0 text-[0.6rem] text-muted-2">noise</span>
        <span className="label absolute -top-1 right-0 text-[0.6rem] text-teal">signal</span>
      </div>

      {/* evidence stack */}
      <ul className="mt-5 divide-y divide-hairline border-t border-hairline">
        {items.map((item, i) => (
          <motion.li
            key={item.label}
            className="flex items-center justify-between gap-4 py-2.5"
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + i * 0.12, duration: 0.5 }}
          >
            <span className="flex items-center gap-2.5">
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  item.tone === "cold" ? "bg-teal" : "bg-amber"
                }`}
                style={{
                  boxShadow:
                    item.tone === "cold"
                      ? "0 0 7px rgba(91,215,200,0.7)"
                      : "0 0 7px rgba(245,165,36,0.7)",
                }}
              />
              <span className="text-sm text-fg-dim">{item.label}</span>
            </span>
            <span className="label text-[0.62rem] text-muted">{item.value}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
