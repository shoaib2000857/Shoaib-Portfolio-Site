"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ActionLink } from "../components/ActionLink";
import type { ProjectArchiveItem, ProjectArchiveSummary } from "../data/projectArchive";

type ProjectsArchiveClientProps = {
  projects: ProjectArchiveItem[];
  summary: ProjectArchiveSummary;
};

type SourceFilter = "all" | "user" | "org";
type RepoKindFilter = "all" | "originals" | "forks";

function shortenCommitMessage(message: string | null) {
  if (!message) return null;
  if (message.length <= 88) return message;
  return `${message.slice(0, 87).trimEnd()}…`;
}

export function ProjectsArchiveClient({ projects, summary }: ProjectsArchiveClientProps) {
  const [search, setSearch] = useState("");
  const [sourceFilter, setSourceFilter] = useState<SourceFilter>("all");
  const [repoKindFilter, setRepoKindFilter] = useState<RepoKindFilter>("all");
  const [ownerFilter, setOwnerFilter] = useState("all");

  const owners = Array.from(new Set(projects.map((project) => project.ownerLogin))).sort((a, b) =>
    a.localeCompare(b)
  );

  const normalizedSearch = search.trim().toLowerCase();

  const visibleProjects = projects.filter((project) => {
    const matchesSearch = !normalizedSearch || project.searchText.includes(normalizedSearch);
    const matchesSource = sourceFilter === "all" || project.sourceType === sourceFilter;
    const matchesRepoKind =
      repoKindFilter === "all" || (repoKindFilter === "forks" ? project.isFork : !project.isFork);
    const matchesOwner = ownerFilter === "all" || project.ownerLogin === ownerFilter;

    return matchesSearch && matchesSource && matchesRepoKind && matchesOwner;
  });

  return (
    <section className="section-shell pt-0">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            { label: "Tracked Repos", value: summary.totalRepositories },
            { label: "Original Builds", value: summary.originalRepositories },
            { label: "Forked Repos", value: summary.forkedRepositories },
            { label: "Live Deployments", value: summary.liveProjects },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="panel-shell p-6"
            >
              <p className="eyebrow">{stat.label}</p>
              <p className="mt-4 font-display text-4xl uppercase tracking-[0.14em] text-white">
                {stat.value}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="panel-shell mt-8 p-6 md:p-8">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="eyebrow">Archive Controls</p>
                <h2 className="mt-4 font-display text-3xl uppercase tracking-[0.16em] text-white">
                  Search, Slice, And Scan The Full Repo Graph
                </h2>
              </div>
              <p className="text-sm leading-7 text-[color:var(--text-secondary)] lg:max-w-xl lg:text-right">
                Showing {visibleProjects.length} of {summary.totalRepositories} tracked repositories
                across {summary.trackedSources.join(", ")}.
              </p>
            </div>

            <div className="grid gap-4 lg:grid-cols-[1.4fr_0.7fr_0.7fr_0.8fr]">
              <label className="grid gap-2">
                <span className="text-xs uppercase tracking-[0.28em] text-[color:var(--pink-soft)]">
                  Search
                </span>
                <input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search by repo, stack, owner, or keywords"
                  className="field-shell"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-xs uppercase tracking-[0.28em] text-[color:var(--pink-soft)]">
                  Source
                </span>
                <select
                  value={sourceFilter}
                  onChange={(event) => setSourceFilter(event.target.value as SourceFilter)}
                  className="field-shell"
                >
                  <option value="all">All sources</option>
                  <option value="user">Personal repos</option>
                  <option value="org">Org repos</option>
                </select>
              </label>

              <label className="grid gap-2">
                <span className="text-xs uppercase tracking-[0.28em] text-[color:var(--pink-soft)]">
                  Repo Type
                </span>
                <select
                  value={repoKindFilter}
                  onChange={(event) => setRepoKindFilter(event.target.value as RepoKindFilter)}
                  className="field-shell"
                >
                  <option value="all">All repos</option>
                  <option value="originals">Original builds</option>
                  <option value="forks">Forks</option>
                </select>
              </label>

              <label className="grid gap-2">
                <span className="text-xs uppercase tracking-[0.28em] text-[color:var(--pink-soft)]">
                  Owner
                </span>
                <select
                  value={ownerFilter}
                  onChange={(event) => setOwnerFilter(event.target.value)}
                  className="field-shell"
                >
                  <option value="all">All owners</option>
                  {owners.map((owner) => (
                    <option key={owner} value={owner}>
                      {owner}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="flex flex-wrap gap-3">
              {summary.topLanguages.map((language) => (
                <span key={language.label} className="tech-pill">
                  {language.label}
                  {" / "}
                  {language.count}
                </span>
              ))}
            </div>
          </div>
        </div>

        {visibleProjects.length > 0 ? (
          <div id="archive-grid" className="mt-8 grid gap-6 lg:grid-cols-2">
            {visibleProjects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.08 }}
                transition={{ duration: 0.45, delay: index * 0.015 }}
                className="project-card h-full"
                style={{ ["--card-accent" as string]: project.accent }}
              >
                <div className="project-card-glow" />
                <div className="relative z-10 flex h-full flex-col">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="status-pill">
                      {project.sourceType === "org" ? "Org Repo" : "Personal Repo"}
                    </span>
                    <span className="inline-flex rounded-full border border-white/10 px-3 py-1 text-[0.68rem] uppercase tracking-[0.24em] text-white/55">
                      {project.isFork ? "Fork" : "Original"}
                    </span>
                    {project.primaryLanguage && (
                      <span className="inline-flex rounded-full border border-white/10 px-3 py-1 text-[0.68rem] uppercase tracking-[0.24em] text-white/55">
                        {project.primaryLanguage}
                      </span>
                    )}
                    {project.isArchived && (
                      <span className="inline-flex rounded-full border border-white/10 px-3 py-1 text-[0.68rem] uppercase tracking-[0.24em] text-white/55">
                        Archived
                      </span>
                    )}
                  </div>

                  <h3 className="mt-6 font-display text-3xl uppercase tracking-[0.12em] text-white">
                    {project.name}
                  </h3>
                  <p className="mt-2 text-xs uppercase tracking-[0.22em] text-white/40">
                    {project.fullName}
                  </p>
                  <p className="mt-5 text-sm leading-7 text-white/82">{project.summary}</p>

                  {project.latestCommitMessage && (
                    <p className="mt-4 text-xs uppercase tracking-[0.16em] text-white/38">
                      Latest commit // {shortenCommitMessage(project.latestCommitMessage)}
                    </p>
                  )}

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    <div className="sub-panel">
                      <p className="text-xs uppercase tracking-[0.26em] text-[color:var(--pink-soft)]">
                        Owner
                      </p>
                      <p className="mt-3 text-sm leading-7 text-white/80">
                        {project.ownerLogin} via {project.sourceName}
                      </p>
                    </div>
                    <div className="sub-panel">
                      <p className="text-xs uppercase tracking-[0.26em] text-[color:var(--pink-soft)]">
                        Activity
                      </p>
                      <p className="mt-3 text-sm leading-7 text-white/80">
                        Last push {project.pushedAtLabel}
                      </p>
                    </div>
                    <div className="sub-panel">
                      <p className="text-xs uppercase tracking-[0.26em] text-[color:var(--pink-soft)]">
                        Signals
                      </p>
                      <p className="mt-3 text-sm leading-7 text-white/80">
                        {project.stars} stars / {project.forks} forks / {project.watchers} watchers
                      </p>
                    </div>
                    <div className="sub-panel">
                      <p className="text-xs uppercase tracking-[0.26em] text-[color:var(--pink-soft)]">
                        Structure
                      </p>
                      <p className="mt-3 text-sm leading-7 text-white/80">
                        {project.totalTreeEntries} tree entries / {project.sizeKb} KB /{" "}
                        {project.defaultBranch ?? "No default branch"}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {project.stack.map((item) => (
                      <span key={item} className="tech-pill">
                        {item}
                      </span>
                    ))}
                    {project.topics.slice(0, 4).map((topic) => (
                      <span key={topic} className="tech-pill">
                        #{topic}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <ActionLink
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="ghost"
                    >
                      GitHub Repo
                    </ActionLink>
                    {project.liveLinks.map((link, linkIndex) => (
                      <ActionLink
                        key={link}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant={linkIndex === 0 ? "glow" : "ghost"}
                      >
                        {linkIndex === 0 ? "Live Link" : "Extra Link"}
                      </ActionLink>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        ) : (
          <div className="panel-shell mt-8 p-8 text-center">
            <p className="font-display text-2xl uppercase tracking-[0.16em] text-white">
              No Projects Match The Current Filters
            </p>
            <p className="mt-4 text-sm leading-7 text-[color:var(--text-secondary)]">
              Try loosening the search term or switching the source and repo-type filters back to
              `all`.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
