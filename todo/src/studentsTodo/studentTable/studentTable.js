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
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    {/* <tr>
      <th scope="row">1</th>
      {Students.map((item)=>{
        return <><td>{item.stdName}</td>
        <td>{item.rollNo}</td>
        <td>{item.classname}</td>
        <td>{item.batch}</td>
      
        </>
      })}
    </tr> */}
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
    </div>
  )
}

export default StudentTable