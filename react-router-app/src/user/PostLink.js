import { useParams, Link } from "react-router-dom";

/*
  xxTODO: Change the below to be a link that goes to the specific post route using the post id. Hint: you can use the `useParams()` hook from "react-router-dom" to get the current userId.
*/

function PostLink ({ post }) {
  const { userID } = useParams();
  return (
    <li className="list-group-item text-truncate">
      <Link>{`/users/${userID}/posts/${post.id}`}</Link>
    </li>
  );
};

export default PostLink;
