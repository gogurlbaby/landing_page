import { Container, Navbar, Nav, Offcanvas, Image } from "react-bootstrap";
import logo from "../images/logo.jpg"
import { BiSearch } from "react-icons/bi"


const NavBar = () => {
  return (
    <nav className="bg-white">
      <Navbar 
       expand="lg" 
       className="py-2 px-3">
        <Container>
          <Navbar.Brand href="/">
            <Image src={logo} alt="logo" width={60} className="lg:mx-20"/>
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
              <Nav className="justify-content-end flex-grow-1 pe-3 lg:text-lg text-base">
                <Nav.Link 
                 href="/" 
                 className="text-[#444a59] hover:text-blue-900"
                >
                Home
                </Nav.Link>
                <Nav.Link 
                 href="/about" 
                 className="text-[#444a59] hover:text-blue-900"
                 >
                 About
                </Nav.Link>
                <Nav.Link 
                 href="/services" 
                 className="text-[#444a59] hover:text-blue-900"
                 >
                 Services
                </Nav.Link>
                <Nav.Link 
                 href="/contact" 
                 className="text-[#444a59] hover:text-blue-900"
                 >
                 Contact
                </Nav.Link>
              </Nav>
              <BiSearch 
               size={25} 
               className="relative top-3 left-3 lg:left-0 lg:mx-20" 
               onClick={() => {}}
              />
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </nav>
  )
}

export default NavBar