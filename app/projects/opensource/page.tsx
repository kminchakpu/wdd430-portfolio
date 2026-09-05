import type { Metadata } from "next";
import { getProjects } from "@/lib/projects-db";

export const metadata: Metadata = {
  title: "Open Source Projects | Kevin Cross Minchakpu | Web Developer",
  description:
    "Explore Kevin's open source projects and web development work using React, Next.js, TypeScript, JavaScript, APIs, databases, and other modern technologies.",
  keywords: [
    "Kevin Cross Minchakpu",
    "Open Source Projects",
    "Web Development Projects",
    "GitHub Projects",
    "Web Developer Portfolio",
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "REST APIs",
  ],
};

export default function OpenSourceProjects() {
  const projects = getProjects("opensource");

  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">
        Open Source Projects
      </h1>
      <p className="mt-4 max-w-2xl text-gray-600">
        Projects that I have developed or contributed to as part of my web
        development journey.
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
    </main>
  );
}