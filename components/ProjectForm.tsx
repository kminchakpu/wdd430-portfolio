"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  createProject,
  updateProject,
} from "@/lib/actions";
import type { Project } from "@/lib/projects-db";

interface ProjectFormProps {
  project?: Project;
}

export default function ProjectForm({
  project,
}: ProjectFormProps) {
  const router = useRouter();
  const isEditing = Boolean(project);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true);
    setError("");

    try {
      if (project) {
        await updateProject(project.id, formData);
      } else {
        await createProject(formData);
      }
    } catch (error) {
      console.error("Project form error:", error);
      setError("Something went wrong while saving the project.");
      setIsSubmitting(false);
    }
  }

  return (
    <form
      action={handleSubmit}
      className="space-y-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
    >
      <div>
        <label
          htmlFor="title"
          className="mb-2 block font-medium text-gray-900"
        >
          Project Title
        </label>
        <input
          id="title"
          name="title"
          type="text"
          defaultValue={project?.title || ""}
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
        />
      </div>

      <div>
        <label
          htmlFor="description"
          className="mb-2 block font-medium text-gray-900"
        >
          Description
        </label>
        <textarea
          id="description"
          name="description"
          defaultValue={project?.description || ""}
          required
          rows={5}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
        />
      </div>

      <div>
        <label
          htmlFor="type"
          className="mb-2 block font-medium text-gray-900"
        >
          Project Type
        </label>
        <select
          id="type"
          name="type"
          defaultValue={project?.type || "school"}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
        >
          <option value="school">School</option>
          <option value="opensource">Open Source</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="technologies"
          className="mb-2 block font-medium text-gray-900"
        >
          Technologies
        </label>
        <input
          id="technologies"
          name="technologies"
          type="text"
          defaultValue={project?.technologies.join(", ") || ""}
          required
          placeholder="Next.js, TypeScript, PostgreSQL"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
        />
        <p className="mt-2 text-sm text-gray-500">
          Separate technologies with commas.
        </p>
      </div>

      <div>
        <label
          htmlFor="link"
          className="mb-2 block font-medium text-gray-900"
        >
          Project Link
        </label>
        <input
          id="link"
          name="link"
          type="url"
          defaultValue={project?.link || ""}
          placeholder="https://example.com"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
        />
      </div>

      {error && (
        <p
          role="alert"
          className="rounded-lg bg-red-50 p-3 text-sm font-medium text-red-700"
        >
          {error}
        </p>
      )}

      <div className="flex flex-wrap gap-3">
        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting
            ? "Saving..."
            : isEditing
              ? "Update Project"
              : "Add Project"}
        </button>

        <button
          type="button"
          onClick={() => router.push("/dashboard/projects")}
          disabled={isSubmitting}
          className="rounded-lg border border-gray-300 px-5 py-3 font-semibold text-gray-700 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-60"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}