const axios = require("axios");

async function getPosts() {
    try {
         // 1. Get all posts from the API
        const { data: posts} = await axios.get("https://jsonplaceholder.typicode.com/posts");
        
        // 2. Find the post with a specific title
        const foundPost = posts 
            .find(post => post.title === "qui est esse");
        
        // If not found, exit early
        if (!foundPost) {
            console.log("could not find post with that title");
            return
        }

        // 3. Store the ID of the found post
        const postId = foundPost.id;
        console.log("found the post:", foundPost);

        // 4. Fetch comments for that post ID
        const { data: comments } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);

        // 5. Loop through each comment and log name + email
        console.log(`📨 Comments for post "${foundPost.title}":\n`);
        comments.forEach(comment => {
            console.log(`🧑 Name: ${comment.name}`);
            console.log(`📧 Email: ${comment.email}`);
            console.log("---------------------");
        })


    } catch (error) {
        // 6. Catch and log any errors
        console.error("error fetching posts", error.message);
    }

}

getPosts();






// 🧪 Requirements
// Fetch all posts, and find the post with the title "qui est esse".

// Get all comments for that specific post.

// Log the names and emails of the commenters.

// Bonus: Create a function that accepts a post title and performs this whole flow dynamically.

// 🔧 API Reference
// Posts: https://jsonplaceholder.typicode.com/posts

// Comments for post 2: https://jsonplaceholder.typicode.com/posts/2/comments