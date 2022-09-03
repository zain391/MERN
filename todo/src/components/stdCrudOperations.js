import React ,{useState}from 'react'
import {Data} from "./stdData"
import StdList from './stdList'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
function StdCrudOperations() {
  const [stdArray,setstdArray]=useState(Data)
  const [flag,setflag]=useState(false)
  const [indexupdate,setindexupdate]=useState(0)
  const [stdName,setstdName]=useState("")
  const [stdRoll,setstdRoll]=useState("")
  const [stdClass,setstdClass]=useState("")
  const [stdBatch,setstdBatch]=useState("")
   
  const ctaupdatehandler=()=>{
    if(stdName !=="" && stdRoll !== "" && stdClass !=="" && stdBatch ){
      let newStd={
     stdName,
     stdRoll,
     stdClass,
     stdBatch
   }
  let updateStudents=stdArray.map((students,index)=>{
    if(indexupdate === index){
      return newStd
    }
    else{
      return students
    }
  });
  setstdArray([...updateStudents]);
  setstdName("")
  setstdRoll("")
  setstdClass("")
  setstdBatch("")
  setflag(false)
  }
  else{
    alert("cannot update")
  }
}

const ctaHandler=()=>{
  if(stdName !=="" && stdRoll !== "" && stdClass !=="" && stdBatch ){
     let newStd={
    stdName,
    stdRoll,
    stdClass,
    stdBatch
  }
  setstdArray([...stdArray,newStd])
  }
  else{
    alert()
  }
    setstdName("")
    setstdRoll("")
    setstdClass("")
    setstdBatch("")
}
const ctaDeleteHandler=(index)=>{
  const newStdAfterDel=stdArray.filter((student,ind)=>{
    if(index != ind){
      return student
    }
  })
  setstdArray(newStdAfterDel);

}
const updatehandler=(students,index)=>{
  setindexupdate(index)
  setstdName(students.stdName)
    setstdRoll(students.stdRoll)
    setstdClass(students.stdClass)
    setstdBatch(students.stdBatch)
    setflag(true)
}

  
    return (
    <div>
        <input type="text" placeholder='stdName'  onChange={(e)=>{setstdName(e.target.value,console.log(stdName))}} value={stdName} name='stdName'/>
        <input type="text" placeholder='stdRoll'  onChange={(e)=>{setstdRoll(e.target.value)}} value={stdRoll} name='stdRoll'/>
        <input type="text" placeholder='stdClass' onChange={(e)=>{setstdClass(e.target.value)}} value={stdClass} name='stdClass'/>
        <input type="text" placeholder='stdBatch' onChange={(e)=>{setstdBatch(e.target.value)}} value={stdBatch} name='stdBatch'/>
            {
              flag ? <button onClick={ctaupdatehandler} className="btn btn-info">update</button> :<button onClick={ctaHandler} className="btn btn-success">add</button> 
            }
            <StdList stdArray={stdArray} ctaDeleteHandler={ctaDeleteHandler} updatehandler={updatehandler}/>
    </div>
  )
}

export default StdCrudOperations