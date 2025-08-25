"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import bg from "../../src/images/edu-bg.jpg";

export function Education() {
  return (
    <section id="education" className="section-padding relative">
      <Image
        src={bg}
        alt="purple and blue abstract background"
        fill
        unoptimized
        className="object-cover opacity-30"
      />
      <div className="relative max-w-4xl mx-auto glass p-10 md:p-16 animate-in">
        <h2 className="heading-gradient text-3xl md:text-4xl font-semibold text-center mb-10">
          Education
        </h2>
        <div className="space-y-10">
          <div>
            <h3 className="text-xl font-semibold">Indian Institute Of Technology Madras</h3>
            <p className="mt-2">Bachelors of Science in Data Science and Programing</p>
            <p className="mt-1 text-sm opacity-70">2024 - 2028</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">
              Keshav Memorial Institute Of Technology Hyderabad
            </h3>
            <p className="mt-2">Bachelors of Technology in Computer Science and Engineering</p>
            <p className="mt-1 text-sm opacity-70">2024 - 2028</p>
          </div>
        </div>
      </div>
    </section>
  );
}
