import React from "react";
import { useState } from "react";

import TaskList from "./components/task-list";
import NewTaskForm from "./components/new-task-form";
import Footer from "./components/footer";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Completed task",
      completed: true,
      timeAgo: "17 seconds",
      editing: false,
    },
    {
      id: 2,
      text: "Editing task",
      completed: false,
      timeAgo: "10 seconds",
      editing: true,
    },
    {
      id: 3,
      text: "Active task",
      completed: false,
      timeAgo: "5 minutes",
      editing: false,
    },
    {
      id: 4,
      text: "Учить Реакт",
      completed: false,
      timeAgo: "5 minutes",
      editing: false,
    },
  ]);

  const toggleTaskCompletion = (taskID) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskID ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="app">
      <h1 className="app-title">todos</h1>

      <div className="task-list-container">
        <NewTaskForm />
        <TaskList
          tasks={tasks}
          toggleTaskCompletion={toggleTaskCompletion}
          deleteTask={deleteTask}
        />
        <Footer />
      </div>
    </div>
  );
};

export default App;
