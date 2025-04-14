import { Link } from "react-router-dom";

/*
  xx?TODO: Change the <a> below to a <Link> to the home page
*/

function NotFound () {
  return (
    <main className="container">
      <p>Page not found!</p>
      <p>
        <Link to="/">Return Home</Link>
      </p>
    </main>
  );
}

export default NotFound;