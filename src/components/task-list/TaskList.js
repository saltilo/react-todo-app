import React from "react";
import Task from "../task";
import "./TaskList.css";

const TaskList = ({ tasks, toggleTaskCompletion, deleteTask }) => {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          toggleTaskCompletion={toggleTaskCompletion}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
};

export default TaskList;
