import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import {
  createProject,
  getProjects,
  type ProjectInput,
} from "@/lib/projects-db";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get("type");

  const projects = await getProjects(type);

  return NextResponse.json(projects);
}

export async function POST(request: NextRequest) {
  const session = await auth();

  if (!session?.user) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
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

    const project = await createProject({
      title: body.title.trim(),
      description: body.description.trim(),
      type: body.type,
      technologies: body.technologies,
      link: body.link?.trim() || undefined,
    });

    return NextResponse.json(project, {
      status: 201,
    });
  } catch (error) {
    console.error("Error creating project:", error);

    return NextResponse.json(
      { error: "Failed to create project" },
      { status: 500 }
    );
  }
}