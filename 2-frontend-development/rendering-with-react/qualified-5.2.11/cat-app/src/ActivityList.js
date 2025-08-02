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
      <div className="activity-list">
      <h4>Daily Activities</h4>
      <ul>
        {activities.map((activity, index) => (
          <Activity key={index} time={activity.time} description={activity.description} />
        ))}
      </ul>
    </div>
          );
        }
  return null;
}

export default ActivityList;