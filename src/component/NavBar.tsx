import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useNavigate } from 'react-router';

function NavBar() {
  return (
    <>
      <Navbar style={{backgroundColor:"#E0FFFF",fontSize:"20px"}}>
        <Container>
          <Nav className="me-auto">
            <>
              <Nav.Link as={NavLink} to="/item">Item</Nav.Link>
              <Nav.Link as={NavLink} to="/request">Request</Nav.Link>
              <Nav.Link as={NavLink} to="/user">User</Nav.Link>
            </>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;