// ✅ Day 2: useEffect + Conditional Rendering
// Topics: useEffect, side effects, fetch, loading states
// Tasks:

// Build a FetchUser component using useEffect

// 🎯 Live Coding Challenge: QuoteFetcher

// On mount, fetch a random quote from https://api.quotable.io/random and display it.
// Show "Loading..." while fetching.
// Button: "Get New Quote" triggers a refetch.

// Tests to pass:

// Renders loading message initially

// Renders fetched quote

// Button triggers a new fetch


// ***altered example to a different API and used math.random to generate random index to use post over quote
import { useState, useEffect } from "react";


export default function FetchQuote() {
        const [post, setPost] = useState({ title: "", body: "" });
        const [loading, setLoading] = useState(true);

        async function loadPost() {
            try {
            setLoading(true);

            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            if (!response.ok) throw new Error("Fetch failed");

            const data = await response.json();
            const random = data[Math.floor(Math.random() * data.length)];

            setPost({ title: random.title, body: random.body });
            } catch (err) {
            console.error("Fetch error:", err);

            } finally {
            setLoading(false);
            }
        }
  

  useEffect(() => {
    loadPost();
  }, []);

  return (
    <>
      <h2>Amazing Post</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <p>-{post.title}</p>
          <p>"{post.body}"</p>
        </>
      )}
      <button onClick={loadPost}>Get New Post</button>
    </>
  );
}