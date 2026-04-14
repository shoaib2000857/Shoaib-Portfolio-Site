"use client";

import { useMemo } from "react";
import { motion, useTransform } from "framer-motion";
import { useInteraction } from "./InteractionProvider";

export function AmbientBackground() {
  const { enabled, visible, softMouseX, softMouseY, softRatioX, softRatioY } = useInteraction();
  const particles = useMemo(
    () =>
      Array.from({ length: 28 }, (_, index) => ({
        id: index,
        left: `${6 + ((index * 17) % 88)}%`,
        top: `${8 + ((index * 11) % 78)}%`,
        size: 2 + (index % 4),
        delay: `${(index % 9) * 0.7}s`,
        duration: `${9 + (index % 6) * 2}s`,
      })),
    []
  );
  const networkNodes = useMemo(
    () => [
      { id: "n1", left: "14%", top: "22%", size: "0.5rem" },
      { id: "n2", left: "33%", top: "36%", size: "0.75rem" },
      { id: "n3", left: "53%", top: "24%", size: "0.65rem" },
      { id: "n4", left: "68%", top: "42%", size: "0.55rem" },
      { id: "n5", left: "82%", top: "30%", size: "0.8rem" },
      { id: "n6", left: "25%", top: "67%", size: "0.6rem" },
      { id: "n7", left: "48%", top: "58%", size: "0.95rem" },
      { id: "n8", left: "73%", top: "72%", size: "0.7rem" },
    ],
    []
  );
  const waveformPaths = useMemo(
    () => [
      "M0 55 C120 20 230 86 360 52 C515 12 620 92 760 50 C900 8 1010 84 1200 40",
      "M0 112 C130 150 250 58 382 102 C532 152 650 44 792 94 C930 144 1058 56 1200 98",
      "M0 170 C146 134 248 230 388 182 C522 136 636 230 790 172 C920 126 1042 212 1200 160",
    ],
    []
  );

  const gridX = useTransform(softRatioX, [0, 1], [-44, 44]);
  const gridY = useTransform(softRatioY, [0, 1], [-30, 30]);
  const gridRotate = useTransform(softRatioX, [0, 1], [-1.2, 1.2]);
  const networkX = useTransform(softRatioX, [0, 1], [-28, 28]);
  const networkY = useTransform(softRatioY, [0, 1], [-18, 18]);
  const leftOrbX = useTransform(softRatioX, [0, 1], [-54, 54]);
  const leftOrbY = useTransform(softRatioY, [0, 1], [38, -38]);
  const rightOrbX = useTransform(softRatioX, [0, 1], [48, -48]);
  const rightOrbY = useTransform(softRatioY, [0, 1], [-28, 28]);
  const bottomOrbX = useTransform(softRatioX, [0, 1], [-36, 36]);
  const bottomOrbY = useTransform(softRatioY, [0, 1], [32, -32]);
  const beamOneX = useTransform(softRatioX, [0, 1], [-72, 72]);
  const beamTwoX = useTransform(softRatioX, [0, 1], [68, -68]);
  const pointerScale = useTransform(softRatioY, [0, 1], [0.92, 1.08]);

  return (
    <div aria-hidden className="ambient-background">
      <motion.div
        className="ambient-grid"
        style={enabled ? { x: gridX, y: gridY, rotate: gridRotate } : undefined}
      />
      <motion.div
        className="ambient-network"
        style={enabled ? { x: networkX, y: networkY } : undefined}
      >
        <svg
          className="ambient-network-lines"
          viewBox="0 0 1200 800"
          preserveAspectRatio="none"
        >
          <path d="M160 160 L396 288 L636 192 L816 336 L986 240" />
          <path d="M308 540 L568 462 L880 578" />
          <path d="M392 288 L478 534 L816 336" />
          <path d="M568 462 L636 192" />
        </svg>
        {networkNodes.map((node, index) => (
          <motion.span
            key={node.id}
            className="ambient-network-node"
            style={{
              left: node.left,
              top: node.top,
              width: node.size,
              height: node.size,
            }}
            animate={{
              scale: [1, 1.45, 1],
              opacity: [0.35, 0.95, 0.35],
            }}
            transition={{
              duration: 4.8 + index * 0.45,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.35,
            }}
          />
        ))}
      </motion.div>
      <div className="ambient-particle-field">
        {particles.map((particle) => (
          <span
            key={particle.id}
            className="ambient-particle"
            style={{
              left: particle.left,
              top: particle.top,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
          />
        ))}
      </div>
      <motion.div
        className="ambient-waveforms"
        style={enabled ? { x: networkX, y: gridY } : undefined}
      >
        <svg className="ambient-waveform-svg" viewBox="0 0 1200 260" preserveAspectRatio="none">
          {waveformPaths.map((path, index) => (
            <path key={path} d={path} className={`ambient-waveform ambient-waveform-${index + 1}`} />
          ))}
        </svg>
      </motion.div>
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
        className="ambient-pointer-wrap left-0 top-0"
        style={{
          x: softMouseX,
          y: softMouseY,
          opacity: enabled && visible ? 0.85 : 0,
          scale: enabled ? pointerScale : 1,
        }}
      >
        <div className="ambient-pointer" />
      </motion.div>
      <div className="ambient-vignette" />
    </div>
  );
}
