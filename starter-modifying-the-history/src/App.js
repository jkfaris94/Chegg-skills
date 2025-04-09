import { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";

import Nav from "./Nav";
import Home from "./Home";
import NoMatch from "./NoMatch";
import UserView from "./UserView";

import userData from "./data/users.json";
import { sortByLastName } from "./util/helpers";

function App() {
  const [users, setUsers] = useState(userData);

  const removeUser = (userId, users) => {
    const index = users.findIndex((user) => user.id === userId);
    users.splice(index, 1);
    setUsers([...users]);
  };

  // Create Users list
  const listItems = users.sort(sortByLastName).map((user) => (
    <li className="nav-item" key={user.id}>
      <Link className="nav-link link-primary" to={`/users/${user.id}`}>
        {user.name}
      </Link>
    </li>
  ));

  return (
    <div>
      <Nav />
      <main className="container">
        <div className="row">
          <aside
            className="border border-secondary-subtle col-xs-6 col-md-3 overflow-auto"
            style={{ maxHeight: "80vh" }}
          >
            <h2 className="my-4 text-center">Users</h2>
            <ul className="nav flex-column text-center mb-3">{listItems}</ul>
          </aside>
          <section className="col-xs-6 col-md-9">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/users/:userId"
                element={<UserView users={users} removeUser={removeUser} />}
              />
              <Route path="*" element={<NoMatch />} />
            </Routes>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
