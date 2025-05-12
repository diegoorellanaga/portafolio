// components/Header.jsx
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles/Header.css";

const Header = () => {
  return (
    <Navbar className="header-custom" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/" className="text-light fw-bold">
          D.O.
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" className="bg-light" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#servicios" className="nav-link-custom">Servicios</Nav.Link>
            <Nav.Link href="#sobre-mi" className="nav-link-custom">Sobre mí</Nav.Link>
            <Nav.Link href="#portafolio" className="nav-link-custom">Portafolio</Nav.Link>
            <Nav.Link href="#contacto" className="nav-link-custom">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
