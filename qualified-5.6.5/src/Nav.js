import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar bg-body-tertiary mb-3">
      <ul className="nav">
        <li className="nav-item">
          <Link className="nav-link link-secondary" to="/">
            Todo List Application
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
