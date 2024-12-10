/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
import PropTypes from "prop-types";
import "./NewTaskForm.css";

const NewTaskForm = ({ addTask }) => {
  const [label, setLabel] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");

  const onLabelChange = (e) => setLabel(e.target.value);

  const onMinutesChange = (e) => setMinutes(e.target.value);

  const onSecondsChange = (e) => setSeconds(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    if (label.trim() && (Number(minutes) > 0 || Number(seconds) > 0)) {
      const timer = (Number(minutes) || 0) * 60 + (Number(seconds) || 0);
      addTask(label, timer);
      setLabel("");
      setMinutes("");
      setSeconds("");
    } else {
      alert("Please provide a valid timer (at least 1 second).");
    }
  };

  return (
    <form className="new-task-form" onSubmit={onSubmit}>
      <input
        type="text"
        className="new-task-input"
        placeholder="What needs to be done?"
        value={label}
        onChange={onLabelChange}
        required
      />
      <input
        type="number"
        className="new-task-input-timer"
        placeholder="Min"
        value={minutes}
        onChange={onMinutesChange}
        required
      />
      <input
        type="number"
        className="new-task-input-timer"
        placeholder="Sec"
        value={seconds}
        onChange={onSecondsChange}
        required
      />
      <button type="submit" style={{ display: "none" }} />
    </form>
  );
};

NewTaskForm.propTypes = {
  addTask: PropTypes.func.isRequired,
};

export default NewTaskForm;
