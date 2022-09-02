import React from 'react'

function Input(props) {
  return (
   <>
    <input type="text" placeholder={props.place} onChange={props.fun}/>
   </>
  )
}

export default Input;