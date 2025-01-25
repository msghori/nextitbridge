import React from "react";
import {Container,Row,Col,Button,Card,Image } from 'react-bootstrap';
import './services.css';
import ribbon from '../../assets/images/ribbon.png';

const Services =() =>{
    return(
        <>
         <Container>
            <Row>
                <Col xs={12}>
                    <h2 className="sub-heading">Services</h2>
                </Col>
                <Col xs={12} md={6} sm={12} lg={3}>
                    <Card>
                        <Card.Body>
                        <Image src={ribbon} alt="ribbon" className="img-rbn"/>
                            <Card.Text>
                            Delivering tailored software solutions designed to meet unique business needs, enhance efficiency,
                             and drive innovation through cutting-edge technology.
                            </Card.Text>
                            <Button className="btn-services">
                                <span>Custom Software Development</span></Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={6} sm={12} lg={3}>
                    <Card>
                        <Card.Body>
                        <Image src={ribbon} alt="ribbon" className="img-rbn"/>
                            <Card.Text>
                            Elevate your brand identity and user experience with innovative designs, strategic storytelling,
                             and modern aesthetics.
                            </Card.Text>
                            <Button className="btn-services">
                                <span>Designing & Branding</span></Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={6} sm={12} lg={3}>
                    <Card>
                        <Card.Body>
                        <Image src={ribbon} alt="ribbon" className="img-rbn"/>
                            <Card.Text>
                            Build dynamic, responsive,
                             and user-friendly websites tailored to drive engagement, performance, and seamless functionality.
                            </Card.Text>
                            <Button className="btn-services">
                                <span>Website Development</span></Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={6} sm={12} lg={3}>
                    <Card>
                        <Card.Body>
                        <Image src={ribbon} alt="ribbon" className="img-rbn"/>
                            <Card.Text>
                            Strengthen defense, future-proof against threats & ensure data security.
                            </Card.Text>
                            <Button className="btn-services">
                                <span>Digital Transformation</span></Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Services;