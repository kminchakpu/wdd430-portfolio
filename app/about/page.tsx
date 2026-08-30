import SkillsCard from "@/components/SkillsCard";

export default function About() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <section>
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
          About Me
        </p>

        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          A little about my background
        </h1>

        <div className="mt-6 space-y-5 text-lg leading-8 text-gray-600">
          <p>
            I am a web developer who enjoys creating useful, responsive, and
            user-friendly web applications. I am passionate about learning
            new technologies and continuously improving my skills.
          </p>

          <p>
            I am currently expanding my knowledge of frontend and backend
            development, APIs, databases, and modern web development tools.
            Through my projects and coursework, I enjoy turning ideas into
            practical web applications.
          </p>

          <p>
            My goal is to continue developing my technical skills while
            building applications that provide useful and enjoyable
            experiences for users.
          </p>
        </div>
      </section>

      <SkillsCard
        title="My Technical Skills"
        skills={[
          "HTML & CSS",
          "JavaScript",
          "TypeScript",
          "React",
          "Next.js",
          "Tailwind CSS",
          "Node.js",
          "REST APIs",
          "MongoDB",
          "Git & GitHub",
          "Microsoft SQL Server",
          "Postgres SQL",
          "Oracle DB",
          "Python Programming"
        ]}
      />
    </main>
  );
}