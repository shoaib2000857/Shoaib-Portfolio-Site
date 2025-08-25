"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import tiger from "../../src/images/bengal-tiger-8013012_1920.jpg";

const NAME = "Shoaib Sadiq Salehmohamed";
const TITLE = "Data Science and Programming Student";

export function Hero() {
  return (
    <section
      id="home"
      className="relative h-[100dvh] flex items-center justify-center overflow-hidden"
    >
      <Image
        src={tiger}
        alt="Bengal tiger in the wild"
        priority
        fill
        unoptimized
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 px-6 text-center max-w-3xl"
      >
        <h1 className="font-display text-5xl md:text-7xl font-light tracking-tight text-white leading-[0.9]">
          {NAME}
        </h1>
        <p className="mt-6 text-xl md:text-2xl text-white/80 font-light">{TITLE}</p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="glass px-6 py-3 text-sm font-semibold uppercase tracking-wide hover:scale-[1.02] active:scale-95 transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 text-sm font-semibold uppercase tracking-wide border border-white/40 hover:bg-white/10 rounded-2xl text-white transition"
          >
            Contact
          </a>
        </div>
      </motion.div>
    </section>
  );
}
