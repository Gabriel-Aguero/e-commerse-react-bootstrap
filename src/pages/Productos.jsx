// components/Productos.js
import { useEffect, useState } from "react";
import { getProducts } from "../api/productApi.js";
import ProductCard from "../components/ProductCard.jsx";
import { Container, Row, Col } from "react-bootstrap";

const Productos = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);

  return (
    <Container className="my-4">
      <h1 className="mb-4 text-center">Productos</h1>
      <Row className="g-4">
        {products.map((product) => (
          <Col key={product.id} xs={12} sm={6} md={4}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Productos;
