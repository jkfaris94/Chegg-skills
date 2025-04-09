import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function UserProfile() {
  const [user, setUser] = useState({});
  const { userId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const abortController = new AbortController();
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
      signal: abortController.signal,
    })
      .then((response) => response.json())
      .then(setUser)
      .catch((error) => {
        if (error.name !== "AbortError") {
          console.error(error);
        }
      });

    return () => {
      abortController.abort(); // Cancels any pending request or response
    };
  }, [userId]);

  const rows = Object.entries(user).map(([key, value]) => (
    <div key={key}>
      <label>{key}</label>: {JSON.stringify(value)}
      <hr />
    </div>
  ));

 

  const deleteHandler = async () => {
   
    try { 
      const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`,
      { method: "DELETE", }
      );
     
      navigate("/");
    } catch (error) {
      console.error("Error deleting user:", error)
    }
   };
  
  return (
      <div>
        <button type="button" onClick={deleteHandler}>
          Delete
        </button>
        {rows}
      </div>
    );
}

export default UserProfile;
