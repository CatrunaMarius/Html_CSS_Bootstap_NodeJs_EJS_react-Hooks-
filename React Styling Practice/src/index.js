import React from "react";
import ReactDOM from "react-dom";

const date = new Date();
const curHour = date.getHours();

let good;

const customStyle = {
  color: ""
};

if (curHour < 12) {
  good = "Good Morning";
  customStyle.color = "red";
} else if (curHour < 18) {
  good = "Good Afternoon";
  customStyle.color = "green";
} else {
  good = "Good Night";
  customStyle.color = "blue";
}

ReactDOM.render(
  <h1 className="heading" style={customStyle}>
    {good}
  </h1>,
  document.getElementById("root")
);

//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
