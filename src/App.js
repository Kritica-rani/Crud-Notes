import React, { useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import NoteList from "./components/NoteList";

export default function App() {
  const [notes, setNotes] = useState([
    {
      text: "Demo Notes",
      date: "13/07/23",
      id: Math.floor(Math.random()*(10000-1)+1),
    },
  ]);
  const [searchText, setsearchText] = useState("");
  const [editId, setEditId] = useState(null);
  const addNotes = (text) => {
    //logic to update state with new text value
    const date = new Date();
    const newNote = {
      id: Math.floor(Math.random()*100000),
      date: date.toLocaleDateString(),
      text: text,
    };
    //Making a copy of prev added notes along with new notes so that we dont loose prevNotes
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const remainingNotes = notes.filter((item) => item.id !== id);
    setNotes(remainingNotes);
  };
  const handleEdit = (id) => {
    setEditId(id);
  };
  const saveEditedNotes = (id, updatedText) => {
    const updatedNotes = notes.map((item) => {
      if (item.id == id) {
        return { ...item, text: updatedText };
      }
      return item;
    });
    setNotes(updatedNotes);
    setEditId(null);
  };
  console.log("searchText", searchText);
  return (
    <div className="container">
      <Header />
      <Search setSearchText={setsearchText} />
      <NoteList
        notes={notes.filter((note) =>
          note.text.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
        )}
        handleAddNotes={addNotes}
        deleteNote={deleteNote}
        handleEdit={handleEdit}
        editId={editId}
        saveEditedNotes={saveEditedNotes}
      />
    </div>
  );
}
