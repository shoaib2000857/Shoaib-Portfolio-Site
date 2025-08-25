"use client";
import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const ringX = useSpring(x, { stiffness: 300, damping: 30, mass: 0.5 });
  const ringY = useSpring(y, { stiffness: 300, damping: 30, mass: 0.5 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!visible) setVisible(true);
    };
    const hide = () => setVisible(false);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseout", hide);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseout", hide);
    };
  }, [visible, x, y]);

  const isTouch = typeof window !== "undefined" && matchMedia("(pointer: coarse)").matches;
  const reduced =
    typeof window !== "undefined" && matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (isTouch || reduced) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[60]">
      <motion.div
        className="hidden md:block absolute -translate-x-1/2 -translate-y-1/2 h-10 w-10 rounded-full border border-white/40 dark:border-white/20 backdrop-blur-md bg-white/10 shadow-[0_0_60px_-10px_rgba(255,255,255,0.6)] mix-blend-difference"
        style={{ left: ringX, top: ringY, opacity: visible ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
      />
      <motion.div
        className="hidden md:block absolute -translate-x-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-white mix-blend-difference"
        style={{ left: x, top: y, opacity: visible ? 1 : 0 }}
      />
    </div>
  );
}
