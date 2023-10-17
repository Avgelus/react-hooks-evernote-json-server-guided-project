import React from "react";
import NoteList from "./NoteList";

function Sidebar({allNotes}) {
  return (
    <div className="master-detail-element sidebar">
      <NoteList allNotes={allNotes}/>
      <button>New</button>
    </div>
  );
}

export default Sidebar;
