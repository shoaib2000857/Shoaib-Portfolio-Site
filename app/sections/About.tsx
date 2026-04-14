"use client";
import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../components/SectionHeading";
import { profile, signalPillars } from "../data/portfolio";

export function About() {
  return (
    <section id="about" className="section-shell">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Origin Story"
          title="Built For High-Contrast Ideas"
          description="The goal here is not just to present credentials. It is to frame the way I think, build, and translate technical problems into digital experiences with atmosphere."
        />

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.article
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65 }}
            className="panel-shell p-7 md:p-10"
          >
            <div className="grid gap-6">
              <div>
                <p className="eyebrow">Profile</p>
                <p className="mt-5 text-lg leading-8 text-white/85">{profile.intro}</p>
                <p className="mt-5 text-base leading-8 text-[color:var(--text-secondary)] md:text-lg">
                  {profile.summary}
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="sub-panel">
                  <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--pink-soft)]">
                    Base
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[color:var(--text-secondary)]">
                    {profile.location}
                  </p>
                </div>
                <div className="sub-panel">
                  <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--pink-soft)]">
                    Availability
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[color:var(--text-secondary)]">
                    {profile.availability}
                  </p>
                </div>
              </div>
            </div>
          </motion.article>

          <div className="grid gap-4">
            {signalPillars.map((pillar, index) => (
              <motion.article
                key={pillar.title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="panel-shell p-6"
              >
                <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--pink-soft)]">
                  Signal 0{index + 1}
                </p>
                <h3 className="mt-4 font-display text-xl uppercase tracking-[0.12em] text-white">
                  {pillar.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[color:var(--text-secondary)]">
                  {pillar.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
