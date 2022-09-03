import React from 'react'

function StdList({stdDataArray,deleteHandl,updateHandler}) {
    return (
        <div className='container'>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">stdName</th>
                        <th scope="col">stdRoll</th>
                        <th scope="col">stdClass</th>
                        <th scope="col">stdbatch</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        stdDataArray.map((students,index)=>{
                            return <tr>
                            <th scope="row">{index}</th>
                            <td>{students.stdName}</td>
                            <td>{students.stdRoll}</td>
                            <td>{students.stdClass}</td>
                            <td>{students.stdbatch}</td>
                            <td> <button className='btn btn-danger' onClick={()=>{deleteHandl(index)}}>delete</button></td>
                            <td><button className='btn btn-primary' onClick={()=>{updateHandler(students,index)}}>update</button></td>
                           
                            
                        </tr>
                        })
                    }
                    

                </tbody>
            </table>
        </div>
    )
}

export default StdList