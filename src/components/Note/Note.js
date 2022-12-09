import React from 'react'
import {MdDeleteForever} from 'react-icons/md'


const Note = ({note,handleDeleteNote}) => {
  return (
    <div className='note'>
        <span>{note.text}</span>
        <div className = 'note__footer'>
            <small>{note.date}</small>
            <i 
            onClick = {()=> handleDeleteNote(note.id)}
            className='delete__icon' 
            size = '1.3em'
            >
            <MdDeleteForever/></i>
        </div>
    </div>
  )
}

export default Note