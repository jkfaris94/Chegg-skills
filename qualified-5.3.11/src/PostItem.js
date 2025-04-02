import React from "react";

function PostItem({ post, onDelete }) {
  return (
    <div className="post">
      {post.type === "text" ? (
        <p>{post.content}</p>
      ) : (
        <img src={post.content} alt="Post" style={{ maxWidth: "300px" }} />
      )}
      <br />
      <button name="delete" onClick={onDelete}>Delete</button>
    </div>
  );
}

export default PostItem;