import React from "react";
import NoteContainer from "./NoteContainer";

function Search({onSearch}) {
  
  return (
    <div className="filter" >
      <input 
      id="search" 
      type="text" 
      placeholder="Search Notes"
      onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;
