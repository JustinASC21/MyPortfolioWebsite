import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import portrait from "@/assets/portrait.jpeg";
import { profile } from "@/content/profile";
import { experiences } from "@/content/experiences";
import { BentoCard } from "@/components/bento/BentoCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Justin Lema Rivera — About" },
      {
        name: "description",
        content:
          "Justin Lema Rivera, aspiring full stack engineer building distributed systems and considered interfaces.",
      },
      { property: "og:title", content: "Justin Lema Rivera — About" },
      {
        property: "og:description",
        content:
          "Aspiring full stack engineer working on distributed systems, cloud infrastructure, and fluid interfaces.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const current = experiences.find((e) => e.status === "current") ?? experiences[0];

  return (
    <main className="mx-auto max-w-6xl px-6 pt-32 pb-20">
      {/* Intro */}
      <section className="animate-fade-in mb-16">
        <div className="max-w-3xl">
          <h1 className="mb-8 text-balance text-6xl font-extrabold leading-[0.85] tracking-tight md:text-8xl">
            {profile.firstNames} <br/> <span className="text-accent">{profile.surname}</span>
          </h1>
          <p className="text-pretty text-xl font-medium leading-relaxed text-foreground/70 md:text-2xl">
            {profile.shortBio}
          </p>
        </div>
      </section>

      {/* Bento grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
        {/* Portrait */}
        <BentoCard className="animate-fade-in [animation-delay:100ms] group relative col-span-1 overflow-hidden md:col-span-7 md:row-span-2 md:h-[680px]">
          <img
            src={portrait}
            alt="Portrait of Justin Lema Rivera"
            width={1024}
            height={1400}
            className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.04]"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-cocoa/80 via-cocoa/30 to-transparent p-8">
            <p className="font-mono-display mb-2 text-[10px] uppercase tracking-[0.25em] text-white/60">
              Portrait — swap this with your photo
            </p>
            <h2 className="text-2xl font-bold text-white md:text-3xl">{profile.tagline}</h2>
          </div>
        </BentoCard>

        {/* Current focus */}
        <BentoCard className="animate-fade-in [animation-delay:200ms] relative col-span-1 flex flex-col justify-between overflow-hidden border-transparent bg-accent p-10 text-white md:col-span-5">
          <div className="relative z-10">
            <p className="font-mono-display mb-4 text-xs font-medium uppercase tracking-[0.2em] opacity-70">
              Currently
            </p>
            <h3 className="text-3xl font-extrabold leading-[0.95] tracking-tight md:text-4xl">
              {current.role.toUpperCase()}
              <br />
              <span className="opacity-80">@ {current.shortName}</span>
            </h3>
          </div>
          <div className="relative z-10 mt-10 flex flex-wrap gap-2">
            {current.tech.slice(0, 4).map((t) => (
              <span
                key={t}
                className="font-mono-display rounded-lg border border-white/10 bg-white/10 px-3 py-1.5 text-[11px] font-bold backdrop-blur-md"
              >
                {t.toUpperCase()}
              </span>
            ))}
          </div>
          <div className="absolute -bottom-8 -right-8 size-48 rounded-full bg-white/10 blur-3xl" />
        </BentoCard>

        {/* Bio */}
        <BentoCard className="animate-fade-in [animation-delay:300ms] col-span-1 p-8 md:col-span-5 md:p-10">
          <p className="font-mono-display mb-4 text-xs uppercase tracking-widest text-foreground/40">
            About
          </p>
          <p className="text-pretty leading-relaxed text-foreground/80">{profile.longBio}</p>
        </BentoCard>

        {/* CTA */}
        <BentoCard className="animate-fade-in [animation-delay:400ms] col-span-1 flex items-center justify-between gap-4 px-8 py-6 md:col-span-12">
          <p className="font-medium">Want the full story? See what I've been building.</p>
          <Link
            to="/experiences"
            className="font-mono-display inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-background transition-transform hover:scale-[1.02]"
          >
            View experiences →
          </Link>
        </BentoCard>
      </div>
    </main>
  );
}
