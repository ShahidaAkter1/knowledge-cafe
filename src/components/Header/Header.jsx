import React from 'react';
import './Header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
    return (
        <Navbar  expand="lg">
        <Container>
          <Navbar.Brand className='fs-2 fw-bold' href="#home">Knowledge Cafe</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto link-a fs-5 fw-semibold">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Component</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;