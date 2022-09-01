import React, { useState } from 'react';
import './App.css';
import TodoLsit from './todoList';
function App() {
  const [inputVal, setInputVal]= useState("");
  const [todoArray,setTodoArray]=useState([]);
  const inputChange=(e)=>{
    setInputVal(e.target.value)
  }
  const addToArray=()=>{
    setTodoArray((oldItem)=>{
      return [...oldItem,inputVal]
    }
    );      
  }
  const removeItem=(id)=>{
    setTodoArray((oldItem)=>{
      return oldItem.filter((items,index)=>{
        return index !=id;
      })
    })
  }
  return (
    <div className="App">
     <h1>todo app</h1>
     <input type="text" placeholder='enter a todo' onChange={inputChange}/>
     <button onClick={addToArray}>add todo</button>
     <br />
     
      <ol>
       {
       todoArray.map((item,index)=>{
       return <TodoLsit
        text={item}
        key={Math.random().toString(16).slice(2)}
        id={index}
        removeItemFun={removeItem}
        /> 
        
      })
       }
      </ol>
     
    </div>
  );
}

export default App;
