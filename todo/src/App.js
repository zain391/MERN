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
  const [studentData , setStudentData]=useState({
    stdName:"zain",
        rollNo:"bsf1902349",
        classname:"BS IT",
        batch:"7th"
  })
const inputVal=(e)=>{
  // console.log(e.target.value);
  console.log(e.target.value);
  let obj={
    stdName:studentData.stdName,
        rollNo:studentData.rollNo,
        classname:studentData.classname,
        batch:studentData.batch
  }
  console.log(obj," i am obj of input ");
  setStudentData(obj)
}
const addToArray=()=>{
  let obj={
    stdName:studentData.stdName,
        rollNo:studentData.rollNo,
        classname:studentData.classname,
        batch:studentData.batch
  }
  console.log(obj," i am obj of addIntodo array");
  setstudentsArray((newStd)=>{
    return [...newStd,obj]
  })
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
