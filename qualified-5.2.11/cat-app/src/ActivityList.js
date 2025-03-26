import React from "react";
import Activity from "./Activity";
import "./ActivityList.css";

/*
TODO: Complete ActivityList
TIP: Use the map higher order function:
    {activities.map((activity, index) => (
       <Activity key={index} {...activity} />
    ))}
*/

function ActivityList({ activities = [] }) {
  if (activities && activities.length) {
    return (
      <ul className="activity-list">

      </ul>
    );
  }
  return null;
}

export default ActivityList;