import { useState } from "react";
import PropTypes from "prop-types";
import { formatDistanceToNow } from "date-fns";
import "./Task.css";

const Task = ({ task, toggleTaskCompletion, deleteTask, toggleEditing }) => {
  const { id, text, completed, editing, createdAt } = task;
  const [editText, setEditText] = useState(text);

  const handleEditChange = (e) => setEditText(e.target.value);

  const handleEditSubmit = () => {
    if (editText.trim()) {
      toggleEditing(id, editText);
    }
  };

  const timeAgo = formatDistanceToNow(createdAt, { addSuffix: true });

  return (
    <li className={`task-item ${completed ? "completed" : ""}`}>
      {!editing ? (
        <>
          <div className="task-checkbox">
            <input
              type="checkbox"
              id={`checkbox-${id}`}
              checked={completed}
              onChange={() => toggleTaskCompletion(id)}
            />
            <label htmlFor={`checkbox-${id}`} />
          </div>
          <div className="task-text">
            <span>{text}</span>
          </div>
          <div className="task-time">created {timeAgo}</div>
          <button
            className="task-edit-button"
            onClick={() => toggleEditing(id)}
          >
            ✎
          </button>
          <button className="task-delete-button" onClick={() => deleteTask(id)}>
            ×
          </button>
        </>
      ) : (
        <input
          className="task-edit-input"
          type="text"
          value={editText}
          onChange={handleEditChange}
          onBlur={handleEditSubmit}
          onKeyDown={(e) => e.key === "Enter" && handleEditSubmit()}
        />
      )}
    </li>
  );
};

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    editing: PropTypes.bool,
    createdAt: PropTypes.instanceOf(Date).isRequired,
  }).isRequired,
  toggleTaskCompletion: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  toggleEditing: PropTypes.func.isRequired,
};

export default Task;
