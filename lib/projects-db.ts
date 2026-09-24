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
      ORDER BY id DESC
    `;

    return projects as Project[];
  }

  const projects = await sql`
    SELECT id, title, description, type, technologies, link
    FROM projects
    ORDER BY id DESC
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

/**
 * Fetch projects using search and pagination.
 */
export async function fetchFilteredProjects(
  query: string,
  currentPage: number
): Promise<Project[]> {
  const ITEMS_PER_PAGE = 6;
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  const searchQuery = `%${query}%`;

  const projects = await sql`
    SELECT id, title, description, type, technologies, link
    FROM projects
    WHERE
      title ILIKE ${searchQuery}
      OR description ILIKE ${searchQuery}
      OR type ILIKE ${searchQuery}
    ORDER BY id DESC
    LIMIT ${ITEMS_PER_PAGE}
    OFFSET ${offset}
  `;

  return projects as Project[];
}

/**
 * Get the total number of pages for filtered projects.
 */
export async function fetchProjectsPages(
  query: string
): Promise<number> {
  const ITEMS_PER_PAGE = 6;
  const searchQuery = `%${query}%`;

  const result = await sql`
    SELECT COUNT(*)::int AS count
    FROM projects
    WHERE
      title ILIKE ${searchQuery}
      OR description ILIKE ${searchQuery}
      OR type ILIKE ${searchQuery}
  `;

  const count = Number(result[0]?.count ?? 0);

  return Math.ceil(count / ITEMS_PER_PAGE);
}