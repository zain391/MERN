import React, { useState } from 'react';
// import { Header } from './components/header/header';
// import MainSection from './components/main/mainSectioin';
// import Footer from './components/footer/footer';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
import Input from './studentsTodo/input/input';
import StudentTable from './studentsTodo/studentTable/studentTable';
// import {Stud} from "././studentsTodo/Students"ß
import { Stud } from './studentsTodo/Students';
import './App.css';
function App() {
  const [studentsArray,setstudentsArray]=useState(Stud)
  const [stdObj ,setstdObj]=useState({
    stdName:"",
    rollNo:"",
    classname:"",
    batch:""
  })
 
const inputVal=(e)=>{
 placeholder= e.target.placeholder;
 value=e.target.value;
 setstdObj({...stdObj,[placeholder]:value})
}
const addToArray=()=>{

}
  return (
    <div className="App">
      
      
      <Input  place="stdName "    fun={inputVal}/>
      <Input  place="rollNo"      fun={inputVal}/>
      <Input  place="classname "  fun={inputVal}/>
      <Input  place="batch"       fun={inputVal}/>
      <button onClick={addToArray}>Add </button>
      <StudentTable/>
    </div>
  );

}

export default App;
