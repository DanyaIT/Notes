import React, {useState} from 'react'

const AddNote = ({addNote}) => {

  const [noteText, setNoteText] = useState('')
    const COUNTCHARS = 200;
    const handleChange = (e)=>{
        if (COUNTCHARS - e.target.value.length >= 0){
            setNoteText(e.target.value)
        }
    }
  
    const handleSaveClick = () =>{
        if(noteText.trim().length > 0){
            addNote(noteText)
            setNoteText('')
        }
        
    }

  return (
    <div className='note note__add'>
        <textarea
        onChange={handleChange}
        value = {noteText}
        rows = '10'
        cols = '10'
        placeholder = 'Write something'
        >
        </textarea>
        <div className='note__footer'>
            <small>{COUNTCHARS - noteText.length} символов</small>
            <button 
            className='save'
            onClick={handleSaveClick}
            >
            Save</button>
        </div>
    </div>
  )
}

export default AddNote