import React from "react";
import SingleNotes from "./SingleNotes";
import AddNotes from "./AddNotes";

export default function NotesList({
  notes,
  handleAddNotes,
  deleteNote,
  handleEdit,
  editId,
  saveEditedNotes,
}) {
  console.log("notes", notes);
  return (
    <div className="notes-list">
      {notes.map((item) => {
        return (
          <SingleNotes
            key={item.id}
            text={item.text}
            date={item.date}
            deleteNote={deleteNote}
            id={item.id}
            handleEdit={handleEdit}
            editId={editId}
            saveEditedNotes={saveEditedNotes}
          />
        );
      })}
      <AddNotes handleAddNotes={handleAddNotes} />
    </div>
  );
}
