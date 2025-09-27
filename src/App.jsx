import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./Views/Home/Home";
import Footer from "./components/Footer/Footer";
import MyNavbar from "./components/Navbar/MyNavbar";
import CartPage from "./components/CartModal/CartPage";
import Product_Card from './components/Product_Card/Product_Card';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
        <div className='app' data-bs-theme={darkMode ? "dark" : "light"}>
      <MyNavbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
