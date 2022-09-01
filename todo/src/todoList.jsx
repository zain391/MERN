import React from "react"
const TodoLsit=(props)=>{
    return <>
    <button onClick={()=>{
        props.removeItemFun(props.id)
    }}>
        remove</button>
    <li>{props.text}</li>
    </>
}
export default TodoLsit;