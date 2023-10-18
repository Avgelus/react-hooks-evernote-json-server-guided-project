import React, { useState } from "react";
import NoteItem from "./NoteItem";


function NoteList({allNotes}) {
  const renderAllNotes = allNotes.map((note) => 
  <NoteItem 
  key={note.id} 
  body={note.body} 
  title={note.title} 
  userId={note.userId} 
  />)

  return (
    <ul>
      {renderAllNotes}
    </ul>
  );
}

export default NoteList;
