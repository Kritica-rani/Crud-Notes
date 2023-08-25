import React, { useState } from "react";

export default function AddNotes({ handleAddNotes }) {
  const [newTextValue, setNewTextValue] = useState("");
  const handleChange = (e) => {
    console.log("e", e.target.value);
    setNewTextValue(e.target.value);
  };
  const handleSaveNotes = () => {
    handleAddNotes(newTextValue);
    setNewTextValue("");
  };
  return (
    <div className="note">
      <textarea
        rows={8}
        cols={10}
        onChange={handleChange}
        placeholder="Add note...."
        value={newTextValue}
      />
      <button onClick={handleSaveNotes}>Save</button>
    </div>
  );
}
