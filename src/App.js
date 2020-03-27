import React from "react";
import "./App.css";
import setup from "./params.json";
import Particles from "react-particles-js";

function App() {
  return (
    <div className="App">
      <Particles params={setup} />
    </div>
  );
}

export default App;
