import React, {useState} from "react";
import NoteList from "./NoteList";

function Sidebar({allNotes}) {

  console.log(allNotes)
  return (
    <div className="master-detail-element sidebar">
      <NoteList allNotes={allNotes}  />
      <button>New</button>
    </div>
  );
}

export default Sidebar;
