/* type PostProps = {
  params: Promise<{
    id: string;
  }>;
};

const Post = async ({ params }: PostProps) => {
  const resolvedParams = await params;
  return (
    <div>
      <h2>Post id {resolvedParams.id}</h2>
    </div>
  );
};

export default Post;
 */

type PostProps = {
  params: {
    id: string;
  };
};

const Post = ({ params }: PostProps) => {
  return (
    <div>
      <h2>Post id {params.id}</h2>
    </div>
  );
};

export default Post;