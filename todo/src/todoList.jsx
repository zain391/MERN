import React from "react"
const TodoLsit=(props)=>{
    return <>
    <br />
    <button onClick={()=>{props.removeBtn(props.key)}}>remove item</button>
    <li>{props.text}</li>
    </>
}
export default TodoLsit;