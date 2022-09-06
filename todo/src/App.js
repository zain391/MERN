import React, { useState } from 'react';
import "./App.css"
import Students from './components/Students';
import { useSelector } from 'react-redux';
function App() {
  const store=useSelector(store =>store)
  console.log("store",store);
  return (
    <div className="App">
     <Students/>
    </div>
  );

}

export default App;

