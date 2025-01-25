import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import './header-navbar.css';

function HeaderNavbar() {
  return (
    <Navbar expand="lg" className="header-navbar py-0">
      <Container fluid>
        <Navbar.Brand href="#" className='header-logo'></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto my-2 my-lg-0" navbarScroll>
                <Nav.Link href="#action1">Home</Nav.Link>
                <NavDropdown title="Services" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">Custom Software Development</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Branding & Designing</NavDropdown.Item>
                    {/* <NavDropdown.Divider /> */}
                    <NavDropdown.Item href="#action5">Website Development</NavDropdown.Item>
                    <NavDropdown.Item href="#action5">Digital Transformation</NavDropdown.Item>
                    <NavDropdown.Item href="#action5">Mobile Application</NavDropdown.Item>
                    <NavDropdown.Item href="#action5">IT Services</NavDropdown.Item>
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