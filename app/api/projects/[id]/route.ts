import { NextResponse } from "next/server";
import { auth } from "@/auth";
import {
  deleteProject,
  getProjectById,
  updateProject,
  type ProjectInput,
} from "@/lib/projects-db";

interface RouteContext {
  params: Promise<{
    id: string;
  }>;
}

export async function GET(
  _request: Request,
  { params }: RouteContext
) {
  const { id } = await params;
  const projectId = Number(id);

  if (Number.isNaN(projectId)) {
    return NextResponse.json(
      { error: "Invalid project ID" },
      { status: 400 }
    );
  }

  const project = await getProjectById(projectId);

  if (!project) {
    return NextResponse.json(
      { error: "Project not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(project);
}

export async function PUT(
  request: Request,
  { params }: RouteContext
) {
  const session = await auth();

  if (!session?.user) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  const { id } = await params;
  const projectId = Number(id);

  if (Number.isNaN(projectId)) {
    return NextResponse.json(
      { error: "Invalid project ID" },
      { status: 400 }
    );
  }

  try {
    const body = (await request.json()) as ProjectInput;

    if (
      !body.title ||
      !body.description ||
      !body.type ||
      !Array.isArray(body.technologies)
    ) {
      return NextResponse.json(
        { error: "Missing required project fields" },
        { status: 400 }
      );
    }

    if (
      body.type !== "opensource" &&
      body.type !== "school"
    ) {
      return NextResponse.json(
        { error: "Invalid project type" },
        { status: 400 }
      );
    }

    const project = await updateProject(projectId, {
      title: body.title.trim(),
      description: body.description.trim(),
      type: body.type,
      technologies: body.technologies,
      link: body.link?.trim() || undefined,
    });

    if (!project) {
      return NextResponse.json(
        { error: "Project not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(project);
  } catch (error) {
    console.error("Error updating project:", error);

    return NextResponse.json(
      { error: "Failed to update project" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  _request: Request,
  { params }: RouteContext
) {
  const session = await auth();

  if (!session?.user) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  const { id } = await params;
  const projectId = Number(id);

  if (Number.isNaN(projectId)) {
    return NextResponse.json(
      { error: "Invalid project ID" },
      { status: 400 }
    );
  }

  try {
    const deleted = await deleteProject(projectId);

    if (!deleted) {
      return NextResponse.json(
        { error: "Project not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: "Project deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting project:", error);

    return NextResponse.json(
      { error: "Failed to delete project" },
      { status: 500 }
    );
  }
}