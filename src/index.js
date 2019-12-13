import React from "react";
import ReactDOM from "react-dom";
import Login from "./Login";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Login />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
