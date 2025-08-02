import { useEffect, useState } from "react";
import UserProfile from "./UserProfile";
import { fetchUserWithPosts } from "../api";
import PostList from "./PostList";
import PostsNav from "./PostsNav";
import ErrorMessage from "../common/ErrorMessage";
import { useParams, Link, Outlet } from "react-router-dom";

function User () {
  const [user, setUser] = useState({ posts: [] });
  const [error, setError] = useState(null);
  const {userId} = useParams(); // xxTODO: This ID will need to be pulled from parameters.

  useEffect(() => {
    const abortController = new AbortController();
    fetchUserWithPosts(userId, abortController.signal)
      .then(setUser)
      .catch(setError);

    return () => abortController.abort();
  }, [userId]);

  // TODO: xxChange the link below to go back to the home page.

  if (error) {
    return (
      <ErrorMessage error={error}>
        <p>
          <Link to="/">Return Home</Link>
        </p>
      </ErrorMessage>
    );
  }
  
  return (
    <section className="container">
      <PostsNav />
      {user && 
      <div className="border p-4 h-100 d-flex flex-column">
        <h2 className="mb-3">{user.name}</h2>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <Link className="nav-link" to={`/users/${userId}`}>Profile</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={`/users/${userId}/posts`}>Posts</Link>
          </li>
        </ul>

        {user.id ? (
          <div className="p-4 border border-top-0">
            {/* xTODO: Change to display sub route content */}
            <Outlet context={{ user }}/>
          </div>
        ) : (
          <div className="p-4 border border-top-0">
            <p>Loading...</p>
          </div>
        )}
      </div>
    }
    
    </section>
  );
};

export default User;
