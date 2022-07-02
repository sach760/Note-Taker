import React from "react";
import { AiFillDelete } from "react-icons/ai";

const Notes=({currNote, noteChange, notesList, submitHandler, deleteHandler})=>{
   const today = new Date().toLocaleDateString()



    return <section className="notes-list">
        {
            notesList.map((singleNote, index)=>{
                return(
                        <div  >
                            <div className="note note-para">
                                <p className="char">{singleNote}</p>
                            </div>
                            <div className="note-info">
                                <p className="char">{today}</p>
                                <AiFillDelete className='icon' onClick={()=>{deleteHandler(index)}}/>

                            </div>

                        </div>                   
                )
            })
        }
        <div >
            <form className="form">
                
                <textarea  name="" id="" cols="30" rows="10" placeholder="Type to add a note..." value={currNote} 
                   onChange={(e)=>{noteChange(e)}}></textarea>
                <div className="note-info">
                <p className="char">{`${200-currNote.length} Remaining`}</p>
                <button className='icon' type="submit" onClick={(e)=>{
                    submitHandler(e)
                }}>Save</button>

                </div>
            </form>

        </div>
    </section>
}
export default Notes;