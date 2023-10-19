import React, {useState, useEffect} from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";

function NoteContainer() {
  const [allNotes, setNotes] = useState([])
  const [selectedNote, setSelectedNote] = useState(false)
  const [searchTerm, setSearchTerm] =useState("")

  useEffect(() => {
    fetch("http://localhost:3000/notes")
    .then((resp) => resp.json())
    .then((allNotes) => setNotes(allNotes))
  },[])
  
  function liftNote(note) {
    setSelectedNote(note)
    
  }
  function onSearch(searchNote) {
    setSearchTerm(searchNote)
  }

  const filterNotes = allNotes.filter((note) => {
    const lowerCasedTitle = note.title.toLowerCase()
    const lowerCasedSearchTerm = searchTerm.toLocaleLowerCase()
    return lowerCasedTitle.includes( lowerCasedSearchTerm)
  }) 
 
  
  return (
    <>
      <Search onSearch={onSearch} />
      <div className="container">
        <Sidebar allNotes={filterNotes} liftNote={liftNote} />
        <Content selectedNote={selectedNote} />
      </div>
    </>
  );
}

export default NoteContainer;
