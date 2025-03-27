import React from "react";
import "./HobbyList.css";


/*
TIP: Hobbies function could look like this:
function HobbyList({ hobbies = [] }) {
  if (hobbies && hobbies.length) {
    return (
      <div className="hobbies">
        <h4>Hobbies</h4>
        <ul>
          {hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
      </div>
    );
  }
  return null;
}
*/

function HobbyList({ hobbies = [] }) {
  if (hobbies && hobbies.length) {
    return (
      <div className="hobbies">
        <h4>Hobbies</h4>
        <ul>
          {hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
      </div>
    );
  }
  return null;
}

export default HobbyList;