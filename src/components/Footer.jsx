// components/Footer.js
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import {
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
  FaGithub,
  FaHeart,
  FaArrowUp,
  FaShieldAlt,
  FaRocket,
  FaUsers,
} from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const misRedesSociales = [
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/gabrielhaguero/",
      color: "text-info",
      bg: "bg-info",
      label: "LinkedIn",
    },
    {
      icon: FaWhatsapp,
      href: "https://wa.me/1139392570",
      color: "text-success",
      bg: "bg-success",
      label: "WhatsApp",
    },
    {
      icon: FaEnvelope,
      href: "mailto:gabriel.aguero@gmail.com",
      color: "text-warning",
      bg: "bg-warning",
      label: "Email",
    },
    {
      icon: FaGithub,
      href: "https://github.com/gabrielhaguero",
      color: "text-light",
      bg: "bg-secondary",
      label: "GitHub",
    },
  ];

  return (
    <footer className="bg-dark text-light pt-5 position-relative">
      {/* Ola decorativa superior */}
      <div
        className="position-absolute top-0 start-0 w-100"
        style={{
          height: "20px",
          background: "linear-gradient(90deg, #0d6efd, #6f42c1, #d63384)",
          opacity: "0.8",
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 70%)",
        }}
      ></div>

      <Container className="pt-4">
        <Row className="g-4">
          <Col lg={4} md={6}>
            <div className="d-flex align-items-center mb-3">
              <div className="bg-primary rounded-circle p-2 me-3">
                <FaRocket className="text-white fs-4" />
              </div>
              <h4 className="mb-0 fw-bold text-primary">E-Commerce Pro</h4>
            </div>
            <p className="text-light mb-4 opacity-75">
              Tu destino de compras online de confianza. Ofrecemos productos de
              calidad con entrega rápida y soporte excepcional 24/7.
            </p>
          </Col>

          {/* Columna 2 - Enlaces rápidos */}
          <Col lg={2} md={6}>
            <h6 className="fw-bold text-primary mb-3">Navegación</h6>
            <ul className="list-unstyled">
              {[
                { name: "Inicio", path: "/" },
                { name: "Productos", path: "/productos" },
                { name: "Carrito", path: "/carrito" },
              ].map((link, index) => (
                <li key={index} className="mb-2">
                  <a
                    href={link.path}
                    className="text-light text-decoration-none opacity-75 hover-opacity-100 transition"
                    style={{ transition: "opacity 0.3s" }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </Col>

          {/* Columna 3 - Soporte */}
          <Col lg={2} md={6}>
            <h6 className="fw-bold text-primary mb-3">Soporte</h6>
            <ul className="list-unstyled">
              {[
                { name: "Centro de Ayuda", path: "/help" },
                { name: "Envíos", path: "/shipping" },
                { name: "Devoluciones", path: "/returns" },
                { name: "Términos", path: "/terms" },
                { name: "Privacidad", path: "/privacy" },
              ].map((link, index) => (
                <li key={index} className="mb-2">
                  <a
                    href={link.path}
                    className="text-light text-decoration-none opacity-75 hover-opacity-100 transition"
                    style={{ transition: "opacity 0.3s" }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </Col>

          {/* Columna 4 - Contacto y redes */}
          <Col lg={4} md={6}>
            <h6 className="fw-bold text-primary mb-3">Conectemos</h6>
            <p className="text-light opacity-75 mb-4">
              ¿Tienes preguntas? No dudes en contactarme. Estoy aquí para
              ayudarte.
            </p>

            {/* Redes sociales */}
            <div className="mb-4">
              <h6 className="fw-bold text-light mb-3">Sígueme</h6>
              <div className="d-flex gap-3 justify-content-center">
                {misRedesSociales.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${social.bg} text-white rounded-circle p-3 d-flex align-items-center justify-content-center hover-scale transition`}
                    style={{
                      width: "50px",
                      height: "50px",
                      textDecoration: "none",
                      transition: "transform 0.3s",
                    }}
                    title={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </Col>
        </Row>

        {/* Línea divisoria */}
        <hr className="my-4 bg-light opacity-25" />

        {/* Bottom section */}
        <Row className="align-items-center py-4">
          <Col md={6} className="text-center text-md-start">
            <p className="mb-0 text-light opacity-75">
              &copy; 2025{" "}
              <span className="text-primary fw-bold">E-Commerce Pro</span>.
              Todos los derechos reservados.
            </p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <div className="d-flex align-items-center justify-content-center justify-content-md-end">
              <span className="text-light opacity-75 me-2">
                Creado con <FaHeart className="text-danger mx-1" /> por
              </span>
              <span className="fw-bold text-primary">Gabriel Agüero</span>
              <span className="text-light opacity-75 ms-2">
                - Frontend Developer
              </span>
            </div>
          </Col>
        </Row>

        {/* Botón flotante para ir arriba */}
        <Button
          variant="primary"
          className="position-absolute end-0 bottom-0 m-4 rounded-circle d-flex align-items-center justify-content-center"
          style={{
            width: "50px",
            height: "50px",
            zIndex: 1000,
          }}
          onClick={scrollToTop}
          title="Volver arriba"
        >
          <FaArrowUp />
        </Button>
      </Container>

      {/* Estilos CSS inline para hover effects */}
      <style jsx>{`
        .hover-opacity-100:hover {
          opacity: 1 !important;
          transform: translateX(5px);
        }
        .hover-scale:hover {
          transform: scale(1.1);
        }
        .transition {
          transition: all 0.3s ease;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
