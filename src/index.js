import React from "react";
import ReactDOM from "react-dom/client";
//? Add bootstrap siempre encima del index.css para que no pisen los estilos
import "bootstrap/dist/css/bootstrap.min.css";
//! los estilos propios siempre deben ir debajo de la libreria de bootstrap
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
