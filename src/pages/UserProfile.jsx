// src/pages/AdminProfile.jsx
import { useContext } from "react";
import AuthContext from "../context/AuthContext.jsx";
import { Container, Row, Col, Card, Badge, Button } from "react-bootstrap";
import {
  FaUserCheck,
  FaInfoCircle,
  FaUserCog,
  FaCog,
  FaEnvelope,
  FaLocationArrow,
  FaEdit,
  FaExpeditedssl,
  FaIdCard,
} from "react-icons/fa";
import Swal from "sweetalert2";

const AdminProfile = () => {
  const { user } = useContext(AuthContext);

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
                👤 Hola {user.name.firstname} estas en tu perfil{" "}
              </h1>
              <p className="text-muted mb-0">
                Gestiona tu información personal y de contacto
              </p>
            </div>
            <Badge bg="primary" className="fs-6">
              Admin
            </Badge>
          </div>
        </Col>
      </Row>

      <Row>
        {/* Información Principal */}
        <Col lg={8}>
          <Card className="shadow-sm mb-4">
            <Card.Header className="bg-white">
              <h5 className="mb-0">
                <FaInfoCircle size={32} className="me-2 text-secondary" />
                Información Personal
              </h5>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col md={6} className="mb-3">
                  <label className="form-label text-muted small mb-1">
                    Nombre
                  </label>
                  <div className="p-2 bg-light rounded">
                    {user.name.firstname} {user.name.lastname}
                  </div>
                </Col>
                <Col md={6} className="mb-3">
                  <label className="form-label text-muted small mb-1">
                    Usuario
                  </label>
                  <div className="p-2 bg-light rounded">@{user.username}</div>
                </Col>
                <Col md={6} className="mb-3">
                  <label className="form-label text-muted small mb-1">
                    Email
                  </label>
                  <div className="p-2 bg-light rounded">{user.email}</div>
                </Col>
                <Col md={6} className="mb-3">
                  <label className="form-label text-muted small mb-1">
                    Teléfono
                  </label>
                  <div className="p-2 bg-light rounded">{user.phone}</div>
                </Col>
                <Col md={6} className="mb-3">
                  <label className="form-label text-muted small mb-1">
                    ID de Usuario
                  </label>
                  <div className="p-2 bg-light rounded">#{user.id}</div>
                </Col>
              </Row>
            </Card.Body>
          </Card>

          {/* Dirección */}
          <Card className="shadow-sm mb-4">
            <Card.Header className="bg-white">
              <h5 className="mb-0">
                <FaLocationArrow size={32} className="me-2 text-secondary" />
                Dirección
              </h5>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col md={6} className="mb-3">
                  <label className="form-label text-muted small mb-1">
                    Calle
                  </label>
                  <div className="p-2 bg-light rounded">
                    {user.address.street}
                  </div>
                </Col>
                <Col md={6} className="mb-3">
                  <label className="form-label text-muted small mb-1">
                    Número
                  </label>
                  <div className="p-2 bg-light rounded">
                    #{user.address.number}
                  </div>
                </Col>
                <Col md={6} className="mb-3">
                  <label className="form-label text-muted small mb-1">
                    Ciudad
                  </label>
                  <div className="p-2 bg-light rounded">
                    {user.address.city}
                  </div>
                </Col>
                <Col md={6} className="mb-3">
                  <label className="form-label text-muted small mb-1">
                    Codigo Postal
                  </label>
                  <div className="p-2 bg-light rounded small">
                    {user.address.zipcode}
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        {/* Sidebar - Información Adicional */}
        <Col lg={4}>
          {/* Tarjeta de Resumen */}
          <Card className="shadow-sm mb-4">
            <Card.Header className="bg-white">
              <h6 className="mb-0">
                <FaIdCard size={32} className="me-2 text-secondary" />
                Resumen
              </h6>
            </Card.Header>
            <Card.Body>
              <div className="d-flex align-items-center mb-3">
                <div className="bg-primary bg-opacity-10 p-2 rounded me-3">
                  <FaUserCheck size={16} className="text-success" />
                </div>
                <div>
                  <small className="text-muted d-block">Miembro desde</small>
                  <strong>Usuario Activo</strong>
                </div>
              </div>
              <div className="d-flex align-items-center mb-3">
                <div className="bg-success bg-opacity-10 p-2 rounded me-3">
                  <FaUserCog size={16} className="text-success" />
                </div>
                <div>
                  <small className="text-muted d-block">Rol</small>
                  <strong>Administrador</strong>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <div className="bg-info bg-opacity-10 p-2 rounded me-3">
                  <FaEnvelope size={16} className="text-success" />
                </div>
                <div>
                  <small className="text-muted d-block">Estado</small>
                  <strong>Email Verificado</strong>
                </div>
              </div>
            </Card.Body>
          </Card>

          {/* Acciones Rápidas */}
          <Card className="shadow-sm">
            <Card.Header className="bg-white">
              <h6 className="mb-0">
                <FaCog size={32} className="me-2 text-primary" />
                Acciones Rápidas
              </h6>
            </Card.Header>
            <Card.Body>
              <div className="d-grid gap-2">
                <Button
                  variant="outline-primary"
                  size="sm"
                  className="d-flex align-items-center justify-content-center"
                  onClick={hanldeBotton}
                >
                  <FaEdit size={16} className="me-2" />
                  Editar Perfil
                </Button>
                <Button
                  variant="outline-secondary"
                  size="sm"
                  className="d-flex align-items-center justify-content-center"
                  onClick={hanldeBotton}
                >
                  <FaExpeditedssl size={16} className="me-2" />
                  Cambiar Contraseña
                </Button>
                <Button
                  variant="outline-info"
                  size="sm"
                  className="d-flex align-items-center justify-content-center"
                  onClick={hanldeBotton}
                >
                  <FaEnvelope size={16} className="me-2 text-warning" />
                  Contactar Soporte
                </Button>
              </div>
            </Card.Body>
          </Card>

          {/* Información de Seguridad */}
          <Card className="shadow-sm mt-4">
            <Card.Header className="bg-white">
              <h6 className="mb-0">
                <FaExpeditedssl size={32} className="me-2 text-danger" />
                Seguridad
              </h6>
            </Card.Header>
            <Card.Body>
              <div className="mb-2">
                <small className="text-muted">Última actualización</small>
                <div className="fw-medium">Hace 2 días</div>
              </div>
              <div className="mb-2">
                <small className="text-muted">Estado de la cuenta</small>
                <div>
                  <Badge bg="success" className="small">
                    Activa
                  </Badge>
                </div>
              </div>
              <div>
                <small className="text-muted">Verificación</small>
                <div>
                  <Badge bg="success" className="small">
                    Completada
                  </Badge>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminProfile;
