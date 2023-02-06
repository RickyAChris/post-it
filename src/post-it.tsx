import { stringify } from "querystring";
import React, { useReducer } from "react"
import { postReducer } from "./post-reducer"

export function PostIt(){

    const[postState, dispatch] = useReducer(postReducer, { newNote: "", everyNote: [] });

    function handleSetNote(event: React.ChangeEvent<HTMLInputElement>) {
        dispatch({ type: "SET_NOTE", payload: String(event.target.value) })
    }
    return <>
    
    <h1>Post-It Note Application</h1>
    <label htmlFor="post"></label>
    <input id="post" type="string" placeholder="Enter your post" onInput={handleSetNote}/>
    <button onClick={()=>dispatch({type:"ADD_NOTE"})}>Add Note</button>
    <h2>Note: {postState.newNote}</h2>
    <button onClick={()=>dispatch({type:"CLEAR_NOTE"})}>Clear Notes</button>

    <ul>
        {postState.everyNote.map(post => <li>{post}</li>)}
    </ul>
    
    </>
    }