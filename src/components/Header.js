import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Logo50 from '../img/Logo50.png';

function Header(props) {

    const linkStyle = {
      textDecoration: "none", 
      color: "inherit",
    };

  return (
    <React.Fragment>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Link to="/" style={linkStyle}>
            <Navbar.Brand><img alt="Fit-Ledger dumbbell logo" src={Logo50} width="30" height="30" className="d-inline-block align-top"/>{' '}Fit-Ledger</Navbar.Brand>
          </Link>
          <Nav className="ms-auto">
            <NavDropdown title="Menu" id="basic-nav-dropdown">
              <NavDropdown.Item eventKey="1" as={Link} to="/about">About</NavDropdown.Item>
              <NavDropdown.Item eventKey="2" as={Link} to="/">Home</NavDropdown.Item>
              {props.currentUser ? (<NavDropdown.Item eventKey="2" as={Link} to="/sign-in">Sign Out</NavDropdown.Item>) : (<NavDropdown.Item eventKey="2" as={Link} to="/sign-in">Sign In</NavDropdown.Item>)}
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey="3" as={Link} to="/tdee">TDEE Calculator</NavDropdown.Item>
              <NavDropdown.Item eventKey="4" as={Link} to="/1rm">1RM Calculator</NavDropdown.Item>
              <NavDropdown.Item eventKey="5" as={Link} to="/workout-builder">Workout Builder</NavDropdown.Item>
              {props.currentUser && (
                <div>
                  <NavDropdown.Divider />
                  <NavDropdown.Item disabled>
                    Currently Signed in as: {props.currentUser.email}
                  </NavDropdown.Item>
                </div>
              )}
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    </React.Fragment>
  );
}

export default Header;
