"use client";

import { motion } from "framer-motion";

/**
 * THE SIGNATURE MOTIF.
 *
 * A thin horizontal trace that runs the length of the site as a section spine.
 * On the left it is noise; it resolves into a clean, flat signal on the right,
 * terminating in an amber data-point — the "usable signal" the whole site is about.
 *
 * Draws itself once when scrolled into view.
 */

// jagged noise (x: 0..430) smoothing into a flat line (x: 430..1000)
const NOISE =
  "M0 20 L26 9 L52 31 L78 12 L104 29 L130 14 L156 27 L182 10 L208 30 L234 16 L260 25 L286 13 L312 26 L338 18 L364 23 L390 19 L416 21 L430 20";
const CLEAN = "L1000 20";
const PATH = `${NOISE} ${CLEAN}`;

export function SignalDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`shell ${className}`} aria-hidden>
      <svg
        viewBox="0 0 1000 40"
        preserveAspectRatio="none"
        className="h-8 w-full overflow-visible"
        role="presentation"
      >
        {/* faint baseline ghost */}
        <line x1="0" y1="20" x2="1000" y2="20" stroke="#232830" strokeWidth="1" />
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
    </div>
  );
}
