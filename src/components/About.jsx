import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-scroll';

const About = () => {
    return (
        <div className="about">
            <Container fluid className="p-5 bg-light">
                {/* About Us Section */}
                <Row className="text-center mb-5">
                    <Col>
                        <h2 className="aboutus2 text-uppercase fw-bold">About Us</h2>
                        <p className="fill lead">
                            Welcome to <span className="text-primary">J.T. Renovations</span>! With over 20 years of expertise, 
                            Jose Torres is dedicated to delivering exceptional home renovations to the Denver Metro community. 
                            From concept to completion, we bring your vision to life with precision and care. 
                            <span className="d-block mt-3">Contact us today to start your next project!</span>
                        </p>
                    </Col>
                </Row>

                {/* Why Choose Us Section */}
                <Row className="text-center">
                    <Col>
                        <h2 className="aboutus2 text-uppercase fw-bold mb-4">Why Choose Us?</h2>
                        <p className="fill lead">
                            With exceptional craftsmanship, bilingual communication, and a commitment to client satisfaction, 
                            <span className="d-block">we stand out in the home renovation industry.</span>
                            <br />
                            Whether you’re planning a small upgrade or a complete remodel, we ensure every project is completed on time, 
                            with precision, and to your exact specifications. 
                            <span className="d-block mt-3">Experience quality and reliability like never before.</span>
                        </p>
                    </Col>
                </Row>

                {/* Call to Action */}
                <Row className="text-center mt-5">
                    <Col>
                        <Link
                            activeClass="active"
                            to="section6"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={200}
                        >
                            <Button className="submit px-4 py-2 text-uppercase fw-bold" variant="primary">
                                Contact Us
                            </Button>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;
