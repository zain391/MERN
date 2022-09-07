import React from 'react'

function StudentsAction(data) {
    console.log("data in action from react component",data);
    return (
        {
            type: "ADD_STUDENT",
            payload: data
        }
    )
}

export default StudentsAction