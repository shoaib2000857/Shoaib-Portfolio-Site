"use client";
import React from 'react';
import { motion } from 'framer-motion'
import Image from 'next/image'
import desk from '../../src/images/design-desk.jpeg'
import bg from '../../src/images/dark-bg.jpg'

const projects = [
  { title: '10 Things To Know About Azure Static Web Apps 🎉', description: 'Collaboration to create a beginner friendly article to help explain Azure Static Web Apps and tooling to get started.', url: 'https://dev.to/azure/10-things-to-know-about-azure-static-web-apps-3n4i' },
  { title: 'Web Development for Beginners', description: 'Contributed sketch note imagery to accompany each lesson. These help provide visual representation of what is being taught.', url: 'https://github.com/microsoft/web-dev-for-beginners' },
  { title: 'My Resume Site', description: 'Created from Microsoft\'s resume workshop and deployed to GitHub pages. Includes my experience and design abilities.', url: 'https://shoaib2000857.github.io/Shoaib-Portfolio-Site/' },
  { title: 'GitHub Codespaces and github.dev', description: 'Video interview to explain when to use GitHub.dev versus GitHub Codespaces, and how best to use each tool.', url: 'https://www.youtube.com/watch?v=c3hHhRME_XI' },
  { title: 'Task Master - My CS50X Project', description: 'My CS50X Project Task Master Which is a all in one task manager and timetable app', url: 'https://cs50project.shoaibssm.me' },
  { title: 'Purr-fessor', description: 'Project made got the google GEN AI hackathon', url: 'https://ai-study-assistant.vercel.app/' },
  { title: 'Elyon The Guide', description: 'Project Made for the Bandipur House CTC Hackathon', url: 'https://elyon.shoaibssm.me' },
  { title: 'Maargdarshak', description: 'Project Made for Codeinovate Hackathon', url: 'https://maargdarshak.shoaibssm.me' },
  { title: 'Rakshak', description: 'An Autonomus Security Rover Designed for surveilence and intruder detection', url: 'https://rakshak.shoaibssm.me' },
]

export function Projects() {
  return (
    <section id="projects" className="section-padding relative">
      <Image src={bg} alt="desktop with books and laptop" fill unoptimized className="object-cover opacity-20" />
      <div className="relative max-w-6xl mx-auto px-4 md:px-8">
        <h2 className="heading-gradient text-3xl md:text-4xl font-semibold text-center mb-10">Portfolio</h2>
        <div className="flex justify-center mb-10">
          <Image src={desk} alt="desktop with books and laptop" className="rounded-xl shadow-xl w-full max-w-3xl h-auto" unoptimized />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p,i)=> (
            <motion.div key={p.title} initial={{opacity:0, y:24}} whileInView={{opacity:1,y:0}} transition={{delay: i*0.04}} className="group relative glass p-6 flex flex-col">
              <h3 className="font-semibold mb-2 leading-snug pr-10">{p.title}</h3>
              <p className="text-sm opacity-80 leading-relaxed flex-1">{p.description}</p>
              <a href={p.url} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
                Visit <span aria-hidden>→</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
