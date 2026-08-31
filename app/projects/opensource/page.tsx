type Project = {
  id: number;
  title: string;
  description: string;
  type: "opensource" | "school";
  technologies: string[];
  link?: string;
};

async function getOpenSourceProjects(): Promise<Project[]> {
  const response = await fetch(
    "http://localhost:3000/api/projects?type=opensource"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch open source projects.");
  }

  return response.json();
}

export default async function OpenSourceProjects() {
  const projects = await getOpenSourceProjects();

  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">
        Open Source Projects
      </h1>

      <p className="mt-4 max-w-2xl text-gray-600">
        Projects that I have developed or contributed to as part of my
        web development journey.
      </p>

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

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-block font-semibold text-blue-600 hover:text-blue-800"
              >
                View Project
              </a>
            )}
          </article>
        ))}
      </div>
    </main>
  );
}