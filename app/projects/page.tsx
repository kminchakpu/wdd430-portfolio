import type { Metadata } from "next";
import { getProjects } from "@/lib/projects-db";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Kevin's web and software development projects, including applications built with React, Next.js, TypeScript, JavaScript, Node.js, APIs, databases, and other modern technologies.",
  keywords: [
    "Kevin",
    "Web Development Projects",
    "Software Development Projects",
    "Programming Projects",
    "Developer Portfolio",
    "Frontend Projects",
    "Backend Projects",
    "Full Stack Projects",
    "React Projects",
    "Next.js Projects",
    "TypeScript Projects",
    "JavaScript Projects",
    "Node.js Projects",
  ],
};

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <section>
        <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
          Portfolio
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Projects Overview
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-600">
          Explore the projects I have worked on while developing my skills in
          modern web development.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.id}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <h2 className="text-xl font-bold text-gray-900">
                {project.title}
              </h2>
              <p className="mt-3 text-gray-600">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
                  >
                    {technology}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-sm font-medium capitalize text-blue-600">
                {project.type}
              </p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-block font-semibold text-blue-600 hover:text-blue-800"
                >
                  View Project
                </a>
              )}
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}