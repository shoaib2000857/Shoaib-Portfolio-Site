"use client";
import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../components/SectionHeading";
import { featuredProjects } from "../data/portfolio";

type ProjectsProps = {
  archiveCount: number;
};

export function Projects({ archiveCount }: ProjectsProps) {
  return (
    <section id="projects" className="section-shell">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Project Grid"
          title="Featured Builds Plus A Full Archive"
          description="The landing page stays selective on purpose. It highlights the projects that best represent the current direction of my work, while the complete archive carries every tracked repository."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: index * 0.05 }}
              className="project-card"
              style={{ ["--card-accent" as string]: project.accent }}
            >
              <div className="project-card-glow" />
              <div className="relative z-10">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="status-pill">{project.category}</span>
                  <span className="inline-flex rounded-full border border-white/10 px-3 py-1 text-[0.68rem] uppercase tracking-[0.24em] text-white/50">
                    {project.status}
                  </span>
                </div>
                <h3 className="mt-6 max-w-xl font-display text-3xl uppercase tracking-[0.12em] text-white">
                  {project.title}
                </h3>
                <p className="mt-5 max-w-2xl text-base leading-8 text-white/80">
                  {project.description}
                </p>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-[color:var(--text-secondary)]">
                  {project.impact}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {project.stack.map((item) => (
                    <span key={item} className="tech-pill">
                      {item}
                    </span>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  {project.demoHref && (
                    <a
                      href={project.demoHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glow-button"
                    >
                      Live Experience
                    </a>
                  )}
                  {project.repoHref && (
                    <a
                      href={project.repoHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ghost-button"
                    >
                      GitHub Repo
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="panel-shell mt-8 flex flex-col gap-6 p-6 md:flex-row md:items-center md:justify-between md:p-8">
          <div>
            <p className="eyebrow">Complete Inventory</p>
            <h3 className="mt-4 font-display text-2xl uppercase tracking-[0.14em] text-white md:text-3xl">
              Full Project Archive
            </h3>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-[color:var(--text-secondary)]">
              Browse all {archiveCount} repositories from personal work, organization projects,
              experimental builds, forks, and deployed products in one dedicated archive page with
              GitHub links and project metadata.
            </p>
          </div>
          <a href="/projects" className="glow-button">
            Open The Archive
          </a>
        </div>
      </div>
    </section>
  );
}
