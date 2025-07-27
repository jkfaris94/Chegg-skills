//Goal: Apply map, filter, find, and reduce to real-world data.

// Prompt:
// Fetch all users from https://jsonplaceholder.typicode.com/users.

// Use map() to return an array of just the names.

// Use filter() to return users who live in a city that starts with "S".

// Use find() to locate the user whose username is "Bret".

// Use reduce() to build an object counting how many users live in each city.

// Bonus:
// Chain methods together and explain the result of each step.
const axios = require("axios");

async function getUsers() {
    const URL = 'https://jsonplaceholder.typicode.com/users';

    try {
        //get user data and destructure 
        const { data: users } = await axios.get(URL);

        //get user names 
        const names = users.map(user => user.name);
        console.log("all names:", names);

        //get users names that live in cities that start with S
        const sCities = users
        .filter(user => user.address.city.startsWith("S"))
        .map(user => user.name);
        console.log("users that live in cities starting with S:", sCities); 

        // find who uses username "Bret"
        const findBret = users
            .find(user => user.username === "Bret");
            console.log("found bret", findBret);

        //count user per city
        const cityCounts = users.reduce((acc, user) => {
            const city = user.address.city;
            acc[city] = (acc[city] || 0) + 1;
            return acc;
        }, {});
        console.log("User count per city:", cityCounts);


    } catch (error) {
        console.error("error fetching users:", error)
    }
}

getUsers();
