import { combineReducers } from "redux";
import StudentReducer from "./reducers/StudentReducer";
import Authreducer from "./reducers/Authreducer";
const RootReducer=combineReducers({
    StudentReducer,
    Authreducer
})

export default RootReducer 