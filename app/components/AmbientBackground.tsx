"use client";

import { motion, useTransform } from "framer-motion";
import { useInteraction } from "./InteractionProvider";

export function AmbientBackground() {
  const { enabled, visible, softMouseX, softMouseY, softRatioX, softRatioY } = useInteraction();

  const gridX = useTransform(softRatioX, [0, 1], [-26, 26]);
  const gridY = useTransform(softRatioY, [0, 1], [-20, 20]);
  const leftOrbX = useTransform(softRatioX, [0, 1], [-32, 32]);
  const leftOrbY = useTransform(softRatioY, [0, 1], [26, -26]);
  const rightOrbX = useTransform(softRatioX, [0, 1], [28, -28]);
  const rightOrbY = useTransform(softRatioY, [0, 1], [-18, 18]);
  const bottomOrbX = useTransform(softRatioX, [0, 1], [-18, 18]);
  const bottomOrbY = useTransform(softRatioY, [0, 1], [22, -22]);
  const beamOneX = useTransform(softRatioX, [0, 1], [-36, 36]);
  const beamTwoX = useTransform(softRatioX, [0, 1], [32, -32]);

  return (
    <div aria-hidden className="ambient-background">
      <motion.div className="ambient-grid" style={enabled ? { x: gridX, y: gridY } : undefined} />
      <motion.div
        className="ambient-orb ambient-orb-left"
        style={enabled ? { x: leftOrbX, y: leftOrbY } : undefined}
      />
      <motion.div
        className="ambient-orb ambient-orb-right"
        style={enabled ? { x: rightOrbX, y: rightOrbY } : undefined}
      />
      <motion.div
        className="ambient-orb ambient-orb-bottom"
        style={enabled ? { x: bottomOrbX, y: bottomOrbY } : undefined}
      />
      <motion.div
        className="ambient-beam ambient-beam-one"
        style={enabled ? { x: beamOneX } : undefined}
      />
      <motion.div
        className="ambient-beam ambient-beam-two"
        style={enabled ? { x: beamTwoX } : undefined}
      />
      <motion.div
        className="ambient-pointer"
        style={{
          left: softMouseX,
          top: softMouseY,
          opacity: enabled && visible ? 0.85 : 0,
        }}
      />
      <div className="ambient-vignette" />
    </div>
  );
}
