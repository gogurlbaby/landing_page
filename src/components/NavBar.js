import React from 'react'
import { Container, Navbar, Nav, Offcanvas, Image } from 'react-bootstrap';
import logo from "../images/logo.jpg"


const NavBar = () => {
  return (
    <nav className=''>
      <Navbar 
       expand="lg" 
       className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">
            <Image src={logo} alt="logo" width={80} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Offcanvas
           id="responsive-navbar-nav"
           placement="end"
           style={{
            width:"250px"
           }}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>
                 {" "}
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/services">Services</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </nav>
  )
}

export default NavBar