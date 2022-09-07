import React, { useState } from 'react';
import "./App.css"
import Students from './components/Students';
import {useSelector,useDispatch} from "react-redux"
import StudentsAction from './reduxConfig/actionsForReducer/StudentsAction';
function App() {
 const store=useSelector(store =>store);
 const dispatch=useDispatch();
 console.log(store);
 const ctahandler=()=>{
  let updateData={
    stdName: "zain",
    stdRoll: "bsf",
    stdClass: "Bs IT",
    stdBatch: "7th"
  }
  dispatch(StudentsAction(updateData))
 }
  return (
    <div className="App">
    <button onClick={ctahandler}>update data</button>
     <Students/>
    </div>
  );

}

export default App;

