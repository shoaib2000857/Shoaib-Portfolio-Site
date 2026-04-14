import type { Metadata } from "next";
import { AmbientBackground } from "../components/AmbientBackground";
import { CustomCursor } from "../components/CustomCursor";
import { ScrollProgress } from "../components/ScrollProgress";
import { profile } from "../data/portfolio";
import { projectArchiveItems, projectArchiveSummary } from "../data/projectArchive";
import { ProjectsArchiveClient } from "./ProjectsArchiveClient";

export const metadata: Metadata = {
  title: "Project Archive | Shoaib Sadiq Salehmohamed",
  description:
    "Full project archive for Shoaib Sadiq Salehmohamed, generated from a GitHub inventory of personal and organization repositories.",
};

export default function ProjectsPage() {
  return (
    <div className="site-shell">
      <AmbientBackground />
      <ScrollProgress />
      <CustomCursor />

      <main className="content-shell">
        <section className="px-4 pb-8 pt-28 sm:px-6">
          <div className="mx-auto max-w-7xl">
            <div className="panel-shell p-7 md:p-10">
              <div className="flex flex-wrap gap-3">
                <a href="/" className="ghost-button">
                  Back To Landing
                </a>
                <a
                  href={profile.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ghost-button"
                >
                  Main Domain
                </a>
              </div>

              <p className="eyebrow mt-8">Repository Archive</p>
              <h1 className="mt-4 max-w-4xl font-display text-4xl uppercase tracking-[0.16em] text-white md:text-6xl">
                Every Project In The System
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-8 text-[color:var(--text-secondary)] md:text-lg">
                This page is generated from your GitHub inventory dump. It keeps the landing page
                curated, while this archive exposes the full graph of personal builds, organization
                work, experiments, forks, and shipped deployments with direct repo links.
              </p>
            </div>
          </div>
        </section>

        <ProjectsArchiveClient projects={projectArchiveItems} summary={projectArchiveSummary} />
      </main>
    </div>
  );
}
