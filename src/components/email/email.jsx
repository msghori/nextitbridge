import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import emailjs from "emailjs-com";
import "./email.css";
const Email = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_l557qqd", // Replace with your service ID
        "template_wtdl1vt", // Replace with your template ID
        formData,
        "id70wvfbVPxU7CwDl" // Replace with your user ID
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          setFormData({ name: "", phone: "", email: "", message: "" });
        },
        (error) => {
          alert("Failed to send message, please try again.");
        }
      );
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit} className="form-holder">
        <Row>
          <Col xs={12}>
            <h1>Let's Get In Touch </h1>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label style={{ color: "black" }}>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formPhone">
              <Form.Label style={{ color: "black" }}>Phone</Form.Label>
              <Form.Control
                type="number"
                placeholder=""
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label style={{ color: "black" }}>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder=""
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label style={{ color: "black" }}>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
            </Form.Group>
            <Button className="btn-default btn-connect float-end" type="submit">
              Send Message
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default Email;
