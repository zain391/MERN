import React from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
function StdList({stdArray,ctaDeleteHandler}) {
  return (
    <div className='container'>
        <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Student name</th>
      <th scope="col">Student RollNo</th>
      <th scope="col">Student class</th>
      <th scope="col">Student Batch</th>
    </tr>
  </thead>
  <tbody>
    {
        stdArray.map((students,index )=>{
            return  <tr>
            <th scope="row">{index+1}</th>
            <td>{students.stdName}</td>
            <td>{students.stdRoll}</td>
            <td>{students.stdClass}</td>
            <td>{students.stdBatch}</td>
            <td><button className='btn btn-danger' onClick={()=>{
                ctaDeleteHandler(index+1)
            }}>delete</button></td>
            <td><button className='btn btn-info'>update</button></td>
          </tr>
        })
    }
   
  </tbody>
</table>
    </div>
  )
}

export default StdList