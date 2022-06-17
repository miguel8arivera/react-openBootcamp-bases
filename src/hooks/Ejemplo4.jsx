import React from "react";

const Ejemplo4 = (props) => {
  return (
    <div>
      <h1>*** Ejemplo de PROPS CHILDREN***</h1>
      <h2>Name: {props.name}</h2>
      <h2>Age: {props.age}</h2>
      {props.children}
    </div>
  );
};

export default Ejemplo4;
