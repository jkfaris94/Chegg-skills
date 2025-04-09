import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import NoMatch from "./NoMatch";

function App() {
  const [users, setUsers] = useState([]);

  // Load Users
  useEffect(() => {
    const abortController = new AbortController();

    async function loadUsers() {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users`,
          { signal: abortController.signal }
        );

        const users = await response.json();
        setUsers(users);
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error(error);
        }
      }
    }

    loadUsers();

    return () => {
      abortController.abort(); // Cancels any pending request or response
    };
  }, []);

  // Create Users list
  const listItems = users.map((user) => (
    <li className="nav-item" key={user.id}>
      <a className="nav-link link-primary">{user.name}</a>
    </li>
  ));

  return (
    <div>
      <Nav />
      <main className="container">
        <div className="row">
          <aside className="border border-secondary-subtle col-xs-6 col-md-3">
            <h2 className="my-4 text-center">Users</h2>
            <ul className="nav flex-column text-center mb-3">{listItems}</ul>
          </aside>
          <section className="col-xs-6 col-md-9">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<NoMatch />} />
            </Routes>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;