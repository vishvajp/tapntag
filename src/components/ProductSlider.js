import React, { useState } from "react";
import { Carousel, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../Css/ProductSlider.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const products = [
  {
    id: 1,
    name: "Keychain",
    price: "₹299",
    image: "/images/keychain.jpg",
    description: "NFC-enabled digital keychain for instant profile sharing",
  },
  {
    id: 2,
    name: "Visiting Card",
    price: "₹199",
    image: "/images/visiting-card.jpg",
    description: "Smart business card with NFC technology",
  },
  {
    id: 3,
    name: "Statue",
    price: "₹499",
    image: "/images/statue.jpg",
    description: "Decorative NFC-enabled statue for your desk",
  },
  {
    id: 4,
    name: "Doll",
    price: "₹399",
    image: "/images/doll.jpg",
    description: "Cute NFC-enabled doll for kids",
  },
  {
    id: 5,
    name: "Tag",
    price: "₹149",
    image: "/images/tag.jpg",
    description: "Simple and effective NFC tag for any surface",
  },
];

function ProductSlider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const renderProducts = () => {
    const items = [];
    // Create a circular array of products
    const circularProducts = [...products, ...products.slice(0, 4)];

    for (let i = 0; i < products.length; i++) {
      const group = circularProducts.slice(i, i + 4);
      items.push(
        <Carousel.Item key={i}>
          <div className="d-flex justify-content-center gap-4">
            {group.map((product) => (
              <Card key={product.id} className="product-card hover-shadow">
                <Card.Img
                  variant="top"
                  src={product.image}
                  alt={product.name}
                />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text className="price">{product.price}</Card.Text>
                  <Card.Text>{product.description}</Card.Text>
                  <Link to={`/product/${product.id}`}>
                    <Button variant="primary" className="w-100">
                      See More Details
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            ))}
          </div>
        </Carousel.Item>
      );
    }
    return items;
  };

  return (
    <div className="product-slider-container">
      <h2 className="text-center mb-4">Our Products</h2>
      <Carousel
        className="product-carousel"
        activeIndex={index}
        onSelect={handleSelect}
        interval={null}
        indicators={true}
        controls={true}
        prevIcon={<FontAwesomeIcon icon={faChevronLeft} />}
        nextIcon={<FontAwesomeIcon icon={faChevronRight} />}
      >
        {renderProducts()}
      </Carousel>
    </div>
  );
}

export default ProductSlider;
