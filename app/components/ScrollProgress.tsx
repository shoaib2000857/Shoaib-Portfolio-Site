"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.25,
  });

  return (
    <motion.div
      aria-hidden
      className="fixed left-0 right-0 top-0 z-[60] h-px origin-left bg-[linear-gradient(90deg,#ff4db8_0%,#9b5cff_45%,#ff2f92_100%)] shadow-[0_0_24px_rgba(255,77,184,0.9)]"
      style={{ scaleX }}
    />
  );
}
