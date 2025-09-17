import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './Views/Home/Home';
import Footer from './components/Footer/Footer'
import { Route, Routes } from 'react-router-dom';
import Product_Card from './components/Product_Card/Product_Card';

function App() {

  const [darkMode, setDarkMode] = useState(false);

  // Khi darkMode thay đổi, thêm class cho body
  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  return (
    <div className='app'>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
