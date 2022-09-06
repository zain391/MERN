import { applyMiddleware, createstore } from "redux";
import thunk from "redux-thunk";

// as we have made the rootreducer in the rootreducer.js now we will import it in the store.js 
import RootReducer from "../redux/rootreducer";
const Store=createstore(RootReducer,applyMiddleware(thunk))

export default Store;