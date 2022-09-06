import { applyMiddleware, createstore } from "redux";
import thunk from "redux-thunk";
const Store=createstore(rootReducer,applyMiddleware(thunk))

export default Store;