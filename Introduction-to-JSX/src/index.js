import React from "react";
import ReactDOM from "react-dom";

// func render acepta dor un singur element HTML dar putem aduga mai multe elemete HTML daca le adugam in interiorul unei <div></div>
ReactDOM.render(
  <div>
    <h1>Hello World!</h1>
    <p>This is an paragraph</p>
    <ul>paine</ul>
  </div>,
  document.getElementById("root")
);
