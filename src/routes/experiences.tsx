import { createFileRoute, Link } from "@tanstack/react-router";
import feature from "@/assets/feature.jpg";
import { experiences } from "@/content/experiences";
import { ExperienceCard } from "@/components/experience/ExperienceCard";
import { BentoCard } from "@/components/bento/BentoCard";
import Timeline from "@/components/experience/Timeline";

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
  const items = [
    { title: 'May 1940', cardTitle: 'Dunkirk', cardDetailedText: 'Allied evacuation from France' },
    { title: 'June 1944', cardTitle: 'D-Day', cardDetailedText: 'Normandy invasion begins' }
  ];

  return (
    <main className="mx-auto max-w-7xl px-6 pt-32 pb-20">
      <header className="animate-fade-in mb-16 max-w-3xl">
        <p className="font-mono-display mb-4 text-xs uppercase tracking-[0.3em] text-accent">
          Experiences
        </p>
        <h1 className="mb-6 text-balance text-5xl font-extrabold leading-[0.9] tracking-tight md:text-6xl">
          A timeline of my <span className="text-accent">experience</span>.
        </h1>
      </header>

      {/* <section className="mb-16 grid gap-6">
        {experiences.map((exp, i) => (
          <div
            key={exp.id}
            className="animate-fade-in"
            style={{ animationDelay: `${100 + i * 100}ms` }}
          >
            <ExperienceCard exp={exp} index={i} />
          </div>
        ))}
      </section> */}

      <Timeline></Timeline>

      {/* Featured spotlight */}

    </main>
  );
}