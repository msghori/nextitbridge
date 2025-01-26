import React from "react";
import {Container,Row,Col} from 'react-bootstrap';
import './why-choose-us.css';

const WhyChooseUs =() =>{
    return(
        <>
         <Container>
            <Row>
                 <Col lg={6} md={6} sm={6} xs={12}>
                    <Row>
                        <Col lg={6} md={6} sm={12} xs={12} className="img-container">
                            <div className="imgBox"></div>
                            <div className="txtBox">Digital Excellence</div>
                        </Col>
                        <Col lg={6} md={6} sm={12} xs={12} className="img-container">
                            <div className="txtBox">Enterprise Solutions</div>
                            <div className="box-two"></div>

                        </Col>
                    </Row>
                </Col>
                <Col lg={6} md={6} sm={6} xs={12}>
                <div className="ps-lg-5 ps-sm-0 ">
                    <h2 className="sub-heading mb-4">Company_Why Choose Us</h2>
                    <p>We are experts in delivering innovative technology solutions that drive businesses toward success.
                         At Next IT Bridge, we specialize in transforming ideas into impactful realities,
                          offering tailored services that align with your entrepreneurial vision. With a focus on excellence,
                           we provide comprehensive support in design, development, deployment, and marketing to ensure your product
                            achieves its full potential.</p>
                    <p>Expertise-Driven Solution</p>
                    <p>Competitive Pricing</p>
                    <p>On-Time Delivery and Reliability</p>
                    <p className="mb-5">End-to-End Support</p>
                    <div className="stats d-flex justify-content-between" >
                        <div>
                            <p className="num">22+</p>
                            <p>Years of Driving growth</p>
                        </div>
                        <div>
                            <p>56+</p>
                            <p>Projects Delivered</p>
                        </div>
                        <div>
                        <p>95%</p>
                        <p>Customer Satisfaction</p>
                        </div>
                    </div>
                    </div>
                </Col>
                
         
            </Row>
        </Container>
        </>
    )
}

export default WhyChooseUs;