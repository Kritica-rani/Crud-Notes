import React, { useState } from "react";

export default function EditList({ text, saveEditedNotes, id }) {
  const [editedText, setEditedText] = useState(text);
  const handleChange = (e) => {
    const savetext = e.target.value;
    setEditedText(savetext);
  };
  const handleSaveEditedNotes = (id) => {
    saveEditedNotes(id, editedText);
  };
  return (
    <div>
      {" "}
      <div className="note">
        <textarea
          rows={8}
          cols={10}
          onChange={(e) => handleChange(e)}
          placeholder="Edit notes"
          value={editedText}
        />
        <button onClick={() => handleSaveEditedNotes(id)}>Save</button>
      </div>
    </div>
  );
}
