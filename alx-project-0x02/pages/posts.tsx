import React, { useEffect, useState } from "react";
import PostCard from "../components/common/PostCard";
import { PostProps } from "../interfaces";
import Header from "@/components/layout/Header";

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=6")
      .then((response) => response.json())
      .then((data) =>
        setPosts(
          data.map((post: any) => ({
            title: post.title,
            content: post.body,
            userId: post.userId,
          }))
        )
      );
  }, []);

  return (
    <>
    <Header />
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {posts.map((post, index) => (
        <PostCard 
          key={index}
          title={post.title}
          content={post.content}
          userId={post.userId}
        />
      ))}
    </div>
    </>
  );
};

export default Posts;
