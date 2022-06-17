import React, { useState, useRef, useEffect } from "react";

const Example2 = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  /**
   * vamos a crear una referencia con useRef() para asociar una variable a un elemento del DOM
   */

  const miRef = useRef();

  function incrementar1() {
    setCounter1(counter1 + 1);
  }
  function incrementar2() {
    setCounter2(counter2 + 1);
  }

  /*  useEffect(() => {
    console.log("se imprime cada ves que ocurre un cambio en el DOM");
    console.log("Observando el elemento del DOM");
    console.log(miRef);
  }); */
  /*   useEffect(() => {
    console.log("se imprime cada ves que ocurre un cambio en el DOM");
    console.log("Observando el elemento del DOM");
    console.log(miRef);
  }, [counter1]); */
  useEffect(() => {
    console.log("se imprime cada ves que ocurre un cambio en el DOM");
    console.log("Observando el elemento del DOM");
    console.log(miRef);
  }, [counter1, counter2]);
  return (
    <div>
      <h1>*** Ejemplo de useState(), useEffect() useRef() ***</h1>

      <h1>Counter1: {counter1}</h1>
      <h1>Counter2: {counter2}</h1>
      <h4 ref={miRef}>Ejemplo de elemento referenciado</h4>

      <button onClick={incrementar1}>Add 1</button>
      <button onClick={incrementar2}>Add 2</button>
    </div>
  );
};

export default Example2;
