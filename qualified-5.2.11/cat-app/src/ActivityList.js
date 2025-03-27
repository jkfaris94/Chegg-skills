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
      activities.map((description, time) => (
        
        <Activity key={time} {...description} />
     )))};
  return null;
}

export default ActivityList;