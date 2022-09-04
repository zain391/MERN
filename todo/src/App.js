import React, { useState } from 'react';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import "./App.css"
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Student from './components/CRUD/Student';
function App() {
  
  return (
    <div className="App">
      <Header/>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Student/>}></Route>
        </Routes>
     </BrowserRouter>
     <Footer/>
    </div>
  );

}

export default App;

