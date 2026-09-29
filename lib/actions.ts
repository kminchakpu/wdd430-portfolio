"use server";

import { signIn, auth } from "@/auth";
import { AuthError } from "next-auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import {
  createProject as createProjectInDb,
  updateProject as updateProjectInDb,
  deleteProject as deleteProjectInDb,
} from "@/lib/projects-db";

async function requireOwnerSession() {
  const session = await auth();

  if (!session?.user) {
    throw new Error("Not authenticated");
  }

  return session;
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid email or password.";
        default:
          return "Something went wrong.";
      }
    }

    throw error;
  }
}

export async function createProject(formData: FormData) {
  await requireOwnerSession();

  const title = formData.get("title")?.toString().trim();
  const description = formData
    .get("description")
    ?.toString()
    .trim();
  const type = formData.get("type")?.toString();
  const technologiesValue = formData
    .get("technologies")
    ?.toString();
  const link = formData.get("link")?.toString().trim();

  if (!title || !description || !type || !technologiesValue) {
    throw new Error("Missing required project fields");
  }

  if (type !== "opensource" && type !== "school") {
    throw new Error("Invalid project type");
  }

  const technologies = technologiesValue
    .split(",")
    .map((technology) => technology.trim())
    .filter(Boolean);

  if (technologies.length === 0) {
    throw new Error("At least one technology is required");
  }

  await createProjectInDb({
    title,
    description,
    type,
    technologies,
    link: link || undefined,
  });

  revalidatePath("/projects");
  revalidatePath("/projects/opensource");
  revalidatePath("/projects/school");
  revalidatePath("/dashboard/projects");

  redirect("/dashboard/projects");
}

export async function updateProject(
  id: number,
  formData: FormData
) {
  await requireOwnerSession();

  const title = formData.get("title")?.toString().trim();
  const description = formData
    .get("description")
    ?.toString()
    .trim();
  const type = formData.get("type")?.toString();
  const technologiesValue = formData
    .get("technologies")
    ?.toString();
  const link = formData.get("link")?.toString().trim();

  if (!title || !description || !type || !technologiesValue) {
    throw new Error("Missing required project fields");
  }

  if (type !== "opensource" && type !== "school") {
    throw new Error("Invalid project type");
  }

  const technologies = technologiesValue
    .split(",")
    .map((technology) => technology.trim())
    .filter(Boolean);

  if (technologies.length === 0) {
    throw new Error("At least one technology is required");
  }

  const project = await updateProjectInDb(id, {
    title,
    description,
    type,
    technologies,
    link: link || undefined,
  });

  if (!project) {
    throw new Error("Project not found");
  }

  revalidatePath("/projects");
  revalidatePath("/projects/opensource");
  revalidatePath("/projects/school");
  revalidatePath("/dashboard/projects");

  redirect("/dashboard/projects");
}

export async function deleteProject(id: number) {
  await requireOwnerSession();

  const deleted = await deleteProjectInDb(id);

  if (!deleted) {
    throw new Error("Project not found");
  }

  revalidatePath("/projects");
  revalidatePath("/projects/opensource");
  revalidatePath("/projects/school");
  revalidatePath("/dashboard/projects");
}