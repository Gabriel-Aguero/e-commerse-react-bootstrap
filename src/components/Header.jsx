import { useContext, useState } from "react";
import {
  Navbar,
  Container,
  Nav,
  Button,
  Badge,
  Offcanvas,
  Dropdown,
} from "react-bootstrap";
import { Link, useNavigate, useLocation } from "react-router-dom";
import CartContext from "../context/CartContext";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { cartItems } = useContext(CartContext);
  const [showCartPreview, setShowCartPreview] = useState(false);

  const getTotalItems = () => {
    return cartItems.reduce((sum, item) => sum + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const isAuth = localStorage.getItem("auth") === "true";

  const cerrarSession = () => {
    localStorage.removeItem("auth");
    navigate("/login");
  };

  const isActiveRoute = (path) => {
    return location.pathname === path;
  };

  const CartPreview = () => (
    <Offcanvas
      show={showCartPreview}
      onHide={() => setShowCartPreview(false)}
      placement="end"
      style={{ width: "350px" }}
    >
      <Offcanvas.Header closeButton className="border-bottom">
        <Offcanvas.Title>🛒 Mi Carrito ({getTotalItems()})</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className="p-0">
        {cartItems.length === 0 ? (
          <div className="text-center py-4">
            <div style={{ fontSize: "3rem" }}>🛒</div>
            <p className="text-muted mt-2">Tu carrito está vacío</p>
          </div>
        ) : (
          <>
            <div
              className="cart-preview-items"
              style={{ maxHeight: "400px", overflowY: "auto" }}
            >
              {cartItems.slice(0, 5).map((item) => (
                <div
                  key={item.id}
                  className="border-bottom p-3 d-flex align-items-center"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="rounded"
                    style={{
                      width: "50px",
                      height: "50px",
                      objectFit: "contain",
                    }}
                  />
                  <div className="ms-2 flex-grow-1">
                    <h6
                      className="mb-0 small text-truncate"
                      style={{ maxWidth: "150px" }}
                    >
                      {item.title}
                    </h6>
                    <div className="d-flex justify-content-between align-items-center mt-1">
                      <span className="text-muted small">x{item.quantity}</span>
                      <span className="fw-bold small">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
              {cartItems.length > 5 && (
                <div className="text-center py-2 bg-light">
                  <small className="text-muted">
                    +{cartItems.length - 5} productos más
                  </small>
                </div>
              )}
            </div>
            <div className="border-top p-3 bg-light">
              <div className="d-flex justify-content-between mb-2">
                <strong>Total:</strong>
                <strong className="text-primary">
                  ${getTotalPrice().toFixed(2)}
                </strong>
              </div>
              <Button
                variant="success"
                className="w-100"
                onClick={() => {
                  setShowCartPreview(false);
                  navigate("/carrito");
                }}
              >
                Ver Carrito Completo
              </Button>
            </div>
          </>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );

  return (
    <>
      <Navbar
        bg="white"
        variant="light"
        expand="lg"
        className="shadow-sm border-bottom fixed-top" // ← fixed-top aquí
        style={{ zIndex: 1030 }} // Asegurar que esté por encima de otros elementos
      >
        <Container>
          {/* Logo y Brand */}
          <Navbar.Brand
            as={Link}
            to="/"
            className="d-flex align-items-center fw-bold text-primary"
          >
            <span className="fs-4">🛍️</span>
            <span className="ms-2">E-Commerce</span>
          </Navbar.Brand>

          <div className="d-flex align-items-center d-lg-none">
            {/* Carrito para móvil */}
            <Button
              variant="outline-primary"
              className="position-relative me-2"
              onClick={() => setShowCartPreview(true)}
            >
              🛒
              {getTotalItems() > 0 && (
                <Badge
                  bg="danger"
                  className="position-absolute top-0 start-100 translate-middle"
                  style={{ fontSize: "0.6rem" }}
                >
                  {getTotalItems()}
                </Badge>
              )}
            </Button>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
          </div>

          <Navbar.Collapse id="basic-navbar-nav">
            {/* Navegación Principal */}
            <Nav className="mx-auto">
              <Nav.Link
                as={Link}
                to="/"
                className={`mx-2 fw-medium ${
                  isActiveRoute("/") ? "text-primary" : "text-dark"
                }`}
              >
                🏠 Inicio
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/productos"
                className={`mx-2 fw-medium ${
                  isActiveRoute("/productos") ? "text-primary" : "text-dark"
                }`}
              >
                📦 Productos
              </Nav.Link>

              {isAuth && (
                <Nav.Link
                  as={Link}
                  to="/admin"
                  className={`mx-2 fw-medium ${
                    isActiveRoute("/admin") ? "text-primary" : "text-dark"
                  }`}
                >
                  ⚙️ Admin
                </Nav.Link>
              )}
            </Nav>

            {/* Navegación Secundaria */}
            <Nav className="align-items-center">
              {/* Carrito para desktop */}
              <Button
                variant="outline-primary"
                className="position-relative d-none d-lg-flex align-items-center me-3"
                onClick={() => setShowCartPreview(true)}
              >
                <span className="me-2">🛒</span>
                Carrito
                {getTotalItems() > 0 && (
                  <Badge
                    bg="danger"
                    className="position-absolute top-0 start-100 translate-middle"
                  >
                    {getTotalItems()}
                  </Badge>
                )}
              </Button>

              {/* Usuario */}
              {isAuth ? (
                <Dropdown align="end">
                  <Dropdown.Toggle
                    variant="outline-success"
                    id="dropdown-user"
                    className="d-flex align-items-center"
                  >
                    👤 Mi Cuenta
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Header>Bienvenido de vuelta</Dropdown.Header>
                    <Dropdown.Item as={Link} to="/perfil">
                      👤 Mi Perfil
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to="/pedidos">
                      📦 Mis Pedidos
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item
                      onClick={cerrarSession}
                      className="text-danger"
                    >
                      🚪 Cerrar Sesión
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <Button
                  as={Link}
                  to="/login"
                  variant="primary"
                  className="d-flex align-items-center"
                >
                  🔑 Iniciar Sesión
                </Button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Espacio para compensar el navbar fijo */}
      <div style={{ height: "80px" }}></div>

      {/* Preview del Carrito */}
      <CartPreview />
    </>
  );
};

export default Header;
