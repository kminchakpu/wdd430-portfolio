import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Settings | Kevin",
  description:
    "Manage and configure settings for the projects section of Kevin's web development portfolio.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ProjectsSettings() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">
        Project Settings
      </h1>
      <p className="mt-4 max-w-2xl text-gray-600">
        This page represents settings for the projects section of the
        portfolio.
      </p>
    </main>
  );
}