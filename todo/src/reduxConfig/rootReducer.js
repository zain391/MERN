import { combineReducers } from 'redux'
import reducerForAuth from './Reducers/reducerForAuth'
import reducerForStudents from './Reducers/reducerForStudents'
const  rootReducer=combineReducers({
    reducerForStudents,
    reducerForAuth
}) 

export default rootReducer