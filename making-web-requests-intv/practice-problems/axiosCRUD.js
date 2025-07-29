// Challenge – CRUD with Axios
// Goal: Practice making API requests and destructuring responses.

// Prompt:
// Create a small app using the JSONPlaceholder API that can:

// xFetch all posts and log their titles.

// xFetch a specific post by postId = 3 and log the title and body.

// Create a new post and log the created object.

// Update post id = 1 with a new title.

// Delete post id = 2.

// Bonus:
// Wrap each action in its own async function and use try/catch to handle errors.



const axios = require("axios");

const URL = "https://jsonplaceholder.typicode.com/posts";


//check data type 
async function seeData() {
    try {
        const data = await axios.get(URL);
        console.log(data)
    } catch (error) {
        console.error("there was an error getting data", error)
    }
}

//fetch all posts and log titles 
async function getPosts() {
    try {
        const { data: posts } = await axios.get(URL);
        const titles = posts.map(post => post.title);
        console.log("all titles", titles)

    } catch (error) {
        console.error("there was an issue fetching posts", error);
    }
}

//get post by ID 
async function getPostByID(id) {
    try {
        const { data: post } = await axios.get(`${URL}/${id}`)
        const title = post.title;
        const body = post.body;
        console.log(`title: ${title}`)
        console.log(`body: ${body}.`)

    } catch (error) {
        console.error(`issue fetching post ${id}`, error)
    }
}

//create new post 
async function create() {

    //set post data
    const postData = {
        title: "test", 
        body: ""
    };

    try {
        const { data: createdPost } = 
        await axios.post(URL, postData)
        console.log(createdPost);

    } catch (error) {
        console.error("error creating post", error)
    }
}

async function update(id) {
    const updatePost = {
        title: "update test"
    };

    try {
        const{ data: updatedPost } =
        await axios.put(`${URL}/${id}`, updatePost)
        console.log(updatedPost);
    } catch (error) {
        console.error("error updating post", error.message);
    }
}


//Delete
async function deletePost(id) {
    try {
        await axios.delete(`${URL}/${id}`)
        console.log("destroyed successful", id)
    } catch (error) {
        console.error("error deleting post", error.message)
    }
}


// seeData();
// getPosts();
// getPostByID(1);
// create();
// update(1);
// deletePost(1);
