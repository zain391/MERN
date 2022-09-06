import React from 'react'
// action will recieve data from here from react component and will pass it to the reducer 
function StudentsAction(data) {
  return (
    type:"ADD_STUDENT",
    payload:data
  )
}

export default StudentsAction