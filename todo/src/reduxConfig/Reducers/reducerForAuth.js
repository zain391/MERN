let initialState = {
  islogin:true,
  userName:"",
  email:"random123@gmail.com",

}

function reducerForAuth(state = initialState, action){
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
export default reducerForAuth;