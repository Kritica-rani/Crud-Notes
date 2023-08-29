import React, { useState } from "react";
import styles from "./button.module.css"

export default function AddNotes({ handleAddNotes }) {
  const [newTextValue, setNewTextValue] = useState("");
  const handleChange = (e) => {
    console.log("e", e.target.value);
    setNewTextValue(e.target.value);
  };
  const handleSaveNotes = () => {
    handleAddNotes(newTextValue);
    setNewTextValue("");
    console.log("checking");
  };
  return (
    <div className="notee">
      <textarea
        rows={8}
        cols={10}
        onChange={handleChange}
        placeholder="Add note...."
        value={newTextValue} 
      />
      <button onClick={handleSaveNotes} className={styles.btn}> <i class="fa-solid fa-check fa-sm"></i> Save</button>
    </div>
  );
}
