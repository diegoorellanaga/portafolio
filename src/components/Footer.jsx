import { Container, Row, Col } from "react-bootstrap";
import "./styles/Footer.css"
const Footer = () => {
  return (
    <footer className="footer-custom text-light mt-5">
      <Container className="py-4">
        <Row className="text-center text-md-start">
          {/* Contact Info */}
          <Col xs={12} md={4} className="mb-4 mb-md-0">
            <h6 className="footer-title">Contacto</h6>
            <ul className="list-unstyled small">
              <li>
                <a href="mailto:diegoorellanaga@gmail.com" className="footer-link">
                  diegoorellanaga@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+56995157498" className="footer-link">
                  +56 9 9515 7498
                </a>
              </li>
            </ul>
          </Col>

          {/* Social Links */}
          <Col xs={12} md={4} className="mb-4 mb-md-0">
            <h6 className="footer-title">Sígueme</h6>
            <ul className="list-unstyled d-flex justify-content-center justify-content-md-start gap-3 small">
              <li>
                <a
                  href="https://linkedin.com/in/diegoorellanaga1010"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/diegoorellanaga"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </Col>

          {/* Copyright */}
          <Col xs={12} md={4} className="text-md-end text-center small">
            <p className="mb-0 text-copy">&copy; {new Date().getFullYear()} Diego Orellana. Todos los derechos reservados.</p>
            <a
                  href="https://diegoorellanaga.github.io/diego/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  Currículum
                </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
