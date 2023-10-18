import React, {useState, useEffect} from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";

function NoteContainer() {
  const [allNotes, setNotes] = useState([])
  
  useEffect(() => {
    fetch("http://localhost:3000/notes")
    .then((resp) => resp.json())
    .then((allNotes) => setNotes(allNotes))
  },[])
  
  function liftNotes(allNotes) {

  }
 
  
  return (
    <>
      <Search />
      <div className="container">
        <Sidebar allNotes={allNotes} />
        <Content liftNotes={liftNotes} />
      </div>
    </>
  );
}

export default NoteContainer;
