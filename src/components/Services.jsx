import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const servicios = [
  {
    titulo: 'Implementación de Odoo',
    descripcion:
      'Te ayudo a instalar y personalizar Odoo para que puedas llevar tu negocio de forma más ordenada: ventas, facturación, inventario y más.',
  },
  {
    titulo: 'Integración con otras plataformas',
    descripcion:
      'Conecto tu sistema con otros servicios que uses (como tiendas online, software contable, o logística), para que todo funcione de forma automática.',
  },
  {
    titulo: 'Desarrollo de sitios web',
    descripcion:
      'Creo sitios web rápidos, modernos y adaptados a tu marca, ideales para dar a conocer tu negocio y atraer clientes.',
  },
  {
    titulo: 'Pagos en línea (Chile)',
    descripcion:
      'Integro WebPay, MercadoPago, Khipu y otros medios de pago locales en tu sitio o sistema, para que puedas vender en línea sin complicaciones.',
  },
  {
    titulo: 'Reportes a medida',
    descripcion:
      'Te entrego reportes claros y hechos a la medida con la información que realmente necesitas para tomar decisiones en tu negocio.',
  },
  {
    titulo: 'Marketing Digital',
    descripcion:
      'Diseño estrategias simples pero efectivas para mejorar tu presencia en internet y atraer más clientes a tu negocio, usando herramientas como posicionamiento en Google (SEO), campañas en redes sociales, y optimización de contenido.',
  },
];

const Servicios = () => {
  return (
    <section id="servicios" className="py-5 bg-light">
      <Container >
        <h2 className="text-center mb-5 fw-bold">Servicios</h2>
        <Row >
          {servicios.map((servicio, index) => (
            <Col md={6} lg={4} key={index} className="mb-4">
              <Card style={{backgroundColor: "rgba(219, 216, 211, 0.3)"}} className="h-100 shadow-sm border-0">
                <Card.Body style={{backgroundColor: "rgba(219, 216, 211, 0.3)"}}>
                  <Card.Title className="text-success fw-semibold">
                    {servicio.titulo}
                  </Card.Title>
                  <Card.Text>{servicio.descripcion}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Servicios;
