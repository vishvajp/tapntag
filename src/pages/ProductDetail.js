import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Button,
  Carousel,
  InputGroup,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
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
  {
    id: 2,
    name: "Visiting Card",
    price: "₹199",
    description:
      "Transform your traditional business card into a smart, interactive digital card. Our NFC-enabled visiting card allows you to share your professional information instantly. Perfect for networking events and business meetings.",
    images: [
      "/images/visiting-card-1.jpg",
      "/images/visiting-card-2.jpg",
      "/images/visiting-card-3.jpg",
      "/images/visiting-card-4.jpg",
    ],
    features: [
      "Professional design options",
      "Instant contact sharing",
      "QR code integration",
      "Digital profile linking",
    ],
  },
  {
    id: 3,
    name: "Statue",
    price: "₹499",
    description:
      "Add a touch of elegance to your workspace with our NFC-enabled decorative statue. This unique piece combines artistic design with modern technology, allowing you to share your digital presence in style.",
    images: [
      "/images/statue-1.jpg",
      "/images/statue-2.jpg",
      "/images/statue-3.jpg",
      "/images/statue-4.jpg",
    ],
    features: [
      "Premium quality materials",
      "Handcrafted design",
      "NFC technology integration",
      "Perfect desk accessory",
    ],
  },
  {
    id: 4,
    name: "Doll",
    price: "₹399",
    description:
      "Make learning fun with our interactive NFC-enabled doll. Perfect for children, this cute and cuddly companion helps teach about digital sharing in a playful way. The doll features soft materials and a friendly design.",
    images: [
      "/images/doll-1.jpg",
      "/images/doll-2.jpg",
      "/images/doll-3.jpg",
      "/images/doll-4.jpg",
    ],
    features: [
      "Child-safe materials",
      "Interactive learning tool",
      "Soft and cuddly design",
      "Educational value",
    ],
  },
  {
    id: 5,
    name: "Tag",
    price: "₹149",
    description:
      "Our versatile NFC tag is the perfect solution for any surface. Whether you want to attach it to your laptop, notebook, or any other item, this compact and durable tag makes digital sharing simple and effective.",
    images: [
      "/images/tag-1.jpg",
      "/images/tag-2.jpg",
      "/images/tag-3.jpg",
      "/images/tag-4.jpg",
    ],
    features: [
      "Adhesive backing",
      "Compact design",
      "Universal compatibility",
      "Easy to attach",
    ],
  },
];

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const foundProduct = products.find((p) => p.id === parseInt(id));
    setProduct(foundProduct);
  }, [id]);

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  if (!product) {
    return (
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "60vh" }}
      >
        <div className="text-center">
          <h2>Loading...</h2>
          <p>Please wait while we fetch the product details.</p>
        </div>
      </Container>
    );
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

            <div className="quantity-selector mb-4">
              <label className="me-2">Quantity:</label>
              <InputGroup style={{ width: "150px" }}>
                <Button
                  variant="outline-secondary"
                  onClick={() => handleQuantityChange(-1)}
                  className="quantity-btn"
                >
                  <FontAwesomeIcon icon={faMinus} />
                </Button>
                <input
                  type="number"
                  className="form-control text-center"
                  value={quantity}
                  readOnly
                  min="1"
                  max="10"
                />
                <Button
                  variant="outline-secondary"
                  onClick={() => handleQuantityChange(1)}
                  className="quantity-btn"
                >
                  <FontAwesomeIcon icon={faPlus} />
                </Button>
              </InputGroup>
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
