import React, { useState } from "react";
import NoteItem from "./NoteItem";


function NoteList({allNotes}) {
  
  
  const renderAllNotes = allNotes.map((note) => (
    <NoteItem 
      key={note.id} 
      note={note}
    />
  ))
  return (
    <ul>
      {renderAllNotes}
    </ul>
  );
}

export default NoteList;
