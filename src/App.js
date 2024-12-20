/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-no-comment-textnodes */
import { useState } from "react";

import TaskList from "./components/task-list";
import NewTaskForm from "./components/new-task-form";
import Footer from "./components/footer";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
      createdAt: new Date(),
      editing: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const toggleTaskCompletion = (taskID) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskID ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const toggleEditing = (taskId, newText) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? { ...task, editing: !task.editing, text: newText || task.text }
          : task,
      ),
    );
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const clearCompletedTasks = () => {
    setTasks((prevTasks) => prevTasks.filter((task) => !task.completed));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true;
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  const tasksLeft = tasks.filter((task) => !task.completed).length;

  return (
    <div className="app">
      <h1 className="app-title">todos</h1>

      <div className="task-list-container">
        <NewTaskForm addTask={addTask} />
        <TaskList
          tasks={filteredTasks}
          toggleTaskCompletion={toggleTaskCompletion}
          deleteTask={deleteTask}
          toggleEditing={toggleEditing}
        />
        <Footer
          tasksLeft={tasksLeft}
          filter={filter}
          onFilterChange={handleFilterChange}
          onClearCompleted={clearCompletedTasks}
        />
      </div>
    </div>
  );
};

export default App;
