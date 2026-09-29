import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isDashboardPage =
        nextUrl.pathname.startsWith("/dashboard");

      if (isDashboardPage) {
        return isLoggedIn;
      }

      if (
        isLoggedIn &&
        nextUrl.pathname === "/login"
      ) {
        return Response.redirect(
          new URL("/dashboard/projects", nextUrl)
        );
      }

      return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;