import { useState } from "react";

function PostDetailWithToggle({ post }) {
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);

  const toggleComments = () => {
    if (!showComments && comments.length === 0) {
      // First time fetching
      fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
        .then((response) => response.json())
        .then((data) => {
          setComments(data);
          setShowComments(true);
        })
        .catch((error) => {
          console.error("Error fetching comments", error);
        });
    } else {
      // Toggle visibility
      setShowComments(!showComments);
    }
  };

  return (
    <article className="post">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <button onClick={toggleComments}>
        {showComments ? "Hide Comments" : "Show Comments"}
      </button>

      {showComments && (
        <ul className="comment-list">
          {comments.map((comment) => (
            <li key={comment.id} className="comment">
              <h3>{comment.email}</h3>
              <p>{comment.body}</p>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}

export default PostDetailWithToggle;