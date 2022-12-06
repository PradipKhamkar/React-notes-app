import React, { useEffect, useState } from 'react'
import "./App.css"
import NotesList from './Components/NotesList'
import { nanoid } from "nanoid"
import Search from './Components/Search'
import Header from './Components/Header'
import { useAlert } from "react-alert"
import { FcLike } from "react-icons/fc"

const Data = () => {
  const notesData = localStorage.getItem('noteData')
  if (notesData) {
    return JSON.parse(localStorage.getItem('noteData'))
  }
  else {
    return [];
  }
}

const App = () => {

  const alert = useAlert()
  const [notes, setNotes] = useState(Data())
  const [isUpdateNote, setIsUpdateNote] = useState(false)

  useEffect(() => {
    localStorage.setItem('noteData', JSON.stringify(notes));
  }, [notes, isUpdateNote]);


  const addNotes = (...data) => {
    const newNote = {
      id: nanoid(),
      text: data[0],
      date: new Date().toLocaleDateString('en-us', { year: "numeric", month: "short", day: "numeric" })
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes)
  }

  const deleteNote = (id) => {
    const FilterNote = notes.filter((note) => { return note.id != id });
    setNotes(FilterNote);
    alert.success('Note Deleted :)')
  }

  const updateNote = (id, updatedNote) => {
    const filterNote = notes.filter((note) => { return note.id === id });
    filterNote[0].text = updatedNote;
    setNotes(notes, ...filterNote);
    setIsUpdateNote((isUpdateNote) => !isUpdateNote);
  }

  const characterLimit = 200;

  const [searchText, setSearchText] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
        <Header handelToggleDarkMode={setDarkMode} />
        <Search handelSearchNote={setSearchText} />
        <NotesList notes=
          {
            notes.filter((note) => note.text.toLowerCase().includes(searchText))
          }
          handelAddNote={addNotes}
          deleteNote={deleteNote}
          updateNote={updateNote}
          characterLimit={characterLimit}
        />
        <div className="about-us">
          <FcLike /> <small> &copy; Khamkar Pradip |
            <a href="https://www.instagram.com/khamkar_pradip25"> Follow Us</a>
          </small>
          <FcLike />
        </div>
      </div>
    </div>
  )

}

export default App