import { getProjects } from "@/lib/projects-db";

export default async function SchoolProjectList() {
  const projects = await getProjects("school");

  return (
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
  );
}