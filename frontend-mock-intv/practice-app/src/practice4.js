// Day 4: API Hooks + CRUD Actions
// Topics: API integration, buttons, props callback
// Tasks:

// Build a PostList from JSONPlaceholder

// 🎯 Live Coding Challenge: DeletePostButton

// Given a post object and an onDelete(postId) prop, render a delete button.
// When clicked, call onDelete with the correct ID.

// Tests to pass:

// Renders delete button

// Calls onDelete with correct post ID

// Button works for multiple posts

import { useState, useEffect } from "react";


export default function Posts() {
  // Store posts in state
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const controller = new AbortController(); // Create a controller
    const signal = controller.signal;

    // Fetch posts when component mounts
    async function fetchPosts() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", { signal })
        const data = await response.json();

        // Only use the first 5 posts
        setPosts(data.slice(0, 5));

        // Log the posts for debugging (this will log stale state immediately after setPosts)
        console.log("Fetched posts:", data.slice(0, 5));
      } catch (error) {
        if (error.name === "AbortError") {
            console.log("Fetch aborted");
        } else {
            console.error("Error fetching posts", error);
        }
      }
    }

    fetchPosts();

    return () => {
        controller.abort();
    };
  }, []); // empty dependency array means this runs once on mount

  // Handle deleting a post
  async function handleDelete(postId) {
    try {
      // Send DELETE request to API
      await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        method: "DELETE",
      });

      // Optimistically update local state to remove the deleted post
      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
    } catch (error) {
      console.error("Error deleting post", error);
    }
  }

  // Render post list
  return (
    <div>
      <h2>Posts</h2>
      {/* Loop through posts and render each one */}
      {posts.map((post) => (
        <div key={post.id} className="postCard">
          <h4>Title: {post.title}</h4>
          <p>Body: {post.body}</p>
          {/* Call handleDelete with current post ID */}
          <button onClick={() => handleDelete(post.id)}>
            Delete Post {`${post.id}`}
          </button>
        </div>
      ))}
    </div>
  );
}