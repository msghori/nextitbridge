import React, { useEffect } from "react";
import {Container } from 'react-bootstrap';

import Nav from 'react-bootstrap/Nav';
import './services-text.css';
import image1 from '../../assets/images/01.jpg';
import image2 from '../../assets/images/02.jpg';
import image3 from '../../assets/images/03.jpg';
import image4 from '../../assets/images/04.jpg';
import image5 from '../../assets/images/05.jpg';

const ServicesText =() =>{

    useEffect(() => {
        const script = document.createElement("script");
        script.src = `${process.env.PUBLIC_URL}/assets/js/services-text.js`;
        script.async = true;
      
        script.onerror = () => {
          console.error("Failed to load script:", script.src);
        };
      
        document.body.appendChild(script);
      
        return () => {
          document.body.removeChild(script);
        };
      }, []);
      
    return(
        <div className="main-container">
            <div className="changeImg" id="backgroundImage"></div>
            <Container>
            <div className="list-holder">
            <ul className="heading-list">
                <li><Nav.Link href="#link" data-image={image1}>Branding</Nav.Link></li>
                <li><Nav.Link href="#link" data-image={image2}>Custom Software</Nav.Link></li>
                <li><Nav.Link href="#link" data-image={image3}>Web Development</Nav.Link></li>
                <li><Nav.Link href="#link" data-image={image4}>It Services</Nav.Link></li>
                <li><Nav.Link href="#link" data-image={image5}>Mobile</Nav.Link></li>
            </ul>
            </div>
            </Container>
         </div>
    )
}
    export default ServicesText;
