import React from "react";
import NoteItem from "./NoteItem";
import Sidebar from "./Sidebar";

function NoteList({allNotes}) {
  const renderAllNotes = allNotes.map((note) => <NoteItem key={note.id} body={note.body} title={note.title} userId={note.userId} />)

  return (
    <ul>
      {renderAllNotes}
      <NoteItem allNotes={allNotes}/>
    </ul>
  );
}

export default NoteList;
