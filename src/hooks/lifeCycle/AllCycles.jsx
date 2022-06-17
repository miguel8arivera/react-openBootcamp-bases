import React, { useEffect } from "react";

const AllCycles = () => {
  useEffect(() => {
    console.log("componente creado");

    const intervalId = setInterval(() => {
      document.title = `${new Date()}`;
      console.log("Actualizacion del componente");
    }, 1000);
    return () => {
      console.log("componente va a desaparecer");
      document.title = "Tiempo detenido";
      clearInterval(intervalId);
    };
  }, []);
  return <div>AllCycles</div>;
};

export default AllCycles;
