"use client";

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ActionLink } from "../components/ActionLink";
import { useInteraction } from "../components/InteractionProvider";
import { heroRotatingTitles, heroStats, profile, reactorNodes } from "../data/portfolio";

export function Hero() {
  const reduceMotion = useReducedMotion();
  const { enabled, softRatioX, softRatioY } = useInteraction();
  const sectionRef = useRef<HTMLElement | null>(null);
  const [activeNodeIndex, setActiveNodeIndex] = useState(0);
  const [titleIndex, setTitleIndex] = useState(0);
  const [typedTitle, setTypedTitle] = useState("");
  const [isDeletingTitle, setIsDeletingTitle] = useState(false);
  const activeNode = reactorNodes[activeNodeIndex];
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const contentX = useTransform(softRatioX, [0, 1], [-14, 14]);
  const reactorX = useTransform(softRatioX, [0, 1], [18, -18]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 84]);
  const reactorY = useTransform(scrollYProgress, [0, 1], [0, -56]);
  const signalStripY = useTransform(softRatioY, [0, 1], [10, -10]);
  const accentTilt = useTransform(softRatioX, [0, 1], [-4, 4]);

  useEffect(() => {
    const currentTitle = heroRotatingTitles[titleIndex];

    if (reduceMotion) {
      setTypedTitle(currentTitle);
      const interval = window.setInterval(() => {
        setTitleIndex((current) => (current + 1) % heroRotatingTitles.length);
      }, 2600);

      return () => window.clearInterval(interval);
    }

    const isFullyTyped = typedTitle === currentTitle;
    const isFullyDeleted = typedTitle.length === 0;
    let timeoutId: number;

    if (!isDeletingTitle && !isFullyTyped) {
      timeoutId = window.setTimeout(() => {
        setTypedTitle(currentTitle.slice(0, typedTitle.length + 1));
      }, 82);
    } else if (!isDeletingTitle && isFullyTyped) {
      timeoutId = window.setTimeout(() => {
        setIsDeletingTitle(true);
      }, 1050);
    } else if (isDeletingTitle && !isFullyDeleted) {
      timeoutId = window.setTimeout(() => {
        setTypedTitle(currentTitle.slice(0, Math.max(typedTitle.length - 1, 0)));
      }, 42);
    } else {
      timeoutId = window.setTimeout(() => {
        setIsDeletingTitle(false);
        setTitleIndex((current) => (current + 1) % heroRotatingTitles.length);
      }, 220);
    }

    return () => window.clearTimeout(timeoutId);
  }, [isDeletingTitle, reduceMotion, titleIndex, typedTitle]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative overflow-hidden px-4 pb-14 pt-28 sm:px-6"
    >
      <div className="hero-noise" aria-hidden />
      <div className="mx-auto grid min-h-[100svh] max-w-7xl gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10"
          style={{
            x: enabled ? contentX : 0,
            y: contentY,
          }}
        >
          <motion.div style={{ y: enabled ? signalStripY : 0 }} className="status-pill">
            <span className="status-dot" />
            Sci-fi Portfolio Interface // Online
          </motion.div>
          <p className="mt-6 font-display text-xs uppercase tracking-[0.42em] text-[color:var(--pink-soft)]">
            {profile.title}
          </p>
          <motion.h1
            style={{ rotateZ: enabled ? accentTilt : 0 }}
            className="mt-6 max-w-4xl font-display text-5xl font-semibold uppercase leading-[0.9] text-white sm:text-6xl lg:text-7xl xl:text-[5.6rem]"
          >
            <span className="distort-on-hover">{profile.name}</span>
          </motion.h1>

          <div className="hero-rotator-shell mt-7">
            <p className="hero-rotator-prefix">I build</p>
            <div className="hero-rotator-frame" aria-live="polite">
              <p className="hero-rotator-copy distort-on-hover">
                {typedTitle}
                <span
                  aria-hidden
                  className={`type-caret ${isDeletingTitle ? "is-deleting" : ""}`}
                >
                  |
                </span>
              </p>
            </div>
          </div>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-[color:var(--text-secondary)] md:text-xl">
            {profile.tagline}
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <ActionLink href="#projects" variant="glow">
              Explore Projects
            </ActionLink>
            <ActionLink
              href={profile.resumeHref}
              target="_blank"
              rel="noopener noreferrer"
              variant="ghost"
            >
              View Resume
            </ActionLink>
            <ActionLink href="#contact" variant="ghost">
              Contact Me
            </ActionLink>
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
          className="relative mx-auto w-full max-w-[31rem]"
          style={{
            x: enabled ? reactorX : 0,
            y: reactorY,
          }}
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
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeNode.title}
                    initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduceMotion ? undefined : { opacity: 0, y: -16 }}
                    transition={{ duration: 0.32 }}
                  >
                    <h2 className="mt-4 font-display text-3xl uppercase tracking-[0.18em] text-white sm:text-4xl">
                      <span className="distort-on-hover">{activeNode.title}</span>
                    </h2>
                    <p className="mt-4 max-w-sm text-sm leading-7 text-[color:var(--text-secondary)]">
                      {activeNode.detail}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div className="reactor-caption-row">
              {reactorNodes.map((node, index) => (
                <button
                  key={node.label}
                  type="button"
                  className={`reactor-tag ${activeNodeIndex === index ? "is-active" : ""}`}
                  onMouseEnter={() => setActiveNodeIndex(index)}
                  onFocus={() => setActiveNodeIndex(index)}
                >
                  {node.label}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
