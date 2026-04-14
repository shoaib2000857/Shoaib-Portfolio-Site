import rawInventory from "../../github_inventory/github_inventory.json";
import rawStats from "../../github_inventory/stats.json";

type RawInventoryProject = {
  source_type: "org" | "user";
  source_name: string;
  full_name: string;
  html_url: string;
  name: string;
  private: boolean;
  archived: boolean;
  fork: boolean;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  description: string | null;
  default_branch: string | null;
  homepage: string | null;
  pages_url: string | null;
  stars: number;
  watchers: number;
  forks: number;
  open_issues: number;
  size_kb: number;
  topics: string[];
  license_name: string | null;
  primary_language: string | null;
  owner_login: string;
  latest_commit_date: string | null;
  latest_commit_message: string | null;
  readme_text: string | null;
  total_tree_entries: number;
  detected_stack: string[];
  deployment_links: string[];
  notes: string[];
};

type RawInventoryStats = {
  total_repositories: number;
  sources: {
    users: string[];
    orgs: string[];
  };
  top_languages_by_repo_count: [string, number][];
};

export type ProjectArchiveItem = {
  id: string;
  name: string;
  fullName: string;
  githubUrl: string;
  summary: string;
  sourceType: "org" | "user";
  sourceName: string;
  ownerLogin: string;
  primaryLanguage: string | null;
  stack: string[];
  topics: string[];
  licenseName: string | null;
  stars: number;
  forks: number;
  watchers: number;
  openIssues: number;
  sizeKb: number;
  totalTreeEntries: number;
  defaultBranch: string | null;
  isFork: boolean;
  isArchived: boolean;
  isPrivate: boolean;
  createdAtLabel: string;
  updatedAtLabel: string;
  pushedAtLabel: string;
  latestCommitLabel: string;
  latestCommitMessage: string | null;
  liveLinks: string[];
  accent: string;
  searchText: string;
};

export type ProjectArchiveSummary = {
  totalRepositories: number;
  originalRepositories: number;
  forkedRepositories: number;
  liveProjects: number;
  organizationProjects: number;
  personalProjects: number;
  trackedSources: string[];
  topLanguages: Array<{ label: string; count: number }>;
};

const inventory = rawInventory as RawInventoryProject[];
const inventoryStats = rawStats as RawInventoryStats;

const accentPalette = ["#ff4db8", "#9255ff", "#ff2f92", "#c344ff", "#6f42ff", "#ff6fd8"];
const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  year: "numeric",
});

function sanitizeUrl(value: string | null | undefined) {
  if (!value) return null;
  const trimmed = value
    .trim()
    .replace(/^["'`]+|["'`]+$/g, "")
    .replace(/,+$/g, "");

  if (!trimmed || trimmed.includes("{")) return null;
  if (!/^https?:\/\//i.test(trimmed)) return null;

  return trimmed;
}

function isUsefulProjectLink(url: string) {
  const blockedPatterns = [
    "img.shields.io",
    "readme-typing-svg",
    "contributors-img",
    "capsule-render",
    "reporoster.com",
    "contrib.rocks",
    "github.com/",
  ];

  return !blockedPatterns.some((pattern) => url.includes(pattern));
}

function dedupe(values: Array<string | null | undefined>) {
  return Array.from(new Set(values.filter(Boolean))) as string[];
}

function truncate(text: string, maxLength: number) {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength - 1).trimEnd()}…`;
}

function stripMarkdown(text: string) {
  return text
    .replace(/^#[^\n]*$/gm, " ")
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/!\[[^\]]*\]\([^)]+\)/g, " ")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/<[^>]+>/g, " ")
    .replace(/^\s*[-*+]\s+/gm, "")
    .replace(/^\s*>\s?/gm, "")
    .replace(/\r/g, " ")
    .replace(/\n+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function formatDate(date: string | null | undefined) {
  if (!date) return "Unknown";

  const parsed = Date.parse(date);
  if (Number.isNaN(parsed)) return "Unknown";

  return dateFormatter.format(parsed);
}

function buildSummary(project: RawInventoryProject) {
  const description = project.description?.trim();
  if (description) return truncate(description, 220);

  const readmeText = stripMarkdown(project.readme_text ?? "");
  if (readmeText) return truncate(readmeText, 220);

  const notes = (project.notes ?? []).join(" ").trim();
  if (notes) return truncate(notes, 220);

  return "Tracked in the portfolio archive as part of Shoaib's full GitHub project inventory.";
}

function buildLiveLinks(project: RawInventoryProject) {
  return dedupe([
    sanitizeUrl(project.homepage),
    sanitizeUrl(project.pages_url),
    ...(project.deployment_links ?? []).map((link) => sanitizeUrl(link)),
  ])
    .filter(isUsefulProjectLink)
    .slice(0, 3);
}

function buildSearchText(project: {
  name: string;
  fullName: string;
  summary: string;
  sourceName: string;
  ownerLogin: string;
  primaryLanguage: string | null;
  stack: string[];
  topics: string[];
}) {
  return [
    project.name,
    project.fullName,
    project.summary,
    project.sourceName,
    project.ownerLogin,
    project.primaryLanguage ?? "",
    ...project.stack,
    ...project.topics,
  ]
    .join(" ")
    .toLowerCase();
}

const normalizedProjects = inventory
  .map((project) => {
    const stack = dedupe([...(project.detected_stack ?? []), project.primary_language]).slice(0, 8);
    const summary = buildSummary(project);

    return {
      id: project.full_name,
      name: project.name,
      fullName: project.full_name,
      githubUrl: project.html_url,
      summary,
      sourceType: project.source_type,
      sourceName: project.source_name,
      ownerLogin: project.owner_login,
      primaryLanguage: project.primary_language,
      stack,
      topics: project.topics ?? [],
      licenseName: project.license_name,
      stars: project.stars ?? 0,
      forks: project.forks ?? 0,
      watchers: project.watchers ?? 0,
      openIssues: project.open_issues ?? 0,
      sizeKb: project.size_kb ?? 0,
      totalTreeEntries: project.total_tree_entries ?? 0,
      defaultBranch: project.default_branch,
      isFork: project.fork,
      isArchived: project.archived,
      isPrivate: project.private,
      createdAtLabel: formatDate(project.created_at),
      updatedAtLabel: formatDate(project.updated_at),
      pushedAtLabel: formatDate(project.pushed_at),
      latestCommitLabel: formatDate(project.latest_commit_date),
      latestCommitMessage: project.latest_commit_message,
      liveLinks: buildLiveLinks(project),
      sortDate: Date.parse(project.pushed_at || project.updated_at || project.created_at || ""),
      accent: "",
      searchText: "",
    };
  })
  .sort((left, right) => {
    const dateDelta =
      (Number.isNaN(right.sortDate) ? 0 : right.sortDate) -
      (Number.isNaN(left.sortDate) ? 0 : left.sortDate);

    if (dateDelta !== 0) return dateDelta;
    if (right.stars !== left.stars) return right.stars - left.stars;
    if (right.forks !== left.forks) return right.forks - left.forks;

    return right.sizeKb - left.sizeKb;
  })
  .map((project, index) => ({
    ...project,
    accent: accentPalette[index % accentPalette.length],
    searchText: buildSearchText(project),
  }));

export const projectArchiveItems: ProjectArchiveItem[] = normalizedProjects;

export const projectArchiveSummary: ProjectArchiveSummary = {
  totalRepositories: inventoryStats.total_repositories ?? projectArchiveItems.length,
  originalRepositories: projectArchiveItems.filter((project) => !project.isFork).length,
  forkedRepositories: projectArchiveItems.filter((project) => project.isFork).length,
  liveProjects: projectArchiveItems.filter((project) => project.liveLinks.length > 0).length,
  organizationProjects: projectArchiveItems.filter((project) => project.sourceType === "org")
    .length,
  personalProjects: projectArchiveItems.filter((project) => project.sourceType === "user").length,
  trackedSources: [...inventoryStats.sources.users, ...inventoryStats.sources.orgs],
  topLanguages: inventoryStats.top_languages_by_repo_count
    .slice(0, 6)
    .map(([label, count]) => ({ label, count })),
};
