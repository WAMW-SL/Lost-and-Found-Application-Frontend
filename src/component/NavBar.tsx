import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useNavigate } from 'react-router';
import { useAuth } from './auth/AuthProvider';
import { Button } from 'react-bootstrap';

function NavBar() {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleOnLogOut = () => {
    logout()
    navigate("/signin")

  }
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            {isAuthenticated ? (
              <>
                <Nav.Link as={NavLink} to="/item">Item</Nav.Link>
                <Nav.Link as={NavLink} to="request">Request</Nav.Link>
                <Nav.Link as={NavLink} to="user">User</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={NavLink} to="/signin">SignIn</Nav.Link>
                <Nav.Link as={NavLink} to="/signup">SignUp</Nav.Link>
                <Button variant="warning" onClick={handleOnLogOut}>Logout</Button>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;