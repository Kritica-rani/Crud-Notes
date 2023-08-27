import React from "react";
import EditList from "./EditList";
import styles from './button.module.css'

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
        <EditList text={text} saveEditedNotes={saveEditedNotes} id={id} editId={editId}/>
    );
  } else {
    return (
      <div className="note">
        <p>{text}</p>
        <p>{date}</p>
        <button onClick={() => handleDeleteNotes(id)} className={styles.delete}> <i class="fa-solid fa-trash fa-xs"></i> delete</button>
        <button onClick={() => handleEdit(id)} className={styles.edit}> <i class="fa-solid fa-pencil fa-sm"></i> Edit</button>
      </div>
    );
  }
}
