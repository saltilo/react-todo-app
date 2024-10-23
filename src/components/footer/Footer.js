import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <span className="tasks-left">1 item left</span>
      <div className="filters">
        <button className="filter-button selected">All</button>
        <button className="filter-button">Active</button>
        <button className="filter-button">Completed</button>
      </div>
      <button className="filter-button clear-completed">Clear completed</button>
    </footer>
  );
};

export default Footer;
