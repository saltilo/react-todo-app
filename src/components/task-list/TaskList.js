import React from "react";
import Task from "../task";
import "./TaskList.css";

const TaskList = ({ tasks }) => {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default TaskList;
