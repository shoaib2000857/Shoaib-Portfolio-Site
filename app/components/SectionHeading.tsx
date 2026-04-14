"use client";

import { motion } from "framer-motion";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl";

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.45 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`mb-12 ${alignment}`}
    >
      <motion.p
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.45 }}
        transition={{ delay: 0.06, duration: 0.5 }}
        className="eyebrow"
      >
        {eyebrow}
      </motion.p>
      <h2 className="mt-4 font-display text-3xl font-semibold uppercase tracking-[0.18em] text-white md:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-[color:var(--text-secondary)] md:text-lg">
        {description}
      </p>
    </motion.div>
  );
}
