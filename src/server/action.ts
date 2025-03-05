"use server";

import { db } from "@/server";
import { posts } from "./schema";
import { revalidatePath } from "next/cache";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";
export const getPosts = async () => {
  const posts = await db.query.posts.findMany();
  if (!posts) {
    //return [];`
    return { error: "No post found" };
  }
  return { success: posts };
};

export const getPost = async (id: number) => {
  const post = await db.query.posts.findFirst({ where: eq(posts.id, id) });
  if (!post) {
    redirect("/");
    //return { error: "No post found" };
  }
  return { success: post };
};

export const createPost = async (formData: FormData) => {
  const title = formData.get("title")?.toString();
  const description = formData.get("description")?.toString();
  if (!title || !description) {
    throw new Error("Post title and description are required");
    // error page  သွားရမှာ မဟုတ်ပါဘူး  validation စစ်ရမှာပါ
  }

  await db
    .insert(posts)
    .values({ title: title, description: description })
    .execute();
  revalidatePath("/");
  //တူညီတဲ့ route  မဟုတ်လို့  homepage ပြန်ပို့ပေးရမယ်
  redirect("/");
};

export const deletePost = async (formData: FormData) => {
  const id = Number(formData.get("id"));
  if (!id) {
    throw new Error("Post id  is required");
  }
  await db.delete(posts).where(eq(posts.id, id));
  revalidatePath("/");
  redirect("/");
};

export const updatePost = async (formData: FormData) => {
  const title = formData.get("title")?.toString();
  const description = formData.get("description")?.toString();
  const id = Number(formData.get("id"));
  if (!title || !description || !id) {
    throw new Error("Post id , title and description are required");
  }

  await db
    .update(posts)
    .set({ title: title, description: description })
    .where(eq(posts.id, id));
  revalidatePath("/");
  redirect("/");
};
