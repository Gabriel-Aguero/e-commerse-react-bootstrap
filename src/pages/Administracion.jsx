// src/pages/UserManagement.jsx
import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext.jsx";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Table,
  Badge,
  Alert,
  InputGroup,
} from "react-bootstrap";
import {
  FaUserCheck,
  FaUserCircle,
  FaInfoCircle,
  FaUserCog,
  FaCog,
  FaEnvelope,
  FaLocationArrow,
  FaEdit,
  FaExpeditedssl,
  FaIdCard,
  FaUserPlus,
  FaSearch,
  FaRegEye,
  FaTrashAlt,
} from "react-icons/fa";
import Swal from "sweetalert2";

const Administracion = () => {
  const { userSearch } = useContext(AuthContext);
  const [search, setSearch] = useState("");
  const [usuarios, setUsuarios] = useState([]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchUser = async (e) => {
    try {
      e.preventDefault();
      const usuarioEncontrado = await userSearch(search);
      setUsuarios(usuarioEncontrado);
    } catch (error) {
      Swal.fire("Error al buscar usuario", "Usuario no encontrado", error);
    }
  };

  const hanldeBotton = () => {
    Swal.fire({
      title: "Proximamente",
      text: "Esta funcionalidad esta en desarrollo",
      icon: "warning",
      confirmButtonText: "Continuar",
    });
  };

  return (
    <Container className="py-4">
      {/* Header */}
      <Row className="mb-4">
        <Col>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h1 className="h3 mb-1">
                <FaUserCircle size={32} className="me-2 text-primary" />
                Gestión de Usuarios
              </h1>
              <p className="text-muted mb-0">
                Registrar nuevos usuarios y buscar usuarios existentes
              </p>
            </div>
            <Badge bg="primary" className="fs-6">
              Admin
            </Badge>
          </div>
        </Col>
      </Row>

      <Row>
        {/* Formulario de Registro */}
        <Col lg={6} className="mb-4">
          <Card className="shadow-sm h-100">
            <Card.Header className="bg-white">
              <FaUserPlus size={32} className="me-2 text-primary" />
              <h5 className="mb-0">Registrar Nuevo Usuario</h5>
            </Card.Header>
            <Card.Body>
              <Form>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Label className="fw-medium">Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Ej: Juan" />
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Label className="fw-medium">Apellido</Form.Label>
                    <Form.Control type="text" placeholder="Ej: Pérez" />
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label className="fw-medium">Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Ej: usuario@ejemplo.com"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="fw-medium">Username</Form.Label>
                  <Form.Control type="text" placeholder="Ej: juanperez" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="fw-medium">Teléfono</Form.Label>
                  <Form.Control type="tel" placeholder="Ej: 1-123-456-7890" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="fw-medium">Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Mínimo 8 caracteres"
                  />
                </Form.Group>

                {/* Dirección */}
                <div className="border-top pt-3 mt-3">
                  <FaLocationArrow size={16} className="me-2 text-primary" />
                  <h6 className="text-muted mb-3">Dirección</h6>
                  <Row>
                    <Col md={8} className="mb-3">
                      <Form.Label className="fw-medium">Calle</Form.Label>
                      <Form.Control type="text" placeholder="Ej: Main Street" />
                    </Col>
                    <Col md={4} className="mb-3">
                      <Form.Label className="fw-medium">Número</Form.Label>
                      <Form.Control type="number" placeholder="123" />
                    </Col>
                    <Col md={6} className="mb-3">
                      <Form.Label className="fw-medium">Ciudad</Form.Label>
                      <Form.Control type="text" placeholder="Ej: Nueva York" />
                    </Col>
                    <Col md={6} className="mb-3">
                      <Form.Label className="fw-medium">
                        Código Postal
                      </Form.Label>
                      <Form.Control type="text" placeholder="Ej: 10001" />
                    </Col>
                  </Row>
                </div>

                <div className="d-grid gap-2 mt-4">
                  <Button
                    variant="primary"
                    size="lg"
                    className="d-flex align-items-center justify-content-center"
                    onClick={hanldeBotton}
                  >
                    <FaUserPlus size={22} className="me-2" />
                    Registrar Usuario
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        {/* Búsqueda de Usuarios */}
        <Col lg={6}>
          <Card className="shadow-sm h-100">
            <Card.Header className="bg-white">
              <h5 className="mb-0">
                <FaSearch size={32} className="me-2 text-primary" />
                Buscar Usuarios
              </h5>
            </Card.Header>
            <Card.Body>
              {/* Formulario de Búsqueda */}
              <Form className="mb-4">
                <Form.Group className="mb-3">
                  <Form.Label className="fw-medium">Buscar por:</Form.Label>
                  <InputGroup>
                    <Form.Select>
                      <option value="username">Username</option>
                    </Form.Select>
                    <Form.Control
                      type="text"
                      placeholder="Ingresa tu búsqueda..."
                      name="search"
                      onChange={handleChange}
                    />
                    <Button
                      variant="outline-primary"
                      onClick={handleSearchUser}
                    >
                      <FaSearch size={16} className="me-2" />
                      Buscar
                    </Button>
                  </InputGroup>
                </Form.Group>
              </Form>

              {/* Resultados de Búsqueda */}
              <div className="border rounded">
                <div className="p-3 border-bottom bg-light">
                  <h6 className="mb-0">Resultados de Búsqueda</h6>
                </div>

                {/* Usuario Ejemplo */}
                {usuarios ? (
                  <div className="p-3 border-bottom">
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <div className="d-flex flex-column align-items-start">
                        <div className="d-flex align-items-center mx-2 gap-2">
                          <h6 className="mb-1">Usuario: </h6>
                          <p className="text-muted small mb-1">
                            {usuarios.username}
                          </p>
                        </div>
                        <div className="d-flex align-items-center mx-2 gap-2">
                          <h6 className="mb-1">Email: </h6>
                          <p className="text-muted small mb-0">
                            {usuarios.email}
                          </p>
                        </div>
                      </div>
                      <Badge bg="success">Activo</Badge>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <small className="text-muted">ID: {usuarios.id}</small>
                      <div>
                        <Button variant="outline-primary btn-sm me-1" size="sm">
                          <FaRegEye size={16} className="me-2" />
                          Ver
                        </Button>
                        <Button variant="outline-success btn-sm me-1" size="sm">
                          <FaEdit size={16} className="me-2" />
                          Editar
                        </Button>
                        <Button variant="outline-danger btn-sm" size="sm">
                          <FaTrashAlt size={16} className="me-2" />
                          Eliminar
                        </Button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-4">
                    <FaUserCircle size={64} />
                    <p className="text-muted mt-2">
                      No hay usuarios encontrados
                    </p>
                  </div>
                )}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Administracion;
