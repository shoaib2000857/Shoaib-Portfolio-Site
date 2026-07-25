import type { Metadata } from "next";
import { projectArchiveItems, projectArchiveSummary } from "../data/projectArchive";
import { ProjectsArchiveClient } from "./ProjectsArchiveClient";

export const metadata: Metadata = {
  title: "Project Archive — Shoaib SSM",
  description:
    "A searchable inventory of Shoaib SSM's public personal, team, coursework, and open-source repositories.",
};

export default function ProjectsPage() {
  return (
    <main className="archive-page">
      <div className="ambient-canvas" aria-hidden="true">
        <div className="nebula nebula-one" />
        <div className="nebula nebula-two" />
        <div className="grain" />
      </div>

      <header className="archive-header">
        <a href="/" className="wordmark" aria-label="Back to Shoaib SSM portfolio">
          <span className="wordmark-mark">S</span>
          <span className="wordmark-copy">
            Shoaib <em>SSM</em>
          </span>
        </a>
        <nav className="archive-header-links" aria-label="Archive navigation">
          <a href="/">Portfolio</a>
          <a href="/#work">Selected work</a>
          <a href="/#contact">Contact</a>
        </nav>
      </header>

      <section className="archive-hero archive-section">
        <div className="section-kicker">
          <span>Archive</span>
          <span>Public GitHub inventory</span>
        </div>
        <h1>The complete build log.</h1>
        <p>
          The homepage is intentionally selective. This is the wider record: original products, team
          repositories, open-source contributions, coursework, prototypes, and unfinished
          experiments—searchable without pretending they all deserve equal weight.
        </p>
      </section>

      <ProjectsArchiveClient projects={projectArchiveItems} summary={projectArchiveSummary} />
    </main>
  );
}
