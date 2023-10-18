import React, {useState}from "react";

function NoteItem({note}) {
 
  function handleClick() {
    console.log(note)
  }
  return (
    <li onClick={handleClick}>
      <h2>{note.title}</h2>
      <p>{note.body}</p>
    </li>
  );
}

export default NoteItem;
