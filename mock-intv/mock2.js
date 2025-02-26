const axios = require("axios");

const url = "https://jsonplaceholder.typicode.com/posts";

async function test() {
    try {
        const response = await axios.get(url);
        console.log("response", response.data.map(post => [post.title, post.id]));
  //      return response.data.map
      } catch (error) {
        console.error(error);
      }
}

test();