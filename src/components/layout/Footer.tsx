import { profile } from "@/content/profile";

export function Footer() {
  return (
    <footer className="relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 border-t border-border px-6 py-12 md:flex-row">
      <p className="font-mono-display text-center text-[10px] uppercase tracking-[0.4em] text-foreground/30 md:text-left">
        © {new Date().getFullYear()} JL.R
      </p>
      <div className="flex gap-8">
        <a
          href={profile.socials.linkedin}
          target="_blank"
          rel="noreferrer"
          className="font-mono-display text-[10px] uppercase tracking-widest text-foreground/40 transition-colors hover:text-accent"
        >
          LinkedIn
        </a>
        <a
          href={profile.socials.github}
          target="_blank"
          rel="noreferrer"
          className="font-mono-display text-[10px] uppercase tracking-widest text-foreground/40 transition-colors hover:text-accent"
        >
          GitHub
        </a>
        <a
          href={`mailto:${profile.email}`}
          className="font-mono-display text-[10px] uppercase tracking-widest text-foreground/40 transition-colors hover:text-accent"
        >
          Email
        </a>
      </div>
    </footer>
  );
}