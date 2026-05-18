import aws from "@/assets/aws.svg";
import ASC from "@/assets/all_star_code.jpg";
import swift from "@/assets/swift.jpg";

export type Experience = {
  id: string;
  role: string;
  company: string;
  shortName: string;
  period: string;
  status?: "current" | "past";
  logoSrc: string;
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
    role: "Software Development Engineer Intern",
    company: "Amazon Web Services",
    shortName: "AWS",
    period: "May 2025 - Aug 2025",
    status: "past",
    logoSrc: aws,
    summary:
      "Worked alongside AWS engineers to revamp the team's codebase and ship customer-facing tooling.",
    highlights: [
      "Partnered with senior engineers to modernize a legacy internal tool, cutting page load times and improving developer onboarding.",
      "Owned a Python service end-to-end — design doc, code review, deployment — that automated previously manual ops work.",
      "Wrote front-end features in NextJS and contributed to design reviews for the team's customer console.",
    ],
    tech: ["Tailwind", "NextJS", "ECS Fargate", "DynamoDB", "RDS", "TypeScript", "AWS"],
  },
  {
    id: "aws",
    role: "Amazon Future Engineer Intern",
    company: "Amazon Web Services",
    shortName: "AWS",
    period: "May 2024 - Aug 2024",
    status: "past",
    logoSrc: aws,
    summary:
      "Developed an automated vulnerability detection application for the AWS Elastic Beanstalk team, to proactively identify security vulnerabilities and improve customer trust",
    highlights: [
      "Engineered a PoC internal console in Python, which streamlined the triage of high-priority platforms issues from CVEs.",
      "Pitched, built, and deployed a React-based UI with AWS Amplify to manage error automation and sustain informational logs.",
    ],
    tech: ["Python", "ECS Fargate", "TypeScript", "AWS"],
  },
  {
    id: "swiftcontrol",
    role: "Backend Developer",
    company: "SwiftControl",
    shortName: "SwiftControl",
    period: "2023 — Present",
    logoSrc: swift,
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
    period: "Jun 2023 - Aug 2023",
    logoSrc: ASC,
    summary:
      "Mentored 60+ students in full-stack development, guiding implmentation of technical concepts during a 6-week intensive",
    highlights: [
      "Mentored students through their first full-stack web projects, from idea to live demo day.",
      "Optimized curriculum and lesson plans in collaboration with Lead Instructors, facilitating code-along lectures and office hours.",
      "Led targeted JavaScript and HTML lectures, with additional instructive help during office hours."
    ],
    tech: ["JavaScript", "HTML", "CSS", "Git"],
  },
  {
    id: "allstarcode",
    role: "Teaching Fellow",
    company: "All Star Code",
    shortName: "All Star Code",
    period: "Jun 2022 - Aug 2022",
    logoSrc: ASC,
    summary:
      "Assisted with mentorshp of 60+ students as a Teaching Fellow. Demonstrated a role model for students during a 6-week intensive.",
    highlights: [
      "Guided technical development of student projects through office hours, and assisted project lifestyles from brainstorming phase to deployment.",
      "Led targeted JavaScript and Git workshops to unblock students who were stuck on tooling.",
      "Embodied the pillars of All Star Code: Dare Greatly, Celebrate Failure, Tell Your Story."
    ],
    tech: ["JavaScript", "HTML", "CSS", "Git"],
  },
];