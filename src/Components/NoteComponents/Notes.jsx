import { React, useState, useEffect } from "react";
import "../css/Note.css";
import CreateNote from "./CreateNote";
import Note from "./Note"

// to make the unique ID
import { v4 as uuid } from "uuid";
import Header from "./Header";


function Notes() {

  // state to store notes
  const [notes, setNotes] = useState( JSON.parse(localStorage.getItem('notes')) || [])
  // to handel input
  const [inputText, setInputText] = useState("")

  // save it to local storage every time there's a change on 'notes'
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  },[notes])

  // get text and store in state
  const textHandler = (e) => {
    setInputText(e.target.value);
  };

  // add new note to the state array
  const saveHandler = () => {
    setNotes(prevNotes => [
      ...prevNotes, {
        id: uuid(),
        text: inputText,
        star: false
      }
    ])

    setInputText("")
  }

  // delete note function
  const deleteHandler = (id) => {
    setNotes(prevNotes => prevNotes.filter((note) => note.id !== id))
  } 

  // star a message function
  const starHandler = (id) => {

    setNotes(prevNotes =>{
      const newArray = []
      for(let i = 0; i < prevNotes.length; i++){
        const currentArray = prevNotes[i]
        if (currentArray.id === id){
          newArray.unshift({...currentArray, star: !currentArray.star})
        }else {
          newArray.push(currentArray)
        }
      }
      return newArray
    })
  }


  const renderNotes = notes.map(item =>(
    <Note key={item.id} id={item.id} text={item.text} star={item.star} starHandler={starHandler} deleteHandler={deleteHandler}/>
  ))

  return (
    <div>
      <Header amount={notes.length}/>
      
      <div className="notes">
      {renderNotes}
      <CreateNote 
        textHandler={textHandler}
        saveHandler={saveHandler}
        inputText={inputText}
      />
    </div>
    </div>
 
  );
}
export default Notes;