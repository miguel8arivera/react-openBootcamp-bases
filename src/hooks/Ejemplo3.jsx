import React, { useState, useContext } from "react";

const miContexto = React.createContext(null);

const Componente1 = () => {
  const state = useContext(miContexto);
  return (
    <div>
      <h1>El Token es : {state.token}</h1>
      <Componete2 />
    </div>
  );
};

const Componete2 = () => {
  const state = useContext(miContexto);
  return (
    <div>
      <h2>la Sesion es : {state.sesion}</h2>
    </div>
  );
};

const ComponenteConContexto = () => {
  const estadoInicial = {
    token: "132312312",
    sesion: 1,
  };

  const [sesionData, setSesionData] = useState(estadoInicial);

  function actualizarSesion() {
    setSesionData({
      token: "NTHNMDTHDTSNTIDSN",
      sesion: sesionData.sesion + 1,
    });
  }
  return (
    <miContexto.Provider value={sesionData}>
      <h1>***Ejemplo con useState y useContext***</h1>
      <Componente1 />
      <button onClick={actualizarSesion}>Actualizar Sesion</button>
    </miContexto.Provider>
  );
};

export default ComponenteConContexto;
