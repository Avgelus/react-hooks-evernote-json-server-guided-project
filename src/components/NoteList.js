import React, { useState } from "react";
import NoteItem from "./NoteItem";


function NoteList({allNotes, liftNote}) {
  
  
  const renderAllNotes = allNotes.map((note) => (
    <NoteItem 
      key={note.id} 
      note={note}
      liftNote={liftNote}
    />
  ))
  return (
    <ul>
      {renderAllNotes}
    </ul>
  );
}

export default NoteList;
