import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Task } from "../../models/task.class";
import { LEVELS } from "../../models/levels.enum";
import TaskComponent from "../pure/Task-component";
import TaskForm from "../pure/forms/TaskForm";

const TasklistComponent = () => {
  const taskDefault1 = new Task(
    "Programing",
    "Todo task realised by react",
    true,
    LEVELS.NORMAL
  );
  const taskDefault2 = new Task(
    "Buy a new car",
    "Mercedes venz is a great car",
    false,
    LEVELS.URGENT
  );
  const taskDefault3 = new Task(
    "Call my girlfriend",
    "my girlfriend is a lazy person",
    true,
    LEVELS.BLOQUEANTE
  );

  const [tasks, setTasks] = useState([
    taskDefault1,
    taskDefault2,
    taskDefault3,
  ]);
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
    <div className="col-12">
      <div className="card">
        {/* Card header (title) */}
        <h5>Your Tasks:</h5>

        {/* Card body (content) */}
        <div
          className="card-body"
          data-mdb-perfect-scrollbar="true"
          style={{ position: "relative", height: "400px" }}
        >
          {/* TODO: Add loading Spinner */}
          <table>
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <th scope="col">Priority</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* TODO: iterar sobre todas las tareas */}

              {tasks.map((task, index) => {
                return <TaskComponent key={index} task={task} />;
              })}
            </tbody>
          </table>
        </div>
        <TaskForm></TaskForm>
      </div>
    </div>
  );
};

TasklistComponent.propTypes = {};

export default TasklistComponent;
