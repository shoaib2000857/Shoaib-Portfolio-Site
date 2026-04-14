type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl";

  return (
    <div className={`mb-12 ${alignment}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 font-display text-3xl font-semibold uppercase tracking-[0.18em] text-white md:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-[color:var(--text-secondary)] md:text-lg">
        {description}
      </p>
    </div>
  );
}
