import React from 'react'
import { useState } from 'react'
import { useAlert } from "react-alert"
import { CgNotes } from "react-icons/cg"

const AddNote = ({ handelAddNote, characterLimit }) => {
    const alert = useAlert()
    const [noteText, setNoteText] = useState('');



    const handelChange = (e) => {
        if (characterLimit - e.target.value.length >= 0) {
            setNoteText(e.target.value)
        }
        else {
            alert.error('Woops ! Text Limit Over..')
        }
    }

    const handelSaveNote = () => {
        if (noteText.trim().length > 0) {
            handelAddNote(noteText)
            setNoteText('')
            alert.success("Note Added..!!")
        }
        else {
            alert.info("Hey ! Please Write Something...")
        }
    }

    return (
        <>
            <div className='note add-note'>
                <textarea
                    name=""
                    id=""
                    cols="10"
                    rows="8"
                    value={noteText}
                    required
                    onChange={(e) => handelChange(e)}
                    placeholder='Type to add a note...'>
                </textarea>
                <div className="note-footer">
                    <small>{characterLimit - noteText.length} Remaining</small>
                    <button className='save-btn'
                        onClick={handelSaveNote}>Create Note {<CgNotes />}</button>
                </div>
            </div>
        </>
    )
}

export default AddNote