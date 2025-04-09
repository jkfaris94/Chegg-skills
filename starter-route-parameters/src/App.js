import { Link, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import UserView from "./UserView";

/*
  In a real application, this data could be pulled from an API
  instead of from a file.
*/
import users from "./data/users";

function App() {
  const links = users.map(({ id, name }) => (
    <li className="nav-item">
      <Link className="nav-link link-primary" key={id} to={`/users/${id}`}>
        {name}
      </Link>
    </li>
  ));

  return (
    <div>
      <Nav />
      <main className="container">
        <div className="row">
          <aside className="border border-secondary-subtle col-xs-6 col-md-3">
            <h2 className="my-4 text-center">Users</h2>
            <ul className="nav flex-column text-center mb-3">{links}</ul>
          </aside>
          <section className="col-xs-6 col-md-9">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/users/:id" element={<UserView />} />
            </Routes>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
