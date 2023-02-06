import './App.css';
import About from './About';
import Home from './Home';
import Navbar from './Navbar';
import Portfolio from './Portfolio';
import { Route, Routes } from "react-router-dom";
import React from 'react';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/portfolio' element={<Portfolio />} />
      </Routes>
    </div>
  );
}

export default App;
