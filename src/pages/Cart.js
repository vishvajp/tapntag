import React, { useState } from "react";
import { Container, Row, Col, Button, Table, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../Context/AuthContext";
import {useCart} from "../Context/CartContext"
import LoginModal from "../components/LoginModal";
import "../Css/Cart.css";

function Cart() {
  const { 
    cart, 
    loading, 
    totalItems, 
    totalPrice, 
    updateCartItem, 
    removeFromCart 
  } = useCart();
  
  const { user } = useAuth();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const navigate = useNavigate();

  const handleQuantityChange = async (productId, change) => {
    const item = cart.find(item => item._id === productId);
    if (!item) return;
    
    const newQuantity = item.quantity + change;
    if (newQuantity >= 1 && newQuantity <= 10) {
      try {
        await updateCartItem(productId, newQuantity);
      } catch (error) {
        console.error("Failed to update quantity:", error);
        // Show error to user if needed
      }
    }
  };

  const handleRemoveItem = async (productId) => {
    try {
      await removeFromCart(productId);
    } catch (error) {
      console.error("Failed to remove item:", error);
      // Show error to user if needed
    }
  };

  const handleCheckout = () => {
    if (!user) {
      setShowLoginModal(true);
      return;
    }
    navigate("/checkout");
  };

  const handleLoginSuccess = () => {
    navigate("/checkout");
  };

  if (loading) {
    return (
      <Container className="cart-container py-5 text-center">
        <h3>Loading your cart...</h3>
      </Container>
    );
  }

  return (
    <Container className="cart-container py-5">
      <h1 className="mb-4">Shopping Cart</h1>

      {cart.length === 0 ? (
        <div className="text-center py-5">
          <h3>Your cart is empty</h3>
          <Button
            variant="primary"
            className="mt-3"
            onClick={() => navigate("/")}
          >
            Continue Shopping
          </Button>
        </div>
      ) : (
        <>
          <Row>
            <Col md={8}>
              <Table responsive>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item) => (
                    <tr key={item._id}>
                      <td>
                        <div className="d-flex align-items-center">
                          <img
                            src={`${process.env.REACT_APP_API_BASE_URL || 'http://localhost:3001'}/vishva/tapntag${item.images[0]}`}
                            alt={item.name}
                            className="cart-item-image me-3"
                            onError={(e) => {
                              e.target.onerror = null; 
                              e.target.src = '/placeholder-image.jpg';
                            }}
                          />
                          <div>
                            <h5 className="mb-0">{item.name}</h5>
                          </div>
                        </div>
                      </td>
                      <td>₹{item.price}</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <Button
                            variant="outline-secondary"
                            size="sm"
                            onClick={() => handleQuantityChange(item._id, -1)}
                            className="quantity-btn"
                            disabled={item.quantity <= 1}
                          >
                            -
                          </Button>
                          <span className="mx-2">{item.quantity}</span>
                          <Button
                            variant="outline-secondary"
                            size="sm"
                            onClick={() => handleQuantityChange(item._id, 1)}
                            className="quantity-btn"
                            disabled={item.quantity >= 10}
                          >
                            +
                          </Button>
                        </div>
                      </td>
                      <td>
                        ₹{(item.price * item.quantity).toFixed(2)}
                      </td>
                      <td>
                        <Button
                          variant="outline-danger"
                          size="sm"
                          onClick={() => handleRemoveItem(item._id)}
                        >
                          <FontAwesomeIcon icon={faTrash} />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>

              <Button
                variant="outline-primary"
                className="mt-3"
                onClick={() => navigate("/")}
              >
                <FontAwesomeIcon icon={faArrowLeft} className="me-2" />
                Continue Shopping
              </Button>
            </Col>

            <Col md={4}>
              <div className="cart-summary p-4">
                <h3>Order Summary</h3>
                <div className="d-flex justify-content-between mb-2">
                  <span>Items ({totalItems})</span>
                  <span>₹{totalPrice.toFixed(2)}</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between mb-3">
                  <strong>Total</strong>
                  <strong>₹{totalPrice.toFixed(2)}</strong>
                </div>

                <Form className="mb-3">
                  <Form.Group className="mb-3">
                    <Form.Label>Coupon Code</Form.Label>
                    <div className="d-flex">
                      <Form.Control type="text" placeholder="Enter code" />
                      <Button variant="outline-secondary" className="ms-2">
                        Apply
                      </Button>
                    </div>
                  </Form.Group>
                </Form>

                <Button
                  variant="success"
                  size="lg"
                  className="w-100"
                  onClick={handleCheckout}
                >
                  Proceed to Checkout
                </Button>
              </div>
            </Col>
          </Row>
        </>
      )}

      <LoginModal
        show={showLoginModal}
        onHide={() => setShowLoginModal(false)}
        onLogin={handleLoginSuccess}
      />
    </Container>
  );
}

export default Cart;