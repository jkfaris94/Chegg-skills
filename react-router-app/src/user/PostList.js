import Post from "./Post";
import PostLink from "./PostLink";
import NoPostSelectedMessage from "./NoPostSelectedMessage";
import { Outlet } from "react-router-dom";

/*
  TODO: Update the below so that the components show on the appropriate route.
  
  Hint: you can use the `useParams()` hook from "react-router-dom" to get the userId

  The <NoPostSelectedMessage /> component should show up on the following route:
  /users/:userId/posts

  The <Post /> component should show up on the following route:
  /users/:userId/posts/:postId
*/

function PostList ({ posts }) {
  const postLinks = posts.map((post) => (
    <PostLink key={post.id} userId={post.userId} post={post} />
  ));

  return (
    <div className="row pt-2">
      <div className="col-3">
        <ul className="list-group">{postLinks}</ul>
      </div>
      <div className="col-9">
        <NoPostSelectedMessage />
        <Post posts={posts} />
      </div>
      <Outlet />
    </div>
  );
};

export default PostList;
