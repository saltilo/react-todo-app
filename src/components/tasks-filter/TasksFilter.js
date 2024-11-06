import React from "react";
import "./TasksFilter.css";

const filterButtons = [
  { name: "all", label: "All" },
  { name: "active", label: "Active" },
  { name: "completed", label: "Completed" },
];

const TasksFilter = ({ filter, onFilterChange }) => {
  return (
    <div className="tasks-filter">
      {filterButtons.map(({ name, label }) => {
        const isActive = name === filter;
        const classNames = "filter-button " + (isActive ? "selected" : "");

        return (
          <button
            key={name}
            className={classNames}
            onClick={() => onFilterChange(name)}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
};

export default TasksFilter;
