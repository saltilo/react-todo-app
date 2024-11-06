import React from "react";
import { formatDistanceToNow } from "date-fns";
import "./Task.css";

const Task = ({ task, toggleTaskCompletion, deleteTask }) => {
  const { id, text, completed, editing, createdAt } = task;

  const timeAgo = formatDistanceToNow(createdAt, { addSuffix: true });

  return (
    <li className={`task-item ${completed ? "completed" : ""}`}>
      {!editing && (
        <div className="task-checkbox">
          <input
            type="checkbox"
            id={`checkbox-${id}`}
            checked={completed}
            onChange={() => toggleTaskCompletion(id)}
          />
          <label htmlFor={`checkbox-${id}`} />
        </div>
      )}
      <div className="task-text">
        {editing ? (
          <input className="task-edit-input" type="text" value={text} />
        ) : (
          <span>{text}</span>
        )}
      </div>
      {!editing && (
        <div className="task-time">
          <span>{`created ${timeAgo}`}</span>
        </div>
      )}
      {!editing && (
        <div className="task-actions">
          <button className="task-edit-button">✎</button>
          <button className="task-delete-button" onClick={() => deleteTask(id)}>
            ×
          </button>
        </div>
      )}
    </li>
  );
};

export default Task;
