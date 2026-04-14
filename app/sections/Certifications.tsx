"use client";
import React from "react";
import { motion } from "framer-motion";
import { ActionLink } from "../components/ActionLink";
import { SectionHeading } from "../components/SectionHeading";
import { credentials } from "../data/portfolio";

export function Certifications() {
  return (
    <section id="proof" className="section-shell">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Proof Layer"
          title="Credentials, Recognition, And Published Work"
          description="This layer combines formal coursework with recognitions, cohort selections, and published intellectual property that materially strengthen the portfolio."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {credentials.map((credential, index) => (
            <motion.article
              key={credential.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.04 }}
              className="panel-shell flex h-full flex-col p-6"
            >
              <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--pink-soft)]">
                {credential.issuer}
              </p>
              <h3 className="mt-4 font-display text-xl uppercase tracking-[0.12em] text-white">
                {credential.title}
              </h3>
              <p className="mt-4 flex-1 text-sm leading-7 text-[color:var(--text-secondary)]">
                {credential.detail}
              </p>
              <ActionLink
                href={credential.href}
                target="_blank"
                rel="noopener noreferrer"
                variant="ghost"
                className="mt-6 w-fit"
              >
                Open Credential <span aria-hidden>↗</span>
              </ActionLink>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
