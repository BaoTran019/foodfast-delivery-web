import React, { useState } from "react";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import logo from "../../assets/logo/logo.png";

// Import LoginModal
import LoginModal from "../LoginModal/LoginModal";

function MyNavbar({ darkMode, setDarkMode }) {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <Navbar
        expand="lg"
        fixed="top"
        bg={darkMode ? "dark" : "light"}
        data-bs-theme={darkMode ? "dark" : "light"}
        className="py-3"
      >
        <Container>
          <Navbar.Brand href="/">
            <img className="img-logo" src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse>
            <Nav className="main-menu me-auto ms-auto">
              <Nav.Link className="me-3 nav-link" href="/">
                Trang chủ
              </Nav.Link>
              <Nav.Link className="me-3 nav-link" href="/">
                Thực đơn
              </Nav.Link>
              <Nav.Link className="me-3 nav-link" href="/">
                Về chúng tôi
              </Nav.Link>
            </Nav>
            <Nav className="user-menu navbar-nav me-2 ms-auto">
              {/* Khi bấm icon user thì mở modal */}
              <Nav.Link
                className="me-3 nav-link"
                onClick={() => setShowLogin(true)}
              >
                <i className="bi bi-person"></i>
              </Nav.Link>
              <Nav.Link className="me-3 nav-link" href="#">
                <i className="bi bi-cart"></i>
              </Nav.Link>
              <Nav.Item className="me-3 d-flex align-items-center">
                <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Login Modal */}
      <LoginModal show={showLogin} handleClose={() => setShowLogin(false)} />
    </>
  );
}

export default MyNavbar;
