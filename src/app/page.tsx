import { getPosts } from "../server/action";
import BlogCard from "@/components/blog-card";
export default async function Home() {
  const { error, success } = await getPosts();
  if (error) {
    throw new Error(error);
  }

  return (
    <main className="mt-4">
      <h1 className="title-text">Recent Blogs</h1>
      {success?.length === 0 && (
        <p className="text-sm font-medium">No post found</p>
      )}
      {success?.map((post) => (
        <BlogCard
          key={post.id}
          id={post.id}
          title={post.title}
          description={post.description}
        />
      ))}
      <div className="mt-2"></div>x
    </main>
  );
}
