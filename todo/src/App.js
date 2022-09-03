import React, { useState } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Input from './components/input/input';
import "./App.css"
import {StdData} from "../src/components/data/stdData"
import ListStd from './components/listStd/ListStd';
function App() {
  const [stdObj, setstdObj]=useState({});
  const [stdObjArray, setstdObjArray]=useState(StdData);

const inputHandler=(e)=>{
  const namee=e.target.name;
  const value=e.target.value;
  setstdObj({...stdObj,[namee]:value})
}


const addtoStdArray=()=>{
  setstdObjArray((finalStdArray)=>{
    return [...finalStdArray,stdObj]
  });
  console.log(stdObjArray); 
}



const delBtnhandler=(index)=>{
  let newStdAfterDel=stdObjArray.filter((students,ind)=>{
    if(index !== ind){
      // console.log(students);
      return students;
    }
  })
  setstdObjArray([...newStdAfterDel])
}



const updateBtnhandler=(index)=>{
  stdObjArray.map((students,ind)=>{
    if(index == ind){
      
      
      return students;
    }
  })
  // setstdObjArray([...newStdAfterDel])
}

  return (
    <div className="App">
      <Input palce="enter stdName" name="stdName" fun={inputHandler}/>
      <Input palce="enter stdName" name="rollNo" fun={inputHandler}/>
      <Input palce="enter stdName" name="className" fun={inputHandler}/>
      <Input palce="enter stdName" name="batch" fun={inputHandler}/>
    <button className='btn btn-success' onClick={addtoStdArray}>Add</button>
    <ListStd stdData={stdObjArray} delBtnhandler={delBtnhandler} updateBtnhandler={updateBtnhandler}/>
    </div>
  );

}

export default App;
