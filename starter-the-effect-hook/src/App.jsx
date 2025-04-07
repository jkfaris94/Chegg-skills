import { useState } from "react";
import CreateProfile from "./CreateProfile";
import UpdateProfile from "./UpdateProfile";

function App() {
  const [user, setUser] = useState({ id: null, username: "", email: "" });  

  return (
    <>
      <header>
        <h1 className="text-center p-5 bg-light text-dark border-bottom border-success-subtle">
          User Profile Example
        </h1>
      </header>
      <main className="w-25 mx-auto my-5">
        {user.id ? (
          <UpdateProfile user={user} setUser={SetUser} />
        ) : (
          <CreateProfile setUser={setUser} />
        )}        
      </main>
    </>
  );
}

export default App;
