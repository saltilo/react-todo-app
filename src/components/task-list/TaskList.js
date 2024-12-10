/* eslint-disable react/react-in-jsx-scope */
import PropTypes from "prop-types";
import Task from "../task";
import "./TaskList.css";

const TaskList = ({
  tasks,
  toggleTaskCompletion,
  deleteTask,
  toggleEditing,
  startTimer,
  stopTimer,
}) => {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          toggleTaskCompletion={toggleTaskCompletion}
          deleteTask={deleteTask}
          toggleEditing={toggleEditing}
          startTimer={startTimer}
          stopTimer={stopTimer}
        />
      ))}
    </ul>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      editing: PropTypes.bool,
      createdAt: PropTypes.instanceOf(Date).isRequired,
      timer: PropTypes.number.isRequired,
    }),
  ).isRequired,
  toggleTaskCompletion: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  toggleEditing: PropTypes.func.isRequired,
  startTimer: PropTypes.func.isRequired,
  stopTimer: PropTypes.func.isRequired,
};

TaskList.defaultProps = {
  tasks: [],
};

export default TaskList;
