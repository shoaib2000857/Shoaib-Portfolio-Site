"use client";
import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../components/SectionHeading";
import { signalStack } from "../data/portfolio";

export function Achievements() {
  return (
    <section id="stack" className="section-shell">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Build Stack"
          title="The System Behind The Aesthetic"
          description="The visual language is intentionally dramatic, but the work underneath it is grounded in shipping, iteration, and a growing multidisciplinary stack."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {signalStack.map((group, index) => (
            <motion.article
              key={group.label}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.06 }}
              className="panel-shell p-6"
            >
              <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--pink-soft)]">
                {group.label}
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <span key={item} className="tech-pill">
                    {item}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
