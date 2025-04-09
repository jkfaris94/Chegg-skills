/*
  In a real application, this data could be pulled from an API
  instead of from a file.
*/
import users from "./data/users";

function UserView() {
  const user = {};

  return (
    <>
      <h3>{user.name}</h3>
      <p>
        <span className="text-primary-subtle">Company: </span> {user.company}
      </p>
      <p>
        <span className="text-primary-subtle">Email: </span> {user.email}
      </p>
      <p>
        <span className="text-primary-subtle">Address: </span> {user.address}
      </p>
    </>
  );
}

export default UserView;
