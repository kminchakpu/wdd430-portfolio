import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Kevin Cross Minchakpu | Web Developer",
  description:
    "Get in touch with Kevin Cross Minchakpu to discuss web development opportunities, projects, collaborations, or professional connections.",
  keywords: [
    "Contact Kevin Cross Minchakpu",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Web Development",
    "Web Developer Contact",
  ],
};

export default function Contact() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <section className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
          Get in Touch
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Contact Me
        </h1>
        <p className="mt-4 text-lg leading-8 text-gray-600">
          I would be happy to connect with you. This page will provide more
          information about how you can get in touch with me.
        </p>
      </section>
    </main>
  );
}