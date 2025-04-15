import { useParams, useNavigate, useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import { deletePost } from "../api";
import NoPostSelectedMessage from "./NoPostSelectedMessage";

function Post() {
  const { postId } = useParams();
  const navigate = useNavigate();
  const { user } = useOutletContext(); // Comes from <Outlet context={{ user }} />
  const [post, setPost] = useState(null);

  // Try to find the post only when user and user.posts are ready
  useEffect(() => {
    if (!user || !Array.isArray(user.posts)) return;

    const foundPost = user.posts.find((p) => p.id === Number(postId));
    setPost(foundPost);
  }, [postId, user]);

  const handleDelete = async () => {
    const confirm = window.confirm("Are you sure you want to delete this post?");
    if (confirm) {
      await deletePost(postId); // Note: JSONPlaceholder doesn't actually delete
      navigate("/"); // ✅ Redirect to home
    }
  };

  // Guard fallback while loading user or posts
  if (!user || !Array.isArray(user.posts)) {
    return <p>Loading post...</p>;
  }

  // Post not found
  if (!post) {
    return <NoPostSelectedMessage />;
  }

  return (
    <article className="col-12 p-4 border">
      <h3 className="display-4 mb-4" data-testid="post-title">{post.title}</h3>
      <p data-testid="post-body">{post.body}</p>
      <button
        className="btn btn-danger"
        onClick={handleDelete}
        data-testid="delete-post-button"
      >
        Delete Post
      </button>
    </article>
  );
}

export default Post;