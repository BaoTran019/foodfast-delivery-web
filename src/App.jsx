import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./Views/Home/Home";
import Menu from './Views/Menu/Menu';
import Footer from "./components/Footer/Footer";
import MyNavbar from "./components/Navbar/MyNavbar";
import CartPage from "./components/CartModal/CartPage";
import Product_Card from './components/Product_Card/Product_Card';
import { ToastContainer } from "react-toastify";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
        <div className='app' data-bs-theme={darkMode ? "dark" : "light"}>
      <MyNavbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default App;
