// components/Home.js
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="bg-primary text-white text-center py-5">
        <Container>
          <h1 className="display-4">Bienvenido a Mi Ecommerce</h1>
          <p className="lead">
            Descubre los mejores productos con la mejor calidad
          </p>
          <Button as={Link} to="/productos" variant="light" size="lg">
            Ver Productos
          </Button>
        </Container>
      </div>

      {/* Features Section */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Nuestras Ventajas</h2>
        <Row>
          <Col md={4} className="mb-4">
            <Card className="h-100 text-center">
              <Card.Body>
                <div className="mb-3">
                  <i
                    className="bi bi-truck"
                    style={{ fontSize: "2rem", color: "#007bff" }}
                  ></i>
                </div>
                <Card.Title>Envío Gratis</Card.Title>
                <Card.Text>
                  Envío gratuito en compras mayores a $50.000
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mb-4">
            <Card className="h-100 text-center">
              <Card.Body>
                <div className="mb-3">
                  <i
                    className="bi bi-shield-check"
                    style={{ fontSize: "2rem", color: "#007bff" }}
                  ></i>
                </div>
                <Card.Title>Pago Seguro</Card.Title>
                <Card.Text>
                  Transacciones 100% seguras con encriptación
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mb-4">
            <Card className="h-100 text-center">
              <Card.Body>
                <div className="mb-3">
                  <i
                    className="bi bi-headset"
                    style={{ fontSize: "2rem", color: "#007bff" }}
                  ></i>
                </div>
                <Card.Title>Soporte 24/7</Card.Title>
                <Card.Text>
                  Atención al cliente disponible las 24 horas
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Featured Products */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Productos Destacados</h2>
        <Row>
          <Col md={3} className="mb-4">
            <Card>
              <Card.Img
                variant="top"
                src="https://via.placeholder.com/150"
                height="200"
                style={{ objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>Producto 1</Card.Title>
                <Card.Text>$25.000</Card.Text>
                <Button variant="primary">Ver Detalles</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3} className="mb-4">
            <Card>
              <Card.Img
                variant="top"
                src="https://via.placeholder.com/150"
                height="200"
                style={{ objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>Producto 2</Card.Title>
                <Card.Text>$35.000</Card.Text>
                <Button variant="primary">Ver Detalles</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3} className="mb-4">
            <Card>
              <Card.Img
                variant="top"
                src="https://via.placeholder.com/150"
                height="200"
                style={{ objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>Producto 3</Card.Title>
                <Card.Text>$45.000</Card.Text>
                <Button variant="primary">Ver Detalles</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3} className="mb-4">
            <Card>
              <Card.Img
                variant="top"
                src="https://via.placeholder.com/150"
                height="200"
                style={{ objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>Producto 4</Card.Title>
                <Card.Text>$55.000</Card.Text>
                <Button variant="primary">Ver Detalles</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
