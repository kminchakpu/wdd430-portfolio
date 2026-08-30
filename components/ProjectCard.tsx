interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  link,
}: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-4">
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      </div>

      <p className="mb-6 grow leading-7 text-gray-600">
        {description}
      </p>

      <div className="mb-6">
        <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-900">
          Technologies
        </h4>

        <ul className="flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <li
              key={technology}
              className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700"
            >
              {technology}
            </li>
          ))}
        </ul>
      </div>

      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex w-fit items-center rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-600"
        >
          View Project
          <span className="ml-2" aria-hidden="true">
            →
          </span>
        </a>
      )}
    </article>
  );
}