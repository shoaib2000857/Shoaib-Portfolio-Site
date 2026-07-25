"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useMemo, useState } from "react";
import type { ProjectArchiveItem, ProjectArchiveSummary } from "../data/projectArchive";

type ProjectsArchiveClientProps = {
  projects: ProjectArchiveItem[];
  summary: ProjectArchiveSummary;
};

type SourceFilter = "all" | "user" | "org";
type RepoKindFilter = "all" | "originals" | "forks";

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      viewBox="0 0 20 20"
      aria-hidden="true"
      className={diagonal ? "icon icon-diagonal" : "icon"}
    >
      <path d={diagonal ? "M5 15 15 5M7 5h8v8" : "M4 10h12m-4-4 4 4-4 4"} />
    </svg>
  );
}

export function ProjectsArchiveClient({ projects, summary }: ProjectsArchiveClientProps) {
  const [search, setSearch] = useState("");
  const [sourceFilter, setSourceFilter] = useState<SourceFilter>("all");
  const [repoKindFilter, setRepoKindFilter] = useState<RepoKindFilter>("all");
  const [ownerFilter, setOwnerFilter] = useState("all");
  const reduceMotion = useReducedMotion();

  const owners = useMemo(
    () =>
      Array.from(new Set(projects.map((project) => project.ownerLogin))).sort((a, b) =>
        a.localeCompare(b)
      ),
    [projects]
  );

  const visibleProjects = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return projects.filter((project) => {
      const matchesSearch = !normalizedSearch || project.searchText.includes(normalizedSearch);
      const matchesSource = sourceFilter === "all" || project.sourceType === sourceFilter;
      const matchesRepoKind =
        repoKindFilter === "all" || (repoKindFilter === "forks" ? project.isFork : !project.isFork);
      const matchesOwner = ownerFilter === "all" || project.ownerLogin === ownerFilter;

      return matchesSearch && matchesSource && matchesRepoKind && matchesOwner;
    });
  }, [ownerFilter, projects, repoKindFilter, search, sourceFilter]);

  return (
    <section className="archive-section">
      <div className="archive-stats" aria-label="Repository archive summary">
        {[
          ["Tracked repositories", summary.totalRepositories],
          ["Original builds", summary.originalRepositories],
          ["Contribution forks", summary.forkedRepositories],
          ["Detected live links", summary.liveProjects],
        ].map(([label, value]) => (
          <div className="archive-stat" key={label}>
            <span>{label}</span>
            <strong>{value}</strong>
          </div>
        ))}
      </div>

      <div className="archive-controls">
        <div className="archive-control-head">
          <h2>Find a repository</h2>
          <p>
            Showing {visibleProjects.length} of {summary.totalRepositories} public repositories
          </p>
        </div>

        <div className="filter-grid">
          <label className="filter-field">
            <span>Search</span>
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Name, stack, owner, or keyword"
              type="search"
            />
          </label>
          <label className="filter-field">
            <span>Source</span>
            <select
              value={sourceFilter}
              onChange={(event) => setSourceFilter(event.target.value as SourceFilter)}
            >
              <option value="all">All sources</option>
              <option value="user">Personal account</option>
              <option value="org">Team organizations</option>
            </select>
          </label>
          <label className="filter-field">
            <span>Repository kind</span>
            <select
              value={repoKindFilter}
              onChange={(event) => setRepoKindFilter(event.target.value as RepoKindFilter)}
            >
              <option value="all">Originals and forks</option>
              <option value="originals">Original builds</option>
              <option value="forks">Contribution forks</option>
            </select>
          </label>
          <label className="filter-field">
            <span>Owner</span>
            <select value={ownerFilter} onChange={(event) => setOwnerFilter(event.target.value)}>
              <option value="all">All owners</option>
              {owners.map((owner) => (
                <option key={owner} value={owner}>
                  {owner}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="language-row">
          {summary.topLanguages.map((language) => (
            <span key={language.label}>
              {language.label} · {language.count}
            </span>
          ))}
        </div>
      </div>

      {visibleProjects.length > 0 ? (
        <div className="archive-grid" id="archive-grid">
          {visibleProjects.map((project) => (
            <motion.article layout={!reduceMotion} className="archive-card" key={project.id}>
              <div className="archive-card-meta">
                <span>{project.sourceType === "org" ? "Team repo" : "Personal"}</span>
                <span>{project.isFork ? "Contribution fork" : "Original"}</span>
                {project.primaryLanguage && <span>{project.primaryLanguage}</span>}
                {project.isArchived && <span>Archived</span>}
              </div>

              <h3>{project.name}</h3>
              <p className="archive-card-owner">{project.fullName}</p>
              <p className="archive-card-summary">{project.summary}</p>

              <div className="tag-row">
                {project.stack.slice(0, 6).map((item) => (
                  <span key={item}>{item}</span>
                ))}
                {project.topics.slice(0, 3).map((topic) => (
                  <span key={topic}>#{topic}</span>
                ))}
              </div>

              <div className="archive-card-details">
                <span>Updated {project.pushedAtLabel}</span>
                <span>{project.totalTreeEntries} files</span>
                <span>{project.stars} stars</span>
                <span>{project.forks} forks</span>
              </div>

              <div className="archive-card-links">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link"
                >
                  Repository <Arrow diagonal />
                </a>
                {project.liveLinks.slice(0, 2).map((link, linkIndex) => (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="quiet-link"
                    key={link}
                  >
                    {linkIndex === 0 ? "Live build" : "Alternate link"} <Arrow diagonal />
                  </a>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <p>No repositories match those filters. Try a broader search.</p>
        </div>
      )}
    </section>
  );
}
