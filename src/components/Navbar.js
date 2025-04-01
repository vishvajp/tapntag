import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav, Container, Badge } from "react-bootstrap";
import logo from "../assets/image/logo-tap.png";
import "../Css/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function NavigationBar() {
  const location = useLocation();
  const [cartCount, setCartCount] = useState(0);

  const scrollToProduct = (e) => {
    e.preventDefault();
    if (location.pathname === "/") {
      const productSection = document.getElementById("product-section");
      if (productSection) {
        productSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = "/#product-section";
    }
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/" className="nav-logo-link">
          <img src={logo} className="img-fluid"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              as={Link}
              to="/"
              className={location.pathname === "/" ? "active-link" : ""}
            >
              Home
            </Nav.Link>
            <Nav.Link href="#" onClick={scrollToProduct}>
              Product
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/login"
              className={location.pathname === "/login" ? "active-link" : ""}
            >
              Login
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/cart" className="position-relative">
              <FontAwesomeIcon icon={faShoppingCart} size="lg" />
              {cartCount > 0 && (
                <Badge
                  bg="danger"
                  className="position-absolute top-0 start-100 translate-middle rounded-pill"
                >
                  {cartCount}
                </Badge>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
