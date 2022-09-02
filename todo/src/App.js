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
  const [stdName , setstdName]=useState("")
  const [rollNo , setrollNo]=useState("")
  const [classname , setclassname]=useState("")
  const [batch , setbatch]=useState("")
 
const inputnameVal=(e)=>{
  setstdName(e.target.value)
}
const inputrollNoVal=(e)=>{
  setrollNo(e.target.value)
}
const inputclassnameVal=(e)=>{
  setclassname(e.target.value)
}
const inputbatchVal=(e)=>{
  setbatch(e.target.value)
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
