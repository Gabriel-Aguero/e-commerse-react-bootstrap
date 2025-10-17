// src/pages/CartPage.jsx
import { useContext, useState } from "react";
import CartContext from "../context/CartContext";
import { FaShoppingCart, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const { cartItems, removeFromCart, clearCart, updateQuantity, total } =
    useContext(CartContext);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const navigate = useNavigate();

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) return;
    updateQuantity(id, newQuantity);
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
    // Simular proceso de pago
    setTimeout(() => {
      alert("¡Compra realizada con éxito!");
      clearCart();
      setIsCheckingOut(false);
    }, 2000);
  };

  const getTotalItems = () => {
    return cartItems.reduce((sum, item) => sum + item.quantity, 0);
  };

  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-12">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h1 className="h3 mb-0">
              <FaShoppingCart size={32} className="me-2" /> Mi Carrito
            </h1>
            <span className="badge bg-primary fs-6">
              {getTotalItems()}{" "}
              {getTotalItems() === 1 ? "producto" : "productos"}
            </span>
          </div>

          {cartItems.length === 0 ? (
            <div className="text-center py-5">
              <div className="mb-4" style={{ fontSize: "4rem" }}>
                <FaShoppingCart size={32} />
              </div>
              <h3 className="text-muted mb-3">Tu carrito está vacío</h3>
              <p className="text-muted mb-4">
                ¡Descubre productos increíbles y comienza a comprar!
              </p>
              <button
                className="btn btn-primary btn-lg"
                onClick={() => navigate("/productos")}
              >
                Continuar Comprando
              </button>
            </div>
          ) : (
            <div className="row">
              {/* Lista de Productos */}
              <div className="col-lg-8">
                <div className="card shadow-sm">
                  <div className="card-header bg-white flex-col justify-content-between align-items-center">
                    <h5 className="mb-0">
                      <FaShoppingCart size={32} className="me-2" />
                      Productos en el carrito
                    </h5>
                    <span className="badge bg-primary">
                      {cartItems.length}{" "}
                      {cartItems.length === 1 ? "producto" : "productos"}
                    </span>
                  </div>
                  <div className="card-body p-0">
                    {cartItems.map((item) => (
                      <div key={item.id} className="border-bottom p-3">
                        <div className="row align-items-center">
                          {/* Imagen del producto */}
                          <div className="col-3">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="rounded img-fluid"
                              style={{
                                width: "60px",
                                height: "60px",
                                objectFit: "contain",
                              }}
                            />
                          </div>

                          {/* Información del producto */}
                          <div className="col-6">
                            <h6 className="mb-1 small fw-bold text-truncate">
                              {item.title}
                            </h6>
                            <p className="text-muted mb-1 small">
                              ${item.price} c/u
                            </p>
                            <div className="d-flex align-items-center mt-2">
                              {/* Selector de cantidad */}
                              <div className="d-flex align-items-center">
                                <button
                                  className="btn btn-outline-secondary btn-sm"
                                  onClick={() =>
                                    handleQuantityChange(
                                      item.id,
                                      item.quantity - 1
                                    )
                                  }
                                  disabled={item.quantity <= 1}
                                  style={{ width: "32px", height: "32px" }}
                                >
                                  −
                                </button>
                                <span className="mx-2 fw-bold">
                                  {item.quantity}
                                </span>
                                <button
                                  className="btn btn-outline-secondary btn-sm"
                                  onClick={() =>
                                    handleQuantityChange(
                                      item.id,
                                      item.quantity + 1
                                    )
                                  }
                                  style={{ width: "32px", height: "32px" }}
                                >
                                  +
                                </button>
                              </div>
                            </div>
                          </div>

                          {/* Precio y eliminar */}
                          <div className="col-3 text-end">
                            <div className="d-flex flex-column align-items-end gap-2">
                              <span className="text-primary fw-bold">
                                ${(item.price * item.quantity).toFixed(2)}
                              </span>
                              <button
                                className="btn btn-outline-danger btn-sm"
                                onClick={() => removeFromCart(item.id)}
                                title="Eliminar producto"
                                style={{ width: "32px", height: "32px" }}
                              >
                                <FaTrash size={14} />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Acciones del carrito */}
                <div className="d-flex gap-2 mt-3">
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => navigate("/productos")}
                  >
                    ← Continuar Comprando
                  </button>
                  <button
                    className="btn btn-outline-danger"
                    onClick={clearCart}
                  >
                    Vaciar Carrito
                  </button>
                </div>
              </div>

              {/* Resumen de compra */}
              <div className="col-lg-4 mt-4 mt-lg-0">
                <div
                  className="card shadow-sm sticky-top"
                  style={{ top: "20px" }}
                >
                  <div className="card-header bg-white">
                    <h5 className="mb-0">Resumen de compra</h5>
                  </div>
                  <div className="card-body">
                    <div className="d-flex justify-content-between mb-2">
                      <span>Productos ({getTotalItems()})</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <span>Envío</span>
                      <span className="text-success">Gratis</span>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between mb-3">
                      <strong>Total</strong>
                      <strong className="text-primary fs-5">
                        ${total.toFixed(2)}
                      </strong>
                    </div>

                    <button
                      className="btn btn-success w-100 py-2"
                      onClick={handleCheckout}
                      disabled={isCheckingOut}
                    >
                      {isCheckingOut ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2"></span>
                          Procesando...
                        </>
                      ) : (
                        "Finalizar Compra"
                      )}
                    </button>

                    <div className="mt-3 text-center">
                      <small className="text-muted">
                        ✅ Pago seguro · 🔄 Recibo de pago
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
