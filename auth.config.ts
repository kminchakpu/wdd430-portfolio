import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;

      const isSettingsPage =
        nextUrl.pathname.startsWith("/projects/settings");

      const isNewProjectPage =
        nextUrl.pathname === "/projects/new";

      const isEditProjectPage =
        /^\/projects\/\d+\/edit$/.test(nextUrl.pathname);

      const isProtected =
        isSettingsPage ||
        isNewProjectPage ||
        isEditProjectPage;

      if (isProtected) {
        if (isLoggedIn) {
          return true;
        }

        return false;
      }

      if (
        isLoggedIn &&
        nextUrl.pathname === "/login"
      ) {
        return Response.redirect(
          new URL("/projects/settings", nextUrl)
        );
      }

      return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;