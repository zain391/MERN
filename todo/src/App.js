import React, { useState } from 'react';
// import { Header } from './components/header/header';
// import MainSection from './components/main/mainSectioin';
// import Footer from './components/footer/footer';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
// import Input from './studentsTodo/input/input';
import StudentTable from './studentsTodo/studentTable/studentTable';
// import {Stud} from "././studentsTodo/Students"ß
import { Stud } from './studentsTodo/Students';
import './App.css';
function App() {
  const [studentsArray,setstudentsArray]=useState(Stud)
  // const [stdObj ,setstdObj]=useState({
  //   stdName:"",
  //   rollNo:"",
  //   classname:"",
  //   batch:""
  // })
  const [stdObj ,setstdObj]=useState({})
 
const inputVal=(e)=>{
  // console.log(e.target.placeholder);
  const names= e.target.name;
  // console.log(names );  
 const value=e.target.value;
 setstdObj({...stdObj,[names]:value})
}
const addToArray=()=>{
  let obj={
    stdName:stdObj.stdName,
    rollNo:stdObj.rollNo,
    classname:stdObj.classname,
    batch:stdObj.batch
  }
  setstudentsArray((finalStdArray)=>{
    return [...finalStdArray,obj]
  });
  console.log(studentsArray,"studentsArray");
}
  return (
    <div className="App">
      
      
    <input type="text" value={stdObj.stdName} placeholder="stdName" onChange={inputVal} name="stdName"/>
    <input type="text" value={stdObj.rollNo} placeholder="rollNo" onChange={inputVal} name="rollNo"/>
    <input type="text" value={stdObj.classname} placeholder="classname" onChange={inputVal} name="classname"/>
    <input type="text" value={stdObj.batch} placeholder="batch" onChange={inputVal} name="batch"/>
      <button onClick={addToArray}>Add </button>
      <StudentTable finalStdArray={studentsArray}/>
    </div>
  );

}

export default App;
