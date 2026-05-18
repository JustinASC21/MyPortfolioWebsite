import { createFileRoute } from "@tanstack/react-router";
import { Linkedin, Instagram, Mail, Github, ArrowUpRight } from "lucide-react";
import { profile } from "@/content/profile";
import { BentoCard } from "@/components/bento/BentoCard";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Justin Lema Rivera" },
      {
        name: "description",
        content:
          "Get to know Justin Lema Rivera and find the best way to reach him — email, LinkedIn, Instagram, or GitHub.",
      },
      { property: "og:title", content: "Contact — Justin Lema Rivera" },
      {
        property: "og:description",
        content:
          "Say hello, talk distributed systems, or share what you're building.",
      },
    ],
  }),
  component: ContactPage,
});

const socials = [
  { label: "LinkedIn", href: profile.socials.linkedin, Icon: Linkedin, handle: "/in/justin-lema-riv024" },
  { label: "Instagram", href: profile.socials.instagram, Icon: Instagram, handle: "@lejust_just" },
  { label: "GitHub", href: profile.socials.github, Icon: Github, handle: "@JustinASC21" },
];

function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 pt-32 pb-20">
      <header className="animate-fade-in mb-16 max-w-3xl">
        <p className="font-mono-display mb-4 text-xs uppercase tracking-[0.3em] text-accent">
          Get to know me
        </p>
        <h1 className="mb-6 text-balance text-5xl font-extrabold leading-[0.9] tracking-tight md:text-6xl">
          Send a <span className="text-accent">message</span>!
        </h1>
        <p className="text-pretty text-lg leading-relaxed text-foreground/70">
          {profile.contactBlurb}
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-6">
        {/* Email feature */}
        <BentoCard className="animate-fade-in [animation-delay:100ms] col-span-1 flex flex-col justify-between gap-8 border-transparent bg-accent p-10 text-white md:col-span-7 md:p-12">
          <div>
            <p className="font-mono-display mb-4 text-xs uppercase tracking-[0.3em] opacity-70">
              Email
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex flex-wrap items-center gap-3 text-2xl font-bold leading-tight md:text-4xl"
            >
              {profile.email}
              <ArrowUpRight className="size-7 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>
          </div>
          <p className="font-mono-display max-w-md text-sm uppercase tracking-widest opacity-70">
            React out with a message, opportunity, or project idea!
          </p>
        </BentoCard>


        {/* Socials */}
        {socials.map((s, i) => (
          <BentoCard
            key={s.label}
            className="animate-fade-in col-span-1 md:col-span-2"
            style={{ animationDelay: `${300 + i * 100}ms` }}
          >
            <a
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between gap-6 p-8"
            >
              <div className="flex items-center gap-5">
                <div className="grid size-12 place-items-center rounded-2xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                  <s.Icon className="size-5" />
                </div>
                <div>
                  <p className="text-lg font-bold">{s.label}</p>
                  <p className="font-mono-display text-xs text-foreground/40">{s.handle}</p>
                </div>
              </div>
              <ArrowUpRight className="size-5 text-foreground/30 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
            </a>
          </BentoCard>
        ))}
      </div>
    </main>
  );
}