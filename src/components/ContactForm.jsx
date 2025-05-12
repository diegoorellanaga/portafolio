import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Contacto = () => {
  return (
    <section id="contacto" className="py-5 bg-light"  style={{
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)', // Soft shadow
      }}>
      <Container>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <div className="text-center mb-4">
              <h2 className="fw-bold">Contáctame</h2>
              <p className="text-muted">
                ¿Tienes un proyecto en mente o necesitas ayuda con tecnología? Escríbeme y conversemos.
              </p>
            </div>

            <Form
              action="https://formsubmit.co/diegoorellanaga@gmail.com"
              method="POST"
              className="bg-white p-4 rounded shadow-sm"
            >
              {/* Hidden inputs */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value={window.location.origin + "/gracias"} />

              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" name="name" placeholder="Tu nombre" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Correo electrónico</Form.Label>
                <Form.Control type="email" name="email" placeholder="tucorreo@ejemplo.com" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Mensaje</Form.Label>
                <Form.Control as="textarea" name="message" rows={5} placeholder="Escribe tu mensaje..." required />
              </Form.Group>

              <div className="d-grid">
                <Button variant="primary" type="submit">
                  Enviar mensaje
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contacto;
