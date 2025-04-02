import React from "react";

function PostItem({ post, onDelete }) {
  return (
    <li className="post">
      {post.type === "text" ? (
        <p>{post.content}</p>
      ) : (
        <img src={post.content} alt="Post" style={{ maxWidth: "300px" }} />
      )}
      <button name="delete" onClick={onDelete}>Delete</button>
    </li>
  );
}

export default PostItem;