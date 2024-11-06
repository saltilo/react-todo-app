import React, { useState } from "react";
import "./NewTaskForm.css";

const NewTaskForm = ({ addTask }) => {
  const [label, setLabel] = useState("");

  const onLabelChange = (e) => {
    setLabel(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (label.trim()) {
      addTask(label);
      setLabel("");
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
      />
    </form>
  );
};

export default NewTaskForm;
