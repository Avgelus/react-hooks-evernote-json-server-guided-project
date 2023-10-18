import React, {useState} from "react";
import NoteList from "./NoteList";

function Sidebar({allNotes, liftNote} ) {

  
  return (
    <div className="master-detail-element sidebar">
      <NoteList allNotes={allNotes} liftNote={liftNote} />
      <button>New</button>
    </div>
  );
}

export default Sidebar;
