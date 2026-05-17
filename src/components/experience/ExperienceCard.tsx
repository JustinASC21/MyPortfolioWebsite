import type { Experience } from "@/content/experiences";
import { TechChip } from "./TechChip";

export function ExperienceCard({ exp, index }: { exp: Experience; index: number }) {
  return (
    <article className="group w-full md:w-3/4 relative rounded-[2rem] border border-border bg-card/60 p-8 backdrop-blur-sm transition-colors hover:bg-card md:p-10">
      <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
        <div className="flex items-start gap-5">
          <span className="font-mono-display mt-1 text-xs font-bold text-accent">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div>
            <h3 className="text-xl font-bold leading-tight md:text-2xl">{exp.role}</h3>
            <p className="mt-1 text-sm text-foreground/50">{exp.company}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {exp.status === "current" && (
            <span className="font-mono-display rounded bg-accent/10 px-2 py-1 text-[10px] uppercase tracking-widest text-accent">
              Current
            </span>
          )}
        </div>
      </div>

      <p className="mb-6 max-w-2xl text-pretty text-foreground/70">{exp.summary}</p>

      <ul className="mb-8 space-y-3">
        {exp.highlights.map((h) => (
          <li key={h} className="flex max-w-2xl gap-3 text-sm text-foreground/80">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
            <span className="text-pretty leading-relaxed">{h}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2">
        {exp.tech.map((t) => (
          <TechChip key={t} label={t} />
        ))}
      </div>
    </article>
  );
}