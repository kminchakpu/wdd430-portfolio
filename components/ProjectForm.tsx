"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import type { Project } from "@/lib/projects-db";

interface ProjectFormProps {
  project?: Project;
}

export default function ProjectForm({
  project,
}: ProjectFormProps) {
  const router = useRouter();
  const isEditing = Boolean(project);

  const [title, setTitle] = useState(project?.title || "");
  const [description, setDescription] = useState(
    project?.description || ""
  );
  const [type, setType] = useState<"opensource" | "school">(
    project?.type || "school"
  );
  const [technologies, setTechnologies] = useState(
    project?.technologies.join(", ") || ""
  );
  const [link, setLink] = useState(project?.link || "");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);

    const projectData = {
      title: title.trim(),
      description: description.trim(),
      type,
      technologies: technologies
        .split(",")
        .map((technology) => technology.trim())
        .filter(Boolean),
      link: link.trim(),
    };

    try {
      const url = isEditing
        ? `/api/projects/${project?.id}`
        : "/api/projects";

      const method = isEditing ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(projectData),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Unable to save project.");
        return;
      }

      router.push("/projects/settings");
      router.refresh();
    } catch {
      setError("Something went wrong while saving the project.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
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
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
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
          value={description}
          onChange={(event) =>
            setDescription(event.target.value)
          }
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
          value={type}
          onChange={(event) =>
            setType(
              event.target.value as "opensource" | "school"
            )
          }
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
          type="text"
          value={technologies}
          onChange={(event) =>
            setTechnologies(event.target.value)
          }
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
          type="url"
          value={link}
          onChange={(event) => setLink(event.target.value)}
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
          onClick={() => router.push("/projects/settings")}
          className="rounded-lg border border-gray-300 px-5 py-3 font-semibold text-gray-700 transition hover:bg-gray-50"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}