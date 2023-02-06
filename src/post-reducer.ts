
export type PostState ={
    newNote: string
    everyNote: string[]
}

// actions to perform:
    // setting note
    // add note
    // clear note
    // post note

export type SetNoteAction = {type:"SET_NOTE", payload:string};
export type AddNoteAction = {type:"ADD_NOTE"};
export type ClearNoteAction ={type:"CLEAR_NOTE"};
export type PostItAction = SetNoteAction | AddNoteAction | ClearNoteAction;

export function postReducer(state:PostState, action: PostItAction): PostState{
    const newState: PostState = JSON.parse(JSON.stringify(state));
    
    switch(action.type){
        case "SET_NOTE":{
            newState.newNote = action.payload;
            return newState;
        }
        case "ADD_NOTE":{
            if(newState.newNote.length < 3) {
                alert("Note length must be 3 characters or more.")
                return newState;
            } else {
                newState.everyNote.push(newState.newNote);
                return newState;
            }
        }
        case "CLEAR_NOTE":{
            newState.everyNote = [];
            return newState;
        }

    }
}
