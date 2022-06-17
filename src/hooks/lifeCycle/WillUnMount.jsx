import React, { Component, useEffect } from "react";

export default class WillUnMount extends Component {
  componentWillUnmount() {
    console.log("Comportamiento antes de que el componente se elimine del DOM");
  }
  render() {
    return (
      <div>
        <h1>WillOnMount</h1>
      </div>
    );
  }
}

export const WillUnMountHook = () => {
  useEffect(() => {
    //* No se pone nada
    return () => {
      console.log(
        "comportamiento antes de que el componente se elimine del DOM"
      );
    };
  }, []);

  return <div>WillUnMount</div>;
};
