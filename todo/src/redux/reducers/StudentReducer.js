import React from 'react'
let initialState = {
    stdName: "random1",
    stdRoll: "123",
    stdClass: "Class 1",
    stdBatch: "7th"
}
function StudentReducer(state = initialState, action) {
    // return (
    //     <div>StudentReducer</div>
    // )

    // first      
    // switch(action){
    //     case value:
    //         break;
    //     default:
    //         state    
    // }

    switch(action.type){
        case "ADD_STUDENT":
            // all the logic will be here 
            let newStateAfterActionHappens={
                ...state,
                // we might had chaged the id or added new attribute in the state and added it in the newstate
                id:Math.random().toString(32).slice(2),
                // we might also get some new data from the action (action.payload)
                newData:action.payload
            }
            return newStateAfterActionHappens
        default:
           return   state    
    }
}

export default StudentReducer