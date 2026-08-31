import { getProjects } from "@/lib/projects-db";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get("type");

  const projects = getProjects(type);

  return Response.json(projects);
}