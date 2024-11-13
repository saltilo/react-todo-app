import PropTypes from "prop-types";
import Task from "../task";
import "./TaskList.css";

const TaskList = ({
  tasks,
  toggleTaskCompletion,
  deleteTask,
  toggleEditing,
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
    })
  ),
  toggleTaskCompletion: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  toggleEditing: PropTypes.func.isRequired,
};

TaskList.defaultProps = {
  tasks: [],
};

export default TaskList;
