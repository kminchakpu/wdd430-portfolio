import type { Metadata } from "next";
import ProjectForm from "@/components/ProjectForm";

export const metadata: Metadata = {
  title: "Add Project | Kevin",
  description: "Add a new portfolio project.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NewProjectPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
          Portfolio Admin
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
          Add New Project
        </h1>
        <p className="mt-3 text-gray-600">
          Enter the information for your new portfolio project.
        </p>
      </div>

      <ProjectForm />
    </main>
  );
}