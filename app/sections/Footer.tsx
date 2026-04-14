import React from "react";
import { ActionLink } from "../components/ActionLink";
import { contactLinks, profile } from "../data/portfolio";

export function Footer() {
  return (
    <footer className="px-4 pb-10 pt-4 sm:px-6">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-[2rem] border border-white/10 bg-[rgba(9,4,18,0.72)] px-6 py-8 backdrop-blur-xl md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-xl uppercase tracking-[0.22em] text-white">
            {profile.callsign}
          </p>
          <p className="mt-2 max-w-xl text-sm leading-7 text-[color:var(--text-secondary)]">
            Portfolio interface rebuilt with a dark purple and deep pink sci-fi system using
            Next.js, Tailwind CSS, and Framer Motion.
          </p>
        </div>
        <nav className="flex flex-wrap gap-3 text-sm">
          {contactLinks.map((link) => (
            <ActionLink
              key={link.href}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              variant="ghost"
            >
              {link.label}
            </ActionLink>
          ))}
        </nav>
        <p className="text-xs uppercase tracking-[0.24em] text-white/35">
          Created by {profile.name}
        </p>
      </div>
    </footer>
  );
}
