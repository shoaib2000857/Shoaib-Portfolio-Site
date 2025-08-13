import React from 'react';
import { ThemeToggle } from '../components/ThemeToggle'

const CONTACT = {
  name: 'Shoaib Sadiq Salehmohamed',
  email: 'shoaibkulsums@gmail.com',
  gitHub: 'ShoaibSM7',
  linkedIn: 'shoaib-sadiq-salehmohamed-a77812318',
  youTube: 'shoaibsadiq2238'
}

type Social = { label: string; href: string };
const socials: Social[] = [
  { label: 'Email', href: `mailto:${CONTACT.email}` },
  { label: 'GitHub', href: `https://github.com/${CONTACT.gitHub}` },
  { label: 'LinkedIn', href: `https://www.linkedin.com/in/${CONTACT.linkedIn}` },
  { label: 'YouTube', href: `https://www.youtube.com/c/${CONTACT.youTube}` },
]

export function Footer() {
  return (
    <footer id="contact" className="mt-32 bg-primary/90 dark:bg-primary/30 backdrop-blur py-20 text-white dark:text-neutral-100">
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col gap-10">
        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
          <div className="flex-1">
            <h2 className="font-display text-3xl md:text-4xl font-light">Get in touch</h2>
            <p className="mt-4 max-w-xl text-white/80 text-sm leading-relaxed">
              Feel free to reach out for collaborations, opportunities, or just a friendly hello.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
          </div>
        </div>
        <nav className="flex flex-wrap gap-4 text-sm">
          {socials.map(s => (
            <a key={s.href} href={s.href} target={s.href.startsWith('http')? '_blank': undefined} rel="noopener noreferrer" className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition">
              {s.label}
            </a>
          ))}
        </nav>
        <p className="text-xs opacity-70">Created by {CONTACT.name}</p>
      </div>
    </footer>
  )
}
