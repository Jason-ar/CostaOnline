import React from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navbarr = () => {
    return (
        <div className="container text-center justify-content-center align-items-center h-100">
            <Navbar collapseOnSelect expand="lg" bg="light" >
                <Container>
                    <Navbar.Brand href="/">

                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link className="nav-link" to="/">Home</Link>
                            <Link className="nav-link" to="/busqueda-empleos">Busqueda empleo</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export { Navbarr };