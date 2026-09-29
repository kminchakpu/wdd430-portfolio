import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectForm from "@/components/ProjectForm";
import { getProjectById } from "@/lib/projects-db";

export const metadata: Metadata = {
  title: "Edit Project | Kevin",
  description: "Edit an existing portfolio project.",
  robots: {
    index: false,
    follow: false,
  },
};

interface EditProjectPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditProjectPage({
  params,
}: EditProjectPageProps) {
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
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
          Portfolio Admin
        </p>

        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
          Edit Project
        </h1>

        <p className="mt-3 text-gray-600">
          Update the information for {project.title}.
        </p>
      </div>

      <ProjectForm project={project} />
    </main>
  );
}