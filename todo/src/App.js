import React, { useState } from 'react';
// import { Header } from './components/header/header';
// import MainSection from './components/main/mainSectioin';
// import Footer from './components/footer/footer';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
import Input from './studentsTodo/input/input';
import StudentTable from './studentsTodo/studentTable/studentTable';
// import {Stud} from "././studentsTodo/Students"ß

import './App.css';
function App() {
  const [studentsArray,setstudentsArray]=useState([])
  // const [studentData , setStudentData]=useState()
const inputVal=(e)=>{
  // console.log(e.target.value);
  console.log(e.target.placeholder);
//   const Stud={
//     stdName:e.target.placeholder,
//     rollNo:e.target.placeholder,
//     classname:e.target.placeholder,
//     batch:e.target.placeholder
// }
// console.log(Stud);
}
const addToArray=()=>{

}
  return (
    <div className="App">
      <Input  place="stdName "  fun={inputVal}/>
      <Input  place="rollNo" fun={inputVal}/>
      <Input  place="classname " fun={inputVal}/>
      <Input  place="batch"  fun={inputVal}/>
      <button onClick={addToArray}>Add </button>
      <StudentTable/>
    </div>
  );

}

export default App;
