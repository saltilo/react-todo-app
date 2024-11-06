import React from "react";
import TasksFilter from "../tasks-filter";
import "./Footer.css";

const Footer = ({ tasksLeft, filter, onFilterChange, onClearCompleted }) => {
  return (
    <footer className="footer">
      <span className="tasks-left">{tasksLeft} item(s) left</span>
      <TasksFilter filter={filter} onFilterChange={onFilterChange} />
      <button
        className="filter-button clear-completed"
        onClick={onClearCompleted}
      >
        Clear completed
      </button>
    </footer>
  );
};

export default Footer;
