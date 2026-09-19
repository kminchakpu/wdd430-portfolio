import { sql } from "@/lib/db";

export interface Project {
  id: number;
  title: string;
  description: string;
  type: "opensource" | "school";
  technologies: string[];
  link?: string;
}

export async function getProjects(
  type?: string | null
): Promise<Project[]> {
  if (type) {
    const projects = await sql`
      SELECT id, title, description, type, technologies, link
      FROM projects
      WHERE type = ${type}
      ORDER BY id ASC
    `;

    return projects as Project[];
  }

  const projects = await sql`
    SELECT id, title, description, type, technologies, link
    FROM projects
    ORDER BY id ASC
  `;

  return projects as Project[];
}

export async function getProjectById(
  id: number
): Promise<Project | null> {
  const projects = await sql`
    SELECT id, title, description, type, technologies, link
    FROM projects
    WHERE id = ${id}
    LIMIT 1
  `;

  if (projects.length === 0) {
    return null;
  }

  return projects[0] as Project;
}