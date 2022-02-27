import React, { useContext, useEffect, useRef, useState } from 'react'
import noteContext from "../context/noteContext"
import NoteItem from './NoteItem'
import { AddNote } from './AddNote'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { useNavigate } from "react-router-dom";


export const Notes = () => {
    let navigate = useNavigate();
    const context = useContext(noteContext)
    const { notes, getallnotes, editNote } = context
    useEffect(() => {
        if (localStorage.getItem('token')) {

            getallnotes()
        }
        else {
            navigate('/login')
        }
        // eslint-disable-next-line
    }, [])
    const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "" })

    const ref = useRef(null)
    const updateNote = (currentNote) => {
        setShow(true)
        setNote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag, })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setShow(false)
        editNote(note.id, note.etitle, note.edescription, note.etag)
    }

    const handleOnChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }


    const [show, setShow] = useState(false)


    const handleClose = () => {
        setShow(false)
    }
    return (
        <>
            <AddNote />
            <Button ref={ref} variant="primary" className='d-none'>
                Launch demo modal
            </Button>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Note</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className='my-3' >
                        <div className="mb-3">
                            <label htmlFor="etitle" className="form-label">Title</label>
                            <input type="text" value={note.etitle} className="form-control" id="etitle" name='etitle' onChange={handleOnChange} />

                        </div>
                        <div className="mb-3">
                            <label htmlFor="edescription" className="form-label">Description</label>
                            <input type="text" value={note.edescription} className="form-control" id="edescription" name='edescription' onChange={handleOnChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="etag" className="form-label">Tag</label>
                            <input type="text" value={note.etag} className="form-control" id="etag" name="etag" onChange={handleOnChange} />
                        </div>

                    </form></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button disabled={note.etitle.length < 5 || note.edescription.length < 5} onClick={handleSubmit} variant="primary" >
                        Update Note
                    </Button>
                </Modal.Footer>
            </Modal>
            <div className='row my-3'>
                <h3 className='your-notes-heading'>Your Notes</h3>
                <div className='container'>
                    {notes.length === 0 && "No Notes to display!"}</div>
                    {notes.map((note) => {
                        return <NoteItem key={note._id} note={note} updateNote={updateNote} />
                    })}
            </div>
        </>
    )
}
