import { useParams } from "react-router-dom";
import { capitalizePostTitle } from "../../util/helpers";

function UserPost({ users }) {
  const { userId, postId } = useParams();
  const currentUser = users.find(({ id }) => id === userId) || {};
  const currentPost = currentUser.posts.find(({ id }) => id === postId) || {};

  return (
    <>
      <h4>{capitalizePostTitle(currentPost.title)}</h4>
      <p style={{ whiteSpace: "pre-line" }}>{currentPost.content}</p>
    </>
  );
}

export default UserPost;
