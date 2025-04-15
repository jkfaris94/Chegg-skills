import PostLink from "./PostLink";
import NoPostSelectedMessage from "./NoPostSelectedMessage";
import { Outlet, useParams, useLocation, useOutletContext  } from "react-router-dom";
import { useEffect, useState } from "react";

/*
  TODO: xxUpdate the below so that the components show on the appropriate route.
  
  Hint: xx you can use the `useParams()` hook from "react-router-dom" to get the userId

  xxThe <NoPostSelectedMessage /> component should show up on the following route:
  /users/:userId/posts

  The <Post /> component should show up on the following route:
  /users/:userId/posts/:postId
*/

function PostList () {
  const { userId } = useParams();
  const location = useLocation();
  const [posts, setPosts] = useState(null);
  const { user } = useOutletContext();
  

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, [userId]);

  const postListRoute = location.pathname === `/users/${userId}/posts`;

  if (!posts || !Array.isArray(posts)) {
    return <p>Loading posts...</p>; 
  }

  const postLinks = posts.map((post) => (
    <PostLink key={post.id} userId={userId} post={post} />
  ));



  return (
    <div className="row pt-2">
      <div className="col-3">
        <ul className="list-group">{postLinks}</ul>
      </div>
      <div className="col-9">
        {postListRoute ? (
          <NoPostSelectedMessage /> 
        ) : (
          <Outlet context={{ user }} />
        )}
      </div>
    </div>
  );
}

export default PostList;
