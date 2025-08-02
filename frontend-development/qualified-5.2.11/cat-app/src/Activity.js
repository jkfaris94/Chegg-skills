import React from "react";
import "./Activity.css";

/*
   TODO: Add the description
*/

function Activity({ time = "All Day", description = "Unknown" }) {
  return (
    <tr className="activity">
    <td className="time">{time}</td>
    <td className="description">{description}</td>
  </tr>
  );
}

export default Activity;