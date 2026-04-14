"use client";

import React, { useState } from "react";
import { HTMLMotionProps, motion } from "framer-motion";

type ActionLinkProps = Omit<HTMLMotionProps<"a">, "children"> & {
  children: React.ReactNode;
  variant?: "glow" | "ghost";
};

type Ripple = {
  key: number;
  x: number;
  y: number;
};

export function ActionLink({
  children,
  className = "",
  onClick,
  variant = "ghost",
  ...props
}: ActionLinkProps) {
  const [ripple, setRipple] = useState<Ripple | null>(null);

  function triggerRipple(event: React.MouseEvent<HTMLAnchorElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    setRipple({
      key: Date.now(),
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  }

  return (
    <motion.a
      whileHover={{ y: -2, scale: 1.01 }}
      whileTap={{ y: 0, scale: 0.985 }}
      className={`${variant === "glow" ? "glow-button" : "ghost-button"} ${className}`.trim()}
      onClick={(event) => {
        triggerRipple(event);
        onClick?.(event);
      }}
      {...props}
    >
      {ripple && (
        <span
          key={ripple.key}
          aria-hidden
          className="action-ripple"
          style={{ left: ripple.x, top: ripple.y }}
          onAnimationEnd={() => setRipple(null)}
        />
      )}
      <span className="action-label">{children}</span>
    </motion.a>
  );
}
