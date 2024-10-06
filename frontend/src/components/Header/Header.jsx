import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import "./Header.css"
function Header() {
  return (
    <Navbar expand="lg" data-bs-theme="light">
    <Container>
      <Navbar.Brand as={Link} to="/" className='fw-b'><img src="public/logo.png" width="150px" alt="" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="m-auto">
          <Nav.Link as={Link}   
   className="nav-link" to="/">Home</Nav.Link>
          <Nav.Link as={Link} className="nav-link" to="computers">Computers</Nav.Link>
          <Nav.Link as={Link} className="nav-link" to="/laptop">Laptop</Nav.Link>
          <Nav.Link as={Link} className="nav-link" to="/phones">Mobile Phones</Nav.Link>
          <Nav.Link as={Link} className="nav-link" to="/accessories">Accessories</Nav.Link>
          <Nav.Link as={Link} className="nav-link" to="/comparision">Comparision</Nav.Link>
          <Nav.Link as={Link} className="nav-link" to="/top10">Top 10</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link as={Link} className="nav-link" to=""><FontAwesomeIcon icon="check-square" /></Nav.Link>
          <Nav.Link as={Link} className="nav-link text-danger" to=""><FontAwesomeIcon icon={faInstagram} /></Nav.Link>
          <Nav.Link as={Link} className="nav-link text-primary" to=""><FontAwesomeIcon icon={faFacebook} /></Nav.Link>
          <Nav.Link as={Link} className="nav-link text-danger" to=""><FontAwesomeIcon icon={faYoutube} /></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header