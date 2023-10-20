import React, {useState, useEffect} from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";

function NoteContainer() {
  const [allNotes, setNotes] = useState([])
  const [selectedNote, setSelectedNote] = useState(false)

  useEffect(() => {
    fetch("http://localhost:3000/notes")
    .then((resp) => resp.json())
    .then((allNotes) => setNotes(allNotes))
  },[])
  
  function liftNote(note) {
    setSelectedNote(note)
    
  }
 
 
  
  return (
    <>
      <Search />
      <div className="container">
        <Sidebar allNotes={allNotes} liftNote={liftNote} />
        <Content selectedNote={selectedNote} />
      </div>
    </>
  );
}

export default NoteContainer;
