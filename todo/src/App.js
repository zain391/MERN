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
  console.log(namee);
  console.log(value);
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
      console.log(students);
      return students;
    }
  })
  setstdObjArray([...newStdAfterDel])

 
 
  // stdObjArray.filter((items,ind)=>{
  //   if(ind != index){
  //     setstdObjArray((delArrayItems)=>{
  //       return [...items]
  //     })
  //   }
  // })

}

  return (
    <div className="App">
      <Input palce="enter stdName" name="stdName" fun={inputHandler}/>
      <Input palce="enter stdName" name="rollNo" fun={inputHandler}/>
      <Input palce="enter stdName" name="className" fun={inputHandler}/>
      <Input palce="enter stdName" name="batch" fun={inputHandler}/>
    <button className='btn btn-success' onClick={addtoStdArray}>Add</button>
    <ListStd stdData={stdObjArray} delBtnhandler={delBtnhandler}/>
    </div>
  );

}

export default App;
