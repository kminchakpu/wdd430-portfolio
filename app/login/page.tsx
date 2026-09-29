import type { Metadata } from "next";
import LoginForm from "@/components/LoginForm";

export const metadata: Metadata = {
  title: "Login",
  description: "Sign in to manage portfolio projects.",
};

export default function LoginPage() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-6xl items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-green-600">
            Portfolio Admin
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
            Sign In
          </h1>
          <p className="mt-3 text-gray-600">
            Sign in to manage your portfolio projects.
          </p>
        </div>

        <LoginForm />
      </div>
    </main>
  );
}