import type { Metadata } from "next";
import ProjectList from "@/components/ProjectList";

export const metadata: Metadata = {
  title: "Kevin | Web Developer Portfolio",
  description:
    "Explore Kevin's web development portfolio featuring responsive applications built with Next.js, React, TypeScript, JavaScript, APIs, and modern web technologies.",

      keywords: [
    "Kevin",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "JavaScript",
    "Web Development Portfolio",
  ],
};

const projects = [
  {
    title: "WDD 330 TechHub",
    description:
      "A web development project that demonstrates modern JavaScript techniques, dynamic content, API integration, and responsive user interfaces.",
    technologies: ["JavaScript", "HTML", "CSS", "Vite", "API"],
    link: "https://github.com/kminchakpu/wdd330_techhub",
  },
  {
    title: "WDD 430 Portfolio",
    description:
      "A responsive personal portfolio built with Next.js and TypeScript to showcase my web development projects, skills, and experience.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    link: "https://github.com/kminchakpu/wdd430-portfolio",
  },
];

export default function Home() {
  return (
    <main>
      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
              Web Developer
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Hi, I&apos;m Kevin.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600 sm:text-xl">
              I enjoy developing useful, responsive, and user-friendly web
              applications while continuously expanding my skills in modern
              frontend and backend development.
            </p>
          </div>
        </div>
      </section>
      <section
        aria-labelledby="projects-heading"
        className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="mb-8">
          <h2
            id="projects-heading"
            className="text-3xl font-bold tracking-tight text-gray-900"
          >
            My Projects
          </h2>
          <p className="mt-3 max-w-2xl text-gray-600">
            Here are some of the projects I have worked on while developing
            my web development skills.
          </p>
        </div>
        <ProjectList projects={projects} />
      </section>
    </main>
  );
}