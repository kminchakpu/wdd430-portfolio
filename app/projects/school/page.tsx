import type { Metadata } from "next";
import { Suspense } from "react";
import SchoolProjectList from "./SchoolProjectList";
import SchoolProjectSkeleton from "./SchoolProjectSkeleton";

export const metadata: Metadata = {
  title: "School Projects | Kevin Cross Minchakpu | Web Developer",
  description:
    "Explore Kevin's school projects completed through web development and software development coursework, featuring practical work with modern programming languages, frameworks, APIs, and databases.",
  keywords: [
    "Kevin Cross Minchakpu",
    "School Projects",
    "Software Development Projects",
    "Web Development Projects",
    "Programming Projects",
    "Student Developer",
    "Web Developer Portfolio",
    "Frontend Development",
    "Backend Development",
    "Full Stack Development",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "APIs",
    "Databases",
  ],
};

export default function SchoolProjects() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">
        School Projects
      </h1>
      <p className="mt-4 max-w-2xl text-gray-600">
        Projects completed as part of my coursework and web development
        studies.
      </p>
      <Suspense fallback={<SchoolProjectSkeleton />}>
        <SchoolProjectList />
      </Suspense>
    </main>
  );
}