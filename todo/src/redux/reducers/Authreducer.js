import React from 'react'



let initialState = {
    isLogIn: true,
    user:{userName:"zain",email:"zain356@gmail.com"}
}
function Authreducer(state = initialState, action) {
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
        case "ISLOGIN":
            // all the logic will be here 
            let newStateAfterActionHappens={
                ...state,
                // we might had chaged the id or added new attribute in the state and added it in the newstate
                isLogIn:true,
                // we might also get some new data from the action (action.payload)
                newData:action.payload
            }
            return newStateAfterActionHappens
        default:
           return   state    
    }
}
export default Authreducer