import React,{useState} from 'react'
import {StdData} from "./StudentData"
function StudentCustomHook() {

    const [flag ,setflag]=useState(false)
    const [selectedIndex ,setselectedIndex]=useState(0)
    const [stdName ,setstdName]=useState("")
    const [stdRoll ,setstdRoll]=useState("")
    const [stdClass ,setstdClass]=useState("")
    const [stdBatch ,setstdBatch]=useState("")
    const [stdObj ,setstdObj]=useState({})
    const [stdObjArray ,setstdObjArray]=useState(StdData)
    const ctaHandler=()=>{
        let obj={
            stdName,
            stdRoll,
            stdClass,
            stdBatch
        }
        setstdObjArray([...stdObjArray,obj]);
        setstdClass("")
        setstdBatch("")
        setstdObj("")
        setstdRoll("")
    }
    const ctaDeleteHandler=(index)=>{
        console.log(index);
       let stdAafterDel= stdObjArray.filter((Student,ind)=>{
            if(index == ind){
                console.log(ind);
                return Student
            }
           
        })
        setstdObjArray([...stdAafterDel]);
    }
  return [flag,stdName,stdRoll,stdClass,stdBatch,stdObj,stdObjArray,setstdName,setstdRoll,setstdClass,setstdBatch,setstdObj,ctaHandler,ctaDeleteHandler]
}

export default StudentCustomHook