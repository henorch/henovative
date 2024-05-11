import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home.component';
import AboutUs from './pages/about/aboutus.component';
import Footer from './component/Footer/footer';
import  { Link, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<AboutUs/>}/>
       </Routes>
       <Footer/>
    </div>
  );
}

export default App;
