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

const PROJECTS_PER_PAGE = 4;

export async function fetchFilteredProjects(
  query: string,
  currentPage: number
): Promise<Project[]> {
  const offset = (currentPage - 1) * PROJECTS_PER_PAGE;
  const searchTerm = `%${query}%`;

  const projects = await sql`
    SELECT id, title, description, type, technologies, link
    FROM projects
    WHERE
      title ILIKE ${searchTerm}
      OR description ILIKE ${searchTerm}
      OR type ILIKE ${searchTerm}
      OR EXISTS (
        SELECT 1
        FROM unnest(technologies) AS technology
        WHERE technology ILIKE ${searchTerm}
      )
    ORDER BY id ASC
    LIMIT ${PROJECTS_PER_PAGE}
    OFFSET ${offset}
  `;

  return projects as Project[];
}

export async function fetchProjectsPages(
  query: string
): Promise<number> {
  const searchTerm = `%${query}%`;

  const rows = await sql`
    SELECT COUNT(*) AS count
    FROM projects
    WHERE
      title ILIKE ${searchTerm}
      OR description ILIKE ${searchTerm}
      OR type ILIKE ${searchTerm}
      OR EXISTS (
        SELECT 1
        FROM unnest(technologies) AS technology
        WHERE technology ILIKE ${searchTerm}
      )
  `;

  const totalProjects = Number(rows[0].count);

  return Math.ceil(totalProjects / PROJECTS_PER_PAGE);
}