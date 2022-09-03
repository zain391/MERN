import React ,{useState}from 'react'
import {Data} from "./stdData"
import StdList from './stdList'
function StdCrudOperations() {
  const [stdArray,setstdArray]=useState(Data)
  const [flag,setflag]=useState(false)
  const [stdName,setstdName]=useState("")
  const [stdRoll,setstdRoll]=useState("")
  const [stdClass,setstdClass]=useState("")
  const [stdBatch,setstdBatch]=useState("")
    
  // let obj={
  //   stdName,
  //   stdRoll,
  //   stdClass,
  //   stdBatch
  // }
  
    return (
    <div>
        <input type="text" placeholder='stdName'  onChange={(e)=>{setstdName(e.target.value,console.log(stdName))}} value={stdName} name='stdName'/>
        <input type="text" placeholder='stdRoll'  onChange={(e)=>{setstdRoll(e.target.value)}} value={stdRoll} name='stdRoll'/>
        <input type="text" placeholder='stdClass' onChange={(e)=>{setstdClass(e.target.value)}} value={stdClass} name='stdClass'/>
        <input type="text" placeholder='stdBatch' onChange={(e)=>{setstdBatch(e.target.value)}} value={stdBatch} name='stdBatch'/>
            {
              flag ? <button>update</button> :<button>add</button> 
            }
            <StdList stdArray={stdArray}/>
    </div>
  )
}

export default StdCrudOperations