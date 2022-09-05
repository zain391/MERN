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
        setstdName("")
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

    const updatehandler=(students,index)=>{
        console.log(students);
        console.log("updatehandler");
        setselectedIndex(index);
        stdObjArray.map((students,ind)=>{
            if(index == ind){
                setstdClass(students.stdName)
        setstdBatch(students.stdBatch)
        setstdName(students.stdName)
        setstdRoll(students.stdRoll) 
            }
            setflag(true)
        })  
    }


    const ctaupdatehandler=()=>{ 
        console.log("i am working");
        let obj={
            stdName,
            stdRoll,
            stdClass,
            stdBatch
        }
        console.log("obj",obj);
        const updatedStdArray=stdObjArray.map((student,index)=>{
            if(index ==selectedIndex){
                console.log(obj);
                return obj    
            }
            else{
                return student
            }
        })
        console.log(updatedStdArray);
        setstdObjArray([...updatedStdArray]);
        setstdClass("")
        setstdBatch("")
        setstdName("")
        setstdRoll("")
        setflag(false)
    }


  return [flag,stdName,stdRoll,stdClass,stdBatch,stdObj,stdObjArray,setstdName,setstdRoll,setstdClass,setstdBatch,setstdObj,ctaHandler,ctaDeleteHandler,updatehandler,ctaupdatehandler]
}

export default StudentCustomHook