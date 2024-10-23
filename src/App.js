import React from "react";

import TaskList from "./components/task-list";
import NewTaskForm from "./components/new-task-form";
import Footer from "./components/footer";
import "./App.css";

const App = () => {
  const tasks = [
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
  ];

  return (
    <div className="app">
      <h1 className="app-title">todos</h1>

      <div className="task-list-container">
        <NewTaskForm />
        <TaskList tasks={tasks} />
        <Footer />
      </div>
    </div>
  );
};

export default App;
