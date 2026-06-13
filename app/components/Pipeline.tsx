"use client";

import { motion } from "framer-motion";

/**
 * The signature trace rendered as a labelled pipeline:
 *   input → ... → resolved signal (amber).
 * Each project's diagram makes the "noise → usable signal" thesis literal.
 */
export function Pipeline({ nodes, className = "" }: { nodes: string[]; className?: string }) {
  return (
    <div className={`flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center ${className}`}>
      {nodes.map((node, i) => {
        const isLast = i === nodes.length - 1;
        return (
          <div key={node} className="flex items-center gap-3">
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="flex items-center gap-2"
            >
              <span
                className={`h-1.5 w-1.5 rounded-full ${isLast ? "bg-amber" : "bg-teal"}`}
                style={{
                  boxShadow: isLast
                    ? "0 0 8px rgba(245,165,36,0.8)"
                    : "0 0 6px rgba(91,215,200,0.6)",
                }}
              />
              <span
                className={`font-mono text-xs uppercase tracking-[0.1em] ${
                  isLast ? "text-amber" : "text-fg-dim"
                }`}
              >
                {node}
              </span>
            </motion.div>
            {!isLast && (
              <span className="hidden h-px w-6 bg-hairline sm:block" aria-hidden>
                <span className="sr-only">→</span>
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}
