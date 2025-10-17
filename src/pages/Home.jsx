// components/Home.js
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaShippingFast,
  FaShieldAlt,
  FaHeadset,
  FaStar,
  FaShoppingCart,
  FaHeart,
} from "react-icons/fa";
import { featuredProducts } from "../utils/featuredProducts";
import { categories } from "../utils/categories";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="text-white position-relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <Badge
                bg="light"
                text="dark"
                className="mb-3 px-3 py-2 rounded-pill"
              >
                🚀 Oferta Especial - Hasta 40% OFF
              </Badge>
              <h1 className="display-4 fw-bold mb-4">
                Descubre Productos
                <span className="text-warning"> Excepcionales</span>
              </h1>
              <p className="lead mb-4 opacity-90">
                Encuentra todo lo que necesitas con la mejor calidad y precios
                increíbles. Envío gratis en tu primera compra y garantía de
                satisfacción.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <Button
                  as={Link}
                  to="/productos"
                  variant="warning"
                  size="lg"
                  className="rounded-pill px-4 py-2 fw-bold d-flex align-items-center"
                >
                  <FaShoppingCart className="me-2" />
                  Comprar Ahora
                </Button>
                <Button
                  variant="outline-light"
                  size="lg"
                  className="rounded-pill px-4 py-2"
                >
                  Ver Ofertas
                </Button>
              </div>
              <div className="mt-4 d-flex flex-wrap gap-4 text-white-50">
                <div className="d-flex align-items-center">
                  <FaStar className="text-warning me-2" />
                  <span>4.9/5 (2.5K+ reseñas)</span>
                </div>
                <div className="d-flex align-items-center">
                  <FaShippingFast className="text-info me-2" />
                  <span>Envío gratis +$50K</span>
                </div>
                <div className="d-flex align-items-center">
                  <FaShieldAlt className="text-success me-2" />
                  <span>Pago 100% seguro</span>
                </div>
              </div>
            </Col>
            <Col lg={6} className="text-center">
              <img
                src="https://images.unsplash.com/photo-1607082350899-7e105aa886ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Shopping Experience"
                className="img-fluid rounded-3 shadow-lg"
                style={{
                  transform: "rotate(3deg)",
                  border: "8px solid rgba(255,255,255,0.2)",
                }}
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features Section */}
      <Container className="my-5 py-5">
        <Row className="text-center mb-5">
          <Col>
            <h2 className="display-5 fw-bold mb-3">¿Por Qué Elegirnos?</h2>
            <p className="lead text-muted">
              La mejor experiencia de compra online
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={4} className="mb-4">
            <Card className="h-100 text-center border-0 shadow-sm hover-lift">
              <Card.Body className="p-4">
                <div className="bg-primary bg-opacity-10 rounded-circle p-3 d-inline-flex mb-3">
                  <FaShippingFast size={32} className="text-primary" />
                </div>
                <Card.Title className="h5">Envío Express</Card.Title>
                <Card.Text className="text-muted">
                  Entrega en 24-48 horas. Envío gratis en compras superiores a
                  $50.000
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mb-4">
            <Card className="h-100 text-center border-0 shadow-sm hover-lift">
              <Card.Body className="p-4">
                <div className="bg-success bg-opacity-10 rounded-circle p-3 d-inline-flex mb-3">
                  <FaShieldAlt size={32} className="text-success" />
                </div>
                <Card.Title className="h5">Pago Seguro</Card.Title>
                <Card.Text className="text-muted">
                  Transacciones 100% seguras con encriptación SSL de última
                  generación
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mb-4">
            <Card className="h-100 text-center border-0 shadow-sm hover-lift">
              <Card.Body className="p-4">
                <div className="bg-info bg-opacity-10 rounded-circle p-3 d-inline-flex mb-3">
                  <FaHeadset size={32} className="text-info" />
                </div>
                <Card.Title className="h5">Soporte 24/7</Card.Title>
                <Card.Text className="text-muted">
                  Atención al cliente disponible las 24 horas, 7 días a la
                  semana
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Categories Section */}
      <section className="bg-light py-5">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="display-5 fw-bold mb-3">Explora Categorías</h2>
              <p className="lead text-muted">
                Encuentra lo que buscas por categoría
              </p>
            </Col>
          </Row>
          <Row>
            {categories.map((category, index) => (
              <Col lg={3} md={6} className="mb-4" key={index}>
                <Card className="border-0 shadow-sm text-white overflow-hidden hover-scale">
                  <Card.Img
                    src={category.image}
                    alt={category.name}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div
                    className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-end"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
                    }}
                  >
                    <Card.Body>
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <Card.Title className="h5 mb-1">
                            {category.name}
                          </Card.Title>
                          <small>{category.products} productos</small>
                        </div>
                        <Badge bg={category.color} className="fs-6">
                          →
                        </Badge>
                      </div>
                    </Card.Body>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Featured Products */}
      <Container className="my-5 py-5">
        <Row className="text-center mb-5">
          <Col>
            <h2 className="display-5 fw-bold mb-3">Productos Destacados</h2>
            <p className="lead text-muted">
              Los favoritos de nuestros clientes
            </p>
          </Col>
        </Row>
        <Row>
          {featuredProducts.map((product) => (
            <Col lg={3} md={6} className="mb-4" key={product.id}>
              <Card className="h-100 border-0 shadow-sm hover-lift position-relative">
                {product.isNew && (
                  <Badge
                    bg="danger"
                    className="position-absolute top-0 start-0 m-3"
                  >
                    Nuevo
                  </Badge>
                )}
                <div className="position-absolute top-0 end-0 m-3">
                  <Button variant="light" size="sm" className="rounded-circle">
                    <FaHeart className="text-muted" />
                  </Button>
                </div>
                <Card.Img
                  variant="top"
                  src={product.image}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body className="d-flex flex-column">
                  <div className="mb-2">
                    <Badge bg="light" text="dark" className="mb-2">
                      {product.category}
                    </Badge>
                  </div>
                  <Card.Title className="h6 flex-grow-1">
                    {product.name}
                  </Card.Title>
                  <div className="d-flex align-items-center mb-2">
                    <div className="text-warning">
                      <FaStar className="d-inline" />
                      <small className="ms-1 text-muted">
                        {product.rating}
                      </small>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mt-auto">
                    <div>
                      <span className="h5 text-primary fw-bold">
                        ${product.price.toLocaleString()}
                      </span>
                      {product.originalPrice && (
                        <small className="text-muted text-decoration-line-through ms-2">
                          ${product.originalPrice.toLocaleString()}
                        </small>
                      )}
                    </div>
                    <Button
                      variant="primary"
                      size="sm"
                      className="rounded-pill"
                    >
                      <FaShoppingCart className="me-1" />
                      Comprar
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Row className="text-center mt-4">
          <Col>
            <Button
              as={Link}
              to="/productos"
              variant="outline-primary"
              size="lg"
              className="rounded-pill px-5"
            >
              Ver Todos los Productos
            </Button>
          </Col>
        </Row>
      </Container>

      {/* Newsletter Section */}
      <section
        className="py-5 text-white"
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        }}
      >
        <Container>
          <Row className="text-center">
            <Col lg={8} className="mx-auto">
              <h3 className="h2 fw-bold mb-3">
                ¡No Te Pierdas Nuestras Ofertas!
              </h3>
              <p className="lead mb-4 opacity-90">
                Suscríbete y recibe un 15% de descuento en tu primera compra
              </p>
              <div className="d-flex gap-2 justify-content-center">
                <input
                  type="email"
                  className="form-control form-control-lg rounded-pill border-0"
                  placeholder="Tu email..."
                  style={{ maxWidth: "300px" }}
                />
                <Button
                  variant="warning"
                  size="lg"
                  className="rounded-pill px-4 fw-bold"
                >
                  Suscribirse
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <style jsx>{`
        .hover-lift:hover {
          transform: translateY(-5px);
          transition: transform 0.3s ease;
        }
        .hover-scale:hover {
          transform: scale(1.05);
          transition: transform 0.3s ease;
        }
      `}</style>
    </div>
  );
};

export default Home;
