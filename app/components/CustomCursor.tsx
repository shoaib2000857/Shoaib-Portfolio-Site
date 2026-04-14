"use client";
import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const ringX = useSpring(x, { stiffness: 300, damping: 30, mass: 0.5 });
  const ringY = useSpring(y, { stiffness: 300, damping: 30, mass: 0.5 });

  useEffect(() => {
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setEnabled(!coarse && !reduced);
    if (coarse || reduced) return;

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

  if (!enabled) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[60]">
      <motion.div
        className="hidden md:block absolute -translate-x-1/2 -translate-y-1/2 h-12 w-12 rounded-full border border-[rgba(255,255,255,0.18)] bg-[radial-gradient(circle,rgba(255,77,184,0.22),rgba(155,92,255,0.08))] shadow-[0_0_60px_rgba(155,92,255,0.28)] backdrop-blur-md"
        style={{ left: ringX, top: ringY, opacity: visible ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
      />
      <motion.div
        className="hidden md:block absolute -translate-x-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-[color:var(--pink)] shadow-[0_0_24px_rgba(255,77,184,1)]"
        style={{ left: x, top: y, opacity: visible ? 1 : 0 }}
      />
    </div>
  );
}
