"use client";

import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const bootLines = [
  "Initializing ShoaibOS...",
  "Loading systems...",
  "AI modules online...",
  "Welcome.",
];

type BootSequenceProps = {
  children: React.ReactNode;
};

export function BootSequence({ children }: BootSequenceProps) {
  const reduceMotion = useReducedMotion();
  const [showOverlay, setShowOverlay] = useState(true);
  const [lineIndex, setLineIndex] = useState(0);

  const timings = useMemo(
    () => ({
      lineDuration: reduceMotion ? 240 : 620,
      finalPause: reduceMotion ? 180 : 700,
      fadeDuration: reduceMotion ? 0.18 : 0.55,
    }),
    [reduceMotion]
  );

  useEffect(() => {
    setShowOverlay(true);
    setLineIndex(0);
    const totalDuration =
      bootLines.length * timings.lineDuration + timings.finalPause + timings.fadeDuration * 1000;

    const lineTimers = bootLines.map((_, index) =>
      window.setTimeout(() => {
        setLineIndex(index);
      }, index * timings.lineDuration)
    );

    const finishTimer = window.setTimeout(() => {
      setShowOverlay(false);
    }, totalDuration);

    return () => {
      lineTimers.forEach((timer) => window.clearTimeout(timer));
      window.clearTimeout(finishTimer);
    };
  }, [timings.fadeDuration, timings.finalPause, timings.lineDuration]);

  return (
    <>
      <motion.div
        animate={{
          opacity: showOverlay ? 0 : 1,
          filter: showOverlay ? "blur(10px)" : "blur(0px)",
          scale: showOverlay ? 1.01 : 1,
        }}
        transition={{ duration: timings.fadeDuration, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>

      <AnimatePresence>
        {showOverlay && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: timings.fadeDuration, ease: [0.16, 1, 0.3, 1] }}
            className="boot-overlay"
          >
            <div className="boot-shell">
              <p className="boot-eyebrow">System Boot</p>
              <div className="boot-title-row">
                <div className="boot-indicator" />
                <h1 className="boot-title">ShoaibOS</h1>
              </div>
              <div className="boot-console">
                {bootLines.map((line, index) => (
                  <motion.p
                    key={line}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{
                      opacity: index <= lineIndex ? 1 : 0,
                      y: index <= lineIndex ? 0 : 8,
                    }}
                    transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                    className={`boot-line ${index === lineIndex ? "is-live" : ""}`}
                  >
                    <span className="boot-prompt">&gt;</span> {line}
                  </motion.p>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
