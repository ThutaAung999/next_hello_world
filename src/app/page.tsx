import CustomButton from "@/components/custom-button";
import { createData, deleteData, readData } from "../server/action";
import Link from "next/link";
export default async function Home() {
  const { error, success } = await readData();
  if (error) {
    // အလိုအလျောက် error page  ကို render လုပ်သွား
    throw new Error(error);
  }
  //console.log("success :", success);
  return (
    <main>
      <h1 className="text-xl font-bold">Todos</h1>
      {success?.map((todo) => (
        <div key={todo.id} className="grid grid-cols-3 gap-4 ">
          <p>{todo.title}</p>

          <form action={deleteData}>
            <input type="hidden" name="id" value={todo.id} readOnly/>
            <button
              type="submit"
              className="border border-red-500 p-2 rounded-md mt-2"
            >
              Delete
            </button>
          </form>
          <Link
            href={`/update/${todo.id}`}
            className="underline mt-4  text-blue-500"
          >
            Edit
          </Link>
        </div>
      ))}
      <div className="mt-2">
        <form action={createData}>
          <input
            className="border border-spacing-3 mx-4 border-y-green-600 h-8"
            type="text"
            name="todoTitle"
          />
          <CustomButton label="Create new Todo"/>
        </form>
      </div>
    </main>
  );
}
