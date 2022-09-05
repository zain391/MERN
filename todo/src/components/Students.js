import React from 'react'

function Students() {
  return (
    <div>
        <input type="text" placeholder='enter stdName' name='stdName' onChange={(e)=>{setstdName(e.target.value)

        }}/>
        <input type="text" placeholder='enter stdRoll' name='stdName' onChange={(e)=>{setstdRoll(e.target.value)

        }}/>
        <input type="text" placeholder='enter stdClass' name='stdName' onChange={(e)=>{setstdClass(e.target.value)

        }}/>
        <input type="text" placeholder='enter stdBatch' name='stdName' onChange={(e)=>{setstdBatch(e.target.value)

        }}/>
        <button className='btn btn-success'>Add</button>
        {
            flag ? <button>update</button> :<button>Add</button>
        }
    </div>
  )
}

export default Students