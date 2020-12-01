import React from "react";
import Card from "./Card";
import Avatar from "./Avatar"
import contacts from "../contacts";

// functie care combina un fiser js cu o componeta react
function newCard(contact){
  return <Card 
          id = {contact.id}
          key = {contact.id}
          names = {contact.name}
          img = {contact.imgURL}
          tel = {contact.phone}
          email = {contact.email}  
  />
}


function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://www.esquireme.com/public/images/2019/11/03/airbnb-678x381.jpg" />
     
     {/* creaza o bucla pt a itera prin fiecare propietate din contacts */}
     {contacts.map(newCard)}
     
     
      {/* <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      /> */}
    </div>
  );
}

export default App;
