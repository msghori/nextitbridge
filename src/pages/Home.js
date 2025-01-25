import React from 'react';
import "../css/custom.css";
import {Container,Row,Col} from 'react-bootstrap';
import HeaderNavbar from '../components/header-navbar/header-navbar';
import homeImg from "../assets/images/home-image.png";
import Services from '../components/services/services';

function Home() {
  return (
  <>
  <div className='home-area' id='home'>
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
  <div className='sec-area' id='services'>
  <section className="sec-services">
      <Services/>
    </section>
  </div>
  </>
  );
}

export default Home;
