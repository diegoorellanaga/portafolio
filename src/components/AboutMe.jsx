import React from 'react';
import { Container } from 'react-bootstrap';

const SobreMi = () => {
  return (
    <section 
      id="sobremi" 
      className="py-5 bg-light"
      style={{
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)', // Soft shadow
      //  borderRadius: '8px', // Optional rounded corners
        margin: '24px 0' // Adds space around the component
      }}
    >
      <Container className="text-center">
      <h2 className="fw-bold mb-4">Sobre mí</h2>
        <p className="lead text-muted">
          ¡Hola! Soy Diego Orellana, desarrollador con más de 9 años de experiencia en tecnologías web y automatización de procesos. 
          He trabajado en empresas en Chile y el extranjero, y actualmente me especializo en soluciones tecnológicas para pequeñas y medianas empresas.
        </p>
        <p className="lead text-muted mt-4">
          Me enfoco en ofrecer resultados concretos: sitios web modernos, automatización con Odoo, integración de pagos, 
          y reportes que ayudan a tomar decisiones. Trabajo de manera directa y clara con mis clientes, buscando siempre 
          soluciones útiles y accesibles.
        </p>
        <p className="lead text-muted mt-4">
          Si estás buscando una forma de mejorar la eficiencia de tu negocio o vender en línea de forma profesional, 
          estaré encantado de ayudarte.
        </p>
      </Container>
    </section>
  );
};

export default SobreMi;