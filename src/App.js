/* eslint-disable react/react-in-jsx-scope */
import { useState, useRef } from "react";

import TaskList from "./components/task-list";
import NewTaskForm from "./components/new-task-form";
import Footer from "./components/footer";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const timersRef = useRef({});

  const addTask = (text, timer) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
      createdAt: new Date(),
      editing: false,
      timer,
      isTimerRunning: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const toggleTaskCompletion = (taskId) => {
    stopTimer(taskId);
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              completed: !task.completed,
              timer: !task.completed ? 0 : task.timer,
            }
          : task,
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
    stopTimer(taskId);
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const clearCompletedTasks = () => {
    tasks.forEach((task) => {
      if (task.completed) stopTimer(task.id);
    });
    setTasks((prevTasks) => prevTasks.filter((task) => !task.completed));
  };

  const startTimer = (taskId) => {
    if (!timersRef.current[taskId]) {
      timersRef.current[taskId] = setInterval(() => {
        setTasks((tasks) =>
          tasks.map((task) => {
            if (task.id === taskId && task.timer > 0) {
              return { ...task, timer: task.timer - 1 };
            } else if (task.id === taskId && task.timer <= 0) {
              stopTimer(taskId);
            }
            return task;
          }),
        );
      }, 1000);

      setTasks((tasks) =>
        tasks.map((task) =>
          task.id === taskId ? { ...task, isTimerRunning: true } : task,
        ),
      );
    }
  };

  const stopTimer = (taskId) => {
    if (timersRef.current[taskId]) {
      clearInterval(timersRef.current[taskId]);
      delete timersRef.current[taskId];
    }

    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, isTimerRunning: false } : task,
      ),
    );
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
          startTimer={startTimer}
          stopTimer={stopTimer}
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
