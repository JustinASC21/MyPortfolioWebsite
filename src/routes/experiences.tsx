import { createFileRoute, Link } from "@tanstack/react-router";
import feature from "@/assets/feature.jpg";
import { experiences } from "@/content/experiences";
import { ExperienceCard } from "@/components/experience/ExperienceCard";
import { BentoCard } from "@/components/bento/BentoCard";

export const Route = createFileRoute("/experiences")({
  head: () => ({
    meta: [
      { title: "Experiences — Justin Lema Rivera" },
      {
        name: "description",
        content:
          "A timeline of Justin Lema Rivera's engineering work — AWS, SwiftControl, All Star Code — and the projects he's shipped along the way.",
      },
      { property: "og:title", content: "Experiences — Justin Lema Rivera" },
      {
        property: "og:description",
        content:
          "Engineering experience across AWS, SwiftControl, and All Star Code, with the projects, stacks, and outcomes behind each role.",
      },
    ],
  }),
  component: ExperiencesPage,
});

function ExperiencesPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 pt-32 pb-20">
      <header className="animate-fade-in mb-16 max-w-3xl">
        <p className="font-mono-display mb-4 text-xs uppercase tracking-[0.3em] text-accent">
          Experiences
        </p>
        <h1 className="mb-6 text-balance text-5xl font-extrabold leading-[0.9] tracking-tight md:text-6xl">
          A timeline of <span className="text-accent">work</span> I'm proud of.
        </h1>
        <p className="text-pretty text-lg leading-relaxed text-foreground/70">
          The roles, projects, and side quests that have shaped how I build software — from
          mentoring high school students through their first full-stack app to shipping
          high-concurrency Go services in production.
        </p>
      </header>

      <section className="mb-16 grid gap-6">
        {experiences.map((exp, i) => (
          <div
            key={exp.id}
            className="animate-fade-in"
            style={{ animationDelay: `${100 + i * 100}ms` }}
          >
            <ExperienceCard exp={exp} index={i} />
          </div>
        ))}
      </section>

      {/* Featured spotlight */}
      <BentoCard className="animate-fade-in overflow-hidden p-0">
        <div className="grid lg:grid-cols-2">
          <div className="flex flex-col justify-center p-10 lg:p-16">
            <p className="font-mono-display mb-4 text-xs font-bold uppercase tracking-[0.2em] text-accent">
              Featured project
            </p>
            <h3 className="mb-6 text-3xl font-bold leading-tight md:text-4xl">
              SwiftControl gRPC platform
            </h3>
            <p className="mb-8 text-pretty leading-relaxed text-foreground/70">
              A high-concurrency Backend-as-a-Service built for clients who need real-time
              data flow without operating their own infra. Go services, gRPC contracts,
              Kubernetes orchestration.
            </p>
            <Link
              to="/contact"
              className="font-mono-display inline-flex w-fit items-center gap-2 rounded-full bg-accent px-6 py-3 text-xs font-bold uppercase tracking-widest text-white transition-transform hover:scale-[1.02]"
            >
              Talk about it →
            </Link>
          </div>
          <div className="h-[320px] lg:h-auto">
            <img
              src={feature}
              alt="Architectural detail with golden light"
              width={1280}
              height={896}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </BentoCard>
    </main>
  );
}