import React, { useState } from "react";
import "../App.css"
import styles from "./button.module.css";

export default function EditList({ text, saveEditedNotes, id ,editId}) {
  const [editedText, setEditedText] = useState(text);
  const handleChange = (e) => {
    const savetext = e.target.value;
    setEditedText(savetext);
  };
  const handleSaveEditedNotes = (id) => {
    saveEditedNotes(id, editedText);
  };
  return (
    <>
      {" "}
      <div className={ editId?"editBack":"note" }>
        <textarea
          rows={8}
          cols={10}
          onChange={(e) => handleChange(e)}
          placeholder="Edit notes"
          value={editedText}
          className="editText"
        />
        <button onClick={() => handleSaveEditedNotes(id)} className={styles.btn}> <i class="fa-solid fa-check fa-sm"></i> Save </button>
      </div>
    </>
  );
}
