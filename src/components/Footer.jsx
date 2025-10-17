// components/Footer.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-light mt-5">
      <Container className="py-4">
        <Row>
          <Col md={4}>
            <h5>Mi App</h5>
            <p>
              Una aplicación moderna construida con React y Bootstrap para
              ofrecer la mejor experiencia de usuario.
            </p>
          </Col>

          <Col md={4}>
            <h5>Enlaces Rápidos</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-light text-decoration-none">
                  Inicio
                </a>
              </li>
              <li>
                <a href="/about" className="text-light text-decoration-none">
                  Acerca de
                </a>
              </li>
              <li>
                <a href="/contact" className="text-light text-decoration-none">
                  Contacto
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-light text-decoration-none">
                  Política de Privacidad
                </a>
              </li>
            </ul>
          </Col>

          <Col md={4}>
            <h5>Contacto</h5>
            <ul className="list-unstyled">
              <li>Email: info@miapp.com</li>
              <li>Teléfono: +1 234 567 890</li>
              <li>Dirección: Calle Principal 123</li>
            </ul>
          </Col>
        </Row>

        <hr className="bg-light" />

        <Row>
          <Col className="text-center">
            <p>
              &copy; 2025. Creada con ❤️ por Gabriel Agüero - Frontend Developer
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
