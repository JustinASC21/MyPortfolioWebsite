import React from "react";
import { experiences } from "@/content/experiences";
import { ExperienceCard } from "./ExperienceCard";

export default function Timeline() {
  return (
    <div className="relative">
      {/* centered vertical timeline line (hidden on small screens) */}
      <div
        className="hidden md:block absolute top-0 bottom-0 w-[2px] bg-foreground/10"
        style={{ left: "50%", transform: "translateX(-50%)" }}
      />

      <section className="mb-8 grid gap-6">
        {experiences.map((exp, i) => (
          <div
            key={exp.id}
            className="relative animate-fade-in"
            style={{ animationDelay: `${100 + i * 100}ms` }}
          >
            {/* mobile: show period above card */}
            <div className="md:hidden mb-2 text-center">
              <span className="font-mono-display text-sm font-bold text-foreground/60">
                {exp.period}
              </span>
            </div>

            {/* desktop: three columns - left card / center line+date / right card */}
            <div className="w-full">
            {i % 2 === 0 ? (
                <div className="flex justify-start">
                    <div className="md:w-5/8 w-full">
                        <ExperienceCard exp={exp} index={i} />
                    </div>
                </div>
                
                ) : (
                  <div className="w-full" />
                )}
            
            {i % 2 === 0 ? (
              <div className="absolute inset-y-0 left-1/2 hidden pointer-events-none md:block">
                <span className="absolute top-1/2 left-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent z-10" />
                <span className="absolute top-1/2 left-1/2 w-96 ml-10 -translate-y-1/2 font-mono-display text-lg font-bold text-foreground/60">
                  {exp.period}
                </span>
              </div>
            ) : (
              <div className="absolute inset-y-0 left-1/2 hidden pointer-events-none md:block">
                <span className="absolute top-1/2 left-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent z-10" />
                <span className="absolute top-1/2 right-1/2 w-96 mr-10 -translate-y-1/2 text-right font-mono-display text-lg font-bold text-foreground/60">
                  {exp.period}
                </span>
              </div>
            )}

              
            {i % 2 === 1 ? (
                <div className="flex justify-end">
                    <div className="md:w-5/8 w-full flex justify-end">
                        <ExperienceCard exp={exp} index={i} />
                    </div>
                </div>
                ) : (
                  <div className="w-5/8" />
                )}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

