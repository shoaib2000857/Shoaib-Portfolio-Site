"use client";

import { motion } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";
import type { LeetCodeStats } from "./lib/leetcode";
import {
  capabilities,
  education,
  experience,
  featuredWork,
  identity,
  papers,
  proofPoints,
  supportingWork,
} from "./data/site";

const navigation = [
  { label: "Work", href: "#work" },
  { label: "Research", href: "#research" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
];

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

function ExternalLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-link ${className}`.trim()}
    >
      <span>{children}</span>
      <Arrow diagonal />
    </a>
  );
}

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <div
      className={`reveal ${className}`.trim()}
      style={{ ["--reveal-delay" as string]: `${delay}s` }}
    >
      {children}
    </div>
  );
}

function SectionTitle({
  index,
  eyebrow,
  title,
  copy,
}: {
  index: string;
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <div className="section-title">
      <div className="section-kicker">
        <span>{index}</span>
        <span>{eyebrow}</span>
      </div>
      <div>
        <h2>{title}</h2>
        {copy && <p>{copy}</p>}
      </div>
    </div>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const close = () => setMenuOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, [menuOpen]);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="nav-shell">
        <a href="#top" className="wordmark" aria-label="Shoaib SSM, back to top">
          <span className="wordmark-mark">S</span>
          <span className="wordmark-copy">
            Shoaib <em>SSM</em>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <a
            href={identity.resume}
            className="resume-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Résumé <Arrow diagonal />
          </a>
          <button
            type="button"
            className="menu-button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <motion.nav
        className="mobile-nav"
        aria-label="Mobile navigation"
        initial={false}
        animate={menuOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, height: "auto", pointerEvents: "auto" },
          closed: { opacity: 0, height: 0, pointerEvents: "none" },
        }}
      >
        {navigation.map((item) => (
          <a href={item.href} key={item.href} onClick={() => setMenuOpen(false)}>
            {item.label}
            <Arrow />
          </a>
        ))}
        <a href="#contact" onClick={() => setMenuOpen(false)}>
          Contact
          <Arrow />
        </a>
      </motion.nav>
    </header>
  );
}

function AmbientCanvas() {
  return (
    <div className="ambient-canvas" aria-hidden="true">
      <div className="nebula nebula-one" />
      <div className="nebula nebula-two" />
      <svg className="orbit-lines" viewBox="0 0 1200 900" preserveAspectRatio="xMidYMid slice">
        <ellipse cx="880" cy="390" rx="470" ry="215" />
        <ellipse cx="880" cy="390" rx="335" ry="150" />
        <path d="M-40 770C245 598 420 700 642 560s346-100 610-278" />
      </svg>
      <div className="grain" />
    </div>
  );
}

const numberFormatter = new Intl.NumberFormat("en-US");

function Hero({ leetcode }: { leetcode: LeetCodeStats }) {
  const heroProof = [
    ...proofPoints,
    {
      value: numberFormatter.format(leetcode.totalSolved),
      label: "LeetCode",
      detail: `${numberFormatter.format(leetcode.contestRating)} rating · top ${leetcode.topPercentage}%`,
      meta: `#${numberFormatter.format(leetcode.contestGlobalRanking)} contest · #${numberFormatter.format(leetcode.profileRanking)} profile`,
      href: identity.leetcode,
      badge: leetcode.badge,
    },
  ];

  return (
    <section className="hero section-frame" id="top">
      <div className="hero-identity">
        <p className="hero-eyebrow">
          <span className="pulse-dot" />
          Hello, I’m
        </p>
        <h1 className="hero-name">
          <span>Shoaib Sadiq</span>
          <span>Salehmohamed.</span>
        </h1>
      </div>

      <div className="hero-bottom-grid">
        <div className="hero-role-block">
          <p className="hero-role">
            AI researcher
            <span>& systems engineer.</span>
          </p>
          <p className="hero-location">Hyderabad, India · 17.3850° N, 78.4867° E</p>
          <p className="current-line">
            <span>Currently</span>
            LLM reliability at LLM Lens · cyber security at AICTE
          </p>
        </div>

        <div className="hero-story">
          <p className="hero-intro">
            I study how language models fail, then build systems that can detect, explain, and act
            on uncertainty—from hallucination probes to cyber-intelligence platforms and autonomous
            machines.
          </p>
          <div className="hero-actions">
            <a href="#work" className="primary-button">
              Explore selected work
              <Arrow />
            </a>
            <a href="#research" className="secondary-button">
              Read the research
            </a>
          </div>
        </div>
      </div>

      <div className="proof-rail">
        {heroProof.map((point, index) => (
          <a
            key={point.label}
            href={point.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`proof-item ${"badge" in point ? "leetcode-proof" : ""}`.trim()}
            style={{ ["--proof-delay" as string]: `${0.32 + index * 0.07}s` }}
            title={
              "badge" in point
                ? `${leetcode.easySolved} easy, ${leetcode.mediumSolved} medium, ${leetcode.hardSolved} hard`
                : undefined
            }
          >
            <span className="proof-value">{point.value}</span>
            <span className="proof-copy">
              <strong>
                {point.label}
                {"badge" in point && <em>{point.badge}</em>}
              </strong>
              <small>{point.detail}</small>
              {"meta" in point && <small>{point.meta}</small>}
            </span>
            <Arrow diagonal />
          </a>
        ))}
      </div>
    </section>
  );
}

function FeaturedWork() {
  return (
    <section id="work" className="section-frame content-section">
      <Reveal>
        <SectionTitle
          index="01"
          eyebrow="Selected work"
          title="Difficult problems, carried across the whole stack."
          copy="A short edit of the work that best represents how I think: research depth, system constraints, and something real at the other end."
        />
      </Reveal>

      <div className="featured-list">
        {featuredWork.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.06}>
            <article className={`featured-project project-${project.kind}`}>
              <div className="project-index">{project.index}</div>
              <div className="project-main">
                <p className="project-subtitle">{project.subtitle}</p>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-flow" aria-label={`${project.title} system flow`}>
                  {project.flow.map((step, stepIndex) => (
                    <span key={step}>
                      {step}
                      {stepIndex < project.flow.length - 1 && <Arrow />}
                    </span>
                  ))}
                </div>
              </div>
              <div className="project-outcome">
                <span>Outcome</span>
                <p>{project.outcome}</p>
                <div className="tag-row">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  <ExternalLink href={project.primaryHref}>{project.primaryLabel}</ExternalLink>
                  {project.secondaryHref && project.secondaryLabel && (
                    <a href={project.secondaryHref} className="quiet-link">
                      {project.secondaryLabel}
                      {project.secondaryHref.startsWith("http") ? <Arrow diagonal /> : <Arrow />}
                    </a>
                  )}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="supporting-grid">
        {supportingWork.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.05}>
            <article className="supporting-card">
              <div className="supporting-card-top">
                <span>{project.label}</span>
                <span>0{index + 4}</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tag-row compact">
                {project.stack.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div className="supporting-links">
                <ExternalLink href={project.href}>Repository</ExternalLink>
                {project.liveHref && (
                  <ExternalLink href={project.liveHref}>Live build</ExternalLink>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <a href="/projects" className="archive-callout">
          <span className="archive-number">69</span>
          <span>
            <strong>Public repositories, properly searchable.</strong>
            <small>
              Personal builds, team projects, coursework, open-source contributions, and
              experiments.
            </small>
          </span>
          <span className="archive-action">
            Open project archive
            <Arrow />
          </span>
        </a>
      </Reveal>
    </section>
  );
}

function Research() {
  return (
    <section id="research" className="section-frame content-section research-section">
      <Reveal>
        <SectionTitle
          index="02"
          eyebrow="Research"
          title="Making model uncertainty observable—and useful."
          copy="My current work asks two complementary questions: what can internal activations tell us, and what can model behavior reveal when those internals are closed?"
        />
      </Reveal>

      <div className="research-intro-grid">
        <Reveal className="research-thesis">
          <p className="quote-mark">“</p>
          <p>
            Detection is only the first step. The useful system is the one that knows whether to
            answer, verify, retrieve evidence, or abstain.
          </p>
          <span>Current research direction</span>
        </Reveal>
        <Reveal className="research-questions" delay={0.08}>
          {[
            "Do hallucination signals transfer across datasets?",
            "What survives a change in model family or generation?",
            "Can a lightweight controller intervene before unreliable text reaches a user?",
          ].map((question, index) => (
            <div key={question}>
              <span>0{index + 1}</span>
              <p>{question}</p>
            </div>
          ))}
        </Reveal>
      </div>

      <div className="paper-list">
        {papers.map((paper, index) => (
          <Reveal key={paper.number} delay={index * 0.08}>
            <article className="paper-card">
              <div className="paper-meta">
                <span>arXiv:{paper.number}</span>
                <span>{paper.date}</span>
              </div>
              <div className="paper-body">
                <div>
                  <h3>{paper.title}</h3>
                  <p>{paper.description}</p>
                  <ExternalLink href={paper.href}>Open on arXiv</ExternalLink>
                </div>
                <div className="paper-metrics">
                  {paper.metrics.map(([value, label]) => (
                    <div key={label}>
                      <strong>{value}</strong>
                      <span>{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section-frame content-section">
      <Reveal>
        <SectionTitle
          index="03"
          eyebrow="Experience"
          title="Research, product work, and technical communities."
        />
      </Reveal>

      <div className="experience-layout">
        <Reveal className="experience-lead">
          <p>
            My best work happens at the seam between a research question and a usable system:
            datasets, models, evaluation, APIs, interfaces, and deployment all informing one
            another.
          </p>
          <div className="availability-card">
            <span className="pulse-dot" />
            <div>
              <strong>Open to focused opportunities</strong>
              <p>Research engineering, applied AI, backend, and ambitious product teams.</p>
            </div>
          </div>
        </Reveal>

        <div className="timeline">
          {experience.map((item, index) => (
            <Reveal key={`${item.role}-${item.org}`} delay={index * 0.04}>
              <article className="timeline-row">
                <div className="timeline-period">{item.period}</div>
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <h3>{item.role}</h3>
                  <p className="timeline-org">{item.org}</p>
                  <p>{item.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section-frame content-section about-section">
      <Reveal>
        <SectionTitle index="04" eyebrow="About" title="Builder first. Student, necessarily." />
      </Reveal>

      <div className="about-grid">
        <Reveal className="about-copy">
          <p className="about-lead">
            I’m pursuing computer science at KMIT and data science at IIT Madras at the same time.
            The dual degree is useful context; the work is the point.
          </p>
          <p>
            I gravitate toward systems where an intelligent model has to survive contact with
            constraints—limited compute, noisy sensors, uncertain data, real users, or a deadline
            that refuses to move.
          </p>
          <p>
            Away from the desk, the same curiosity shows up in aerospace, cars, astronomy, books,
            and an entirely reasonable amount of Star Wars.
          </p>
          <div className="social-links">
            <ExternalLink href={identity.github}>GitHub</ExternalLink>
            <ExternalLink href={identity.linkedin}>LinkedIn</ExternalLink>
            <ExternalLink href={identity.leetcode}>LeetCode</ExternalLink>
          </div>
        </Reveal>

        <Reveal className="education-list" delay={0.06}>
          <p className="mini-heading">Education</p>
          {education.map((item) => (
            <div className="education-item" key={item.school}>
              <div>
                <h3>{item.school}</h3>
                <p>{item.degree}</p>
              </div>
              <div>
                <span>{item.period}</span>
                <strong>{item.score}</strong>
              </div>
            </div>
          ))}
        </Reveal>
      </div>

      <Reveal className="capability-board">
        <div className="capability-heading">
          <span>Working toolchain</span>
          <p>Selected by function, not logo count.</p>
        </div>
        <div className="capability-grid">
          {capabilities.map((group) => (
            <div key={group.label}>
              <h3>{group.label}</h3>
              <p>{group.items.join(" · ")}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section-frame contact-section">
      <Reveal>
        <div className="contact-panel">
          <p className="contact-kicker">Have a difficult system in mind?</p>
          <h2>Let’s build something that deserves to exist.</h2>
          <p>
            I’m open to research collaborations, internships, deep-tech teams, and product work
            where AI has to be more than a demo.
          </p>
          <div className="contact-actions">
            <a href={`mailto:${identity.email}`} className="primary-button">
              Start a conversation
              <Arrow />
            </a>
            <a
              href={identity.resume}
              className="secondary-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download résumé
            </a>
          </div>
          <div className="contact-address">
            <span>{identity.email}</span>
            <span>{identity.location}</span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer section-frame">
      <a href="#top" className="footer-wordmark">
        SSM
        <span>/</span>
        2026
      </a>
      <p>Researching uncertainty. Engineering useful systems.</p>
      <div>
        <a href={identity.github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href={identity.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}

export function Portfolio({ leetcode }: { leetcode: LeetCodeStats }) {
  return (
    <>
      <AmbientCanvas />
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero leetcode={leetcode} />
        <FeaturedWork />
        <Research />
        <Experience />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
