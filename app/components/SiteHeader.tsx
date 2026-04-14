"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ActionLink } from "./ActionLink";
import { navItems, profile } from "../data/portfolio";

export function SiteHeader() {
  const { scrollY } = useScroll();
  const headerY = useTransform(scrollY, [0, 180], [0, -5]);
  const headerScale = useTransform(scrollY, [0, 180], [1, 0.985]);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <motion.div
        style={{ y: headerY, scale: headerScale }}
        className="header-shell pointer-events-auto mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-full border border-white/10 bg-[rgba(9,4,18,0.72)] px-4 py-3 backdrop-blur-xl shadow-[0_24px_80px_rgba(0,0,0,0.35)] sm:px-6"
      >
        <a href="#home" className="flex items-center gap-3 text-sm text-white">
          <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[color:var(--pink)] shadow-[0_0_18px_rgba(255,77,184,0.9)]" />
          <span className="font-display text-xs uppercase tracking-[0.3em] text-white/90">
            {profile.callsign}
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-5 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link text-xs uppercase tracking-[0.22em] text-white/60"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 sm:flex">
          <ActionLink href="/projects" variant="ghost">
            Project Archive
          </ActionLink>
          <ActionLink href="#contact" variant="ghost" className="xl:inline-flex">
            Start A Build
          </ActionLink>
        </div>
      </motion.div>
    </header>
  );
}
