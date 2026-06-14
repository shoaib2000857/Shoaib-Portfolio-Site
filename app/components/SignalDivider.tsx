"use client";

import { motion } from "framer-motion";

/**
 * THE SIGNATURE MOTIF — a trajectory.
 *
 * A thin trace that runs the length of the site as a section spine. On the left
 * it is noise; it resolves into a clean, measured signal on the right, ending in
 * an amber data-point — the "usable signal" the whole site is about. Reads as a
 * flight path / orbital trajectory as much as a signal trace.
 *
 * Draws itself once when scrolled into view.
 */

// jagged noise (x: 0..430) smoothing into a flat line (x: 430..1000)
const NOISE =
  "M0 20 L26 9 L52 31 L78 12 L104 29 L130 14 L156 27 L182 10 L208 30 L234 16 L260 25 L286 13 L312 26 L338 18 L364 23 L390 19 L416 21 L430 20";
const CLEAN = "L1000 20";
const PATH = `${NOISE} ${CLEAN}`;

// measured ticks along the resolved portion (cockpit ruler feel)
const TICKS = [520, 600, 680, 760, 840, 920];

export function SignalDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`shell ${className}`} aria-hidden>
      <div className="relative">
        <svg
          viewBox="0 0 1000 40"
          preserveAspectRatio="none"
          className="h-8 w-full overflow-visible"
          role="presentation"
        >
          {/* faint baseline ghost */}
          <line x1="0" y1="20" x2="1000" y2="20" stroke="#252D40" strokeWidth="1" />
          {/* measured ticks */}
          {TICKS.map((x) => (
            <motion.line
              key={x}
              x1={x}
              y1="16"
              x2={x}
              y2="24"
              stroke="#3A8F86"
              strokeWidth="1"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.5 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.8 + (x - 520) / 1200 }}
            />
          ))}
          {/* the resolving trace */}
          <motion.path
            d={PATH}
            fill="none"
            stroke="#5BD7C8"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0.2 }}
            whileInView={{ pathLength: 1, opacity: 0.85 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          />
          {/* resolved signal point */}
          <motion.circle
            cx="1000"
            cy="20"
            r="3.5"
            fill="#F5A524"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 1.4 }}
            style={{
              transformOrigin: "1000px 20px",
              filter: "drop-shadow(0 0 5px rgba(245,165,36,0.8))",
            }}
          />
        </svg>
        <motion.span
          className="absolute -top-3 right-0 font-mono text-[0.58rem] tracking-[0.2em] text-muted-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.5 }}
        >
          VECTOR · LOCK
        </motion.span>
      </div>
    </div>
  );
}
