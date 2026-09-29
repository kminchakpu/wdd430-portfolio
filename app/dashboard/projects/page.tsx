import type { Metadata } from "next";
import Link from "next/link";
import { auth } from "@/auth";
import { getProjects } from "@/lib/projects-db";
import SignOutButton from "@/components/SignOutButton";
import DeleteProjectButton from "@/components/DeleteProjectButton";

export const metadata: Metadata = {
  title: "Project Dashboard | Kevin",
  description: "Manage Kevin's portfolio projects.",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function DashboardProjectsPage() {
  const session = await auth();
  const projects = await getProjects();
  const user = session?.user;

  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Portfolio Admin
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
              Project Dashboard
            </h1>
            <p className="mt-3 text-gray-600">
              Manage the projects displayed in your portfolio.
            </p>
          </div>

          <Link
            href="/dashboard/projects/new"
            className="inline-flex w-fit rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Add New Project
          </Link>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                Signed In
              </h2>
              <p className="mt-1 text-gray-600">
                Welcome, {user?.name || "User"}.
              </p>
              {user?.email && (
                <p className="mt-1 text-sm text-gray-500">
                  {user.email}
                </p>
              )}
            </div>

            <SignOutButton />
          </div>
        </div>

        <section>
          <div className="mb-5">
            <h2 className="text-2xl font-bold text-gray-900">
              Manage Projects
            </h2>
            <p className="mt-1 text-gray-600">
              Edit or delete your existing portfolio projects.
            </p>
          </div>

          {projects.length > 0 ? (
            <div className="space-y-4">
              {projects.map((project) => (
                <article
                  key={project.id}
                  className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {project.title}
                      </h3>

                      <p className="mt-1 capitalize text-gray-500">
                        {project.type === "opensource"
                          ? "Open Source"
                          : "School"}
                      </p>

                      <div className="mt-3 flex flex-wrap gap-2">
                        {project.technologies.map(
                          (technology) => (
                            <span
                              key={technology}
                              className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
                            >
                              {technology}
                            </span>
                          )
                        )}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <Link
                        href={`/dashboard/projects/${project.id}/edit`}
                        className="rounded-lg border border-blue-600 px-4 py-2 text-sm font-semibold text-blue-600 transition hover:bg-blue-50"
                      >
                        Edit
                      </Link>

                      <DeleteProjectButton
                        projectId={project.id}
                        projectTitle={project.title}
                      />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-xl border border-gray-200 bg-white p-8 text-center">
              <p className="text-gray-600">
                No projects have been added yet.
              </p>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}