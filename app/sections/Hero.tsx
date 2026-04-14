"use client";
import React from "react";
import { motion } from "framer-motion";
import { heroStats, profile } from "../data/portfolio";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-4 pb-14 pt-28 sm:px-6">
      <div className="mx-auto grid min-h-[100svh] max-w-7xl gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10"
        >
          <div className="status-pill">
            <span className="status-dot" />
            Sci-fi Portfolio Interface // Online
          </div>
          <p className="mt-6 font-display text-xs uppercase tracking-[0.42em] text-[color:var(--pink-soft)]">
            {profile.title}
          </p>
          <h1 className="mt-6 max-w-4xl font-display text-5xl font-semibold uppercase leading-[0.9] text-white sm:text-6xl lg:text-7xl xl:text-[5.6rem]">
            {profile.name}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[color:var(--text-secondary)] md:text-xl">
            {profile.tagline}
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#projects" className="glow-button">
              Explore Projects
            </a>
            <a
              href={profile.resumeHref}
              target="_blank"
              rel="noopener noreferrer"
              className="ghost-button"
            >
              View Resume
            </a>
            <a href="#contact" className="ghost-button">
              Contact Me
            </a>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {heroStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.18 + index * 0.08, duration: 0.55 }}
                className="panel-shell p-5"
              >
                <p className="font-display text-3xl uppercase tracking-[0.12em] text-white">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm leading-6 text-[color:var(--text-secondary)]">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1], delay: 0.12 }}
          className="relative"
        >
          <div className="reactor-shell">
            <div className="reactor-ring reactor-ring-lg" />
            <div className="reactor-ring reactor-ring-md is-reverse" />
            <div className="reactor-ring reactor-ring-sm is-pulsed" />
            <div className="reactor-core">
              <div className="reactor-core-inner">
                <p className="font-display text-[0.72rem] uppercase tracking-[0.38em] text-[color:var(--pink-soft)]">
                  Neural Build Signal
                </p>
                <h2 className="mt-4 font-display text-3xl uppercase tracking-[0.18em] text-white sm:text-4xl">
                  Interface Reactor
                </h2>
                <p className="mt-4 max-w-sm text-sm leading-7 text-[color:var(--text-secondary)]">
                  Research depth, engineering discipline, and product execution tuned into one
                  system.
                </p>
              </div>
            </div>
            <div className="reactor-tag reactor-tag-left">LLM reliability research</div>
            <div className="reactor-tag reactor-tag-right">Threat-intelligence systems</div>
            <div className="reactor-tag reactor-tag-bottom">Motion-led product builds</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
