import { faPlus, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const Navibar = () => {
  return (
    <>
      <Navbar expand="md" bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="#home">TODO:</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#features">
                <FontAwesomeIcon icon={faPlus} size="lg" />
              </Nav.Link>
              <Nav.Link href="#pricing">
                <FontAwesomeIcon icon={faSun} size="lg" color="#FFD600" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navibar;
