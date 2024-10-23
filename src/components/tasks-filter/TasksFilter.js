import React from "react";
import "./TasksFilter.css";

const TasksFilter = () => {
  return (
    <div className="tasks-filter">
      <button className="filter-button">All</button>
      <button className="filter-button">Active</button>
      <button className="filter-button">Completed</button>
    </div>
  );
};

export default TasksFilter;
