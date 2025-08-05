import { useState } from "react";
function PostDetail({ post }) {
  /*
    Replace the static information below with the relevant post information.
    When the "Show Comments" button is clicked, a list of all comments from 
    the `/posts/${postId}/comments` path should be dislpayed within the
    `.comment-list` unordered list.
  */
  
 const [comments, setComments] = useState([]);
  
  
  const fetchComments = () => {
  fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then((response) => response.json())
    .then(setComments)
    .catch((error) => {
    console.error("error fetching comments", error)
  })
  }
  
  return (
    <article className="post">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <button onClick={fetchComments}>
        Show Comments
      </button>


      <ul className="comment-list">
          {comments.map((comment) => (
          <li className="comment">
            <h3>{comment.email}</h3>
            <p>{comment.body}</p>
          </li>
          ))}
      </ul>      


      
    </article>
  );
}

export default PostDetail;