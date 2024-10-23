import React from "react";
import "./Task.css";

const Task = ({ task }) => {
  return (
    <li className={`task-item ${task.completed ? "completed" : ""}`}>
      {!task.editing && (
        <div className="task-checkbox">
          <input
            type="checkbox"
            id={`checkbox-${task.id}`}
            checked={task.completed}
            readOnly
          />
          <label htmlFor={`checkbox-${task.id}`} />
        </div>
      )}
      <div className="task-text">
        {task.editing ? (
          <input className="task-edit-input" type="text" value={task.text} />
        ) : (
          <span>{task.text}</span>
        )}
      </div>
      {!task.editing && (
        <div className="task-actions">
          <button className="task-edit-button">✎</button>
          <button className="task-delete-button">×</button>
        </div>
      )}
    </li>
  );
};

export default Task;
