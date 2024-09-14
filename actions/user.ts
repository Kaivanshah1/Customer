"use server";
import { signOut } from "@/auth";
import { signUpSchema, TSignUpSchema } from "@/lib/schema";
import { prisma } from "@/prisma/prisma";
import { redirect } from "next/navigation";
const register = async (formData: TSignUpSchema) => {
  const validateFields = signUpSchema.safeParse(formData);

  if (!validateFields.success) {
    return {
      error: "Invalid fields",
    };
  }

  const { email, password } = formData;

  try {
    await prisma.user.create({
      data: {
        email,
        password,
      },
    });
  } catch (e) {}

  redirect("/dashboard");
};

export default register;

export async function handleSignOut() {
  await signOut();
}
