// xxTODO: Change the link below to go back to the home page.
import { Link } from "react-router-dom";

function PostsNav () {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/" className="btn btn-link">Go Home</Link>
        </li>
      </ol>
    </nav>
  );
}

export default PostsNav;
