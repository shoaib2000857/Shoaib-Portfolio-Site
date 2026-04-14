#!/usr/bin/env python3
"""
Deep GitHub repo inventory / portfolio extractor.

What it does:
- Pulls all repos from:
  1) a user account
  2) one or more orgs
- Extracts for each repo:
  - metadata
  - README
  - languages
  - topics
  - homepage/deployment hints
  - latest release (if any)
  - latest default-branch commit summary
  - top-level structure
  - recursive file tree summary
  - important files detected
- Writes:
  - JSON report
  - Markdown report
  - CSV summary

Usage:
  python github_deep_inventory.py \
      --user shoaib2000857 \
      --org Team-Aston \
      --org Team-ASHTOJ \
      --outdir github_inventory

Optional:
  export GITHUB_TOKEN=ghp_xxx
"""

from __future__ import annotations

import argparse
import base64
import csv
import json
import os
import re
import sys
import time
from collections import Counter
from dataclasses import dataclass, asdict
from typing import Any, Dict, Iterable, List, Optional, Tuple

import requests

API_BASE = "https://api.github.com"
RAW_BASE = "https://raw.githubusercontent.com"
DEFAULT_TIMEOUT = 30

IMPORTANT_FILE_PATTERNS = [
    r"^README(\.[a-zA-Z0-9]+)?$",
    r"^package\.json$",
    r"^package-lock\.json$",
    r"^pnpm-lock\.yaml$",
    r"^yarn\.lock$",
    r"^requirements\.txt$",
    r"^pyproject\.toml$",
    r"^poetry\.lock$",
    r"^Pipfile$",
    r"^Pipfile\.lock$",
    r"^Dockerfile$",
    r"^docker-compose(\.ya?ml)?$",
    r"^compose(\.ya?ml)?$",
    r"^Makefile$",
    r"^CMakeLists\.txt$",
    r"^go\.mod$",
    r"^Cargo\.toml$",
    r"^pom\.xml$",
    r"^build\.gradle(\.kts)?$",
    r"^settings\.gradle(\.kts)?$",
    r"^Gemfile$",
    r"^Procfile$",
    r"^vercel\.json$",
    r"^netlify\.toml$",
    r"^render\.yaml$",
    r"^railway\.json$",
    r"^firebase\.json$",
    r"^supabase/config\.toml$",
    r"^next\.config\.(js|mjs|ts)$",
    r"^vite\.config\.(js|ts|mjs|mts)$",
    r"^nuxt\.config\.(js|ts)$",
    r"^tsconfig\.json$",
    r"^tailwind\.config\.(js|ts|cjs|mjs)$",
    r"^postcss\.config\.(js|ts|cjs|mjs)$",
    r"^index\.html$",
    r"^app\.(py|js|ts)$",
    r"^main\.(py|js|ts|cpp|c|java|go|rs)$",
    r"^manage\.py$",
    r"^mkdocs\.yml$",
    r"^\.github/workflows/.+\.ya?ml$",
]

DEPLOYMENT_HINT_PATTERNS = {
    "vercel": [r"vercel\.json", r"\.vercel", r"next\.config\."],
    "netlify": [r"netlify\.toml"],
    "github_pages": [r"gh-pages", r"docs/", r"index\.html"],
    "render": [r"render\.yaml"],
    "docker": [r"Dockerfile", r"docker-compose", r"compose\.ya?ml"],
    "firebase": [r"firebase\.json"],
    "railway": [r"railway\.json"],
    "streamlit": [r"streamlit", r"\.streamlit/"],
}


@dataclass
class RepoSummary:
    source_type: str
    source_name: str
    full_name: str
    html_url: str
    name: str
    private: bool
    archived: bool
    fork: bool
    created_at: Optional[str]
    updated_at: Optional[str]
    pushed_at: Optional[str]
    description: Optional[str]
    default_branch: Optional[str]
    homepage: Optional[str]
    pages_url: Optional[str]
    stars: int
    watchers: int
    forks: int
    open_issues: int
    size_kb: int
    topics: List[str]
    license_name: Optional[str]
    primary_language: Optional[str]
    languages: Dict[str, int]
    owner_login: str
    has_wiki: bool
    has_projects: bool
    has_issues: bool
    latest_release_tag: Optional[str]
    latest_release_url: Optional[str]
    latest_commit_sha: Optional[str]
    latest_commit_date: Optional[str]
    latest_commit_message: Optional[str]
    readme_text: Optional[str]
    readme_path: Optional[str]
    tree_truncated: bool
    total_tree_entries: int
    top_level_files: List[str]
    top_level_dirs: List[str]
    important_files: List[str]
    detected_stack: List[str]
    deployment_hints: List[str]
    deployment_links: List[str]
    notes: List[str]


class GitHubClient:
    def __init__(self, token: Optional[str] = None, pause: float = 0.15) -> None:
        self.session = requests.Session()
        self.session.headers.update(
            {
                "Accept": "application/vnd.github+json",
                "User-Agent": "github-deep-inventory-script",
                "X-GitHub-Api-Version": "2022-11-28",
            }
        )
        if token:
            self.session.headers["Authorization"] = f"Bearer {token}"
        self.pause = pause

    def _request(
        self,
        method: str,
        url: str,
        *,
        expected: Tuple[int, ...] = (200,),
        **kwargs: Any,
    ) -> requests.Response:
        resp = self.session.request(method, url, timeout=DEFAULT_TIMEOUT, **kwargs)

        # Basic rate-limit / abuse handling
        if resp.status_code == 403:
            remaining = resp.headers.get("X-RateLimit-Remaining")
            reset = resp.headers.get("X-RateLimit-Reset")
            if remaining == "0" and reset:
                reset_ts = int(reset)
                sleep_for = max(reset_ts - int(time.time()) + 2, 2)
                print(f"[rate-limit] Sleeping for {sleep_for}s...", file=sys.stderr)
                time.sleep(sleep_for)
                resp = self.session.request(method, url, timeout=DEFAULT_TIMEOUT, **kwargs)

        if resp.status_code not in expected:
            raise requests.HTTPError(
                f"{method} {url} failed with {resp.status_code}: {resp.text[:500]}",
                response=resp,
            )

        if self.pause:
            time.sleep(self.pause)
        return resp

    def _paginate(self, url: str, params: Optional[Dict[str, Any]] = None) -> List[Dict[str, Any]]:
        items: List[Dict[str, Any]] = []
        page = 1
        params = dict(params or {})
        params.setdefault("per_page", 100)

        while True:
            page_params = dict(params)
            page_params["page"] = page
            resp = self._request("GET", url, params=page_params)
            data = resp.json()
            if not isinstance(data, list):
                raise ValueError(f"Expected list from {url}, got: {type(data)}")
            if not data:
                break
            items.extend(data)
            if len(data) < page_params["per_page"]:
                break
            page += 1
        return items

    def list_user_repos(self, username: str) -> List[Dict[str, Any]]:
        return self._paginate(f"{API_BASE}/users/{username}/repos", params={"type": "all", "sort": "updated"})

    def list_org_repos(self, org: str) -> List[Dict[str, Any]]:
        return self._paginate(f"{API_BASE}/orgs/{org}/repos", params={"type": "all"})

    def get_repo(self, owner: str, repo: str) -> Dict[str, Any]:
        return self._request("GET", f"{API_BASE}/repos/{owner}/{repo}").json()

    def get_languages(self, owner: str, repo: str) -> Dict[str, int]:
        return self._request("GET", f"{API_BASE}/repos/{owner}/{repo}/languages").json()

    def get_topics(self, owner: str, repo: str) -> List[str]:
        resp = self._request(
            "GET",
            f"{API_BASE}/repos/{owner}/{repo}/topics",
            headers={
                **self.session.headers,
                "Accept": "application/vnd.github+json",
            },
        )
        return resp.json().get("names", [])

    def get_readme(self, owner: str, repo: str) -> Tuple[Optional[str], Optional[str]]:
        try:
            resp = self._request("GET", f"{API_BASE}/repos/{owner}/{repo}/readme")
            data = resp.json()
            content = data.get("content")
            path = data.get("path")
            if not content:
                return None, path
            decoded = base64.b64decode(content).decode("utf-8", errors="replace")
            return decoded, path
        except Exception:
            return None, None

    def get_tree(self, owner: str, repo: str, branch: str) -> Dict[str, Any]:
        # branch name works as ref according to GitHub docs.
        return self._request(
            "GET",
            f"{API_BASE}/repos/{owner}/{repo}/git/trees/{branch}",
            params={"recursive": "1"},
        ).json()

    def get_latest_release(self, owner: str, repo: str) -> Tuple[Optional[str], Optional[str]]:
        try:
            resp = self._request(
                "GET",
                f"{API_BASE}/repos/{owner}/{repo}/releases/latest",
            )
            data = resp.json()
            return data.get("tag_name"), data.get("html_url")
        except Exception:
            return None, None

    def get_latest_commit_on_branch(self, owner: str, repo: str, branch: str) -> Tuple[Optional[str], Optional[str], Optional[str]]:
        try:
            resp = self._request(
                "GET",
                f"{API_BASE}/repos/{owner}/{repo}/commits",
                params={"sha": branch, "per_page": 1},
            )
            commits = resp.json()
            if not commits:
                return None, None, None
            c = commits[0]
            return (
                c.get("sha"),
                c.get("commit", {}).get("committer", {}).get("date"),
                c.get("commit", {}).get("message"),
            )
        except Exception:
            return None, None, None


def normalize_homepage(url: Optional[str]) -> Optional[str]:
    if not url:
        return None
    url = url.strip()
    if not url:
        return None
    if not re.match(r"^https?://", url, flags=re.I):
        url = "https://" + url
    return url


def guess_pages_url(owner: str, repo: str) -> str:
    return f"https://{owner}.github.io/{repo}/"


def detect_important_files(tree_paths: Iterable[str]) -> List[str]:
    matches: List[str] = []
    for path in tree_paths:
        normalized = path.strip("/")
        for pattern in IMPORTANT_FILE_PATTERNS:
            if re.search(pattern, normalized, flags=re.I):
                matches.append(normalized)
                break
    return sorted(set(matches))


def detect_stack(repo: Dict[str, Any], tree_paths: Iterable[str], readme_text: Optional[str]) -> List[str]:
    paths = "\n".join(tree_paths)
    readme = readme_text or ""
    stack: List[str] = []

    def add(label: str, condition: bool) -> None:
        if condition and label not in stack:
            stack.append(label)

    add("Python", bool(re.search(r"(requirements\.txt|pyproject\.toml|\.py\b)", paths, flags=re.I)))
    add("JavaScript", bool(re.search(r"(package\.json|\.js\b)", paths, flags=re.I)))
    add("TypeScript", bool(re.search(r"(tsconfig\.json|\.ts\b|\.tsx\b)", paths, flags=re.I)))
    add("React", bool(re.search(r"(react|\.tsx\b|src/App\.)", readme + "\n" + paths, flags=re.I)))
    add("Next.js", bool(re.search(r"(next\.config\.|nextjs|next\.js)", readme + "\n" + paths, flags=re.I)))
    add("Vue", bool(re.search(r"(vue|nuxt\.config\.|\.vue\b)", readme + "\n" + paths, flags=re.I)))
    add("FastAPI", bool(re.search(r"(fastapi)", readme + "\n" + paths, flags=re.I)))
    add("Flask", bool(re.search(r"(flask)", readme + "\n" + paths, flags=re.I)))
    add("Django", bool(re.search(r"(manage\.py|django)", readme + "\n" + paths, flags=re.I)))
    add("Docker", bool(re.search(r"(Dockerfile|docker-compose|compose\.ya?ml)", paths, flags=re.I)))
    add("C/C++", bool(re.search(r"(\.c\b|\.cpp\b|CMakeLists\.txt)", paths, flags=re.I)))
    add("Java", bool(re.search(r"(pom\.xml|build\.gradle|\.java\b)", paths, flags=re.I)))
    add("Go", bool(re.search(r"(go\.mod|\.go\b)", paths, flags=re.I)))
    add("Rust", bool(re.search(r"(Cargo\.toml|\.rs\b)", paths, flags=re.I)))
    add("Data Science / ML", bool(re.search(r"(jupyter|notebook|\.ipynb\b|sklearn|pytorch|tensorflow|transformers)", readme + "\n" + paths, flags=re.I)))
    return stack


def detect_deployment_hints(tree_paths: Iterable[str], readme_text: Optional[str], homepage: Optional[str], pages_url: Optional[str]) -> Tuple[List[str], List[str]]:
    paths_text = "\n".join(tree_paths)
    readme = readme_text or ""
    hints: List[str] = []
    links: List[str] = []

    for label, patterns in DEPLOYMENT_HINT_PATTERNS.items():
        if any(re.search(p, paths_text + "\n" + readme, flags=re.I) for p in patterns):
            hints.append(label)

    if homepage:
        links.append(homepage)
    if pages_url:
        links.append(pages_url)

    # Extract URLs from README that look like deployments/demo/docs
    url_candidates = re.findall(r"https?://[^\s)\]>]+", readme)
    for url in url_candidates:
        if any(domain in url.lower() for domain in [
            "vercel.app", "netlify.app", "onrender.com", "railway.app",
            "github.io", "streamlit.app", "herokuapp.com", "firebaseapp.com",
            "web.app", "pages.dev"
        ]):
            links.append(url)

    dedup_links = []
    seen = set()
    for link in links:
        if link not in seen:
            dedup_links.append(link)
            seen.add(link)

    return sorted(set(hints)), dedup_links


def summarize_tree(tree: Dict[str, Any]) -> Tuple[bool, int, List[str], List[str], List[str]]:
    items = tree.get("tree", []) or []
    truncated = bool(tree.get("truncated", False))

    top_files: List[str] = []
    top_dirs: List[str] = []
    paths: List[str] = []

    for item in items:
        path = item.get("path", "")
        if not path:
            continue
        paths.append(path)
        if "/" not in path:
            if item.get("type") == "tree":
                top_dirs.append(path)
            else:
                top_files.append(path)

    important_files = detect_important_files(paths)
    return truncated, len(items), sorted(top_files), sorted(top_dirs), important_files


def choose_notes(repo: Dict[str, Any], readme_text: Optional[str], tree_truncated: bool, deployment_links: List[str]) -> List[str]:
    notes: List[str] = []
    if not readme_text:
        notes.append("No README found via API.")
    if tree_truncated:
        notes.append("Recursive tree response was truncated; structure may be incomplete.")
    if repo.get("archived"):
        notes.append("Repository is archived.")
    if repo.get("fork"):
        notes.append("Repository is a fork.")
    if not deployment_links and repo.get("homepage"):
        notes.append("Homepage field exists but no additional deployment links were detected.")
    return notes


def collect_repo_summary(client: GitHubClient, repo: Dict[str, Any], source_type: str, source_name: str) -> RepoSummary:
    owner = repo["owner"]["login"]
    name = repo["name"]
    full_name = repo["full_name"]
    default_branch = repo.get("default_branch") or "main"

    languages = client.get_languages(owner, name)
    topics = client.get_topics(owner, name)
    readme_text, readme_path = client.get_readme(owner, name)

    try:
        tree = client.get_tree(owner, name, default_branch)
        tree_truncated, total_tree_entries, top_level_files, top_level_dirs, important_files = summarize_tree(tree)
        tree_paths = [item.get("path", "") for item in tree.get("tree", []) if item.get("path")]
    except Exception:
        tree_truncated = False
        total_tree_entries = 0
        top_level_files = []
        top_level_dirs = []
        important_files = []
        tree_paths = []

    latest_release_tag, latest_release_url = client.get_latest_release(owner, name)
    latest_commit_sha, latest_commit_date, latest_commit_message = client.get_latest_commit_on_branch(owner, name, default_branch)

    homepage = normalize_homepage(repo.get("homepage"))
    pages_url = None

    # Heuristic: if repo looks like GitHub Pages, guess URL.
    if repo.get("has_pages") or name.endswith(".github.io"):
        if name.endswith(".github.io"):
            pages_url = f"https://{owner}.github.io/"
        else:
            pages_url = guess_pages_url(owner, name)

    detected_stack = detect_stack(repo, tree_paths, readme_text)
    deployment_hints, deployment_links = detect_deployment_hints(tree_paths, readme_text, homepage, pages_url)
    notes = choose_notes(repo, readme_text, tree_truncated, deployment_links)

    return RepoSummary(
        source_type=source_type,
        source_name=source_name,
        full_name=full_name,
        html_url=repo.get("html_url"),
        name=name,
        private=bool(repo.get("private", False)),
        archived=bool(repo.get("archived", False)),
        fork=bool(repo.get("fork", False)),
        created_at=repo.get("created_at"),
        updated_at=repo.get("updated_at"),
        pushed_at=repo.get("pushed_at"),
        description=repo.get("description"),
        default_branch=default_branch,
        homepage=homepage,
        pages_url=pages_url,
        stars=int(repo.get("stargazers_count", 0)),
        watchers=int(repo.get("watchers_count", 0)),
        forks=int(repo.get("forks_count", 0)),
        open_issues=int(repo.get("open_issues_count", 0)),
        size_kb=int(repo.get("size", 0)),
        topics=topics,
        license_name=(repo.get("license") or {}).get("name"),
        primary_language=repo.get("language"),
        languages=languages,
        owner_login=owner,
        has_wiki=bool(repo.get("has_wiki", False)),
        has_projects=bool(repo.get("has_projects", False)),
        has_issues=bool(repo.get("has_issues", False)),
        latest_release_tag=latest_release_tag,
        latest_release_url=latest_release_url,
        latest_commit_sha=latest_commit_sha,
        latest_commit_date=latest_commit_date,
        latest_commit_message=latest_commit_message,
        readme_text=readme_text,
        readme_path=readme_path,
        tree_truncated=tree_truncated,
        total_tree_entries=total_tree_entries,
        top_level_files=top_level_files,
        top_level_dirs=top_level_dirs,
        important_files=important_files,
        detected_stack=detected_stack,
        deployment_hints=deployment_hints,
        deployment_links=deployment_links,
        notes=notes,
    )


def to_markdown(repos: List[RepoSummary]) -> str:
    lines: List[str] = []
    lines.append("# GitHub Deep Inventory\n")
    lines.append(f"Total repositories: **{len(repos)}**\n")

    grouped: Dict[Tuple[str, str], List[RepoSummary]] = {}
    for repo in repos:
        grouped.setdefault((repo.source_type, repo.source_name), []).append(repo)

    for (source_type, source_name), items in sorted(grouped.items()):
        lines.append(f"\n## {source_type.title()}: `{source_name}`\n")
        lines.append(f"Repos: **{len(items)}**\n")

        for r in sorted(items, key=lambda x: (x.source_name, x.name.lower())):
            lines.append(f"\n### {r.full_name}\n")
            lines.append(f"- **Repo link:** {r.html_url}")
            if r.homepage:
                lines.append(f"- **Homepage:** {r.homepage}")
            if r.pages_url:
                lines.append(f"- **GitHub Pages guess:** {r.pages_url}")
            if r.deployment_links:
                lines.append(f"- **Deployment links:** {', '.join(r.deployment_links)}")
            lines.append(f"- **Description:** {r.description or '—'}")
            lines.append(f"- **Owner:** {r.owner_login}")
            lines.append(f"- **Primary language:** {r.primary_language or '—'}")
            lines.append(f"- **Detected stack:** {', '.join(r.detected_stack) if r.detected_stack else '—'}")
            lines.append(f"- **Topics:** {', '.join(r.topics) if r.topics else '—'}")
            lines.append(f"- **License:** {r.license_name or '—'}")
            lines.append(f"- **Stars / Forks / Watchers:** {r.stars} / {r.forks} / {r.watchers}")
            lines.append(f"- **Open issues:** {r.open_issues}")
            lines.append(f"- **Archived / Fork / Private:** {r.archived} / {r.fork} / {r.private}")
            lines.append(f"- **Created / Updated / Pushed:** {r.created_at} / {r.updated_at} / {r.pushed_at}")
            lines.append(f"- **Default branch:** {r.default_branch or '—'}")
            lines.append(f"- **Latest release:** {r.latest_release_tag or '—'}")
            if r.latest_release_url:
                lines.append(f"- **Latest release link:** {r.latest_release_url}")
            lines.append(f"- **Latest commit date:** {r.latest_commit_date or '—'}")
            lines.append(f"- **Latest commit SHA:** {r.latest_commit_sha or '—'}")
            lines.append(f"- **Latest commit message:** {(r.latest_commit_message or '—').splitlines()[0]}")
            lines.append(f"- **README path:** {r.readme_path or '—'}")
            lines.append(f"- **Tree entries:** {r.total_tree_entries} {'(truncated)' if r.tree_truncated else ''}")
            lines.append(f"- **Top-level dirs:** {', '.join(r.top_level_dirs) if r.top_level_dirs else '—'}")
            lines.append(f"- **Top-level files:** {', '.join(r.top_level_files) if r.top_level_files else '—'}")
            lines.append(f"- **Important files:** {', '.join(r.important_files) if r.important_files else '—'}")
            lines.append(f"- **Deployment hints:** {', '.join(r.deployment_hints) if r.deployment_hints else '—'}")

            if r.notes:
                lines.append(f"- **Notes:** {' | '.join(r.notes)}")

            lines.append("\n#### README excerpt\n")
            excerpt = (r.readme_text or "").strip()
            if not excerpt:
                lines.append("_No README text found._\n")
            else:
                excerpt = excerpt[:3000]
                lines.append("```markdown")
                lines.append(excerpt)
                lines.append("```\n")

    return "\n".join(lines)


def write_csv(path: str, repos: List[RepoSummary]) -> None:
    fieldnames = [
        "source_type", "source_name", "full_name", "html_url", "homepage", "pages_url",
        "description", "owner_login", "primary_language", "detected_stack",
        "topics", "license_name", "stars", "forks", "watchers", "open_issues",
        "archived", "fork", "private", "created_at", "updated_at", "pushed_at",
        "default_branch", "latest_release_tag", "latest_release_url", "latest_commit_date",
        "latest_commit_sha", "latest_commit_message", "readme_path", "tree_truncated",
        "total_tree_entries", "top_level_dirs", "top_level_files", "important_files",
        "deployment_hints", "deployment_links", "notes",
    ]

    with open(path, "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()

        for r in repos:
            writer.writerow({
                "source_type": r.source_type,
                "source_name": r.source_name,
                "full_name": r.full_name,
                "html_url": r.html_url,
                "homepage": r.homepage,
                "pages_url": r.pages_url,
                "description": r.description,
                "owner_login": r.owner_login,
                "primary_language": r.primary_language,
                "detected_stack": "; ".join(r.detected_stack),
                "topics": "; ".join(r.topics),
                "license_name": r.license_name,
                "stars": r.stars,
                "forks": r.forks,
                "watchers": r.watchers,
                "open_issues": r.open_issues,
                "archived": r.archived,
                "fork": r.fork,
                "private": r.private,
                "created_at": r.created_at,
                "updated_at": r.updated_at,
                "pushed_at": r.pushed_at,
                "default_branch": r.default_branch,
                "latest_release_tag": r.latest_release_tag,
                "latest_release_url": r.latest_release_url,
                "latest_commit_date": r.latest_commit_date,
                "latest_commit_sha": r.latest_commit_sha,
                "latest_commit_message": r.latest_commit_message,
                "readme_path": r.readme_path,
                "tree_truncated": r.tree_truncated,
                "total_tree_entries": r.total_tree_entries,
                "top_level_dirs": "; ".join(r.top_level_dirs),
                "top_level_files": "; ".join(r.top_level_files),
                "important_files": "; ".join(r.important_files),
                "deployment_hints": "; ".join(r.deployment_hints),
                "deployment_links": "; ".join(r.deployment_links),
                "notes": "; ".join(r.notes),
            })


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Deep GitHub repo inventory extractor")
    parser.add_argument("--user", action="append", default=[], help="GitHub username to scan")
    parser.add_argument("--org", action="append", default=[], help="GitHub organization to scan")
    parser.add_argument("--outdir", required=True, help="Output directory")
    parser.add_argument(
        "--token",
        default=os.getenv("GITHUB_TOKEN"),
        help="GitHub token (or set GITHUB_TOKEN env var)",
    )
    parser.add_argument(
        "--include-readme-in-json",
        action="store_true",
        help="Keep full README text in JSON output",
    )
    return parser.parse_args()


def main() -> None:
    args = parse_args()
    os.makedirs(args.outdir, exist_ok=True)

    client = GitHubClient(token=args.token)

    all_repo_objs: List[Tuple[str, str, Dict[str, Any]]] = []

    for username in args.user:
        print(f"[info] Listing repos for user: {username}")
        repos = client.list_user_repos(username)
        for repo in repos:
            all_repo_objs.append(("user", username, repo))

    for org in args.org:
        print(f"[info] Listing repos for org: {org}")
        repos = client.list_org_repos(org)
        for repo in repos:
            all_repo_objs.append(("org", org, repo))

    # Deduplicate by full_name
    deduped: Dict[str, Tuple[str, str, Dict[str, Any]]] = {}
    for source_type, source_name, repo in all_repo_objs:
        deduped[repo["full_name"]] = (source_type, source_name, repo)

    summaries: List[RepoSummary] = []
    total = len(deduped)

    for idx, (full_name, (source_type, source_name, repo)) in enumerate(sorted(deduped.items()), start=1):
        print(f"[{idx}/{total}] Processing {full_name}")
        try:
            summary = collect_repo_summary(client, repo, source_type, source_name)
            summaries.append(summary)
        except Exception as e:
            print(f"[warn] Failed to process {full_name}: {e}", file=sys.stderr)

    # Sort for consistency
    summaries.sort(key=lambda r: (r.source_type, r.source_name.lower(), r.name.lower()))

    # JSON
    json_path = os.path.join(args.outdir, "github_inventory.json")
    json_data = []
    for r in summaries:
        d = asdict(r)
        if not args.include_readme_in_json:
            d["readme_text"] = None
        json_data.append(d)
    with open(json_path, "w", encoding="utf-8") as f:
        json.dump(json_data, f, indent=2, ensure_ascii=False)

    # Markdown
    md_path = os.path.join(args.outdir, "github_inventory.md")
    with open(md_path, "w", encoding="utf-8") as f:
        f.write(to_markdown(summaries))

    # CSV
    csv_path = os.path.join(args.outdir, "github_inventory.csv")
    write_csv(csv_path, summaries)

    # Small stats
    lang_counter = Counter()
    for r in summaries:
        for lang in r.languages:
            lang_counter[lang] += 1

    stats = {
        "total_repositories": len(summaries),
        "sources": {
            "users": args.user,
            "orgs": args.org,
        },
        "top_languages_by_repo_count": lang_counter.most_common(15),
    }
    with open(os.path.join(args.outdir, "stats.json"), "w", encoding="utf-8") as f:
        json.dump(stats, f, indent=2)

    print("\nDone.")
    print(f"- JSON: {json_path}")
    print(f"- Markdown: {md_path}")
    print(f"- CSV: {csv_path}")
    print(f"- Stats: {os.path.join(args.outdir, 'stats.json')}")


if __name__ == "__main__":
    main()