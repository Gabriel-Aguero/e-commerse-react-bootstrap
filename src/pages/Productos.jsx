// components/Productos.js
import { useEffect, useState } from "react";
import { getProducts, getCategories } from "../api/productApi.js";
import ProductCard from "../components/ProductCard.jsx";
import { Container, Row, Col, Form } from "react-bootstrap";
import { FaFolderOpen } from "react-icons/fa";

const Productos = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  // const [selectCategory, setSelectCategory] = useState("all");
  const [filteredCategory, setFilteredCategory] = useState([]);

  useEffect(() => {
    const load = async () => {
      const productsData = await getProducts();
      const categoriesData = await getCategories();
      setProducts(productsData);
      setFilteredCategory(productsData);
      setCategories(categoriesData);
    };
    load();
  }, []);

  const handleCategoryFilter = (category) => {
    console.log(category);
    if (category === "all") {
      setFilteredCategory(products);
    } else {
      const filtered = products.filter(
        (product) => product.category === category
      );
      setFilteredCategory(filtered);
    }
  };

  return (
    <Container className="my-4">
      <h1 className="mb-4 text-center">Productos</h1>
      <Row className="g-4 mb-4">
        <Col xs={12}>
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3 mb-4">
            <div className="text-center text-md-start">
              <h4 className="fw-bold mb-1">
                <FaFolderOpen size={32} className="me-2 text-primary" />
                Categorías
              </h4>
              <p className="text-muted mb-0 d-none d-md-block">
                Filtra por categoría
              </p>
            </div>

            <div className="w-100 w-md-auto">
              <Form.Select
                size="lg"
                onChange={(e) => handleCategoryFilter(e.target.value)}
                className="border-primary shadow-sm w-100"
              >
                <option value="all">🎯 Todas las categorías</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category}
                  </option>
                ))}
              </Form.Select>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="g-4">
        {filteredCategory.map((product) => (
          <Col key={product.id} xs={12} sm={6} md={4}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Productos;
