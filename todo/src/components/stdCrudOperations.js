import React ,{useState}from 'react'

function StdCrudOperations() {
    const [flag,setflag]=useState(false)
  return (
    <div>
        <input type="text" placeholder='stdName'  value={""} name='stdName'/>
        <input type="text" placeholder='stdRoll'  value={""} name='stdRoll'/>
        <input type="text" placeholder='stdClass' value={""} name='stdClass'/>
        <input type="text" placeholder='stdBatch' value={""} name='stdBatch'/>
            <p>
            {
             flag ?   "true" : "false"
            } 
            </p>  
    </div>
  )
}

export default StdCrudOperations