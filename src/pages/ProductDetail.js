import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Button, Carousel } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "../Css/ProductDetail.css";

const products = [
  {
    id: 1,
    name: "Keychain",
    price: "₹299",
    description:
      "Our NFC-enabled digital keychain is the perfect blend of style and functionality. With just a tap, you can instantly share your digital profile with anyone. The keychain features a sleek design and durable construction, making it both practical and fashionable.",
    images: [
      "/images/keychain-1.jpg",
      "/images/keychain-2.jpg",
      "/images/keychain-3.jpg",
      "/images/keychain-4.jpg",
    ],
    features: [
      "NFC Technology for instant sharing",
      "Durable metal construction",
      "Customizable design options",
      "Water-resistant coating",
    ],
  },
  // Add other products here...
];

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    const foundProduct = products.find((p) => p.id === parseInt(id));
    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <Container className="product-detail-container">
      <Row className="mb-5">
        <Col md={6}>
          <div className="main-image-container">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="main-image"
            />
            <Carousel
              className="thumbnail-carousel"
              indicators={false}
              controls={false}
              interval={null}
            >
              {product.images.map((image, index) => (
                <Carousel.Item
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={selectedImage === index ? "active" : ""}
                >
                  <img src={image} alt={`${product.name} view ${index + 1}`} />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </Col>
        <Col md={6}>
          <div className="product-info">
            <h1>{product.name}</h1>
            <p className="price">{product.price}</p>
            <p className="description">{product.description}</p>

            <div className="features-list">
              <h3>Features</h3>
              <ul>
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="button-group">
              <Button variant="primary" size="lg" className="me-3">
                <FontAwesomeIcon icon={faShoppingCart} className="me-2" />
                Add to Cart
              </Button>
              <Button variant="success" size="lg">
                Buy Now
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDetail;
