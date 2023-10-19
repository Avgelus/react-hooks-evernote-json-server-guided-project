import React from "react";

function NoteItem({note, liftNote}) {
 
  function handleClick() {
    liftNote(note)
    
  }
  return (
    <li onClick={handleClick}>
      <h2>{note.title}</h2>
      <p>{note.body}</p>
    </li>
  );
}

export default NoteItem;
