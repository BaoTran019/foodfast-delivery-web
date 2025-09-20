import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './Views/Home/Home';
import Footer from './components/Footer/Footer'
import { Route, Routes } from 'react-router-dom';
import Product_Card from './components/Product_Card/Product_Card';
import MyNavbar from './components/Navbar/MyNavbar';
function App() {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className='app' data-bs-theme={darkMode ? "dark" : "light"}>
      <MyNavbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
