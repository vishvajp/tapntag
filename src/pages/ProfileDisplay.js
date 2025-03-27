import React, { useState, useEffect } from "react";
import { Container, Card, Row, Col, Spinner } from "react-bootstrap";

function ProfileDisplay() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call to fetch profile data
    const fetchProfile = async () => {
      try {
        // In a real application, this would be an API call
        // For now, we'll use dummy data
        const dummyProfile = {
          personalDetails: {
            name: "John Doe",
            dob: "1990-01-01",
            age: "33",
            motherName: "Jane Doe",
            fatherName: "James Doe",
            siblings: "2",
          },
          education: [
            {
              school: "High School",
              degree: "High School Diploma",
              year: "2008",
            },
            {
              school: "University",
              degree: "Bachelor of Science",
              year: "2012",
            },
          ],
          workDetails: {
            company: "Tech Corp",
            position: "Senior Developer",
            experience: "8",
          },
          businessDetails: {
            businessName: "Tech Solutions",
            type: "IT Services",
            registrationNumber: "REG123456",
          },
        };

        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setProfile(dummyProfile);
      } catch (error) {
        console.error("Error fetching profile:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return (
      <Container className="py-5 text-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Container>
    );
  }

  if (!profile) {
    return (
      <Container className="py-5">
        <Card>
          <Card.Body className="text-center">
            <h2>No Profile Found</h2>
            <p>Please create your profile first.</p>
          </Card.Body>
        </Card>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Your Profile</h2>

      {/* Personal Details */}
      <Card className="mb-4">
        <Card.Header>Personal Details</Card.Header>
        <Card.Body>
          <Row>
            <Col md={6}>
              <p>
                <strong>Name:</strong> {profile.personalDetails.name}
              </p>
              <p>
                <strong>Date of Birth:</strong> {profile.personalDetails.dob}
              </p>
              <p>
                <strong>Age:</strong> {profile.personalDetails.age}
              </p>
            </Col>
            <Col md={6}>
              <p>
                <strong>Mother's Name:</strong>{" "}
                {profile.personalDetails.motherName}
              </p>
              <p>
                <strong>Father's Name:</strong>{" "}
                {profile.personalDetails.fatherName}
              </p>
              <p>
                <strong>Siblings:</strong> {profile.personalDetails.siblings}
              </p>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Education Details */}
      <Card className="mb-4">
        <Card.Header>Education Details</Card.Header>
        <Card.Body>
          {profile.education.map((edu, index) => (
            <div key={index} className="mb-3">
              <h5>Education {index + 1}</h5>
              <p>
                <strong>School/College:</strong> {edu.school}
              </p>
              <p>
                <strong>Degree:</strong> {edu.degree}
              </p>
              <p>
                <strong>Year:</strong> {edu.year}
              </p>
            </div>
          ))}
        </Card.Body>
      </Card>

      {/* Work Details */}
      <Card className="mb-4">
        <Card.Header>Work Details</Card.Header>
        <Card.Body>
          <Row>
            <Col md={4}>
              <p>
                <strong>Company:</strong> {profile.workDetails.company}
              </p>
            </Col>
            <Col md={4}>
              <p>
                <strong>Position:</strong> {profile.workDetails.position}
              </p>
            </Col>
            <Col md={4}>
              <p>
                <strong>Experience:</strong> {profile.workDetails.experience}{" "}
                years
              </p>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Business Details */}
      {profile.businessDetails && (
        <Card className="mb-4">
          <Card.Header>Business Details</Card.Header>
          <Card.Body>
            <Row>
              <Col md={4}>
                <p>
                  <strong>Business Name:</strong>{" "}
                  {profile.businessDetails.businessName}
                </p>
              </Col>
              <Col md={4}>
                <p>
                  <strong>Business Type:</strong> {profile.businessDetails.type}
                </p>
              </Col>
              <Col md={4}>
                <p>
                  <strong>Registration Number:</strong>{" "}
                  {profile.businessDetails.registrationNumber}
                </p>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
}

export default ProfileDisplay;
