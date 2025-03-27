import React, { useState } from "react";
import { Container, Form, Button, Card, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function ProfileCreation() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    personalDetails: {
      name: "",
      dob: "",
      age: "",
      motherName: "",
      fatherName: "",
      siblings: "",
    },
    education: [],
    workDetails: {
      company: "",
      position: "",
      experience: "",
    },
    businessDetails: {
      businessName: "",
      type: "",
      registrationNumber: "",
    },
  });

  const [showBusinessDetails, setShowBusinessDetails] = useState(false);

  const handlePersonalDetailsChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      personalDetails: {
        ...prev.personalDetails,
        [name]: value,
      },
    }));
  };

  const addEducation = () => {
    setFormData((prev) => ({
      ...prev,
      education: [...prev.education, { school: "", degree: "", year: "" }],
    }));
  };

  const removeEducation = (index) => {
    setFormData((prev) => ({
      ...prev,
      education: prev.education.filter((_, i) => i !== index),
    }));
  };

  const handleEducationChange = (index, field, value) => {
    setFormData((prev) => ({
      ...prev,
      education: prev.education.map((edu, i) =>
        i === index ? { ...edu, [field]: value } : edu
      ),
    }));
  };

  const handleWorkDetailsChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      workDetails: {
        ...prev.workDetails,
        [name]: value,
      },
    }));
  };

  const handleBusinessDetailsChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      businessDetails: {
        ...prev.businessDetails,
        [name]: value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, send the data to a backend
    console.log("Form submitted:", formData);
    navigate("/profile-display");
  };

  return (
    <Container className="py-5">
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Create Your Profile</h2>
          <Form onSubmit={handleSubmit}>
            {/* Personal Details */}
            <Card className="mb-4">
              <Card.Header>Personal Details</Card.Header>
              <Card.Body>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={formData.personalDetails.name}
                        onChange={handlePersonalDetailsChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Date of Birth</Form.Label>
                      <Form.Control
                        type="date"
                        name="dob"
                        value={formData.personalDetails.dob}
                        onChange={handlePersonalDetailsChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={4}>
                    <Form.Group className="mb-3">
                      <Form.Label>Age</Form.Label>
                      <Form.Control
                        type="number"
                        name="age"
                        value={formData.personalDetails.age}
                        onChange={handlePersonalDetailsChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group className="mb-3">
                      <Form.Label>Mother's Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="motherName"
                        value={formData.personalDetails.motherName}
                        onChange={handlePersonalDetailsChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group className="mb-3">
                      <Form.Label>Father's Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="fatherName"
                        value={formData.personalDetails.fatherName}
                        onChange={handlePersonalDetailsChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-3">
                  <Form.Label>Siblings</Form.Label>
                  <Form.Control
                    type="text"
                    name="siblings"
                    value={formData.personalDetails.siblings}
                    onChange={handlePersonalDetailsChange}
                  />
                </Form.Group>
              </Card.Body>
            </Card>

            {/* Education Details */}
            <Card className="mb-4">
              <Card.Header>
                Education Details
                <Button
                  variant="outline-primary"
                  size="sm"
                  className="float-end"
                  onClick={addEducation}
                >
                  Add Education
                </Button>
              </Card.Header>
              <Card.Body>
                {formData.education.map((edu, index) => (
                  <Row key={index} className="mb-3 align-items-center">
                    <Col md={11}>
                      <Row>
                        <Col md={4}>
                          <Form.Group>
                            <Form.Label>School/College</Form.Label>
                            <Form.Control
                              type="text"
                              value={edu.school}
                              onChange={(e) =>
                                handleEducationChange(
                                  index,
                                  "school",
                                  e.target.value
                                )
                              }
                            />
                          </Form.Group>
                        </Col>
                        <Col md={4}>
                          <Form.Group>
                            <Form.Label>Degree</Form.Label>
                            <Form.Control
                              type="text"
                              value={edu.degree}
                              onChange={(e) =>
                                handleEducationChange(
                                  index,
                                  "degree",
                                  e.target.value
                                )
                              }
                            />
                          </Form.Group>
                        </Col>
                        <Col md={4}>
                          <Form.Group>
                            <Form.Label>Year</Form.Label>
                            <Form.Control
                              type="text"
                              value={edu.year}
                              onChange={(e) =>
                                handleEducationChange(
                                  index,
                                  "year",
                                  e.target.value
                                )
                              }
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                    </Col>
                    <Col md={1}>
                      <Button
                        variant="outline-danger"
                        size="sm"
                        className="mt-4"
                        onClick={() => removeEducation(index)}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </Button>
                    </Col>
                  </Row>
                ))}
              </Card.Body>
            </Card>

            {/* Work Details */}
            <Card className="mb-4">
              <Card.Header>Work Details</Card.Header>
              <Card.Body>
                <Row>
                  <Col md={4}>
                    <Form.Group className="mb-3">
                      <Form.Label>Company</Form.Label>
                      <Form.Control
                        type="text"
                        name="company"
                        value={formData.workDetails.company}
                        onChange={handleWorkDetailsChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group className="mb-3">
                      <Form.Label>Position</Form.Label>
                      <Form.Control
                        type="text"
                        name="position"
                        value={formData.workDetails.position}
                        onChange={handleWorkDetailsChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group className="mb-3">
                      <Form.Label>Experience (years)</Form.Label>
                      <Form.Control
                        type="number"
                        name="experience"
                        value={formData.workDetails.experience}
                        onChange={handleWorkDetailsChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Card.Body>
            </Card>

            {/* Business Details */}
            <Card className="mb-4">
              <Card.Header>
                Business Details
                <Form.Check
                  type="switch"
                  className="float-end"
                  checked={showBusinessDetails}
                  onChange={(e) => setShowBusinessDetails(e.target.checked)}
                />
              </Card.Header>
              <Card.Body>
                {showBusinessDetails && (
                  <Row>
                    <Col md={4}>
                      <Form.Group className="mb-3">
                        <Form.Label>Business Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="businessName"
                          value={formData.businessDetails.businessName}
                          onChange={handleBusinessDetailsChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={4}>
                      <Form.Group className="mb-3">
                        <Form.Label>Business Type</Form.Label>
                        <Form.Control
                          type="text"
                          name="type"
                          value={formData.businessDetails.type}
                          onChange={handleBusinessDetailsChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={4}>
                      <Form.Group className="mb-3">
                        <Form.Label>Registration Number</Form.Label>
                        <Form.Control
                          type="text"
                          name="registrationNumber"
                          value={formData.businessDetails.registrationNumber}
                          onChange={handleBusinessDetailsChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                )}
              </Card.Body>
            </Card>

            <Button variant="primary" type="submit" className="w-100">
              Create Profile
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ProfileCreation;
