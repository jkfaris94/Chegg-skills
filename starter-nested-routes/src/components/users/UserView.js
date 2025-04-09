import { useNavigate, useParams, Outlet } from "react-router-dom";

import UserDetails from "./UserDetails";

function UserView({ users, removeUser }) {
  const navigate = useNavigate();

  const { userId } = useParams();
  const currentUser = users.find(({ id }) => id === userId) || {};

  return (
    <div className="px-5">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb justify-content-center">
          <li className="breadcrumb-item">
            <button
              className="btn btn-link p-0 pb-1"
              onClick={() => navigate(-1)}
            >
              Back
            </button>
          </li>
          <li className="breadcrumb-item active">{currentUser.name}</li>
          <li className="breadcrumb-item">
            <button
              className="btn btn-link p-0 pb-1"
              onClick={() => navigate(1)}
            >
              Forward
            </button>
          </li>
        </ol>
      </nav>
      <UserDetails
        currentUser={currentUser}
        users={users}
        removeUser={removeUser}
      />
      <Outlet />
    </div>
  );
}

export default UserView;
