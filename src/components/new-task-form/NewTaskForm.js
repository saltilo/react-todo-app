import React from "react";
import "./NewTaskForm.css";

const NewTaskForm = () => {
  return (
    <form className="new-task-form">
      <input
        type="text"
        className="new-task-input"
        placeholder="What needs to be done?"
      />
    </form>
  );
};

export default NewTaskForm;
