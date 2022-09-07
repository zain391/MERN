import React from 'react';
import "./App.css"
import {getDatabase as db,ref, set } from "firebase/database"
function App() {
 
  const ctaHandler=()=>{
    const user={
      name:"zain",
      roll:"bsf19"
    }
   try{
    let res=db.collection("users").add(user)
    console.log(res,"res");
   }
   catch(error){
    console.log("error",error);
   }
  }
  console.log(db);
  return (
    <div className="App">
      <p>working well</p>
      <button onClick={ctaHandler}>click to write data</button>
    </div>
  );

}

export default App;

