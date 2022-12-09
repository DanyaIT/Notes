import Note from "../Note/Note"
import '../NoteList/NoteList.css'
import AddNote from "../AddNote"

const NoteList = ({notes, addNote, handleDeleteNote}) =>{
    
    
    return(
        <div className="note__list">
          {notes.map(note =>
            <Note 
            handleDeleteNote = {handleDeleteNote}
            key = {note.id} 
            note = {note}
            />
            )}
            <AddNote addNote = {addNote}/>
        </div>
    )
}

export default NoteList