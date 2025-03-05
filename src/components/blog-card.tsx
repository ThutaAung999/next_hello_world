import Link from "next/link";
import React from "react";

type BlogCardProps = {
  id: number;
  title: string;
  description: string;
};

const BlogCard = ({ id, title, description }: BlogCardProps) => {
  return (
    <div className="mb-4 border-b border-b-gray-300 pb-4">
      <p className="font-bold text-lg ">{title}</p>
      <p className="text-gray-500 text-sm">
        {description.slice(0, 30)}
        <Link className="font-medium text-blue-600 ms-1" href={`post/${id}`}>
          .....See more
        </Link>
      </p>
    </div>
  );
};

export default BlogCard;
