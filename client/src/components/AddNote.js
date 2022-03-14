import React, { useState, useContext } from 'react'
import noteContext from "../context/noteContext"
import { Alert } from './Alert'
export const AddNote = (props) => {
    const addNoteBtn = document.getElementById('btn-addNote')
    props.setprogress(0)
    const context = useContext(noteContext)
    const { addNote } = context;
    const [note, setNote] = useState({ title: "", description: "", tag: "" })

    const handleSubmit = (e) => {
        addNoteBtn.classList.remove('addnote-btn')
        addNoteBtn.classList.add('addnote-btn-hover')
        props.setprogress(10)
        e.preventDefault()
        props.setprogress(30)
        if (note.title.length === 0 || note.description.length === 0) {
            props.showAlert("Title or description cannot be empty")
            props.setprogress(100)
            setTimeout(() => {
                addNoteBtn.classList.remove('addnote-btn-hover')
                addNoteBtn.classList.add('addnote-btn')
            }, 1500);
        }
        else {
            addNote(note.title, note.description, note.tag)
            props.setprogress(70)
            setNote({ title: "", description: "", tag: "" })
            props.setprogress(100)
            addNoteBtn.classList.remove('addnote-btn-hover')
            addNoteBtn.classList.add('addnote-btn')
        }
    }

    const handleOnChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    return (
        <div className='container my-3'>
            <div className='form-template' id='form-addNote'>
                <div className='head'>
                    <h3 className='form-title'>Add Your Notes.</h3>
                </div>
                <div className='form'>
                    <form>
                        <label htmlFor="title" className="form-label">Title: </label>
                        <input type="text" className="form-control" id="title" value={note.title} name='title' onChange={handleOnChange} />
                        <label htmlFor="description" className="form-label">Description:</label>
                        <textarea style={{whiteSpace:" pre-wrap"}} type="text" className="form-control" id="description" value={note.description} name='description' onChange={handleOnChange} />
                        <label htmlFor="tag" className="form-label">Tag:</label>
                        <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={handleOnChange} />

                        <button id='btn-addNote' type="submit" disabled={note.title.length < 0 || note.description.length < 0} className='addnote-btn' onClick={handleSubmit}>Add Note</button>

                    </form>
                    <Alert alert={props.alert} />
                </div>
            </div>
        </div>
    )
}
