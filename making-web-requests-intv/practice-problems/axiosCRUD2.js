// 🧪 Practice Prompt: User API with Axios
// Use the JSONPlaceholder Users API to do the following:

// Fetch all users and log their names and emails.

// Get a user by username (e.g. "Bret") and log their name and city.

// Create a new user with a name, email, and city.

// Update an existing user's email by their id.

// Delete a user by id.

// 🔧 API Info
// Base URL: https://jsonplaceholder.typicode.com/users

// Each user object looks like this:

// json
// Copy
// Edit
// {
//   "id": 1,
//   "name": "Leanne Graham",
//   "username": "Bret",
//   "email": "Sincere@april.biz",
//   "address": {
//     "city": "Gwenborough"
//   }
// }


const axios = require("axios");

BASE_URL = "https://jsonplaceholder.typicode.com/users";

// Fetch all users and log their names and emails.
async function getUsers() {
    try {
        const { data: users } = await axios.get(BASE_URL);
        users.forEach(({ name, email} ) => {
            console.log(`name: ${name}, email: ${email}`)
        });
    } catch (error) {
        console.error("there was an error fetching data", error.message);
    }
}

// Get a user by username (e.g. "Bret") and log their name and city.
async function getUserByUsername(username) {
    try {
        const { data: users } = await axios.get(`${BASE_URL}/?username=${username}`);
        
        if (users.length === 0) {
            console.log(`User with username: ${username} not found`);
            return
        }

        const { name, address } = users[0]; //grab first match
        console.log(`Name: ${name}`);
        console.log(`city: ${address.city}`);

    } catch (error) {
        console.error(`error finding username: ${username}`, error.message)
    }
}

// Create a new user with a name, email, and city.
async function createUser() {
    //declare data to post
    const userData = {
        name: "newName",
        email: "bigPimpin@me.com",
        city: "los angeles"
    }

    try {
        const { data: newUser } = await axios.post(BASE_URL, userData);
        console.log(newUser);
    } catch (error) {
        console.error("error creating user", error.message)
    }
}

// Update an existing user's email by their id.
async function updateUser(id) {
    const updateData = {
        email: "yoMamma@me.com"
    }

    try {
        const { data: updateEmail } = await axios.put(`${BASE_URL}/${id}`, updateData);
        console.log(updateEmail);
    } catch (error) {
        console.error("error updating user", error.message)
    }
}

// Delete a user by id.
async function deleteUser(id) {
  try {
    await axios.delete(`${BASE_URL}/${id}`);
    console.log(`User with ID ${id} deleted (pretend).`);
  } catch (error) {
    console.error(`Error deleting user ${id}:`, error.message);
  }
}

//example usages
// getUsers();
// getUserByUsername("Bret");
// createUser();
// updateUser(1);
// deleteUser(1)