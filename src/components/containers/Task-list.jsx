import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Task } from "../../models/task.class";
import { LEVELS } from "../../models/levels.enum";
import TaskComponent from "../pure/Task-component";

const TasklistComponent = () => {
  const taskDefault = new Task(
    "Example",
    "Default description",
    false,
    LEVELS.NORMAL
  );

  const [tasks, setTasks] = useState([taskDefault]);
  const [laoding, setLaoding] = useState(true);

  useEffect(() => {
    console.log("Task State is been modified");

    return () => {
      console.log("Tasklist component is going to be unmounted");
      setLaoding(false);
    };
  }, [tasks]);

  const changeCompleted = () => {
    console.log("Cambiar el estado de una tarea");
  };
  return (
    <div>
      <div>
        <h1>Your Tasks:</h1>
        <TaskComponent task={taskDefault} />
      </div>
    </div>
  );
};

TasklistComponent.propTypes = {};

export default TasklistComponent;
