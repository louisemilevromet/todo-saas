"use server";

import { prisma } from "@/lib/db";
import { redirect } from "next/navigation";
import { getUser } from "./actionsUser";

export const createTask = async (formData: FormData) => {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const completed = formData.get("completed");
  const user = await getUser();
  const userId = user?.id as string;

  await prisma.notes.create({
    data: {
      userId: userId,
      title: title,
      description: description,
      completed: completed === "on",
    },
  });
  redirect("/dashboard/tasks");
};

export const getTasks = async () => {
  const user = await getUser();
  const userId = user?.id as string;
  const notes = await prisma.notes.findMany({
    where: {
      userId: userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return notes;
};

export const deleteTask = async (formData: FormData) => {
  const id = formData.get("id") as string;
  await prisma.notes.delete({
    where: {
      id: id,
    },
  });
  redirect("/dashboard/tasks");
};

export const getTaskById = async (id: string) => {
  const task = await prisma.notes.findUnique({
    where: {
      id: id,
    },
  });
  return task;
};

export const updateTask = async (formData: FormData) => {
  const id = formData.get("id") as string;
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const completed = formData.get("completed");
  await prisma.notes.update({
    where: {
      id: id,
    },
    data: {
      title: title,
      description: description,
      completed: completed === "on",
    },
  });
  redirect("/dashboard/tasks");
};
