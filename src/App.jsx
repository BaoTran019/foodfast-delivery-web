import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './Views/Home/Home';
import Footer from './components/Footer/Footer'

function App() {

  const [darkMode, setDarkMode] = useState(false);

  // Khi darkMode thay đổi, thêm class cho body
  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Home />
      <Footer />
    </>
  )
}

export default App
