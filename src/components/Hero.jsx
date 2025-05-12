import { Container, Row, Col, Button } from 'react-bootstrap';

const Hero = () => {
  return (
    <section className="bg-dark text-white py-5 text-center"       style={{
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)', // Soft shadow
  //    borderRadius: '8px', // Optional rounded corners
      margin: '24px 0' // Adds space around the component
    }}>
      <Container>
        <Row className="justify-content-center">
          <Col lg={10}>
            <h1 className="display-4 fw-bold mb-3">Diego Orellana</h1>
            <h2 className="h4 mb-4">
              Consultor Freelance en Desarrollo Web, Odoo, Integraciones y Análisis de Datos
            </h2>
            <p className="lead text-light mb-5">
            Ingeniero civil eléctrico con experiencia en desarrollo full stack, integración de APIs y soluciones con Odoo. Me enfoco en construir plataformas eficientes, seguras y adaptadas a tus necesidades, cumpliendo con las últimas normas de seguridad informática. </p>
            <Button href="#contacto" variant="success" size="lg">
              Contáctame
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
