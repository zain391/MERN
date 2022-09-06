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
            return state
        default:
           return   state    
    }
}

export default StudentReducer