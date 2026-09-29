import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectById } from "@/lib/projects-db";

interface ProjectPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const projectId = Number(id);

  if (Number.isNaN(projectId)) {
    return {
      title: "Project Not Found | Kevin",
    };
  }

  const project = await getProjectById(projectId);

  if (!project) {
    return {
      title: "Project Not Found | Kevin",
    };
  }

  return {
    title: `${project.title} | Kevin`,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { id } = await params;
  const projectId = Number(id);

  if (Number.isNaN(projectId)) {
    notFound();
  }

  const project = await getProjectById(projectId);

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <article>
        <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
          {project.type === "opensource"
            ? "Open Source Project"
            : "School Project"}
        </p>

        <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900">
          {project.title}
        </h1>

        <p className="mt-6 text-lg leading-8 text-gray-600">
          {project.description}
        </p>

        <div className="mt-8">
          <h2 className="text-lg font-semibold text-gray-900">
            Technologies
          </h2>

          <div className="mt-3 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>

        {project.link && (
          <div className="mt-8">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              View Project
            </a>
          </div>
        )}

        <div className="mt-10">
          <Link
            href="/projects"
            className="font-semibold text-blue-600 transition hover:text-blue-700"
          >
            ← Back to Projects
          </Link>
        </div>
      </article>
    </main>
  );
}