import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
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
import {
  FaShoppingCart,
  FaUser,
  FaShareSquare,
  FaBoxOpen,
  FaHome,
  FaTruck,
  FaWrench,
} from "react-icons/fa";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
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

  const cerrarSession = () => {
    logout();
    navigate("/");
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
        <Offcanvas.Title>
          <FaShoppingCart size={32} className="me-2 text-primary" />
          Mi Carrito ({getTotalItems()})
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className="p-0">
        {cartItems.length === 0 ? (
          <div className="text-center py-4">
            <FaShoppingCart size={64} />
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
        className="shadow-sm border-bottom fixed-top"
        style={{ zIndex: 1030 }}
      >
        <Container>
          <Navbar.Brand
            as={Link}
            to="/"
            className="d-flex align-items-center fw-bold text-primary"
          >
            <span className="fs-4"></span>
            <FaTruck size={32} className="ms-2" />
            <span className="ms-2">E-Commerce</span>
          </Navbar.Brand>

          <div className="d-flex align-items-center d-lg-none">
            <Button
              variant="outline-primary"
              className="position-relative me-2"
              onClick={() => setShowCartPreview(true)}
            >
              <FaShoppingCart size={22} className="me-2" />
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
            <Nav className="mx-auto">
              <Nav.Link
                as={Link}
                to="/"
                className={`mx-2 fw-medium ${
                  isActiveRoute("/") ? "text-primary" : "text-dark"
                }`}
              >
                <FaHome size={22} className="me-2" />
                Inicio
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/productos"
                className={`mx-2 fw-medium ${
                  isActiveRoute("/productos") ? "text-primary" : "text-dark"
                }`}
              >
                <FaBoxOpen size={22} className="me-2" />
                Productos
              </Nav.Link>

              {user && (
                <Nav.Link
                  as={Link}
                  to="/admin"
                  className={`mx-2 fw-medium ${
                    isActiveRoute("/admin") ? "text-primary" : "text-dark"
                  }`}
                >
                  <FaWrench size={16} className="me-2" />
                  Admin
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
                <FaShoppingCart size={22} className="me-2" />
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
              {user ? (
                <Dropdown align="end">
                  <Dropdown.Toggle
                    variant="outline-success"
                    id="dropdown-user"
                    className="d-flex align-items-center"
                  >
                    <FaUser size={16} className="me-2" />
                    Bienvenido {user.name.firstname}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Header>Mi cuenta</Dropdown.Header>
                    <Dropdown.Item as={Link} to="/perfil">
                      <FaUser size={16} className="me-2" />
                      Mi Perfil
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to="/pedidos">
                      <FaShoppingCart size={16} className="me-2" />
                      Mis Pedidos
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item
                      onClick={cerrarSession}
                      className="text-danger"
                    >
                      <FaShareSquare size={16} className="me-2" />
                      Cerrar Sesión
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
                  <FaUser size={22} className="me-2" />
                  Iniciar Sesión
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
