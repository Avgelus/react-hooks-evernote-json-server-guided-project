import React from "react";

function NoteItem({body,title,userId}) {
  return (
    <li>
      <h2>{title}</h2>
      <p>{body}</p>
    </li>
  );
}

export default NoteItem;
