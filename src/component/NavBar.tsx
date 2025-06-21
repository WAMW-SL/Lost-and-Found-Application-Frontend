import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router';

function NavBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/item">Item</Nav.Link>
            <Nav.Link as={NavLink} to="request">Request</Nav.Link>
            <Nav.Link as={NavLink} to="user">User</Nav.Link>
            <Nav.Link as={NavLink} to="/signin">SignIn</Nav.Link>Add commentMore actions
            <Nav.Link as={NavLink} to="/signup">SignUp</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;