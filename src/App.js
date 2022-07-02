import React from "react";
import { useState } from "react";
import Search from './Search'
import Notes from './Notes';


const App=()=>{

  const[searchValue, setSearchValue]=useState('');

  const[notesList,setNotesList]=useState([]);
  const[currNote, setCurrNote]=useState('');
  const[origList, setOrigList]=useState([]);
  
  const noteChange=(e)=>{
    if(e.target.value.length > 200)return;
    setCurrNote(e.target.value);

  }
  const submitHandler=(e)=>{
    e.preventDefault();
    const newList=[...notesList, currNote];
    setNotesList(newList);
    setCurrNote('');
    setOrigList(newList);
  }
  const deleteHandler=(listNo)=>{
    const newListForOrig=origList.filter((list, index)=>index!== listNo);
    const newListForSearch=notesList.filter((list, index)=> index !==listNo);
    setNotesList(newListForSearch);
    setOrigList(newListForOrig);

  }
  const searchHandler=(e)=>{
    // if(e.target.value){
    //   setNotesList(origList);
    // }
    setSearchValue(e.target.value);
    setNotesList(origList.filter((singleNote)=>singleNote.includes(e.target.value)));
  }
  return (
    <section className="section">
      <div className="header">
        <h2 className="title">Notes</h2>
        <button className="toggle">Toggle Mode</button>
      </div>
      <Search searchValue={searchValue} searchHandler={searchHandler} />
      <Notes currNote={currNote} notesList={notesList} noteChange={noteChange} submitHandler={submitHandler} deleteHandler={deleteHandler}/>
    </section>
  )

}
export default App;