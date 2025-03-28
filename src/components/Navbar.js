import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../Assets/image/logo-tap.png"
import "../Css/Navbar.css"

function NavigationBar() {
  const location = useLocation()
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/" className="nav-logo-link">
          <img src={logo} className="img-fluid"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className={location.pathname === "/" ? "active-link" : ""}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/login" className={location.pathname === "/login" ? "active-link" : ""}>
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
