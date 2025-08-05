import { useEffect, useState } from "react";
import PostDetail from "./PostDetail";

function App() {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
      .then((response) => response.json())
      .then(setPosts)
      .catch((error) => {
        console.log(error)
      });
  }, []);

  /* Hint: Use the map() method to loop through the posts array, returning a PostDetail component for each post */
  return (
    <main>
      <h1>All Posts</h1>
      <section className="post-list">
        {posts.map((post) => (
          <PostDetail key={post.id} post={post} />
        ))}
      </section>
    </main>
  );
}

export default App;