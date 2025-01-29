import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Button, Card, Image } from "react-bootstrap";
import "./services.css";
import ribbon from "../../assets/images/ribbon.png";

const Services = () => {
    const [scrollIndex, setScrollIndex] = useState(0);
    const [visibleCards, setVisibleCards] = useState(3); // Default visible cards for large screens
    const [cardWidth, setCardWidth] = useState("33.33%"); // Default card width (percentage)
  
    const cardData = [
        { id: 1, text: "Delivering tailored software solutions designed to meet unique business needs, enhance efficiency, and drive innovation through cutting-edge technology.", title: "Custom Software Development" },
        { id: 2, text: "Elevate your brand identity and user experience with innovative designs, strategic storytelling, and modern aesthetics.", title: "Designing & Branding" },
        { id: 3, text: "Build dynamic, responsive, and user-friendly websites tailored to drive engagement, performance, and seamless functionality.", title: "Website Development" },
        { id: 4, text: "Strengthen defense, future-proof against threats & ensure data security.", title: "Digital Transformation" },
        { id: 5, text: "Services 1", title: "Services 1" },
        { id: 6, text: "Services 2", title: "Services 2" },
        { id: 7, text: "Services 3", title: "Services 3" },
        { id: 8, text: "Services 4", title: "Services 4" },
    ];
  
    const totalCards = cardData.length;
    const trackRef = useRef(null);
  
    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth <= 576) {
          setVisibleCards(1); // 1 card visible on mobile
          setCardWidth("100%"); // Set card width to 100% on mobile
        } else if (window.innerWidth <= 992) {
          setVisibleCards(2); // 3 cards visible on tablet/desktop
          setCardWidth("50%"); // Set card width to 33.33% on tablet/desktop
        } else {
          setVisibleCards(4); // 4 cards visible on large screens
          setCardWidth("25%"); // Set card width to 25% on large screens
        }
      };
  
      window.addEventListener("resize", handleResize);
      handleResize(); // Initial call to handle resize logic
  
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    // Calculate the card width in pixels
    const containerWidth = trackRef.current ? trackRef.current.offsetWidth : 0;
    const cardWidthInPixels = (parseFloat(cardWidth) / 100) * containerWidth;
  
    const maxIndex = totalCards - visibleCards;
  
    const handleNext = () => {
      setScrollIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        return nextIndex > maxIndex ? 0 : nextIndex; // Loop back to the start when reaching the end
      });
    };
  
    const handlePrev = () => {
      setScrollIndex((prevIndex) => {
        const prevNewIndex = prevIndex - 1;
        return prevNewIndex < 0 ? maxIndex : prevNewIndex; // Loop back to the end when reaching the start
      });
    };
  
    return (
      <Container>
        <Row>
          <Col xs={12}>
         <div className="carousel-controls">
            <h2 className="sub-heading">Services</h2>
            <div className="arrow-controls">
                <Button onClick={handlePrev} className="carousel-button">&#10094;</Button>
                <Button onClick={handleNext} className="carousel-button ms-2">&#10095;</Button>
            </div>
          </div>
          </Col>
          <Col xs={12}>
            <div className="carousel-container">
              <div
                ref={trackRef}
                className="carousel-track"
                style={{
                  transform: `translateX(-${scrollIndex * cardWidthInPixels}px)`,
                  transition: "transform 0.5s ease-in-out",
                }}
              >
                {cardData.map((card) => (
                  <div key={card.id} className="carousel-card" style={{ minWidth: `${cardWidth}` }}>
                    <Card>
                      <Card.Body>
                        <Image src={ribbon} alt="ribbon" className="img-rbn" />
                        <Card.Text>{card.text}</Card.Text>
                        <Button className="btn-services">
                          <span>{card.title}</span>
                        </Button>
                      </Card.Body>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  };


export default Services;