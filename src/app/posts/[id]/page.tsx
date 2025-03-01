import React from "react";

type PostProps = {
    params: Promise<{
        id :string;
    }>;
}

const Post = async ({params}:PostProps) => {
    const resolvedParams =await  params;
    console.log("params.id :",resolvedParams.id);
    console.log("Post Page");
  return (
    <div>
      <h2>{Date.now()}</h2>
    </div>
  );
};

export default Post;
