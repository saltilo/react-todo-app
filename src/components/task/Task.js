/* eslint-disable react/react-in-jsx-scope */
import PropTypes from "prop-types";
import { formatDistanceToNow } from "date-fns";
import "./Task.css";

const Task = ({
  task,
  toggleTaskCompletion,
  deleteTask,
  toggleEditing,
  startTimer,
  stopTimer,
}) => {
  const { id, text, completed, editing, createdAt, timer, isTimerRunning } =
    task;

  const handleEditChange = (e) => toggleEditing(id, e.target.value);

  const timeAgo = formatDistanceToNow(createdAt, { addSuffix: true });

  const formatTimer = (sec) => {
    const minutes = Math.floor(sec / 60);
    const seconds = sec % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0",
    )}`;
  };

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
          <div className="task-text">{text}</div>

          <div className="task-timer-buttons">
            <button
              onClick={() => startTimer(id)}
              disabled={isTimerRunning || timer === 0}
            >
              ▶
            </button>
            <button onClick={() => stopTimer(id)} disabled={!isTimerRunning}>
              ⏸
            </button>
          </div>
          <div className="task-time">
            <span>{timer > 0 ? formatTimer(timer) : "time's up"}</span>
            <span>created {timeAgo}</span>
          </div>
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
          defaultValue={text}
          onBlur={(e) => handleEditChange(e)}
          onKeyDown={(e) => e.key === "Enter" && handleEditChange(e)}
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
    timer: PropTypes.number.isRequired,
    isTimerRunning: PropTypes.bool.isRequired,
  }).isRequired,
  toggleTaskCompletion: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  toggleEditing: PropTypes.func.isRequired,
  startTimer: PropTypes.func.isRequired,
  stopTimer: PropTypes.func.isRequired,
};

export default Task;
