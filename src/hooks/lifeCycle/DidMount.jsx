import React, { Component, useEffect } from "react";

export class DidMount extends Component {
  componentDidMount() {
    console.log("Comportamiento antes de renderizar el componente en el DOM");
  }
  render() {
    return (
      <div>
        <h1>DidMount</h1>
      </div>
    );
  }
}

export const DidMountHook = () => {
  useEffect(() => {
    console.log("Comportamiento antes de renderizar el componente en el DOM");
  }, []);
  return (
    <div>
      <h1>DidMount</h1>
    </div>
  );
};
