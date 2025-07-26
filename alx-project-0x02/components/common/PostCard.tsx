import React from "react";
import { PostProps } from "../../interfaces";

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
  return (
    <div className="border border-black rounded-lg shadow-md p-4 bg-black max-w-md">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-500 mb-2">{content}</p>
      <span className="text-sm text-gray-50">User ID: {userId}</span>
    </div>
  );
};

export default PostCard;
