export type Experience = {
  id: string;
  role: string;
  company: string;
  shortName: string;
  period: string;
  status?: "current" | "past";
  summary: string;
  highlights: string[];
  tech: string[];
};

export type School = {
  id: string;
  major: string;
  university: string;
  shortName: string;
  gradDate: string;
  summary: string;
  relevantCourses: string[];
}

export const school: School = {
  id: "stevens",
  major: "CS & Finance",
  university: "Stevens Institute of Technology",
  shortName: "Stevens Institute of Technology",
  gradDate: "Sep 2023 — Present",
  summary:
  "Pursuing B.S. in Computer Science and minor in Finance at Stevens Institute of Technology.",
  relevantCourses: [
  "Algorithms",
  "Operating System",
  ],
}


export const experiences: Experience[] = [
  {
    id: "aws",
    role: "Software Developer Engineer Intern",
    company: "Amazon Web Services",
    shortName: "AWS",
    period: "Summer 2024",
    status: "current",
    summary:
      "Worked alongside AWS engineers to revamp the team's codebase and ship customer-facing tooling.",
    highlights: [
      "Partnered with senior engineers to modernize a legacy internal tool, cutting page load times and improving developer onboarding.",
      "Owned a Python service end-to-end — design doc, code review, deployment — that automated previously manual ops work.",
      "Wrote front-end features in NextJS and contributed to design reviews for the team's customer console.",
    ],
    tech: ["Python", "NextJS", "TypeScript", "AWS"],
  },
  {
    id: "swiftcontrol",
    role: "Backend Developer",
    company: "SwiftControl",
    shortName: "SwiftControl",
    period: "2023 — Present",
    summary:
      "Working alongside team members to deliver a microservice BaaS for clients.",
    highlights: [
      "Designed and shipped Go microservices behind a gRPC API, supporting high-concurrency client workloads.",
      "Helped stand up the team's Kubernetes deployment workflow, including CI, observability, and rollback strategy.",
      "Took on coordination work across engineers — scoping tickets, unblocking reviews, and shaping the BaaS roadmap.",
    ],
    tech: ["Go", "gRPC", "Kubernetes", "Management"],
  },
  {
    id: "allstarcode",
    role: "Teaching Assistant",
    company: "All Star Code",
    shortName: "All Star Code",
    period: "2022 - 2023",
    summary:
      "Worked alongside a team of passionate instructors in a 6-week coding summer intensive for high school students.",
    highlights: [
      "Mentored students through their first full-stack web projects, from idea to live demo day.",
      "Led targeted JavaScript and Git workshops to unblock students who were stuck on tooling.",
      "Built lasting relationships that pulled me deeper into the New York engineering community.",
    ],
    tech: ["JavaScript", "Web Development", "Git"],
  },
];