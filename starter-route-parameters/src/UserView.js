/*
  In a real application, this data could be pulled from an API
  instead of from a file.
*/
import users from "./data/users";
import { useParams } from "react-router-dom";


function UserView() {
  const { id } = useParams();
  
  const user = users.find((user) => user.id === Number(id)) || {};
 

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
