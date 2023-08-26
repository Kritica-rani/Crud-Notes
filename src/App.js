import React, { useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import NoteList from "./components/NoteList";

export default function App() {
  //for darkMode and light mode
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  

  const [notes, setNotes] = useState([
    {
      text: "Demo Notes",
      date: "13/07/23",
      id: Math.random(),
    },
  ]);
  const [searchText, setsearchText] = useState("");
  const [editId, setEditId] = useState(null);
  const addNotes = (text) => {
    //logic to update state with new text value
    const date = new Date();
    const newNote = {
      id: Math.random(),
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
      if (item.id === id) {
        return { ...item, text: updatedText };
      }
      return item;
    });
    setNotes(updatedNotes);
    setEditId(null);
  };
  console.log("searchText", searchText);
  return (
    <div className={`AppWrapper ${isDarkMode ? 'dark' : 'light'}`}>
  <div className= {`container ${isDarkMode ? "dark" : "light"}`}>
    {isDarkMode ? (
      <i
        className="far fa-sun"
        style={{ color: "#ffd43b" }}
        title="Switch to Light Mode"
        onClick={toggleMode}
      ></i>
    ) : (
      <i
        className="fas fa-moon"
        title="Switch to Dark Mode"
        onClick={toggleMode}
      ></i>
    )}

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
    </div>
  );
}
