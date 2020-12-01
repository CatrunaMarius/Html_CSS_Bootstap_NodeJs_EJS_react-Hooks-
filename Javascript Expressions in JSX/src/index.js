import React from "react";
import ReactDOM from "react-dom";

const fName = "Catruna";
const lName = "Marius";
const luckyNum = 7;

ReactDOM.render(
  <div>
    <h1>Hello {fName + " " + lName}!</h1>
    <h1>Salut numele meu este {fName} {lName} </h1>
    <h2>Aceasta este varianta ES6, {`${fName} ${lName}`} </h2>
    <p>Your lucky number is {luckyNum}</p>
  </div>, 
  document.getElementById("root"));
