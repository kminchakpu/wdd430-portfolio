import { signOut } from "@/auth";

export default function SignOutButton() {
  return (
    <form
      action={async () => {
        "use server";

        await signOut({
          redirectTo: "/",
        });
      }}
    >
      <button
        type="submit"
        className="rounded-lg bg-red-600 px-4 py-2 font-semibold text-white transition hover:bg-red-700"
      >
        Sign Out
      </button>
    </form>
  );
}