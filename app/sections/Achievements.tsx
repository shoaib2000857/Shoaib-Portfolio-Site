"use client";
import React from 'react';
import { motion } from 'framer-motion'

const items = [
  { title: 'CS50x Graduate', detail: 'Completed Harvard\'s CS50x with a capstone project (Task Master)' },
  { title: 'Hackathons', detail: 'Participated in Google GenAI, Bandipur House CTC, and Codeinovate' },
  { title: 'Open Source / Content', detail: 'Contributions and content around web and data science' },
]

export function Achievements(){
  return (
    <section id="achievements" className="section-padding">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <h2 className="heading-gradient text-3xl md:text-4xl font-semibold text-center mb-10">Achievements</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((a,i)=> (
            <motion.div key={a.title} initial={{opacity:0, y:20}} whileInView={{opacity:1,y:0}} transition={{delay:i*0.05}} className="glass p-6">
              <h3 className="font-semibold mb-2">{a.title}</h3>
              <p className="text-sm opacity-80 leading-relaxed">{a.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
