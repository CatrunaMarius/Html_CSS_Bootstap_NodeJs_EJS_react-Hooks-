import React from "react";


function Card(props){
    return (
       <div className="term">
          <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
              {props.emojii}
            </span>
            <span>{props.names}</span>
          </dt>
          <dd>
            {props.meaning}
          </dd>
        </div>)
}

export default Card