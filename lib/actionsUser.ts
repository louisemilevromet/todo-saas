"use server";

import { prisma } from "@/lib/db";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/AuthOptions";
import { revalidatePath } from "next/cache";

export const getUser = async () => {
  const session = await getServerSession(authOptions);
  if (!session || !session.user || !session.user.id) {
    redirect("../");
  }
  const id = session.user.id as string;
  const user = await prisma.user.findUnique({
    where: { id },
  });
  return user;
};

export const updateUser = async (formData: FormData) => {
  try {
    const id = formData.get("id") as string;
    const name = formData.get("name") as string;

    const user = await prisma.user.update({
      where: { id },
      data: { name },
    });
    return user;
  } catch (error) {
    console.log("Failed to update user");
  } finally {
    revalidatePath("/dashboard/settings");
  }
};
