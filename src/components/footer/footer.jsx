import React from "react";
import {Container,Row,Col,Button,Nav } from 'react-bootstrap';
import './footer.css';

const Footer = () => {
    return (
        <div className="footer-container">
            <Container>
            <Row className="f-holder">
                <Col lg={8} sm={12} xs={12} >
                <p className="title-text ">Great things can happen  with a simple “hello!”</p>
                </Col>
                <Col lg={4} sm={12} xs={12} className="btn-box">
                    <Button className="btn-contact">Contact Us</Button>
                </Col>
            </Row>
            <Row className="footer-content">
                <Col lg={12}>
                    <Row className="nav-holder">
                        <Col lg={6}>info@nextitbridge.com</Col>
                        <Col lg={6}>
                        <ul>
                            <li><Nav.Link href="#link">About</Nav.Link></li>
                            <li><Nav.Link href="#link">Services</Nav.Link></li>
                            <li><Nav.Link href="#link">Company</Nav.Link></li>
                            <li><Nav.Link href="#link">Contact</Nav.Link></li>
                        </ul>
                        </Col>
                    </Row>
                    <Row className="c-right py-4">
                        <Col lg={12}>©2025 NEXT IT BRIDGE COMPANY. ALL RIGHT RESERVED</Col>
                    </Row>
                </Col>
            </Row>
            </Container>

        </div>
    )
}
export default Footer;