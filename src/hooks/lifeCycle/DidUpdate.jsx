import React, { Component, useEffect } from "react";

export default class DidUpdate extends Component {
  componentDidUpdate() {
    console.log("comportamiento cuando cambia algo en le componente");
  }
  render() {
    return (
      <div>
        <h1>DidUpdate</h1>
      </div>
    );
  }
}

export const DidUpdateHook = () => {
  useEffect(() => {
    console.log("comportamiento cuando cambia algo en le componente");
  });
  return (
    <div>
      <h1>DidUpdate</h1>
    </div>
  );
};
