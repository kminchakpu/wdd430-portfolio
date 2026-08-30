interface SkillsCardProps {
  title: string;
  skills: string[];
}

export default function SkillsCard({
  title,
  skills,
}: SkillsCardProps) {
  return (
    <section className="mt-10 rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm sm:p-8">
      <h3 className="mb-5 text-2xl font-bold text-gray-900">{title}</h3>

      <ul className="grid gap-3 sm:grid-cols-2">
        {skills.map((skill) => (
          <li
            key={skill}
            className="rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-700 shadow-sm"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}