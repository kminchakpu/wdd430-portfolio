import type { Metadata } from "next";
import { auth } from "@/auth";
import SignOutButton from "@/components/SignOutButton";

export const metadata: Metadata = {
  title: "Project Settings | Kevin",
  description:
    "Manage and configure settings for the projects section of Kevin's web development portfolio.",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function ProjectsSettings() {
  const session = await auth();
  const user = session?.user;

  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Portfolio Admin
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
            Project Settings
          </h1>

          <p className="mt-4 max-w-2xl text-gray-600">
            Manage and configure the projects displayed in your portfolio.
          </p>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900">
            Signed In
          </h2>

          <p className="mt-2 text-gray-600">
            Welcome, {user?.name || "User"}.
          </p>

          {user?.email && (
            <p className="mt-1 text-sm text-gray-500">
              {user.email}
            </p>
          )}

          <div className="mt-6">
            <SignOutButton />
          </div>
        </div>
      </div>
    </main>
  );
}