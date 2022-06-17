import React, { Component, useState, useEffect } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);
    // Estado privado del component
    this.state = {
      // Se genera una fecha como estado inicial del componente
      fecha: new Date(),
      edad: 0,
      nombre: "Martín",
      apellidos: "San José",
    };
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  render() {
    return (
      <div>
        <h2>
          Hora Actual:
          {this.state.fecha.toLocaleTimeString()}
        </h2>
        <h3>
          {this.state.nombre} {this.state.apellidos}
        </h3>
        <h1>Edad: {this.state.edad}</h1>
      </div>
    );
  }
  tick() {
    this.setState((prevState) => {
      let edad = prevState.edad + 1;
      return {
        ...prevState,
        fecha: new Date(),
        edad,
      };
    });
  }
}
export default Clock;

const initialState = {
  fecha: new Date(),
  edad: 0,
  nombre: "kamila",
  apellidos: "Valieva",
};
export const ClockHook = () => {
  const [fecha, setFecha] = useState(new Date());
  const [user, setUser] = useState(initialState);
  useEffect(() => {
    setUser({
      ...user,
      edad: user.edad + 1,
    });
    const timerID = setInterval(() => setFecha(new Date()), 1000);
  }, []);

  return (
    <div>
      <h2>
        Hora Actual:
        {fecha.toLocaleTimeString()}
      </h2>
      <h3>
        {user.nombre} {user.apellidos}
      </h3>
      <h1>{user.edad}</h1>
    </div>
  );

  /*  tick() {
   this.setState((prevState) => {
     let edad = prevState.edad + 1;
     return {
       ...prevState,
       fecha: new Date(),
       edad,
     };
   });
 } */
};
