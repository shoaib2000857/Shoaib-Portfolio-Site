import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Experience } from "./sections/Experience";
import { Education } from "./sections/Education";
import { Certifications } from "./sections/Certifications";
import { Projects } from "./sections/Projects";
import { Footer } from "./sections/Footer";
import { Achievements } from "./sections/Achievements";
import { Contact } from "./sections/Contact";
import { AmbientBackground } from "./components/AmbientBackground";
import { CustomCursor } from "./components/CustomCursor";
import { ScrollProgress } from "./components/ScrollProgress";
import { SiteHeader } from "./components/SiteHeader";
import { projectArchiveSummary } from "./data/projectArchive";

export default function Page() {
  return (
    <div className="site-shell">
      <AmbientBackground />
      <ScrollProgress />
      <CustomCursor />
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-black"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="content" className="content-shell relative">
        <Hero />
        <About />
        <Experience />
        <Achievements />
        <Education />
        <Certifications />
        <Projects archiveCount={projectArchiveSummary.totalRepositories} />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
