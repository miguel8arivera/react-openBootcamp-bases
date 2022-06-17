import React from "react";
import "./App.css";
import TasklistComponent from "./components/containers/Task-list";
import { ClockHook } from "./components/pure/Clock";
import GreetingStyled from "./components/pure/GreetingStyled";
import ComponenteConContexto from "./hooks/Ejemplo3";
import Ejemplo4 from "./hooks/Ejemplo4";
import Example1 from "./hooks/Example1";
import Example2 from "./hooks/Example2";

function App() {
  return (
    <div className="App">
      {/* <TasklistComponent /> */}
      {/* <Example1 /> */}
      {/* <Example2 /> */}
      {/* <ComponenteConContexto /> */}
      {/*  <Ejemplo4 name="Kamila" age={10}>
        <h3>Contenido de prop.children</h3>
        <h5>Mas contenido del prop.children</h5>
      </Ejemplo4> */}

      {/* <GreetingStyled name="Kamila" /> */}
      {/* <Clock /> */}
      {/*  <ClockHook /> */}

      <TasklistComponent />
    </div>
  );
}

export default App;
