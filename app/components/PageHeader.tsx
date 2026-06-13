import { SectionLabel } from "./SectionLabel";
import { Reveal } from "./Reveal";

type PageHeaderProps = {
  label: string;
  title: string;
  intro?: string;
};

/** Consistent top-of-page header for sub-routes, clearing the fixed nav. */
export function PageHeader({ label, title, intro }: PageHeaderProps) {
  return (
    <header className="shell pt-32 sm:pt-36">
      <Reveal>
        <SectionLabel>{label}</SectionLabel>
      </Reveal>
      <Reveal delay={0.06}>
        <h1 className="mt-6 max-w-4xl font-display text-4xl font-medium leading-[1.1] tracking-tight text-fg sm:text-5xl">
          {title}
        </h1>
      </Reveal>
      {intro && (
        <Reveal delay={0.12}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-fg-dim">{intro}</p>
        </Reveal>
      )}
    </header>
  );
}
