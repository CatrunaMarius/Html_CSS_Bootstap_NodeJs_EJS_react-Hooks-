import React from "react";
import Avatar from "./Avatar"

function Info(props){
  return <p className="info">{props.detailInfo}</p>

          
          
}


function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <p>{props.id}  </p>
        <h2 className="name">{props.names}</h2>
        <Avatar img={props.img}/>
      </div>
      <div className="bottom">
        {/* <Info detailInfo ={props.tel} /> */}
        {props.tel}
        <Info detailInfo ={props.email}  />
      </div>
    </div>
  );
}

export default Card;
