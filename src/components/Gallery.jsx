import React, { useState } from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import './CSS/Gallery.css';  // You can add animations and transitions in this CSS file

let giglist = [
  {
    title: 'Church Parking lot',
    img: 'https://www.espinapaving.com/wp-content/uploads/2014/05/Asphalt-Maintenance-for-Churches.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    title: 'Driveway',
    img: 'https://i.imgur.com/0XkDtGW.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    title: 'Sealcoating',
    img: 'https://i.imgur.com/uhYhzr1.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    title: 'Big House Driveway',
    img: 'https://i.imgur.com/MFWeXTP.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);  // State to track the current image

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % giglist.length); // Loop to first image after last one
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + giglist.length) % giglist.length); // Loop to last image after first one
  };

  const currentGig = giglist[currentIndex]; // Get the current image and description based on the index

  return (
    <div className="gallery-container">
      <Container fluid>
        <h1 className="aboutus2">OUR WORK</h1>
        <div className="image-gallery">
          <div className="image-container">
            <Card className="gallery-card">
              <Card.Img
                variant="top"
                src={currentGig.img}
                className="gallery-image"
              />
              <Card.Body className="cardbody">
                <Card.Title>{currentGig.title}</Card.Title>
                <Card.Text>{currentGig.description}</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="navigation-arrows">
            <button className="arrow prev" onClick={prevImage}>‹</button>
            <button className="arrow next" onClick={nextImage}>›</button>
          </div>
        </div>
      </Container>
    </div>
  );
}
