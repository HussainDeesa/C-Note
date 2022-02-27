import React, { useState, useContext } from 'react'
import noteContext from "../context/noteContext"

export const AddNote = () => {
    const context = useContext(noteContext)
    const { addNote } = context;
    const [note, setNote] = useState({ title: "", description: "", tag: "" })

    const handleSubmit = (e) => {
        e.preventDefault()
        addNote(note.title, note.description, note.tag)
        setNote({ title: "", description: "", tag: "" })
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
                        <input type="text" className="form-control" id="description" value={note.description} name='description' onChange={handleOnChange} />
                        <label htmlFor="tag" className="form-label">Tag:</label>
                        <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={handleOnChange} />

                        <button id='btn-addNote' type="submit" disabled={note.title.length<0|| note.description.length<0} className='form-btn' onClick={handleSubmit}>Add Note</button>

                    </form>
                </div>
            </div>
        </div>
    )
}
