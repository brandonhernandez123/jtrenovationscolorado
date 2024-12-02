import React from 'react';
import { Navbar, Nav, Container, Image } from 'react-bootstrap';
import { Link } from 'react-scroll';
import logo from '../images/logo.png';
import './CSS/Navigation.css'; // Include the CSS file

const Navigation = () => {
    return (
        <header>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top" className="custom-navbar">
                <Container fluid>
                    <Navbar.Brand href="#">
                        <Image
                            src={logo}
                            width="100"
                            height="100"
                            className="d-inline-block align-top"
                            alt="JT Renovations Logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link className="nav-link">
                                <Link
                                    activeClass="active"
                                    to="section2"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={300}
                                >
                                    About
                                </Link>
                            </Nav.Link>
                            <Nav.Link className="nav-link">
                                <Link
                                    activeClass="active"
                                    to="section3"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={300}
                                >
                                    Services
                                </Link>
                            </Nav.Link>
                            <Nav.Link className="nav-link">
                                <Link
                                    activeClass="active"
                                    to="section4"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={300}
                                >
                                    Our Work
                                </Link>
                            </Nav.Link>
                            <Nav.Link className="nav-link">
                                <Link
                                    activeClass="active"
                                    to="section6"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={300}
                                >
                                    Contact
                                </Link>
                            </Nav.Link>
                            <Nav.Link className="contact-number">
                                <i className="bi bi-telephone"></i> +1 720 648 7018
                            </Nav.Link>
                            <Nav.Link href="https://facebook.com" target="_blank">
                                <i className="bi bi-facebook facebook-icon"></i>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Navigation;
