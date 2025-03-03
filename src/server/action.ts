"use server";

import { db } from "@/server";
import { todos } from "./schema";
import { revalidatePath } from "next/cache";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";
export const readData = async () => {
  const todos = await db.query.todos.findMany();
  if (!todos) {
    //return [];`
    return { error: "No data found" };
  }
  return { success: todos };
};

export const createData = async (formData: FormData) => {
  const todoTitle = formData.get("todoTitle")?.toString();
  if (!todoTitle) {
    throw new Error("Todo title is required");
  }

  await db.insert(todos).values({ title: todoTitle });
  revalidatePath("/");
  return;
};

export const deleteData = async (formData: FormData) => {
  const id = Number(formData.get("id"));
  if (!id) {
    throw new Error("Todo ID is required");
  }
  await db.delete(todos).where(eq(todos.id, id));
  revalidatePath("/");
  return;
};

export const updateData = async (formData: FormData) => {
  console.log("formData :", formData);
  const todoTitle = formData.get("todoTitle")?.toString();
  const id = Number(formData.get("id"));
  if (!id) {
    throw new Error("Todo ID is required");
   }
  if (!todoTitle) {
    throw new Error("Todo title is required");
  }

  await db.update(todos).set({ title: todoTitle }).where(eq(todos.id, id));
  revalidatePath("/");
  redirect( "/");
  
};
