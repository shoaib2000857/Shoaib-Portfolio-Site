type EvidenceTagProps = {
  children: React.ReactNode;
  /** cold = teal tick (system), warm = amber tick (verified proof, the default) */
  tone?: "warm" | "cold";
  className?: string;
};

/** A labelled data-point: WINNER, PATENT, PAPER, DEPLOYED ... */
export function EvidenceTag({ children, tone = "warm", className = "" }: EvidenceTagProps) {
  return (
    <span className={`tag ${tone === "cold" ? "tag--cold" : ""} ${className}`}>{children}</span>
  );
}
