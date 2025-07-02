"use server";

import prisma from "../lib/prisma";
import { PrismaFormStateTypes } from "../lib/types";

export async function createWaitlist(
  prevState: PrismaFormStateTypes,
  formData: FormData
): Promise<PrismaFormStateTypes> {
  const email = formData.get("email")?.toString();

  if (!email) {
    return { status: "error", message: "Email is required." };
  }

  try {
    await prisma.waitListEmail.create({
      data: {
        email,
      },
    });
    return { status: "success", message: "Success!" };
  } catch (error) {
    console.error("Error saving your waitlist:", error);
    return { status: "error", message: "Failed!" };
  }
}
