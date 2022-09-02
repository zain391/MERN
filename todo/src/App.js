import React, { useState } from 'react';
import './App.css';
import TodoLsit from './todoList';
function App() {
  const [inputVal, setinputVal]=useState("");
  const [todoArray,settodoArray]=useState([]);
  const inputValFun=(e)=>{
    setinputVal(e.target.value);
    console.log(inputVal);
  }
  const addToArrayFun=()=>{
    settodoArray((todoArrays)=>{
      return [...todoArrays,inputVal];
    });
    // setinputVal("")
    console.log(todoArray);
  }
  const removeBtnFun=(key)=>{
    settodoArray((todoArrays)=>{
      return todoArrays.filter((items,index)=>{
        return index !==  key;
      })
    });
  }
  return (
    <div className="App">
    <h1>Todo List </h1>
     <input type="text" placeholder='Enter todo item' onChange={inputValFun}/>
     <button onClick={addToArrayFun}>Add Todo</button>
     <br />
     <ol> {todoArray.map((items,index)=>{ 
     return <TodoLsit 
     text={items}
     key={index} 
     id={Math.random().toString(32).slice(2)}
     removeBtn={removeBtnFun}
     />
      })} </ol>
    </div>
  );

}

export default App;
