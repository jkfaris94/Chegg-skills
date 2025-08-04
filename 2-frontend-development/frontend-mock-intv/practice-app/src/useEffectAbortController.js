import React, { useState, useEffect } from "react";

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    async function fetchUsers() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users", { signal });

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (err) {
        if (err.name === "AbortError") {
          // Fetch aborted — don't set state
          console.log("Fetch aborted");
        } else {
          setError(err.message);
          setLoading(false);
        }
      }
    }

    fetchUsers();

    // Cleanup function: abort fetch on unmount
    return () => {
      controller.abort();
    };
  }, []);

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name} ({user.email})</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;