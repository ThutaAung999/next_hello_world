import { createPost } from "@/server/action";
import React from "react";
import CustomButton from "./custom-button";

const CreateForm = () => {
  return (
    <form action={createPost}>
      <div className="space-y-4 mt-4">
        <input
          required
          placeholder="Title"
          className="bg-transparent w-full border-2 border-blue-600 rounded-md focus:outline-none p-2"
          type="text"
          name="title"
        />
        <textarea
          required
          placeholder="Description"
          className="bg-transparent w-full border-2 border-blue-600 rounded-md focus:outline-none p-2 block"
          name="description"
        />
      </div>
      <div className="flex justify-end">
        <CustomButton label="Create new Post" />
      </div>
    </form>
  );
};

export default CreateForm;
