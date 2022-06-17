import React, { useState } from "react";

const loggedStyle = {
  color: "blue",
  fontWeight: "bold",
};

const notLoggedStyle = {
  color: "tomato",
  fontWeight: "semibold",
};
const GreetingStyled = (props) => {
  const [logged, setLogged] = useState(false);

  const greeting = () => <p> Hola, {props.name}</p>;
  const sayLogin = () => <p>Please Login</p>;
  return (
    <div style={logged ? loggedStyle : notLoggedStyle}>
      {/* {logged ? <p> Hola, {props.name}</p> : <p>Please Login</p>} */}
      {logged ? greeting() : sayLogin()}
      <button onClick={() => setLogged(!logged)}>
        {logged ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default GreetingStyled;
