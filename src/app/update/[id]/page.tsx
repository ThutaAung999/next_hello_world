import CustomButton from "@/components/custom-button";
import { updateData } from "@/server/action";

type EditTodoProps = {
  params: Promise<{
    id: string;
  }>;
};
const EditTodo = async ({ params }: EditTodoProps) => {
  const resolvedParams = await params;
  return (
    <main>
      <h2>Update Todo</h2>
      <form action={updateData}>
        <input
          type="text"
          name="id"
          value={resolvedParams.id}
          readOnly
          hidden
        />
        <input
          type="text"
          className="border border-green-600 p-2 rounded-md block mt-2"
          name="todoTitle"
          placeholder="Todo Title"
          required
        />
        <CustomButton label="Edit todo" />
      </form>
    </main>
  );
};

export default EditTodo;
