"use client";

import { useEffect, useState } from "react";

/**
 * Easter egg #1 — a faint constellation in the footer. The brightest (amber)
 * star is clickable and opens the "Afterword": a hidden, personal note styled
 * as a declassified appendix. Quiet enough that casual visitors miss it,
 * rewarding for anyone who looks closely.
 */

// node coordinates in a 320x120 field
const NODES = [
  { x: 20, y: 70 },
  { x: 70, y: 40 },
  { x: 120, y: 78 },
  { x: 170, y: 30 },
  { x: 214, y: 64 }, // index 4 — the trigger ("the bright one")
  { x: 262, y: 36 },
  { x: 300, y: 82 },
];
const EDGES = [
  [0, 1],
  [1, 2],
  [2, 4],
  [3, 4],
  [4, 5],
  [5, 6],
];
const TRIGGER = 4;

export function FooterConstellation() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <svg
        viewBox="0 0 320 120"
        className="h-24 w-full max-w-[20rem]"
        role="img"
        aria-label="Constellation"
      >
        {EDGES.map(([a, b], i) => (
          <line
            key={i}
            x1={NODES[a].x}
            y1={NODES[a].y}
            x2={NODES[b].x}
            y2={NODES[b].y}
            stroke="#252D40"
            strokeWidth="1"
          />
        ))}
        {NODES.map((n, i) => {
          if (i === TRIGGER) {
            return (
              <g key={i} className="cursor-pointer">
                <circle cx={n.x} cy={n.y} r="9" fill="transparent" />
                <circle
                  cx={n.x}
                  cy={n.y}
                  r="3"
                  fill="#F5A524"
                  className="animate-twinkle"
                  style={{ filter: "drop-shadow(0 0 6px rgba(245,165,36,0.9))" }}
                  onClick={() => setOpen(true)}
                  role="button"
                  aria-label="Open the afterword"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setOpen(true);
                    }
                  }}
                />
              </g>
            );
          }
          return (
            <circle
              key={i}
              cx={n.x}
              cy={n.y}
              r={1 + (i % 2) * 0.6}
              fill="#828AA0"
              className="animate-twinkle"
              style={{ animationDelay: `${i * 0.5}s` }}
            />
          );
        })}
      </svg>

      {open && (
        <div
          className="fixed inset-0 z-[80] grid place-items-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Afterword"
          onClick={() => setOpen(false)}
        >
          <div className="absolute inset-0 bg-ink/80 backdrop-blur-sm" />
          <div
            className="panel panel--archive relative w-full max-w-lg p-7 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <span className="label text-amber">Afterword · declassified</span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="font-mono text-lg leading-none text-muted hover:text-fg"
              >
                ×
              </button>
            </div>
            <p className="mt-6 font-serif text-xl italic leading-relaxed text-fg">
              You looked closely. Most things I build start the same way — a problem a little too
              big for the time I have, a deadline that doesn’t care, and the stubborn belief it can
              be made to work anyway.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-fg-dim">
              Stars, ships, engines, stories — I like things built with intent and a bit of myth
              behind them. If you found this, you’re the kind of person I’d want to build with.
            </p>
            <p className="mt-6 font-mono text-[0.62rem] tracking-[0.18em] text-muted-2">
              {"// "}1 of a few hidden things · keep looking — S
            </p>
          </div>
        </div>
      )}
    </>
  );
}
