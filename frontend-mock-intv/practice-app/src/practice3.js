// Day 3: Lists, Keys, State Lifting
// Topics: Mapping data, key props, shared state
// Tasks:

// Build a TodoList component with add/remove functionality

// 🎯 Live Coding Challenge: UserListWithFilter

// Given an array of users, display a list.
// Add a text input that filters by name.
// When typing “Al”, show users with “Al” in their name.

// Tests to pass:

// Renders full list

// Filters results based on input

// Case-insensitive matching

import { useState, useEffect } from "react";


// 🎯 Component: UserListWithFilter
// Displays a list of users and lets you filter them by name
export default function UserListWithFilter() {
  // State to hold all users fetched from the API
  const [users, setUsers] = useState([]);

  // State to hold the user's filter input (search text)
  const [filter, setFilter] = useState("");

  // 📦 Fetch users from the API on first render
  useEffect(() => {
    async function fetchUser() {
      try {
        // Make the API request
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        // Parse the JSON data
        const data = await response.json();

        // Set the user list in state
        setUsers(data);
      } catch (error) {
        // Log any errors
        console.error("Error: fetching user data");
      }
    }

    fetchUser(); // Call the function when the component mounts
  }, []); // Empty dependency array → run only once on mount

  // 🔍 Filtered list based on `filter` input (case-insensitive)
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(filter.toLowerCase())
  );

  // 🖼️ UI: input + filtered list of users
  return (
    <>
      <h2>Users</h2>

      {/* Controlled input field for search filter */}
      <input
        placeholder="Search user by name..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)} // Update filter state
      />

      {/* Display the filtered list */}
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> ({user.username})
          </li>
        ))}
      </ul>
    </>
  );
}