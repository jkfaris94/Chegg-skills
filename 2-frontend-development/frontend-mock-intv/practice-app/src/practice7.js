// Build a React app that:

// Fetches posts for a specific user from the JSONPlaceholder API
//https://jsonplaceholder.typicode.com/posts?userId=1

// Displays the post title and body for each post

// Each post has a "Show Comments" button

// When clicked, it fetches and displays that post’s comments

// Comments endpoint:
// https://jsonplaceholder.typicode.com/comments?postId={POST_ID}

import { useState, useEffect } from "react";
import PostComments from "./practice7b";

function App7() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
            .then((response) => response.json())
            .then((data) => setPosts(data))
            .catch((error) => {
                console.error("there was an Error fetching posts", error)
            });
    }, [])

    return (
        <>
        {posts.map((post) => (
            <div key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                <PostComments postId={post.id}/> 
            </div>
        ))}

        </>
    );
}



export default App7;