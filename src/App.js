import { useState, useEffect} from "react";
import { nanoid } from "nanoid";
import "./App.css";
import NoteList from "./components/NoteList/NoteList";
import Search from "./components/Search";
import Header from "./components/Header";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [filterText, setFilterText] = useState("");
  const [notes, setNotes] = useState([]);

  const addNote = (text) => {
    const date = new Date();
    const newObj = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    setNotes([...notes, newObj]);
  };

  const handleDeleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  useEffect(()=>{
    let notesSave = JSON.parse(localStorage.getItem('arr-react-notes-data'))
    if(notesSave){
      setNotes(notesSave)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem('arr-react-notes-data', JSON.stringify(notes))
  },[notes])

  return (
    <div className={darkMode && 'dark__mode'}>
      <div className="App">
        <div className="container">
          <Header setDarkMode={setDarkMode} />
          <Search setFilterText={setFilterText} />
          <NoteList
            addNote={addNote}
            notes={notes.filter((note) =>
              note.text.toLowerCase().includes(filterText)
            )}
            handleDeleteNote={handleDeleteNote}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
