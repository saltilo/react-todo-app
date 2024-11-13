/* eslint-disable react/react-in-jsx-scope */
import PropTypes from "prop-types";
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

TasksFilter.propTypes = {
  filter: PropTypes.oneOf(["all", "active", "completed"]),
  onFilterChange: PropTypes.func.isRequired,
};

TasksFilter.defaultProps = {
  filter: "all",
};

export default TasksFilter;
