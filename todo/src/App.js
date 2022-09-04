import React, { useState } from 'react';
import "./App.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Header from './components/header/Header';
// import ".f:/MERN/todo/node_modules/bootstrap/dist/js/bootstrap.min.js"
import StdCrudOperations from './components/stdCrudOperations';
import {BrowserRouter,Route,Routes } from "react-router-dom"
import Home from './pages/Home/home';
function App() {
  
  return (
    <div className="App">
     <BrowserRouter>
     <Header/>
       <Routes>
         <Route path="/" element={<Home/>}>  </Route>
         <Route path="/home" element={<Home/>}>  </Route>
         <Route path="/todo" element={<StdCrudOperations/>}>  </Route>
       </Routes>
     </BrowserRouter>
    </div>
  );

}

export default App;

