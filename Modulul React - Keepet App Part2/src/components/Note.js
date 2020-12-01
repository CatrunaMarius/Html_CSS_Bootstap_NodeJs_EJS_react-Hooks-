import React from "react";
import notes from "../notes"

function Entry(props){
  return(<div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>)
}


function Note() {
  return (
   
    notes.map(note =>
      <Entry
        key = {note.key} 
        title = {note.title}
        content = {note.content}
      />
    )

  );
}

export default Note;
