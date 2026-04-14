"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { MotionValue, useMotionValue, useSpring } from "framer-motion";

type InteractionContextValue = {
  enabled: boolean;
  visible: boolean;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  softMouseX: MotionValue<number>;
  softMouseY: MotionValue<number>;
  ratioX: MotionValue<number>;
  ratioY: MotionValue<number>;
  softRatioX: MotionValue<number>;
  softRatioY: MotionValue<number>;
};

const SURFACE_SELECTOR = [
  ".panel-shell",
  ".project-card",
  ".sub-panel",
  ".tech-pill",
  ".glow-button",
  ".ghost-button",
  ".field-shell",
  ".nav-link",
  ".header-shell",
  ".status-pill",
  ".hero-rotator-frame",
  ".reactor-shell",
  ".reactor-node",
  ".reactor-tag",
].join(", ");

const InteractionContext = createContext<InteractionContextValue | null>(null);

export function InteractionProvider({ children }: { children: React.ReactNode }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const ratioX = useMotionValue(0.5);
  const ratioY = useMotionValue(0.5);
  const softMouseX = useSpring(mouseX, { stiffness: 170, damping: 26, mass: 0.2 });
  const softMouseY = useSpring(mouseY, { stiffness: 170, damping: 26, mass: 0.2 });
  const softRatioX = useSpring(ratioX, { stiffness: 120, damping: 20, mass: 0.22 });
  const softRatioY = useSpring(ratioY, { stiffness: 120, damping: 20, mass: 0.22 });
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const canRun = !coarse && !reduced;

    setEnabled(canRun);
    mouseX.set(window.innerWidth / 2);
    mouseY.set(window.innerHeight / 2);
    ratioX.set(0.5);
    ratioY.set(0.5);

    if (!canRun) return;

    const handleMove = (event: MouseEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
      ratioX.set(event.clientX / window.innerWidth);
      ratioY.set(event.clientY / window.innerHeight);
      setVisible(true);

      const surface = (event.target as Element | null)?.closest<HTMLElement>(SURFACE_SELECTOR);
      if (!surface) return;

      const rect = surface.getBoundingClientRect();
      surface.style.setProperty("--pointer-x", `${event.clientX - rect.left}px`);
      surface.style.setProperty("--pointer-y", `${event.clientY - rect.top}px`);
    };

    const handleLeave = () => setVisible(false);
    const handleEnter = () => setVisible(true);

    window.addEventListener("mousemove", handleMove, { passive: true });
    window.addEventListener("mouseleave", handleLeave);
    window.addEventListener("mouseenter", handleEnter);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", handleLeave);
      window.removeEventListener("mouseenter", handleEnter);
    };
  }, [mouseX, mouseY, ratioX, ratioY]);

  const value = useMemo(
    () => ({
      enabled,
      visible,
      mouseX,
      mouseY,
      softMouseX,
      softMouseY,
      ratioX,
      ratioY,
      softRatioX,
      softRatioY,
    }),
    [
      enabled,
      mouseX,
      mouseY,
      ratioX,
      ratioY,
      softMouseX,
      softMouseY,
      softRatioX,
      softRatioY,
      visible,
    ]
  );

  return <InteractionContext.Provider value={value}>{children}</InteractionContext.Provider>;
}

export function useInteraction() {
  const context = useContext(InteractionContext);
  if (!context) {
    throw new Error("useInteraction must be used inside InteractionProvider");
  }
  return context;
}
