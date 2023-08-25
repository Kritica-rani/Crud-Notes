import React from "react";
import EditList from "./EditList";

export default function SingleNotes({
  text,
  date,
  deleteNote,
  id,
  handleEdit,
  editId,
  saveEditedNotes,
}) {
  const handleDeleteNotes = (id) => {
    deleteNote(id);
  };
  if (id == editId) {
    return (
      <div>
        <EditList text={text} saveEditedNotes={saveEditedNotes} id={id} />
      </div>
    );
  } else {
    return (
      <div className="note">
        <p>{text}</p>
        <p>{date}</p>
        <button onClick={() => handleDeleteNotes(id)}>delete</button>
        <button onClick={() => handleEdit(id)}>Edit</button>
      </div>
    );
  }
}
