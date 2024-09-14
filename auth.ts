import Google from "next-auth/providers/google";
import NextAuth from "next-auth";
import { signUpSchema } from "./lib/schema";
import Credentials from "next-auth/providers/credentials";
import { ZodError } from "zod";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google,
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: { label: "Email", type: "email", placeholder: "Email" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
        },
      },
      authorize: async (credentials) => {
        try {
          let user = null;

          const { email, password } = await signUpSchema.parseAsync(
            credentials
          );

          // logic to salt and hash password
          // const pwHash = saltAndHashPassword(password);

          // logic to verify if the user exists
          // user = await getUserFromDb(email, pwHash);

          if (!user) {
            throw new Error("User not found.");
          }

          // return JSON object with the user data
          return user;
        } catch (error) {
          if (error instanceof ZodError) {
            // Return `null` to indicate that the credentials are invalid
            return null;
          }
        }
      },
    }),
  ],
  callbacks: {
    authorized({ request: { nextUrl }, auth }) {
      const isLoggedIn = !!auth?.user;
      const { pathname } = nextUrl;

      if (pathname === "/") {
        return true; // Anyone can access home page
      }

      if (isLoggedIn && pathname === "/signin") {
        return Response.redirect(new URL("/dashboard", nextUrl));
      }

      return !!auth;
    },
  },
  pages: {
    signIn: "/signin",
  },
});
