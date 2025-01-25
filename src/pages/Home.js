import React from 'react';
import "../css/custom.css";
import HeaderNavbar from '../components/header-navbar/header-navbar';
import homeImg from "../assets/images/home-image.png";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home() {
  return (
  <>
  <div className='home-area'>
    <HeaderNavbar/>
    <section className='sec-home'>
    <Container>
      <Row>
        <Col xs={12} md={6} sm={12}>
          <div className='heading-area'>
            <h1>Bridging the Gap</h1>
            <h6>Between Challenges and Tailored Solutions</h6>
            <button className='btn-default btn-connect'>Connect with Team</button>
          </div>
         <p className='tag-line'>We approach every project with a perfect blend of creativity and technical excellence.</p>
        </Col>
        <Col xs={12} md={6} sm={12}>
        <div className='hero-img'>
            <img src={homeImg} alt='logoimg' className='img-fluid'/>
          </div>
        </Col>
        </Row>
        </Container>
    </section>
  </div>
  </>
  );
}

export default Home;
