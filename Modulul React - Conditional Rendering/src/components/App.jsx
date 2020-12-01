import React from "react";
import Login from "./Login"

var isLoggedIn = false
var currentHour = new Date().getHours()


// function renderConditionlly(){
//   if(isLoggedIn === true){
//     return <h1>Hello</h1>
//   }else{
//     return (
      
//       <Login />
        
//     );
//   }
 

// }


function App() {

  return (
      <div className="container">
          { // {isLoggedIn === true ? <h1>Hello</h1> : <Login /> } 
            // metoda scurta
            // {isLoggedIn ? <h1>Hello</h1> : <Login /> 
            
            //
            // currentHour > 12 ? <h1>Why are you still working</h1> : null
            // metoda scurta
            currentHour >12 &&  <h1>Why are you still working</h1>
          }


      </div>
    )
}

export default App;
