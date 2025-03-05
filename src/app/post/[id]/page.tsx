import { deletePost, getPost } from "@/server/action";
import Link from "next/link";

type PostProps = {
  params: Promise<{
    id: string;
  }>;
};

const Post = async ({ params }: PostProps) => {
  const resolvedParams = await params;
  const { success } = await getPost(Number(resolvedParams.id));

  const { title, description } = success;
  return (
    <div className="mt-4">
      <h2 className="text-lg font-medium ">{title}</h2>
      <p className="text-sm">{description}</p>

      <div className="flex mt-4 gap-2">
        <Link
          href={`/update/${resolvedParams.id}`}
          className="bg-blue-600 text-sm font-medium text-white p-2 rounded-md"
        >
          Edit Post
        </Link>
        <form action={deletePost}>
          <input type="hidden" name="id" value={resolvedParams.id} readOnly />
          <button
            type="submit"
            className="bg-red-600 text-sm font-medium text-white p-2 rounded-md"
          >
            Delete Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default Post;
