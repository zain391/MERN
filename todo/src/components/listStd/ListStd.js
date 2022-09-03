import React from 'react'

function ListStd(props) {
    
    return (
        <div className='container'>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Studen Name</th>
                        <th scope="col">Studen RollNo</th>
                        <th scope="col">Studen class</th>
                        <th scope="col">Studen </th>
                    </tr>
                </thead>
                <tbody>

                    {
                        props.stdData.map((item,index) => {
                            return <>
                                <tr>
                                    <th scope="row">{index}</th>
                                    <td>{item.stdName}</td>
                                    <td>{item.rollNo}</td>
                                    <td>{item.className}</td>
                                    <td>{item.batch}</td>
                                    <td><button className='btn btn-danger' onClick={()=>{
                                        props.delBtnhandler(index)
                                    }}>delete</button></td>
                                    <td><button className='btn btn-info' onClick={()=>{
                                        props.updateBtnhandler(index)
                                    }}>update</button></td>
                                </tr>
                            </>
                        })
                    }
                </tbody>
            </table>
        </div>

    )
}

export default ListStd