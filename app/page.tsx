import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Education } from './sections/Education'
import { Certifications } from './sections/Certifications'
import { Projects } from './sections/Projects'
import { Footer } from './sections/Footer'
import { ThemeToggle } from './components/ThemeToggle'
import { Achievements } from './sections/Achievements'
import { Contact } from './sections/Contact'

export default function Page() {
  return (
    <>
      <a href="#home" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] bg-white text-black px-3 py-2 rounded">Skip to content</a>
      <header className="fixed inset-x-0 top-0 z-50 flex items-center gap-6 px-4 py-3 backdrop-blur-md bg-white/70 dark:bg-neutral-900/60 shadow-sm">
        <nav aria-label="Primary" className="flex flex-1 justify-center flex-wrap gap-5 text-sm font-medium">
          {['home','about','education','certifications','projects','contact'].map(id => (
            <a key={id} href={`#${id}`} className="uppercase tracking-wide hover:text-primary transition-colors">{id}</a>
          ))}
        </nav>
        <div className="ml-auto"><ThemeToggle /></div>
      </header>
      <main className="relative">
        <Hero />
        <About />
        <Education />
        <Certifications />
        <Projects />
        <Achievements />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
