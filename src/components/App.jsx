import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateNote from "./CreateNote";

function App() {

    const [notes, setNotes] = useState([])

    function addNote(newNote) {
        setNotes(prevNotes => {
            return [...prevNotes, newNote];
        });
    }

    function deleteNote(id){
        alert ("Deleted")
    }

    return (
        <div>
            <Header/>
            <CreateNote onAdd={addNote}/>
            {notes.map(noteItem => {
                return <Note title={noteItem.title} content={noteItem.content} onDelete={deleteNote}/>;
            })}

            <Footer/>
        </div>
    );
}

export default App;
