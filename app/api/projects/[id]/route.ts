import { getProjectById } from "@/lib/projects-db";

type RouteContext = {
  params: Promise<{
    id: string;
  }>;
};

export async function GET(
  request: Request,
  context: RouteContext
) {
  const { id } = await context.params;
  const projectId = Number(id);

  if (!Number.isInteger(projectId) || projectId <= 0) {
    return Response.json(
      { error: "Invalid project ID." },
      { status: 400 }
    );
  }

  const project = getProjectById(projectId);

  if (!project) {
    return Response.json(
      { error: "Project not found." },
      { status: 404 }
    );
  }

  return Response.json(project);
}