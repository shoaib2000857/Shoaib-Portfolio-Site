import Link from "next/link";
import { Reveal } from "../components/Reveal";
import { HeroSignal } from "../components/HeroSignal";

const evidence = [
  { label: "Smart India Hackathon 2025 — Winner", value: "Dec 2025", tone: "warm" as const },
  { label: "Research Intern — LLM Lens", value: "2025—", tone: "cold" as const },
  { label: "Patent published — Rakshak", value: "Jan 2026", tone: "warm" as const },
  { label: "OpenAI ChatGPT Lab — Student cohort", value: "2025", tone: "warm" as const },
  { label: "arXiv:2604.06277", value: "Paper", tone: "warm" as const },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 sm:pt-36">
      {/* soft teal glow, low and left, like an instrument's standby light */}
      <div
        className="pointer-events-none absolute -left-40 top-10 h-[28rem] w-[28rem] rounded-full opacity-[0.16] blur-[120px]"
        style={{ background: "radial-gradient(circle, #5BD7C8, transparent 70%)" }}
        aria-hidden
      />
      {/* faint orbital arc — observatory framing, not decoration overload */}
      <svg
        className="pointer-events-none absolute right-[-14rem] top-[-6rem] h-[40rem] w-[40rem] opacity-[0.5]"
        viewBox="0 0 600 600"
        fill="none"
        aria-hidden
      >
        <circle cx="300" cy="300" r="250" stroke="#252D40" strokeWidth="1" />
        <circle cx="300" cy="300" r="190" stroke="#1A2030" strokeWidth="1" strokeDasharray="3 7" />
        <circle cx="300" cy="50" r="2.5" fill="#5BD7C8" opacity="0.7" />
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
