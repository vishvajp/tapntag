import React, { useState } from "react";
import {
  Container,
  Form,
  Button,
  Card,
  Alert,
  Row,
  Col,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const generateOTP = () => {
    // Generate a random 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000);
    setOtpSent(true);
    setShowOtpInput(true);
    // In a real application, this would be sent to the user's email
    console.log("Generated OTP:", otp);
    return otp;
  };

  const handleVerifyEmail = (e) => {
    e.preventDefault();
    if (!email) {
      setError("Please enter your email address");
      return;
    }
    generateOTP();
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!otp) {
      setError("Please enter the OTP");
      return;
    }
    // In a real application, verify the OTP here
    navigate("/profile-creation");
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Login</h2>
              {error && <Alert variant="danger">{error}</Alert>}

              {!showOtpInput ? (
                <Form onSubmit={handleVerifyEmail}>
                  <Form.Group className="mb-3">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit" className="w-100">
                    Verify Email
                  </Button>
                </Form>
              ) : (
                <Form onSubmit={handleLogin}>
                  <Form.Group className="mb-3">
                    <Form.Label>Enter OTP</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter 6-digit OTP"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit" className="w-100">
                    Login
                  </Button>
                </Form>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
