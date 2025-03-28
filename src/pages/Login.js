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
import emailjs from "emailjs-com";
import OtpInput from "react-otp-input";
import logo from "../Assets/image/logo-tap.png";
import "../Css/Login.css";

function Login({onLogin}) {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const navigate = useNavigate();

  // Function to generate 4-digit OTP
  const generateOtp = () => {
    return Math.floor(1000 + Math.random() * 9000); // 4-digit OTP
  };

  // Function to send OTP via EmailJS
  const sendOtp = async (e) => {
    e.preventDefault();
    if (!email) {
      setError("Please enter your email address");
      return;
    }

    const otpCode = generateOtp();
    setGeneratedOtp(otpCode);

    const emailParams = {
      to_email: email,
      otp: otpCode,
    };

    emailjs
      .send(
        "service_6mp18m8", // Replace with EmailJS Service ID
        "template_04qfshl", // Replace with EmailJS Template ID
        emailParams,
        "8J_bUEsWOCpjzHV4P" // Replace with EmailJS User ID
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          setSuccess("OTP has been sent to your email.");
          setIsOtpSent(true);
          setError("");
        },
        (error) => {
          console.error("Email sending failed:", error);
          setError("Failed to send OTP. Try again.");
        }
      );
  };

  // Function to verify OTP
  const verifyOtp = (e) => {
    e.preventDefault();
    if (!otp) {
      setError("Please enter the OTP");
      return;
    }

    if (parseInt(otp) === generatedOtp) {
      
      setError("");
      alert("OTP verified successfully!");
      onLogin();
      navigate("/profile-creation");
    } else {
      setError("Invalid OTP. Please try again.");
    }
  };

  return (
    <div className="login-main-div d-flex align-items-center justify-content-center">
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col md={4}>
            <Card className="login-card">
              <Card.Body>
                <div className="d-flex justify-content-center mb-3">
                  <div className="w-50">
                    <img src={logo} className="img-fluid"></img>
                  </div>
                </div>

                {error && <Alert className="danger-alert" variant="danger">{error}</Alert>}
                {success && <Alert className="danger-alert" variant="success">{success}</Alert>}
                <Form onSubmit={sendOtp}>
                  <Form.Group className="mb-3">
                    <Form.Label>
                      <strong className="text-white">Email Address</strong>
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>
                  <div className="d-flex justify-content-center">
                    <Button
                      type="submit"
                      className=" login-sendotp-button text-center"
                    >
                      {isOtpSent ? "Resend OTP" : "Send OTP"}
                    </Button>
                  </div>
                </Form>

                <Form onSubmit={verifyOtp} className="mt-3">
                  <Form.Group className="mb-3">
                    <Form.Label>
                      <strong className="text-white">Enter OTP</strong>
                    </Form.Label>
                    <OtpInput
                      value={otp}
                      onChange={setOtp}
                      numInputs={4}
                      renderSeparator={<span style={{ width: "10px" }} />}
                      renderInput={(props) => (
                        <input {...props} className="otp-input" />
                      )}
                      containerStyle="otp-container"
                    />
                  </Form.Group>
                  <div className="d-flex justify-content-center">
                    <Button
                      variant="primary"
                      type="submit"
                      className="login-sendotp-button text-center"
                    >
                      Verify OTP
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
