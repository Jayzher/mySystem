import './component.css';
import {Container, Nav, Navbar} from 'react-bootstrap';
import {Link, NavLink} from 'react-router-dom'; 

export default function AppNavBar() {
	return (
		<Navbar className="fw-bold fs-5" expand="lg">
	      <Container>
	        <Navbar.Brand className="fs-3" as={Link} to="/">Track my Daddy</Navbar.Brand>
	        <Navbar.Toggle aria-controls="basic-navbar-nav" />
	        <Navbar.Collapse id="basic-navbar-nav">
	          <Nav className="ms-auto">
	          		<Nav.Link className="link" as={NavLink} to="/">Home</Nav.Link>
		            <Nav.Link className="link" as={NavLink} to="/Services">Services</Nav.Link>
		            <Nav.Link className="link" as={NavLink} to="/About">About</Nav.Link>
		            <Nav.Link className="link" as={NavLink} to="/Contact">Contact</Nav.Link>
		            <Nav.Link className="link" as={NavLink} to="/Signup">Sign-up</Nav.Link>
		            <Nav.Link className="link" as={NavLink} to="/Login">Log-in</Nav.Link>
	          </Nav>
	        </Navbar.Collapse>
	      </Container>
	    </Navbar>
	)
}