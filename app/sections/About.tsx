"use client";
import React from 'react';
import { motion } from 'framer-motion'
import Image from 'next/image'
import bg from '../../src/images/motion-background.jpg'

const description = "I'm am a computer science enthusiast persuing an online BS in Data Science from Indian Institute of Technology Madras along with a Bachelors in Technology in Computer Science and Technology from Keshav Memorial institution Hyderabad." // original text preserved
const skillsList = ["Web design","Data Analysis","Python programming","Frontend development","UI/UX design","Graphic design"]
const detail = "I am passionate about solving problems in new creative ways to drive innovation. By leveraging my Data Science experience I continually look for new and better ways to make data interpretation more efficient along with developing new and better applications and software."

export function About() {
  return (
    <section id="about" className="section-padding relative">
      <Image src={bg} alt="purple and blue abstract background" fill unoptimized className="object-cover opacity-40" />
      <div className="relative max-w-5xl mx-auto glass p-10 md:p-16 animate-in">
        <h2 className="heading-gradient text-3xl md:text-4xl font-semibold text-center mb-8">About Myself</h2>
        <p className="text-lg leading-relaxed text-center md:text-left">{description}</p>
        <hr className="my-10 border-white/40 dark:border-white/10" />
        <ul className="grid md:grid-cols-2 gap-3 text-base md:text-lg list-disc list-inside">
          {skillsList.map(skill => <li key={skill}>{skill}</li>)}
        </ul>
        <hr className="my-10 border-white/40 dark:border-white/10" />
        <p className="text-base md:text-lg leading-relaxed">{detail}</p>
      </div>
    </section>
  )
}
