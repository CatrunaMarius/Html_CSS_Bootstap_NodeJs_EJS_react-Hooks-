import React from "react";
import Card from "./Card"
import emojipedia from "../emojipedia"

function newCard(conten){
  return <Card 
           key = {conten.id}
           emojii = {conten.emoji}
           names = {conten.name}
           meaning = {conten.meaning}
  />
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
       {emojipedia.map(newCard)}
        
       
      </dl>
    </div>
  );
}

export default App;
