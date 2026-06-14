import Link from "next/link";
import { Reveal } from "../components/Reveal";
import { HeroSignal } from "../components/HeroSignal";

const evidence = [
  { label: "Smart India Hackathon 2025 — Winner", value: "Dec 2025", tone: "warm" as const },
  { label: "Research Intern — LLM Lens", value: "2026—", tone: "cold" as const },
  { label: "Patent published — Rakshak", value: "Jan 2026", tone: "warm" as const },
  { label: "OpenAI ChatGPT Lab — Student cohort", value: "2025", tone: "warm" as const },
  { label: "arXiv:2604.06277", value: "Paper", tone: "warm" as const },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 sm:pt-36">
      {/* soft nebula glow, low and left — the universe outside the cockpit */}
      <div
        className="pointer-events-none absolute -left-40 top-6 h-[30rem] w-[30rem] rounded-full opacity-[0.22] blur-[130px]"
        style={{ background: "radial-gradient(circle, #6E4FB0, transparent 70%)" }}
        aria-hidden
      />
      {/* abstract star chart — observatory framing behind the signal panel.
          orbital rings + a constellation + a teal trajectory + an amber proof node. */}
      <svg
        className="pointer-events-none absolute right-[-13rem] top-[-7rem] h-[42rem] w-[42rem] opacity-60"
        viewBox="0 0 600 600"
        fill="none"
        aria-hidden
      >
        {/* orbital rings */}
        <circle cx="300" cy="300" r="252" stroke="#2B2740" strokeWidth="1" />
        <circle cx="300" cy="300" r="190" stroke="#1C1830" strokeWidth="1" strokeDasharray="3 8" />
        {/* constellation lines */}
        <g stroke="#2B2740" strokeWidth="1">
          <line x1="300" y1="48" x2="468" y2="160" />
          <line x1="468" y1="160" x2="408" y2="300" />
          <line x1="408" y1="300" x2="500" y2="430" />
          <line x1="408" y1="300" x2="170" y2="372" />
          <line x1="170" y1="372" x2="120" y2="232" />
        </g>
        {/* teal trajectory across the field */}
        <path
          d="M40 470 Q300 360 560 150"
          stroke="#3A8F86"
          strokeWidth="1"
          strokeDasharray="2 6"
          opacity="0.8"
        />
        {/* star nodes */}
        <circle cx="300" cy="48" r="1.8" fill="#8A86A0" />
        <circle cx="500" cy="430" r="1.6" fill="#8A86A0" />
        <circle cx="170" cy="372" r="2" fill="#A589D8" opacity="0.9" />
        <circle cx="120" cy="232" r="1.5" fill="#8A86A0" />
        <circle cx="468" cy="160" r="2.2" fill="#5BD7C8" opacity="0.85" />
        {/* the amber proof node */}
        <circle
          cx="408"
          cy="300"
          r="3.2"
          fill="#F5A524"
          className="animate-twinkle"
          style={{ filter: "drop-shadow(0 0 6px rgba(245,165,36,0.8))" }}
        />
      </svg>

      <div className="shell grid items-center gap-12 pb-20 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <Reveal>
            <p className="label">Shoaib Sadiq Salehmohamed</p>
          </Reveal>
          <Reveal delay={0.04}>
            <p className="mt-2 font-mono text-[0.6rem] tracking-[0.2em] text-muted-2">
              OBSERVATORY · 17.3850°N 78.4867°E · HYDERABAD
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 font-serif text-4xl font-medium leading-[1.06] tracking-tight text-fg sm:text-5xl lg:text-6xl">
              I build AI systems that turn <span className="italic text-muted">uncertainty</span>{" "}
              into{" "}
              <span className="relative whitespace-nowrap italic text-teal">
                usable signal
                <span className="absolute -bottom-1 left-0 h-px w-full bg-teal/40" />
              </span>
              .
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-fg-dim">
              A research intern working on LLM reliability and hallucination detection, a Smart
              India Hackathon 2025 winner, and a full-stack builder shipping products across AI,
              threat intelligence, robotics, and developer tools.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link href="/work" className="btn btn--primary">
                View selected work
              </Link>
              <Link href="/research" className="btn btn--ghost">
                Read research
              </Link>
              <Link
                href="/resume/Shoaib_Sadiq_Salehmohamed_Resume.pdf"
                target="_blank"
                className="link-underline font-mono text-xs uppercase tracking-[0.12em] text-muted"
              >
                Résumé ↗
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.32}>
            <p className="mt-10 font-mono text-[0.7rem] leading-relaxed tracking-[0.06em] text-muted-2">
              <span className="text-teal">Currently:</span> LLM reliability · hallucination
              detection · threat intelligence · full-stack AI products
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="w-full">
          <HeroSignal items={evidence} />
        </Reveal>
      </div>
    </section>
  );
}
