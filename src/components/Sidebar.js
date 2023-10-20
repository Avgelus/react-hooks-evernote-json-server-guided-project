import React, {useState} from "react";
import NoteList from "./NoteList";

function Sidebar({allNotes, liftNote} ) {

  const [createNewNote, setCreateNewNote] = useState("")

  const handleClick = ((e) => {
    setCreateNewNote(e.target)
    const brandNewNote = {
      createNewNote: createNewNote
    }

    fetch("http://localhost:3000/notes"), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(createNewNote)
    }.then((resp) =>{
      if(resp.ok) {
        return resp.json()
      }
    })
    .then((data) => console.log(data))
  })

  
  return (
    <div className="master-detail-element sidebar">
      <NoteList allNotes={allNotes} liftNote={liftNote} />
      <button onClick={handleClick}>New</button>
    </div>
  );
}

export default Sidebar;
