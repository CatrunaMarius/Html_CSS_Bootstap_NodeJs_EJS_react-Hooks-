import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

// var numbers = [3, 56, 2, 48, 5];

// // prima metoda de a crea si a folosi o functie
// function square(x){
//     return x * x
// }
// var metodaUnu =numbers.map(square)
// // a doua metoda de a crea si a folosi o functie
// var metodaDoi =numbers.map(function(x){
//     return x *x
// })
// // a treia  metoda de a crea si a folosi o functie
// // cand sunt mai multe argumeste se pastreaza parantexa rotunda din jurul argumetelor
// // 3.1
// // var metodaTrei = numbers.map( (x)=>{
// //     return x *x 
// // })
// // 3.2
// // var metodaTrei = numbers.map( x=>{
// //     return x *x 
// // })
// // 3.3
// var metodaTrei = numbers.map( x=> 
//     x *x )
// console.log();

// // Challenge
// ////Map -Create a new array by doing something with each item in an array.
// const newNumbers = numbers.map(x =>x * 2);

// //////Filter - Create a new array by keeping the items that return true.
// const newNumbers = numbers.filter(num => num < 10);

// //Reduce - Accumulate a value by doing something to each item in an array.
// var newNumber = numbers.reduce((accumulator, currentNumber) => accumulator + currentNumber)

// ////Find - find the first item that matches from an array.
// const newNumber = numbers.find(num => num > 10)

// ////FindIndex - find the index of the first item that matches.
// const newNumber = numbers.findIndex(num => num > 10)
