type Project = {
  id: number;
  title: string;
  description: string;
  type: "opensource" | "school";
  technologies: string[];
  link?: string;
};

async function getSchoolProjects(): Promise<Project[]> {
  const response = await fetch(
    "http://localhost:3000/api/projects?type=school"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch school projects.");
  }

  return response.json();
}

export default async function SchoolProjects() {
  const projects = await getSchoolProjects();

  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">
        School Projects
      </h1>

      <p className="mt-4 max-w-2xl text-gray-600">
        Projects completed as part of my coursework and web development
        studies.
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
          </article>
        ))}
      </div>
    </main>
  );
}