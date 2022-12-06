import React, { useState } from 'react'
import { MdDeleteForever, MdEdit } from "react-icons/md"
import "./Note.css"
import { useAlert } from "react-alert"


const Note = ({ id, text, date, deleteNote, updateNote, characterLimit }) => {

    const alert = useAlert()

    const [noteText, setNoteText] = useState(text)


    const handelNoteUpdate = (id) => {

        if (noteText.length >= characterLimit) {
            alert.error(`Woops ! Text Limit Over :( `)
        }

        else if (noteText === '') {
            alert.info("Hey ! Please Write Something...")
        }

        else {
            updateNote(id, noteText)
            alert.success("Note Updated :) ")
        }
    }

    return (
        <div className="note">
            <span className='note-text'>
                <textarea
                    name=""
                    id=""
                    cols="10"
                    rows="8"
                    value={noteText}
                    required
                    onChange={(e) => setNoteText(e.target.value)}
                >
                </textarea>
            </span>
            <div className="note-footer">
                <small>{date}</small>
                <div className="note-option">
                    <span id="edit"
                        onClick={() => { handelNoteUpdate(id) }}>
                        Edit <MdEdit className="edit-icon App-logo" size="1.2em" />
                    </span>
                    <span
                        onClick={() => { deleteNote(id) }}>
                        Delete
                        <MdDeleteForever className="delete-icon App-logo" size="1.2em" />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Note