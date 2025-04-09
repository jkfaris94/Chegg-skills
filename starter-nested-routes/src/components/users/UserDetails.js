import { Link, useNavigate } from "react-router-dom";

function UserDetails({ currentUser, users, removeUser }) {
  const navigate = useNavigate();

  const { id, name = "", email } = currentUser;
  const [first, last] = name.split(" ");

  const manageDeleteUser = () => {
    removeUser(currentUser.id, users);
    navigate("/"); // Send to home page.
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Email</th>
          <th scope="col"></th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr className="align-middle">
          <td>{id}</td>
          <td>{first}</td>
          <td>{last}</td>
          <td>{email}</td>
          <td>
            <button
              className="btn btn-danger btn-sm"
              onClick={manageDeleteUser}
            >
              Delete User
            </button>
          </td>
          <td>
            <Link to="posts" className="btn btn-primary btn-sm">
              Show Posts
            </Link>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default UserDetails;
