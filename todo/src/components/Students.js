import React from 'react'
import StudentCustomHook from './StudentCustomHook'
import ListingStudents from './ListingStudents';
function Students() {
    const [flag,stdName,stdRoll,stdClass,stdBatch,stdObj,stdObjArray,setstdName,setstdRoll,setstdClass,setstdBatch,setstdObj,ctaHandler,ctaDeleteHandler]=StudentCustomHook();
  return (
    <div>
        <input type="text" placeholder='enter stdName' value={stdName}  name='stdName' onChange={(e)=>{setstdName(e.target.value)

        }}/>
        <input type="text" placeholder='enter stdRoll' value={stdRoll} name='stdName' onChange={(e)=>{setstdRoll(e.target.value)

        }}/>
        <input type="text" placeholder='enter stdClass' value={stdClass} name='stdName' onChange={(e)=>{setstdClass(e.target.value)}}/>
        
        <input type="text" placeholder='enter stdBatch' value={stdBatch} name='stdName' onChange={(e)=>{setstdBatch(e.target.value)

        }}/>
        
        {
            flag ? <button>update</button>: <button className='btn btn-success' onClick={ctaHandler}>Add</button> 
        }
        <ListingStudents stdObjArray={stdObjArray} ctaDeleteHandler={ctaDeleteHandler}/>
    </div>
  )
}

export default Students