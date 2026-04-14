"use client";
import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../components/SectionHeading";
import { journey, wins } from "../data/portfolio";

export function Education() {
  return (
    <section id="journey" className="section-shell">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Trajectory"
          title="Education, Milestones, And Momentum"
          description="The timeline now spans parallel degree programs, active research, a national-level hackathon win, and published intellectual property. The pattern is disciplined growth with shipped outcomes."
        />

        <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="panel-shell p-7 md:p-8"
          >
            <p className="eyebrow">Active Signals</p>
            <div className="mt-6 grid gap-4">
              {wins.map((item) => (
                <div key={item.title} className="sub-panel">
                  <h3 className="font-display text-lg uppercase tracking-[0.14em] text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[color:var(--text-secondary)]">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </motion.aside>

          <div className="panel-shell p-7 md:p-8">
            <div className="timeline-shell">
              {journey.map((entry, index) => (
                <motion.article
                  key={`${entry.title}-${entry.org}`}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  className="timeline-item"
                >
                  <div className="timeline-dot" />
                  <p className="text-xs uppercase tracking-[0.32em] text-[color:var(--pink-soft)]">
                    {entry.label}
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-3">
                    <h3 className="font-display text-xl uppercase tracking-[0.14em] text-white md:text-2xl">
                      {entry.title}
                    </h3>
                    <span className="inline-flex rounded-full border border-white/10 px-3 py-1 text-[0.7rem] uppercase tracking-[0.24em] text-white/55">
                      {entry.kind}
                    </span>
                  </div>
                  <p className="mt-2 text-sm uppercase tracking-[0.18em] text-white/55">
                    {entry.org}
                  </p>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-[color:var(--text-secondary)]">
                    {entry.detail}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {entry.tags.map((tag) => (
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
      </div>
    </section>
  );
}
