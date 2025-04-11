import React from "react";
import { Link, useParams, Routes, Route, Outlet } from "react-router-dom";
import users from "./data.json";



export const UserPosts = () => {
  const { userId } = useParams();
  if (!userId) {
    throw new Error("No URL parameter for userId");
  }
  const user = users.find((user) => `${user.id}` === userId);

  const postLinks = user.posts.map((post) => (
    <li key={post.id}>
      <Link to={`/users/${userId}/posts/${post.id}`} data-testid={`user-post-${post.id}`}>
        {post.title}
      </Link>
    </li>
  ));

  return (
    <div>
      <ul>{postLinks}</ul>
      <div>
        {/* TODO: Display Nested Routes" */}
         <Outlet />
      </div>
    </div>
  );
};

export default UserPosts;
