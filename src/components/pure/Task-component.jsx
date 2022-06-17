import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Task } from "../../models/task.class";
import "../../styles/task.scss";
import { LEVELS } from "../../models/levels.enum";

const TaskComponent = ({ task }) => {
  useEffect(() => {
    console.log("Task created");

    return () => {
      console.log(` Task ${task.name} is going to be unmounted`);
    };
  }, [task]);

  const taskBadgeCompleted = () => {
    switch (task.level) {
      case LEVELS.NORMAL:
        return (
          <h6 className="mb-0">
            <span className="badge bg-primary">{task.level}</span>
          </h6>
        );

      case LEVELS.URGENT:
        return (
          <h6 className="mb-0">
            <span className="badge bg-warning">{task.level}</span>
          </h6>
        );

      case LEVELS.BLOQUEANTE:
        return (
          <h6 className="mb-0">
            <span className="badge bg-danger">{task.level}</span>
          </h6>
        );

      default:
        break;
    }
  };

  const taskIconCompleted = () => {
    if (task.completed) {
      return <i className="bi-toggle-on" style={{ color: "green" }}></i>;
    } else {
      return <i className="bi-toggle-on" style={{ color: "grey" }}></i>;
    }
  };

  return (
    <tr className="fw-normal">
      <th>
        <span className="ms-2">{task.name}</span>
      </th>
      <td className="align-middle">
        <span>{task.description}</span>
      </td>
      <td className="align-middle">
        {/* TODO: sustituir por un badge */}
        {/* <span>{task.level}</span> */}

        {/* Llamar a la funcion para los badge */}

        {taskBadgeCompleted()}
      </td>
      <td className="align-middle">
        {/* TODO: sustituir por Iconos */}

        {/* {task.completed ? (
          <i className="bi-toggle-on" style={{ color: "green" }}></i>
        ) : (
          <i className="bi-toggle-on" style={{ color: "grey" }}></i>
        )} */}

        {/* TODO: Sustituir por una funcion */}
        {taskIconCompleted()}
        <i className="bi-trash" style={{ color: "tomato" }}></i>
      </td>
    </tr>
    /*  <div>
      <h2>Name: {task.name}</h2>
      <h3 className="task-name">Description: {task.description}</h3>
      <h4>Level: {task.level}</h4>
      <h5>This taks is : {task.completed ? "COMPLETED" : "PENDING"}</h5>
    </div>
  ); */
  );
};

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task),
};

export default TaskComponent;
