import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const EstimateRequestForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    projectType: "",
    description: "",
    budget: "",
    preferredDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Thank you! Your estimate request has been submitted.");
    // Add your API integration here
  };

  return (
    <Container className="py-4">
      <h1 className="text-center mb-4">Request an Estimate</h1>
      <Form onSubmit={handleSubmit} className="shadow p-4 rounded bg-light">
        <Row>
          <Col md={6}>
            <Form.Group controlId="formName" className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your full name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Form.Group controlId="formPhone" className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter your phone number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formAddress" className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="formProjectType" className="mb-3">
          <Form.Label>Type of Renovation</Form.Label>
          <Form.Select
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            required
          >
            <option value="">Select a project type</option>
            <option value="kitchen">Kitchen Renovation</option>
            <option value="bathroom">Bathroom Renovation</option>
            <option value="basement">Basement Renovation</option>
            <option value="other">Other</option>
          </Form.Select>
        </Form.Group>
        <Form.Group controlId="formDescription" className="mb-3">
          <Form.Label>Project Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Describe your project in detail"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Row>
          <Col md={6}>
            <Form.Group controlId="formBudget" className="mb-3">
              <Form.Label>Estimated Budget</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formPreferredDate" className="mb-3">
              <Form.Label>Preferred Start Date</Form.Label>
              <Form.Control
                type="date"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <div className="text-center">
          <Button type="submit" variant="primary" className="px-4">
            Submit Request
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default EstimateRequestForm;
