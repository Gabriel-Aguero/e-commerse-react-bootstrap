import { useContext } from "react";
import CartContext from "../context/CartContext.jsx";
import { Card, Button } from "react-bootstrap";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={product.image}
        height="250"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{product.title}</Card.Title>
        <Card.Text className="text-primary fw-bold">${product.price}</Card.Text>
        <Card.Text className="text-primary fw-bold">
          Cantidad: {product.rating.count}
        </Card.Text>
        <Button variant="primary" className="mt-auto" onClick={handleAddToCart}>
          Agregar al Carrito
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
