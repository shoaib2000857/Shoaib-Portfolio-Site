---
name: shoaib-portfolio-design-system
description: The "Celestial Archive / Observatory Noir" design system for the portfolio rebuild
metadata:
  type: project
---

The portfolio was rebuilt (mid-2026) from a discarded neon sci-fi "ShoaibOS" site into **SIGNAL → Celestial Archive / Observatory Noir**: a dark midnight-indigo "research console / private archive" with subtle cosmic atmosphere and cockpit precision.

- **Palette** (tailwind.config.ts): ink `#070A12`, panel `#0F1320`, hairline `#252D40`, fg `#ECEEF4`. Cold accent teal `#5BD7C8` = instruments/signal; warm accent amber `#F5A524` = cockpit indicators / verified proof (RATIONED — only marks real evidence); plum `#8B7BC0` = nebula atmosphere/mystery; crimson `#C8556A` = rare danger/classified.
- **Type**: Fraunces (cinematic serif — hero/chapter titles), Space Grotesk (display — card/UI), Inter (body), JetBrains Mono (all labels/metadata). Via next/font.
- **Signature motif**: the "signal trace" = noise resolving into a clean signal/trajectory ([SignalDivider.tsx], [Pipeline.tsx], [HeroSignal.tsx]). Doubles as flight path / orbit.
- **Atmosphere**: [CosmicBackground.tsx] = perf canvas starfield (twinkle, drift, pointer parallax, rare trajectory streak), reduced-motion + tab-hidden aware. Nebula blooms via CSS body gradient.
- **Worldbuilding**: sections are "archive entries" with mono mission-readout meta (SECTOR/CLASS/VECTOR); cards = "declassified access panels" (`.panel--archive` scan-sweep on hover).
- **Easter eggs**: footer constellation — the amber star opens an "Afterword" modal ([FooterConstellation.tsx]); per-case-study "classified → declassify" field notes ([Declassify.tsx], `fieldNote` in content.ts); city coordinates (Hyderabad in hero, Chennai in footer).

Stack: Next.js 14 app router, TS, Tailwind, Framer Motion. No path alias. Routes: `/`, `/work` + `/work/[slug]`, `/research`, `/proof`, `/about`. Content in app/data/{content.ts, portfolio.ts}. `next/font/google` fetches at build → needs network at build time. Related: [[shoaib-aesthetic-taste]].
