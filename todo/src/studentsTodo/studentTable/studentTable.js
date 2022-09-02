import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Stud} from '../Students'
function StudentTable() {
  console.log(Stud);
  return (
  
    <div className='container'>
        <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">Sr.No</th>
      <th scope="col">Name</th>
      <th scope="col">Roll NO </th>
      <th scope="col">className</th>
      <th scope="col">Batch</th>
    </tr>
  </thead>
  <tbody>
    {
      Stud.map((item,index)=>{
        return <>
       <tr>
       <th scope="row">{index}</th>
        <td>{item.stdName}</td>
        <td>{item.rollNo}</td>
        <td>{item.classname}</td>
        <td>{item.batch}</td>      
       </tr>
        </>
      })
    }
    
  </tbody>
</table>
    </div>
  )
}

export default StudentTable