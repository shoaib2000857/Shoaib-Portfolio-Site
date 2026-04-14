"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../components/SectionHeading";
import { experienceHighlights } from "../data/portfolio";

const [featuredExperience, ...supportingExperiences] = experienceHighlights;

export function Experience() {
  return (
    <section id="experience" className="section-shell">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Current Work"
          title="Research, Leadership, And Execution"
          description="Projects matter, but so does the environments where I research, mentor, ship, and contribute. This is the operating layer behind the portfolio."
        />

        <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ duration: 0.6 }}
            className="project-card"
            style={{ ["--card-accent" as string]: featuredExperience.accent }}
          >
            <div className="project-card-glow" />
            <div className="relative z-10">
              <div className="flex flex-wrap items-center gap-3">
                <span className="status-pill">Featured Experience</span>
                <span className="inline-flex rounded-full border border-white/10 px-3 py-1 text-[0.68rem] uppercase tracking-[0.24em] text-white/55">
                  {featuredExperience.timeframe}
                </span>
              </div>

              <h3 className="mt-6 font-display text-3xl uppercase tracking-[0.12em] text-white">
                {featuredExperience.role}
              </h3>
              <p className="mt-2 text-sm uppercase tracking-[0.18em] text-white/55">
                {featuredExperience.org}
                <span className="px-2 text-white/35">/</span>
                {featuredExperience.location}
              </p>
              <p className="mt-5 text-base leading-8 text-white/82">{featuredExperience.summary}</p>

              <div className="mt-6 grid gap-3">
                {featuredExperience.bullets.map((bullet) => (
                  <div key={bullet} className="sub-panel">
                    <p className="text-sm leading-7 text-[color:var(--text-secondary)]">{bullet}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {featuredExperience.tags.map((tag) => (
                  <span key={tag} className="tech-pill">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>

          <div className="grid gap-4">
            {supportingExperiences.map((experience, index) => (
              <motion.article
                key={`${experience.role}-${experience.org}`}
                initial={{ opacity: 0, x: 22 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="panel-shell p-6"
              >
                <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--pink-soft)]">
                  {experience.timeframe}
                </p>
                <h3 className="mt-4 font-display text-xl uppercase tracking-[0.12em] text-white">
                  {experience.role}
                </h3>
                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/45">
                  {experience.org}
                  <span className="px-2 text-white/30">/</span>
                  {experience.location}
                </p>
                <p className="mt-4 text-sm leading-7 text-[color:var(--text-secondary)]">
                  {experience.summary}
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {experience.tags.map((tag) => (
                    <span key={tag} className="tech-pill">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
