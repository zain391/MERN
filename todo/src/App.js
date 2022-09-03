import React, { useState } from 'react';
import "./App.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Data } from "../src/components/stdData/data"
import StdList from './components/stdList/StdList';
function App() {
  console.log(Data);
  const [stdDataArray, setstdData] = useState(Data)
  const [stdName, setstdName] = useState("")
  const [stdRoll, setstdRoll] = useState("")
  const [stdClass, setstdClass] = useState("")
  const [stdbatch, setstdbatch] = useState("")
  const [flag, setFlag] = useState(false);
  const [updatedIndex, setUpdatedIndex] = useState(0)

  const ctaHAndler = () => {
    if (stdName !== "" && stdRoll !== "" && stdClass !== "" && stdbatch !== "") {
      let obj = {
        stdName,
        stdRoll,
        stdClass,
        stdbatch
      }
      setstdData([...stdDataArray, obj])
      setstdName("");
      setstdRoll("");
      setstdClass("");
      setstdbatch("");
    }
    else {
      alert()
    }
  }
  const deleteHandler = (index) => {
    console.log(index);
    let newStdArray = stdDataArray.filter((student, ind) => {
      if (index !== ind) {
        return student
      }
    })
    setstdData([...newStdArray])
  }
  // const updateHandler = (students, index) => {
  //   setUpdatedIndex(index);
  //   setstdName(students.name);
  //   setstdRoll(students.class);
  //   setstdClass(students.roll);
  //   setstdbatch(students.batch);
  // }
  const ctaUpdateHandler = (students, index) => {
    // setMessage("")
    setUpdatedIndex(index);
    setstdName(students.name);
    setstdRoll(students.class);
    setstdClass(students.roll);
    setstdbatch(students.batch);
    if (stdName !== "" && stdRoll !== "" && stdClass !== "" && stdbatch !== "") {
      let student = {
        stdName,
        stdbatch,
        stdRoll,
        stdClass,
      }
      console.log("student", student);

      let updateStudents = stdDataArray.map((stu, index) => {
        if (updatedIndex === index) {
          return student

        }
        else {
          return stu;
        }
      })

      setstdData([...updateStudents]);
      setstdName("");
      setstdRoll("");
      setstdClass("");
      setstdbatch("");
      setFlag(false);

    }
    else {
      // setMessage(" Found few of params empty! Params can't be empty.")
      alert()
    }
  }
  return (
    <div className="App">
      <input type="text" name='stdName' placeholder='stdName' onChange={(e) => { setstdName(e.target.value) }} value={stdName} />
      <input type="text" name='stdRoll' placeholder='stdRoll' onChange={(e) => { setstdRoll(e.target.value) }} value={stdRoll} />
      <input type="text" name='stdClass' placeholder='stdClass' onChange={(e) => { setstdClass(e.target.value) }} value={stdClass} />
      <input type="text" name='stdbatch' placeholder='stdbatch' onChange={(e) => { setstdbatch(e.target.value) }} value={stdbatch} />
      {/* {flag ?
        <button onClick={ctaUpdateHandler}>CTAupdate</button>
        :
        <button onClick={ctaHAndler}>Add</button>
      } */}
      <StdList stdDataArray={stdDataArray} deleteHandl={deleteHandler} updateHandler={ctaUpdateHandler} />
    </div>
  );

}

export default App;
