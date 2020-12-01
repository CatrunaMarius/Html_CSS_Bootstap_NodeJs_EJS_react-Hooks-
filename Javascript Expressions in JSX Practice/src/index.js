import React from "react";
import ReactDOM from "react-dom";

const YOURNAME = "Marius";

// const data = new Date();
// const CURRENTYEAR = data.getFullYear()
const CURRENTYEAR = new Date().getFullYear();

ReactDOM.render(
  <div>
    <p>Created by {YOURNAME}.</p>
    <p>Copyright {CURRENTYEAR}.</p>
  </div>,
  document.getElementById("root")
);

//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
