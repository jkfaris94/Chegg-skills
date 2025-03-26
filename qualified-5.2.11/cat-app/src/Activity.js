import React from "react";
import "./Activity.css";

/*
   TODO: Add the description
*/

function Activity({ time = "All Day", description = "Unknown" }) {
  return (
    <li className="activity">
      <div className="time">{time}</div>

    </li>
  );
}

export default Activity;