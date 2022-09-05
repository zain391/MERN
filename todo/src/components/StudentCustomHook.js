import React,{useState} from 'react'
import {StudentData} from "./StudentData"
function StudentCustomHook() {
    const [stdName ,setstdName]=useState("")
    const [stdRoll ,setstdRoll]=useState("")
    const [stdClass ,setstdClass]=useState("")
    const [stdBatch ,setstdBatch]=useState("")
    const [stdObj ,setstdObj]=useState({})
    const [stdObjArray ,setstdObjArray]=useState(StudentData)
    
  return (
    <div>
        
    </div>
  )
}

export default StudentCustomHook