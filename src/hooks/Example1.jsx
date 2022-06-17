import React, { useState } from "react";

const Example1 = () => {
  const initialvalue = 0;
  const initialPerson = {
    name: "Kamila",
    email: "kam26@gmail.com",
  };
  const [counter, setCounter] = useState(initialvalue);
  const [person, setPerson] = useState(initialPerson);

  function changeCounter() {
    setCounter(counter + 1);
  }

  function changePerson() {
    setPerson({
      name: "Anna",
      email: "anna28@hotmail.com",
    });
  }
  return (
    <div>
      <h1>*** Ejemplo de useState() ***</h1>

      <h2>Contador :{counter}</h2>

      <h2>DATOS DE LA PERSONA</h2>
      <h3>Name: {person.name}</h3>
      <h3>Email: {person.email}</h3>
      <button onClick={changeCounter}>Add</button>
      <button onClick={changePerson}>Change</button>
      {/* <button onClick={() => changeCounter()}>Add</button> */}
    </div>
  );
};

export default Example1;
