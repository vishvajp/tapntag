import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProductSlider from "../components/ProductSlider";
import "../Css/Home.css";
import nfcMainPic from "../assets/image/nfc-main-pic.png";
import smartnsimple from "../assets/image/smartnsimple.jpg";
import design from "../assets/image/design.jpg";
import share from "../assets/image/share.jpg";
function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="bg-primary text-white py-5"
        style={{
          background: "linear-gradient(135deg, #6B73FF 0%, #000DFF 100%)",
        }}
      >
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h1 className="display-4 fw-bold mb-4">
                Your Digital Identity, One Tap Away
              </h1>
              <p className="lead mb-4">
                Transform your professional presence with TapnTag - the modern
                way to share your story, share your business, and grow your
                social network.
              </p>
              <div className="d-flex gap-3">
                <Button as={Link} to="/login" variant="light" size="lg">
                  Get Started
                </Button>
              </div>
            </Col>
            <Col md={6}>
              <img
                src={nfcMainPic}
                alt="Digital Business Card"
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </div>

      {/* Features Section */}
      <Container fluid className="py-4 ps-5 pe-5">
        <h2 className="text-center mb-5">Why Choose TapnTag?</h2>
        <Row>
          <Col md={3} className="mb-3">
            <div className="text-center choose-tapntag p-4">
              <div className="mb-3">
                <img
                  src={smartnsimple}
                  alt="Digital Business Card"
                  className="img-fluid"
                />
              </div>
              <h3>Smart & Simple</h3>
              <p>
                Create your digital presence in minutes with our intuitive
                interface. No technical skills needed.
              </p>
            </div>
          </Col>
          <Col md={3} className="mb-3">
            <div className="text-center choose-tapntag p-4">
              <div className="mb-3">
                <img
                  src={design}
                  alt="Digital Business Card"
                  className="img-fluid"
                />
              </div>
              <h3>Customizable Design</h3>
              <p>
                Choose from a variety of modern templates and customize them to
                match your brand identity.
              </p>
            </div>
          </Col>
          <Col md={3} className="mb-3">
            <div className="text-center choose-tapntag p-4">
              <div className="mb-3">
                <img
                  src={share}
                  alt="Digital Business Card"
                  className="img-fluid"
                />
              </div>
              <h3>Instant Sharing</h3>
              <p>
                Share your profile instantly via QR code or direct link. Connect
                with anyone, anywhere.
              </p>
            </div>
          </Col>
          <Col md={3} className="mb-3">
            <div className="text-center choose-tapntag p-4">
              <div className="mb-3">
                <img
                  src={share}
                  alt="Digital Business Card"
                  className="img-fluid"
                />
              </div>
              <h3>Instant Sharing</h3>
              <p>
                Share your profile instantly via QR code or direct link. Connect
                with anyone, anywhere.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <div id="product-section" >
      <ProductSlider></ProductSlider>
      </div>
      {/* CTA Section */}
      <div className="bg-light py-5">
        <Container className="text-center">
          <h2 className="mb-4">Ready to Make Your Mark?</h2>
          <p className="lead mb-4">
            Join thousands of professionals who have already transformed their
            digital presence with TapnTag.
          </p>
          <Button
            as={Link}
            to="/login"
            variant="primary"
            size="lg"
            className="px-5"
          >
            Start Your Journey
          </Button>
        </Container>
      </div>
    </div>
  );
}

export default Home;
