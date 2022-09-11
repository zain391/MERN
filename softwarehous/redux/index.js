// we have imported redux we have to createstore using creatstore function
const redux=require(redux)

// first we will create a state 
const initialState={
    numberOfCakes:10
}

// it is always better to define an action seperately to use it accurately 
const ORDER_CAKE="ORDER_CAKE";

// action is always an object with some properties
function orderCake(){
    // now we are going to create an action (action type)
    return {
        type:ORDER_CAKE,
        quantity:1
    }
}


// now the reducer 
// reducer is a function while action and stores are objects 
// reducer function takes initialState and action object as parameters

const reducer=(state=initialState, action)=>{
    // reducer is like a shopkeeper so we have to pass the action to it
    switch(ORDER_CAKE){
        case ORDER_CAKE:
            return {
                ...state,
                numberOfCakes:(state.numberOfCakes-1)
            }
        break;
        default:
           return  initialState 
    }
}