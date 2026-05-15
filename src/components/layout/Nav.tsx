import { Link } from "@tanstack/react-router";

const links = [
  { to: "/" as const, label: "About" },
  { to: "/experiences" as const, label: "Work" },
  { to: "/contact" as const, label: "Contact" },
];

export function Nav() {
  return (
    <nav className="fixed top-6 left-1/2 z-50 w-full max-w-xl -translate-x-1/2 px-4">
      <div className="flex items-center justify-between rounded-full border border-border bg-white/60 px-6 py-3 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-xl">
        <Link
          to="/"
          className="font-mono-display text-xs font-bold uppercase tracking-tighter text-accent"
        >
          JL.R
        </Link>
        <div className="flex gap-6 sm:gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="font-mono-display text-xs uppercase tracking-widest text-foreground/40 transition-colors hover:text-foreground"
              activeOptions={{ exact: true }}
              activeProps={{ className: "text-foreground" }}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}