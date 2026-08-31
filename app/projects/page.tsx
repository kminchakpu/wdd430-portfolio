type Project = {
  id: number;
  title: string;
  description: string;
  type: "opensource" | "school";
  technologies: string[];
  link?: string;
};

async function getProjects(): Promise<Project[]> {
  const response = await fetch("http://localhost:3000/api/projects");

  if (!response.ok) {
    throw new Error("Failed to fetch projects.");
  }

  return response.json();
}

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <section>
        <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
          Portfolio
        </p>

        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Projects Overview
        </h1>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.id}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <h2 className="text-xl font-bold text-gray-900">
                {project.title}
              </h2>

              <p className="mt-3 text-gray-600">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <p className="mt-4 text-sm font-medium capitalize text-blue-600">
                {project.type}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}