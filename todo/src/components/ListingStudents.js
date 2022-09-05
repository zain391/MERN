import React from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
function ListingStudents({stdObjArray,ctaDeleteHandler,updatehandler}) {
  return (
    <div className='container'>
        <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">stdName</th>
      <th scope="col">stdRoll</th>
      <th scope="col">stdClass</th>
      <th scope="col">stdBatch</th>
    </tr>
  </thead>
  <tbody>
    {
        stdObjArray.map((students,index)=>{
            return <tr>
            <th scope="row">{index}</th>
            <td>{students.stdName}</td>
            <td>{students.stdRoll}</td>
            <td>{students.stdClass}</td>
            <td>{students.stdBatch}</td>
            <td><button className='btn btn-danger' onClick={()=>{ctaDeleteHandler(index)}}>delete</button></td>
            <td><button className='btn btn-info' onClick={()=>{updatehandler(students,index)}}>update</button></td>
           
          </tr>
        })
    }
    
    
  </tbody>
</table>
    </div>
  )
}

export default ListingStudents