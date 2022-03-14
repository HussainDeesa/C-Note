import React, { useContext } from 'react'
import noteContext from "../context/noteContext"

const NoteItem = (props) => {
    const context = useContext(noteContext)
    const { deleteNote } = context

    const { note, updateNote } = props;
    return (
        <div className='noteItem col-md-6 col-lg-3'>
            <div className="card my-3" >
                <div className="card-body">
                    <div className='d-flex align-center'>
                        <h5 className="card-title">{note.title}</h5>
                        <div className='tag-badge'>
                            <span class=" badge rounded-pill">
                                {note.tag}
                            </span>
                        </div>
                        <i className="fa-solid fa-trash-can mx-2" onClick={() => { deleteNote(note._id) }}></i>
                        <i className="fa-solid fa-pen-to-square mx-2" onClick={() => { updateNote(note) }}></i>
                    </div>
                    <p style={{ whiteSpace: " pre-wrap" }} className="card-text">{note.description}</p>

                </div>
            </div>
        </div>
    )
}

export default NoteItem