import React from 'react'
import AddNote from './AddNote'
import Note from './Note'
import "./NoteList.css"

const NotesList = ({ notes, handelAddNote, deleteNote, updateNote, characterLimit }) => {
    return (
        <div className="node-list">
            {notes.map((note) => {
                return <Note
                    key={note.id}
                    id={note.id}
                    text={note.text}
                    date={note.date}
                    deleteNote={deleteNote}
                    updateNote={updateNote}
                    characterLimit={characterLimit}
                />
            })}
            <AddNote
                handelAddNote={handelAddNote}
                characterLimit={characterLimit}
            />
        </div>
    )
}

export default NotesList