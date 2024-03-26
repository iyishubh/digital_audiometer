import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar
        bg="#ccc"
        expand="lg"
        className="bg-body-tertiary mb-4 border-bottom"
      >
        <Container>
          <Navbar.Brand style={{ color: "#007fff", display:'flex', alignItems:"center" }} href="/">
            <img src="./logo.png" style={{width: '60px', height: '60px', marginRight:"10px"}}/>
            Digital Audiometer
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <div style={{ flex: "1" }} />
            <Nav className="me-auto">
              <Nav.Link style={{ color: "#007fff" }} href="/">
                Home
              </Nav.Link>
              <Nav.Link style={{ color: "#007fff" }} href="/doctors">
                Doctors
              </Nav.Link>
              <Nav.Link style={{ color: "#007fff" }} href="/analytics">
                Analytics
              </Nav.Link>
              <Nav.Link style={{ color: "#007fff" }} href="/contact">
                Contact Us
              </Nav.Link>

              <Nav.Link style={{ color: "#007fff" }} href="/login">
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
         
        </Container>
      </Navbar>

      {children}
    </>
  );
};

export default Layout;
