"use client";

import { useEffect, useRef } from "react";

/**
 * Observatory atmosphere. A sparse, drifting starfield with faint twinkle and
 * gentle pointer parallax, plus an occasional trajectory streak (a nod to
 * flight paths / orbits). Nebula blooms come from the CSS body gradient — this
 * canvas only adds living depth. Cheap, DPR-aware, and fully static under
 * prefers-reduced-motion or when the tab is hidden.
 */

type Star = {
  x: number;
  y: number;
  r: number;
  base: number; // base alpha
  tw: number; // twinkle speed
  ph: number; // twinkle phase
  depth: number; // parallax depth 0..1
  tint: string;
};

type Streak = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  max: number;
} | null;

const TINTS = ["255,255,255", "255,255,255", "255,255,255", "91,215,200", "139,123,192"];

export function CosmicBackground() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let w = 0;
    let h = 0;
    let dpr = 1;
    let stars: Star[] = [];
    let streak: Streak = null;
    let nextStreak = 6000 + Math.floor(Math.abs(Math.sin(performance.now())) * 8000);
    const pointer = { x: 0, y: 0, tx: 0, ty: 0 };
    let raf = 0;
    let last = performance.now();
    let sinceStreak = 0;

    const build = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(150, Math.floor((w * h) / 11000));
      stars = Array.from({ length: count }, (_, i) => {
        // deterministic-ish spread, no Math.random reliance for stability
        const x = ((i * 9301 + 49297) % 233280) / 233280;
        const y = ((i * 49297 + 9301) % 233280) / 233280;
        const rr = ((i * 6151) % 100) / 100;
        return {
          x: x * w,
          y: y * h,
          r: 0.3 + rr * 1.1,
          base: 0.2 + (((i * 769) % 100) / 100) * 0.6,
          tw: 0.4 + (((i * 1543) % 100) / 100) * 1.2,
          ph: (((i * 3079) % 100) / 100) * Math.PI * 2,
          depth: 0.2 + rr * 0.8,
          tint: TINTS[i % TINTS.length],
        };
      });
    };

    const drawStatic = () => {
      ctx.clearRect(0, 0, w, h);
      for (const s of stars) {
        ctx.globalAlpha = s.base;
        ctx.fillStyle = `rgba(${s.tint},1)`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    };

    const frame = (now: number) => {
      const dt = Math.min(now - last, 50);
      last = now;
      const t = now / 1000;

      // ease pointer toward target
      pointer.x += (pointer.tx - pointer.x) * 0.04;
      pointer.y += (pointer.ty - pointer.y) * 0.04;

      ctx.clearRect(0, 0, w, h);

      for (const s of stars) {
        // very slow drift, wrap around
        s.y += dt * 0.004 * s.depth;
        if (s.y > h + 2) s.y = -2;
        const px = pointer.x * 14 * s.depth;
        const py = pointer.y * 14 * s.depth;
        const tw = s.base * (0.55 + 0.45 * Math.sin(t * s.tw + s.ph));
        ctx.globalAlpha = Math.max(0, tw);
        ctx.fillStyle = `rgba(${s.tint},1)`;
        ctx.beginPath();
        ctx.arc(s.x + px, s.y + py, s.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      // occasional trajectory streak
      sinceStreak += dt;
      if (!streak && sinceStreak > nextStreak) {
        sinceStreak = 0;
        nextStreak = 9000 + ((now | 0) % 9000);
        const fromLeft = (now | 0) % 2 === 0;
        streak = {
          x: fromLeft ? -40 : w + 40,
          y: h * (0.08 + ((now | 0) % 40) / 100),
          vx: (fromLeft ? 1 : -1) * (0.22 + 0.06),
          vy: 0.05,
          life: 0,
          max: 1400,
        };
      }
      if (streak) {
        streak.life += dt;
        streak.x += streak.vx * dt;
        streak.y += streak.vy * dt;
        const p = streak.life / streak.max;
        const alpha = Math.sin(p * Math.PI) * 0.5;
        const tailX = streak.x - streak.vx * 90;
        const tailY = streak.y - streak.vy * 90;
        const grad = ctx.createLinearGradient(tailX, tailY, streak.x, streak.y);
        grad.addColorStop(0, "rgba(91,215,200,0)");
        grad.addColorStop(1, `rgba(91,215,200,${alpha})`);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(streak.x, streak.y);
        ctx.stroke();
        if (streak.life >= streak.max) streak = null;
      }

      raf = requestAnimationFrame(frame);
    };

    const onPointer = (e: PointerEvent) => {
      pointer.tx = (e.clientX / w - 0.5) * 2;
      pointer.ty = (e.clientY / h - 0.5) * 2;
    };
    const onVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(raf);
      } else if (!reduced) {
        last = performance.now();
        raf = requestAnimationFrame(frame);
      }
    };
    const onResize = () => {
      build();
      if (reduced) drawStatic();
    };

    build();
    if (reduced) {
      drawStatic();
    } else {
      raf = requestAnimationFrame(frame);
      window.addEventListener("pointermove", onPointer, { passive: true });
    }
    window.addEventListener("resize", onResize);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onPointer);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10"
      style={{
        // a faint vignette grounds the void
        background: "radial-gradient(130% 90% at 50% 30%, transparent 55%, rgba(3,5,11,0.7) 100%)",
      }}
    >
      <canvas ref={ref} className="h-full w-full" />
    </div>
  );
}
