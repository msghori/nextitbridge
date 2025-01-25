import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import './header-navbar.css';

// Handles individual dropdown items
const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
  }
};

function HeaderNavbar() {
  return (
    <Navbar expand="lg" className="header-navbar py-0">
      <Container fluid>
        <Navbar.Brand href="#home" className='header-logo'></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto my-2 my-lg-0" navbarScroll>
                <Nav.Link href="#home">Home</Nav.Link>
                <NavDropdown href="#services" title="Services" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#services" onClick={(e) => { e.stopPropagation();  scrollToSection('services'); }}>Custom Software Development</NavDropdown.Item>
                    <NavDropdown.Item href="#services">Branding & Designing</NavDropdown.Item>
                    <NavDropdown.Item href="#services">Website Development</NavDropdown.Item>
                    <NavDropdown.Item href="#services">Digital Transformation</NavDropdown.Item>
                    <NavDropdown.Item href="#services">Mobile Application</NavDropdown.Item>
                    <NavDropdown.Item href="#services">IT Services</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#action2">Company</Nav.Link>
                <Nav.Link href="#action2" className='me-0'>Contact</Nav.Link>          
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderNavbar;