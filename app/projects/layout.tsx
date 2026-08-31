import Link from "next/link";

export default function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        <nav
          aria-label="Projects navigation"
          className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
        >
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/projects"
              className="font-semibold text-gray-800 transition hover:text-blue-600"
            >
              Projects
            </Link>

            <Link
              href="/projects/settings"
              className="text-gray-600 transition hover:text-blue-600"
            >
              Settings
            </Link>
          </div>
        </nav>
      </div>

      {children}
    </section>
  );
}