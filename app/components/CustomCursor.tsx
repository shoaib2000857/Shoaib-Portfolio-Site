"use client";
import React, { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";
import { useInteraction } from "./InteractionProvider";

export function CustomCursor() {
  const { enabled, visible, mouseX, mouseY, softMouseX, softMouseY } = useInteraction();
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);
  const glowX = useSpring(softMouseX, { stiffness: 180, damping: 26, mass: 0.38 });
  const glowY = useSpring(softMouseY, { stiffness: 180, damping: 26, mass: 0.38 });

  useEffect(() => {
    if (!enabled) return;

    const interactiveSelector = [
      "a",
      "button",
      "input",
      "textarea",
      "select",
      "[role='button']",
      ".panel-shell",
      ".project-card",
      ".sub-panel",
      ".tech-pill",
    ].join(", ");

    const handleHover = (event: Event) => {
      const interactiveTarget = (event.target as Element | null)?.closest(interactiveSelector);
      setHovered(Boolean(interactiveTarget));
    };
    const handleDown = () => setPressed(true);
    const handleUp = () => setPressed(false);

    window.addEventListener("mouseover", handleHover);
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);

    return () => {
      window.removeEventListener("mouseover", handleHover);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[60]">
      <motion.div
        className="hidden md:block absolute left-0 top-0"
        animate={{
          opacity: visible ? 1 : 0,
          scale: pressed ? 0.8 : hovered ? 1.45 : 1,
        }}
        style={{ x: softMouseX, y: softMouseY }}
        transition={{ type: "spring", stiffness: 280, damping: 24 }}
      >
        <div className="h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(255,255,255,0.18)] bg-[radial-gradient(circle,rgba(255,77,184,0.24),rgba(155,92,255,0.08))] shadow-[0_0_60px_rgba(155,92,255,0.28)] backdrop-blur-md" />
      </motion.div>
      <motion.div
        className="hidden md:block absolute left-0 top-0"
        animate={{
          opacity: visible ? 1 : 0,
          scale: pressed ? 1.6 : hovered ? 1.2 : 1,
        }}
        style={{ x: mouseX, y: mouseY }}
      >
        <div className="h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[color:var(--pink)] shadow-[0_0_24px_rgba(255,77,184,1)]" />
      </motion.div>
      <motion.div
        className="hidden md:block absolute left-0 top-0"
        animate={{
          opacity: hovered && visible ? 0.8 : 0,
          scale: hovered ? 1 : 0.72,
        }}
        style={{ x: glowX, y: glowY }}
      >
        <div className="h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,77,184,0.18),transparent_70%)] blur-xl" />
      </motion.div>
    </div>
  );
}
