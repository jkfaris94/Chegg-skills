import { Link } from "react-router-dom";

/*
  xxTODO: Change the below to be a link that goes to the specific post route using the post id. Hint: you can use the `useParams()` hook from "react-router-dom" to get the current userId.
*/

function PostLink ({ userId, post }) {
  return (
    <li className="list-group-item text-truncate">
      <Link to={`/users/${userId}/posts/${post.id}`}>
  {post.title}
</Link>
    </li>
  );
};

export default PostLink;
