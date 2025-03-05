import CustomButton from "@/components/custom-button";
import { getPost, updatePost } from "@/server/action";

type EditTodoProps = {
  params: Promise<{
    id: string;
  }>;
};
const EditPost = async ({ params }: EditTodoProps) => {
  const resolvedParams = await params;

  const {success} = await getPost(Number(resolvedParams.id));

  return (
    <main className="mt-4">
      <h2>Update Post</h2>
      <form action={updatePost}>
        <input
          type="text"
          name="id"
          value={resolvedParams.id}
          readOnly
          hidden
        />

        <div className="space-y-4 mt-4">
          <input
            required
            placeholder="Title"
            className="bg-transparent w-full border-2 border-blue-600 rounded-md focus:outline-none p-2"
            type="text"
            name="title"
            defaultValue={success?.title}
          />
          <textarea
            required
            placeholder="Description"
            className="bg-transparent w-full border-2 border-blue-600 rounded-md focus:outline-none p-2 block"
            name="description"
            rows={5}
            defaultValue={success?.description}
          />
        </div>
        <div className="flex justify-end">
          <CustomButton label="Edit Post" />
        </div>
      </form>
    </main>
  );
};

export default EditPost;
