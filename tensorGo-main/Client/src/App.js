import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Feedback from './Feedback';
import Header from './Header';
import Comments from './Comments';
import Profile from './Profile'
function App() {
  const [prof,setProf]=useState([]);
  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element = {<Login setProf={setProf} />} />
      <Route path='/feedback' element = {<Feedback />} />
      <Route path='/comments' element = {<Comments />} />
      <Route path='/profile' element = {<Profile prof={prof} />} />
    </Routes>
    </BrowserRouter>
  
    </>
  );
}

export default App;
