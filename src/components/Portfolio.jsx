import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const proyectos = [
  {
    titulo: 'Fundamenta · Constructora',
    descripcion:
      'Desarrollé dos aplicaciones clave: una plataforma de reportería para visualizar el avance de proyectos y una app de inspección en obra que permite a los encargados reportar problemas directamente desde el terreno. La constructora puede responder y hacer seguimiento a través de la misma plataforma, optimizando así la comunicación y tiempos de respuesta.',
  },
  {
    titulo: 'Agroggestión · Tecnología para el Agro',
    descripcion:
      'Desarrollé soluciones digitales a medida para empresas agrícolas, incluyendo un sistema de cuaderno de campo, gestión de órdenes de trabajo y registro de personal en faenas. Estas herramientas ayudaron a mejorar la organización, el control operativo y la trazabilidad en terreno.',
  },
  {
    titulo: 'Qubitronic · Desarrollo a Medida',
    descripcion:
      'Usando una plataforma low-code, desarrollé soluciones digitales para empresas de distintos sectores, como laboratorios farmacéuticos, reparadoras de techos, colegios y empresas inmobiliarias. Estas soluciones ayudaron a automatizar procesos y reducir el uso de papel.',
  },
  {
    titulo: 'Akainix · Gestión de Datos',
    descripcion:
      'Trabajé en el diseño de sistemas de procesamiento de datos, que permitieron organizar, almacenar y visualizar grandes volúmenes de información de forma clara y útil para la toma de decisiones.',
  },
  {
    titulo: 'Otros Proyectos · IA y Tecnología Avanzada',
    descripcion:
      'En trabajos freelance y con empresas como Medivis, he implementado tecnologías de inteligencia artificial para mejorar la eficiencia de aplicaciones web, desde análisis automatizado de información hasta integración con servicios modernos de IA.',
  },
];
// azul E6F2FF
const Portafolio = () => {
  return (
    <section id="portafolio" className="py-5 bg-white"       style={{
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)', // Soft shadow
      //  borderRadius: '8px', // Optional rounded corners
        margin: '24px 0' // Adds space around the component
      }}>
      <Container>
        <h2 className="text-center fw-bold mb-5">Portafolio</h2>
        <Row className="gy-4">
          {proyectos.map((proyecto, idx) => (
            <Col md={12} key={idx}>
              <Card style={{backgroundColor: "rgba(219, 216, 211, 0.3)"}} className="shadow-sm border-0">
                <Card.Body style={{backgroundColor: "rgba(219, 216, 211, 0.3)"}}>
                  <Card.Title className="fw-semibold">{proyecto.titulo}</Card.Title>
                  <Card.Text>{proyecto.descripcion}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Portafolio;
